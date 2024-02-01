import Auditor from "@/features/Audit";
import type { Metadata } from "next";

const app_name = "Auditor | Decrepify";

export const metadata: Metadata = {
  title: `${app_name}`,
};

export default function AuditorPage() {
  return <Auditor />;
}
