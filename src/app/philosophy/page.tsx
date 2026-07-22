import StrategicPage from "@/components/strategic/StrategicPage";
import { FLUX2_PAGES } from "@/lib/flux2";
import { generateMeta } from "@/lib/seo";
const content = FLUX2_PAGES["/philosophy"];
export const metadata = generateMeta({ absoluteTitle: "The Flux Philosophy | Connected Systems for Service Businesses", description: content.description, path: content.path });
export default function Page() { return <StrategicPage content={content} />; }
