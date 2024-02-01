import Bridge from "@/features/Bridge";
import type { Metadata } from "next";

const app_name = "Bridge | Decrepify";

export const metadata: Metadata = {
  title: `${app_name}`,
};

export default function BridgePage() {
  return <Bridge />;
}
