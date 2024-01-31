"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import clsx from "clsx";

import PageTabs from "../PageTabs";
import { NavbarDrawer } from "./Drawer";

import { spaceGrotesk } from "@/utils/font";

import AppLogo from "@/assets/logo-app.png";

import "./style.css";
import { MenuOutlined } from "@ant-design/icons";

interface Props {}

// const contractAddress = "0x00FEeF969243D9faB0913b6e97a24DC6341a986B";
// const pairAddress = "";

const Navbar: React.FC<Props> = () => {
  const {
    isOpen: isScroll,
    onOpen: onOpenScroll,
    onClose: onCloseScroll,
  } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  // const router = useRouter()
  const [isEqual640] = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (isEqual640) {
      onCloseDrawer();
    }
  }, [isEqual640]);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: Event) => {
    const { scrollY } = e.currentTarget as Window;
    if (scrollY > 160) {
      onOpenScroll();
    }
    if (scrollY === 0) {
      onCloseScroll();
    }
  };

  return (
    <div className={clsx("navbar-container", spaceGrotesk.className)}>
      <div className={clsx(isScroll ? "navbar-scroll" : "navbar")}>
        <div className="w-3/5 lg:w-1/2 flex items-center relative">
          <Link href="/" className={`logo-container text-white`}>
            <Image
              src={AppLogo}
              alt="app-logo"
              className="w-16 h-16 rounded-full"
            />
          </Link>
          <PageTabs containterClass="hidden sm:flex ml-2" />
        </div>

        <div className={clsx("!hidden sm:!flex justify-end w-2/5 lg:w-1/2")}>
          <ConnectWallet hideTestnetFaucet />
        </div>

        {/* <div className="w-1/2 lg:w-2/5 flex justify-end font-semibold">
          <div className="w-1/2 hidden sm:flex lg:justify-end">
            <Link
              href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto mr-4 hidden sm:block"
            >
              <Button
                className="w-full bg-copper-shine hover:bg-gold-rush active:bg-gold-rush focus:bg-gold-rush text-white"
                // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
              >
                Buy Now
              </Button>
            </Link>

            <Link
              href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto hidden sm:block"
            >
              <Button
                className="w-full bg-gold-rush hover:bg-copper-shine active:bg-copper-shine focus:bg-copper-shine text-white"
                // leftIcon={<LineChartOutlined style={{ fontSize: "1.5em" }} />}
              >
                Chart
              </Button>
            </Link>
          </div>

          <div className="w-1/3 md:w-1/5 text-end sm:ml-4 lg:hidden">
            <Button
              className="bg-copper-shine hover:bg-gold-rush active:bg-gold-rush focus:bg-gold-rush text-white relative"
              onClick={onOpenDrawer}
            >
              <MenuOutlined
                className="font-extrabold text-white"
                style={{ fontSize: "1.5em" }}
              />
            </Button>
          </div>
        </div> */}

        {/* <div
          // className={clsx("!hidden sm:!flex justify-end w-1/3 font-semibold")}
          className={clsx("w-[47.5%] flex justify-end relative font-semibold")}
        >
          <div className="w-auto justify-between hidden sm:flex">
            <Link
              href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto mr-4 hidden sm:block"
            >
              <Button
                className="w-full bg-copper-shine hover:bg-gold-rush active:bg-gold-rush focus:bg-gold-rush text-white"
                // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
              >
                Buy Now
              </Button>
            </Link>

            <Link
              href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto hidden sm:block"
            >
              <Button
                className="w-full bg-gold-rush hover:bg-copper-shine active:bg-copper-shine focus:bg-copper-shine text-white"
                // leftIcon={<LineChartOutlined style={{ fontSize: "1.5em" }} />}
              >
                Chart
              </Button>
            </Link>
          </div>

          <Button
            className="bg-mystic-horizon hover:bg-mystic-horizon active:bg-mystic-horizon focus:bg-mystic-horizon text-white lg:hidden"
            onClick={onOpenDrawer}
          >
            <MenuOutlined
              className="font-extrabold text-white"
              style={{ fontSize: "1.5em" }}
            />
          </Button>
        </div> */}

        <div className="sm:hidden w-1/4 text-right animate-fadeInBasic">
          <Button
            className="bg-lime-zest hover:bg-mystic-horizon active:bg-mystic-horizon focus:bg-mystic-horizon text-white"
            onClick={onOpenDrawer}
          >
            <MenuOutlined
              className="font-extrabold text-white"
              style={{ fontSize: "1.5em" }}
            />
          </Button>
        </div>
      </div>
      <NavbarDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer} />
    </div>
  );
};

export default Navbar;
