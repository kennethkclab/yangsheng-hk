import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo(
  "/",
  "International Association for Health and Yangsheng",
  "A non-profit association for health and yangsheng. We combine University of Hong Kong research-based practice with modern evidence.",
  "en",
);

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
