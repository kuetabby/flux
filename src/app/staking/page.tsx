import Staking from "@/features/Stake";
import type { Metadata } from "next";

const app_name = "Staking | Flux";

export const metadata: Metadata = {
  title: `${app_name}`,
};

export default function StakingPage() {
  return <Staking />;
}
