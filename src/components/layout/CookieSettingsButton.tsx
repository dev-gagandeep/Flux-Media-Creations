"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("flux:open-cookie-settings"))}
      className="text-xs text-cream/25 transition-colors hover:text-cream/50"
    >
      Cookie settings
    </button>
  );
}
