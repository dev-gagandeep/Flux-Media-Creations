import StrategicPage from "@/components/strategic/StrategicPage";
import { FLUX2_PAGES } from "@/lib/flux2";
import { generateMeta } from "@/lib/seo";
const content = FLUX2_PAGES["/the-problem"];
export const metadata = generateMeta({ absoluteTitle: "The Service Business Operating Intelligence Problem | Flux", description: content.description, path: content.path });
export default function Page() { return <StrategicPage content={content} />; }
