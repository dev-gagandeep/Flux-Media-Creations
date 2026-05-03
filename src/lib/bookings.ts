import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type StoredBooking = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  organisation: string;
  services: string[];
  budget: string;
  message: string;
  date: string;
  dateKey: string;
  time: string;
  emailSent: boolean;
};

const STORE_PATH =
  process.env.BOOKINGS_FILE_PATH ||
  (process.env.VERCEL ? "/tmp/flux-bookings.json" : path.join(process.cwd(), ".next", "cache", "bookings.json"));

async function readBookings() {
  try {
    const raw = await readFile(STORE_PATH, "utf8");
    return JSON.parse(raw) as StoredBooking[];
  } catch {
    return [];
  }
}

async function writeBookings(bookings: StoredBooking[]) {
  await mkdir(path.dirname(STORE_PATH), { recursive: true });
  await writeFile(STORE_PATH, JSON.stringify(bookings, null, 2), "utf8");
}

export async function getBookedTimes(dateKey: string) {
  const bookings = await readBookings();
  return bookings.filter((booking) => booking.dateKey === dateKey).map((booking) => booking.time);
}

export async function isSlotBooked(dateKey: string, time: string) {
  const bookedTimes = await getBookedTimes(dateKey);
  return bookedTimes.includes(time);
}

export async function saveBooking(booking: Omit<StoredBooking, "id" | "createdAt">) {
  const bookings = await readBookings();

  if (bookings.some((item) => item.dateKey === booking.dateKey && item.time === booking.time)) {
    return { saved: false as const, booking: null };
  }

  const storedBooking: StoredBooking = {
    ...booking,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  bookings.push(storedBooking);
  await writeBookings(bookings);

  return { saved: true as const, booking: storedBooking };
}

export async function updateBookingEmailStatus(id: string, emailSent: boolean) {
  const bookings = await readBookings();
  const nextBookings = bookings.map((booking) => (booking.id === id ? { ...booking, emailSent } : booking));
  await writeBookings(nextBookings);
}
