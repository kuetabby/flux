import Home from "@/features/Home";
import type { Metadata } from "next";

const app_name = "Home | Flux";

export const metadata: Metadata = {
  title: `${app_name}`,
};

export default function HomePage() {
  return <Home />;
}
