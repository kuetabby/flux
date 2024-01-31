import { useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  // Button,
  // Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  // DrawerFooter,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { DollarOutlined, LineChartOutlined } from "@ant-design/icons";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import { getHash } from "@/utils/hash";
import useHash from "@/hooks/useHashname";

import AppTitle from "@/assets/title-app.png";

import "../style.css";
import "./style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const contractAddress = "0x00FEeF969243D9faB0913b6e97a24DC6341a986B";
const pairAddress = "";

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const btnRef = useRef() as any;

  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      {
        href: "/",
        pathname: `/`,
        name: "Home",
      },
      {
        href: "/bridge",
        pathname: `/bridge`,
        name: "Bridge",
      },
      {
        href: "/auditor",
        pathname: `/auditor`,
        name: "Auditor",
      },
      {
        href: "/staking",
        pathname: `/staking`,
        name: "Staking",
      },
    ];
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Drawer
      size={"xs"}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          className="mt-2 font-extrabold text-red-500"
          style={{ fontSize: 20 }}
        />
        <DrawerHeader className="bg-dark-main h-24">
          <Link href="/" className={`logo-container text-white h-full`}>
            <Image
              src={AppTitle}
              alt="title-logo"
              className="w-full h-full object-cover rounded-full"
            />
          </Link>
        </DrawerHeader>

        <DrawerBody className="bg-dark-main">
          <List spacing={3}>
            {tabsList.map((item) => {
              const isActive = !!defaultHash
                ? hashname === item.pathname
                : !defaultHash && pathname === item.pathname;

              if (item.pathname === "/whitepaper") {
                return (
                  <ListItem key={item.name} onClick={onClose}>
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-anchor"
                    >
                      {item.name}
                    </Link>
                  </ListItem>
                );
              }

              return (
                <ListItem key={item.name} onClick={onClose}>
                  <Anchor
                    href={item.href}
                    className={clsx(
                      "font-bold",
                      // "text-white p-2 hover:text-secondary font-bold",
                      // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
                      // isActive ? "#bf00ff" : "text-white"
                      isActive ? "nav-anchor-active" : "nav-anchor"
                    )}
                    style={{ transition: "250" }}
                  >
                    {item.name}
                  </Anchor>
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>

        <DrawerFooter className="bg-dark-main flex justify-between">
          <ConnectWallet hideTestnetFaucet className="!w-full !h-12" />
          {/* <Link
            href="https://app.arcanemix.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full text-sm md:text-base !bg-transparent border-2 rounded-xl border-indigo-500 text-white hover:text-indigo-500 p-2 lg:p-3">
              Launch dApp
            </Button>
          </Link>
          <Link
            href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[47.5%]"
          >
            <Button
              className="w-full bg-copper-shine hover:bg-gold-rush active:bg-gold-rush focus:bg-gold-rush text-white"
              leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              Buy Now
            </Button>
          </Link>

          <Link
            href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[47.5%]"
          >
            <Button
              className="w-full bg-gold-rush hover:bg-copper-shine active:bg-copper-shine focus:bg-copper-shine text-white"
              leftIcon={<LineChartOutlined style={{ fontSize: "1.5em" }} />}
            >
              Chart
            </Button>
          </Link> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
