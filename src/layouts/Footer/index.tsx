"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Button, Divider } from "@chakra-ui/react";
import { CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import AppLogo from "@/assets/logo-app.png";
// import TwitterLogo from "@/assets/logo-twitter.png";
// import TelegramLogo from "@/assets/logo-telegram.png";
// import MediumLogo from "@/assets/logo-medium.png";
// import WebLogo from "@/assets/logo-web.png";
// import GitbookLogo from "@/assets/logo-gitbook.png";
// import EmailLogo from "@/assets/logo-email.png";

import { spaceGrotesk } from "@/utils/font";

import "./style.css";

interface Props {}

const contractAddress = "-";
const pairAddress = "-";

const AppFooter: React.FC<Props> = () => {
  const telegramLink = "https://t.me/Decrepify_Official";
  const twitterLink = "https://x.com/DecrepifyTech";
  const mediumLink = "https://medium.com/@decrepifyofficial";
  const whitepaperLink = "/";
  const contactLink = "";

  if (!useIsMounted) {
    return null;
  }

  return (
    <footer className={clsx("app-footer", spaceGrotesk.className)}>
      <div className="app-footer-wrapper">
        {/* <div className="all-reserved order-1 sm:order-0"> */}
        <div className="all-reserved">
          <div className="app-footer-title">
            <Image
              src={AppLogo}
              alt="app-logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-1/2 md:w-full text-right md:text-left md:mx-auto lg:mx-0">
            <Link
              href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="w-24 sm:w-36 bg-lime-zest hover:bg-silver-gray active:bg-silver-gray focus:bg-silver-gray text-white rounded-2xl"
                // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
              >
                Buy $DRY
              </Button>
            </Link>
          </div>

          {/* <Link
            href="mailto:AceChainOfficial@Acechain.tech"
            rel="noopener noreferrer"
            className="app-footer-email"
          >
            <div className="text-white hover:text-primary my-5">
              Contact Us
            </div>
          </Link> */}

          <Divider className="md:hidden mb-4" />
        </div>

        {/* <div className="w-full md:w-2/3 flex flex-wrap justify-between order-0 sm:order-1 text-white"> */}
        <div className="w-full md:w-[70%] flex flex-wrap justify-between text-white max-w-lg">
          {/* <div className="w-full sm:w-1/2 flex flex-wrap order-0 sm:order-1 text-white"> */}
          <div className="w-full sm:w-[30%]">
            <div className="text-2xl font-bold">ECOSYSTEM</div>
            <div className="flex flex-col mt-2 font-semibold">
              <Link href="/bridge" className="w-auto hover:!text-primary mb-2">
                Bridge
              </Link>

              <Link
                // href="#features"
                href="/auditor"
                className="w-auto hover:!text-primary mb-2"
              >
                Auditor
              </Link>

              <Link
                // href="#about"
                href="/staking"
                className="w-auto hover:!text-primary mb-2"
              >
                Staking
              </Link>

              <Link
                // href="#about"
                href="/"
                className="w-auto hover:!text-primary mb-2 pointer-events-none"
              >
                Token Launcher
              </Link>

              <Link
                // href="#about"
                href="/"
                className="w-auto hover:!text-primary mb-2 pointer-events-none"
              >
                Token Locker
              </Link>

              <Link
                // href="#about"
                href="/"
                className="w-auto hover:!text-primary mb-2 pointer-events-none"
              >
                DeFi Platform
              </Link>

              {/* <Link
                href="#tokens"
                className="w-auto hover:!text-primary mb-2"
              >
                Tokenomics
              </Link> */}
            </div>
          </div>

          <div className="w-full sm:w-[30%] md:w-auto my-4 sm:my-0">
            <div className="text-2xl font-bold">SUPPORT</div>
            <div className="flex flex-col mt-2 font-semibold">
              <Link
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:!text-primary mb-2"
              >
                Contact
              </Link>

              <Link
                href={whitepaperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:!text-primary mb-2"
              >
                Whitepaper
              </Link>

              {/* <Link
                href="https://app.solidproof.io/projects/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:!text-primary mb-2"
              >
                Solidproof
              </Link> */}

              {/* <Link
                href={`https://etherscan.io/token/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:!text-primary mb-2"
              >
                Etherscan
              </Link> */}

              <Link
                href={`https://app.uniswap.org/tokens/ethereum/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:!text-primary mb-2"
              >
                Buy
              </Link>

              <Link
                href={`http://dextools.io/app/ether/pair-explorer/${pairAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:!text-primary mb-2"
              >
                Chart
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-[30%]">
            <div className="text-2xl font-bold">SOCIALS</div>
            <div className="flex flex-col mt-2 font-semibold">
              <Link
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:!text-primary mb-2"
              >
                Telegram
              </Link>
              <Link
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-primary"
              >
                Twitter
              </Link>
              <Link
                href={mediumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto hover:text-primary my-2"
              >
                Medium
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex order-2 items-center mt-4 text-slate-500">
          <div className="text-xs font-semibold">
            <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />
            Decrepify 2024
          </div>
        </div>
      </div>
    </footer>
  );

  // return (
  //   <footer
  //     className={clsx("app-footer bg-sunset-horizon", montserrat.className)}
  //   >
  //     <div className="app-footer-wrapper">
  //       <div className="all-reserved">
  //         <div className="w-full sm:w-1/2 flex flex-wrap justify-center sm:justify-start items-center my-2 sm:my-0 order-2 sm:order-1">
  //           <div className="sm:ml-2 text-xs font-semibold">
  //             Copyright{" "}
  //             <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />{" "}
  //             Arcane | All rights reserved.
  //           </div>
  //         </div>
  //         <div className="w-full sm:w-1/2 flex justify-center sm:justify-end order-1 sm:order-2">
  //           <Link
  //             href={telegramLink}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="w-auto text-sm hover:text-indigo-500 font-bold mx-2 mb-2 sm:mb-0"
  //           >
  //             Telegram
  //           </Link>
  //           <Link
  //             href={twitterLink}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="w-auto text-sm hover:text-indigo-500 font-bold mx-2 mb-2 sm:mb-0"
  //           >
  //             Twitter
  //           </Link>
  //           <Link
  //             href={mediumLink}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="w-auto text-sm hover:text-indigo-500 font-bold mx-2 mb-2 sm:mb-0"
  //           >
  //             Medium
  //           </Link>
  //           <Link
  //             href={whitepaperLink}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="w-auto text-sm hover:text-indigo-500 font-bold mx-2 mb-2 sm:mb-0"
  //           >
  //             Whitepaper
  //           </Link>
  //           {/* <Link
  //             href="https://azurecoin.io"
  //             className="w-auto hover:text-violet-500 mx-1 mb-2 sm:mb-0"
  //           >
  //             <Image
  //               src={WebLogo}
  //               alt="web-logo"
  //               className="w-10 lg:w-8 h-10 lg:h-8"
  //             />
  //           </Link> */}
  //           {/* <Link
  //             href="https://twitter.com/Azure_L2"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="w-auto hover:text-violet-500 mx-1"
  //           >
  //             <Image
  //               src={TwitterLogo}
  //               alt="tw-logo"
  //               className="w-10 lg:w-8 h-10 lg:h-8"
  //             />
  //           </Link>
  //           <Link
  //             href="https://t.me/Azure_L2"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="w-auto hover:text-violet-500 mx-1"
  //           >
  //             <Image
  //               src={TelegramLogo}
  //               alt="tele-logo"
  //               className="w-10 lg:w-8 h-10 lg:h-8"
  //             />
  //           </Link>
  //           <Link
  //             href="https://azurecoin.medium.com"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="w-auto hover:text-violet-500 mx-1"
  //           >
  //             <Image
  //               src={MediumLogo}
  //               alt="dc-logo"
  //               className="w-10 lg:w-8 h-10 lg:h-8 !rounded-full"
  //             />
  //           </Link> */}
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
};

export default AppFooter;
