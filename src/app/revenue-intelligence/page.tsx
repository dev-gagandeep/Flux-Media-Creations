import StrategicPage from "@/components/strategic/StrategicPage";
import { FLUX2_PAGES } from "@/lib/flux2";
import { generateMeta } from "@/lib/seo";
const content = FLUX2_PAGES["/revenue-intelligence"];
export const metadata = generateMeta({ absoluteTitle: "Revenue Intelligence for Service Businesses | Flux", description: content.description, path: content.path });
export default function Page() { return <StrategicPage content={content} />; }
