import LogoBridge from "@/assets/logo-bridge.png";
import LogoStake from "@/assets/logo-stake.png";
import LogoAuditor from "@/assets/logo-auditor.png";
import LogoLauncher from "@/assets/logo-launcher.png";
import LogoLocker from "@/assets/logo-locker.png";
import LogoDeFi from "@/assets/logo-defi.png";

export const ecosystemList = [
  {
    title: "Bridge",
    description: "Move assets across 10+ networks privately and securely",
    titleUrl: "Bridge Now",
    imageUrl: LogoBridge,
    path: "/bridge",
    isAvailable: true,
  },
  {
    title: "Auditor",
    description:
      "Ensure the security of your contracts with our auditing tools",
    titleUrl: "Audit Now",
    imageUrl: LogoAuditor,
    path: "/auditor",
    isAvailable: true,
  },
  {
    title: "Staking",
    description: "Multiply your holdings and earn rewards effortlessly",
    titleUrl: "Stake Now",
    imageUrl: LogoStake,
    path: "/staking",
    isAvailable: true,
  },
  {
    title: "Token Launcher",
    description: "Create and manage your own ERC-20 tokens seamlessly",
    titleUrl: "Launch Now",
    imageUrl: LogoLauncher,
    path: "/",
    isAvailable: false,
  },
  {
    title: "Token Locker",
    description: "Securely lock and manage your tokens with ease",
    titleUrl: "Lock Now",
    imageUrl: LogoLocker,
    path: "/",
    isAvailable: false,
  },
  {
    title: "De-Fi Platform",
    description:
      "Explore decentralized finance services on a user-friendly platform",
    titleUrl: "Explore Now",
    imageUrl: LogoDeFi,
    path: "/",
    isAvailable: false,
  },
];
