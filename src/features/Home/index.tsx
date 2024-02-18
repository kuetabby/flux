"use client";
import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  // Divider,
  // List,
  // ListItem,
} from "@chakra-ui/react";
// import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import {
  ArrowRightOutlined,
  // ArrowRightOutlined,
  ReadOutlined,
  // SearchOutlined,
} from "@ant-design/icons";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";
// import { useCopyText } from "@/hooks/useCopyText";

// import { ecosystemList } from "./constants/ecosystem";
import { contractAddress, findUsLink, socialsLink } from "@/constants/links";

// import LogoApp from "@/assets/logo-app.png";
import Banner_1 from "@/assets/banner-1.png";

import Dextools from "@/assets/dextools.png";
import Dexscreener from "@/assets/dexscreener.png";
import Uniswap from "@/assets/uniswap.png";
import Etherscan from "@/assets/etherscan.png";

import "./style.css";

interface Props {}

const Home: React.FC<Props> = () => {
  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  if (!isMounted) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div id="welcome" className="h-6" />
      <div className="w-full md:w-11/12 xl:w-3/4 h-[110vw] sm:h-full flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white relative">
        <video
          autoPlay={true}
          id="welcome"
          loop
          preload="preload"
          className="w-full"
          muted
          style={{ filter: "grayscale(0.3)" }}
        >
          <source type="video/mp4" src="/welcome.mp4"></source>
        </video>
        <div className={`w-full sm:px-8 lg:px-14 absolute sm:top-1/4 z-20`}>
          <div
            className={`w-full text-center mx-auto text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-white`}
          >
            Welcome to Flux, your gateway to a world of secure and private
            decentralized finance!
          </div>
          <div
            className={`w-full text-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-slate-400 py-4 lg:px-8`}
          >
            Flux goes beyond being a decentralized exchange
          </div>

          <div className="w-full text-center mx-auto mt-2">
            <Link
              href={socialsLink.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
              // className="w-full xl:w-3/5 text-center mx-auto mt-4"
            >
              <Button
                size={"lg"}
                rightIcon={<ReadOutlined />}
                className="text-white font-bold bg-lime-zest hover:bg-silver-gray active:bg-silver-gray focus:bg-silver-gray rounded-2xl"
              >
                Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="h-24 md:h-36" /> */}

      {/* <div id="features" className="h-20 sm:h-24 lg:h-36" />
      <div className="w-full md:w-11/12 xl:w-3/4 flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white pt-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            Explore <span className="app-title mx-1">Avernus</span> Ecosystem
          </div>
        </div>
        <div className="w-full mt-6 px-2 sm:px-0">
          <Card className="w-full lg:w-4/5 h-auto bg-secondary bg-opacity-25 mx-auto">
            <CardBody className="p-2 lg:p-3 flex flex-wrap justify-evenly items-center gap-2 sm:gap-x-[1.125em] sm:gap-y-[0.75em]">
              {ecosystemList.map((item, index) => (
                <Link
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card-ecosystem-wrapper ${
                    !item.isAvailable && "!pointer-events-none"
                  }`}
                  key={index}
                >
                  <div className="card-ecosystem-wrapper-icon">
                    <Image
                      src={item.imageUrl}
                      alt={`logo-${item.title.toLowerCase()}`}
                      className="card-ecosystem-icon"
                    />
                  </div>
                  <div className="w-full text-white font-semibold">
                    <div className="text-lg sm:text-xl font-bold">
                      {item.title}
                    </div>
                    <div className="w-full lg:w-3/4 text-xs sm:text-sm mt-2">
                      {item.description}
                    </div>
                  </div>
                  <div className="card-ecosystem-link">
                    {item.titleUrl} <ArrowRightOutlined className="ml-2" />
                  </div>
                </Link>
              ))}
            </CardBody>
          </Card>
        </div>
      </div> */}

      <div className="md:h-28" />
      <div id="about" className="h-10 sm:h-12 lg:h-18" />
      <div className="w-full md:w-4/5 flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 sm:px-0 py-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            <span className="app-title mx-1">Get Started</span>
          </div>
          <div
            className={`w-full text-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 py-4 lg:px-8`}
          >
            Founded on the principles of transparency, inclusivity, and user
            empowerment, Flux strives to offer a seamless decentralized finance
            experience
          </div>

          <div
            className={`w-full text-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 py-2 lg:px-8`}
          >
            We are committed to fostering a community where every user, whether
            new or experienced, can explore the vast opportunities of
            decentralized finance with confidence
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-right-primary bg-opacity-50">
        <div id="utility" className="h-10 sm:h-12 lg:h-18" />
        <div className="w-full md:w-11/12 flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 sm:px-0 py-4">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
            >
              The Ecosystem of <span className="app-title mx-1">Flux</span>
            </div>
            <div className="w-full flex flex-wrap justify-between mx-auto py-4 lg:px-8`">
              <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[24%] mb-3 xl:mb-0">
                <CardHeader className="text-white font-semibold text-lg sm:text-2xl">
                  Privacy Bridge
                </CardHeader>
                <CardBody className="text-white pt-0 font-normal">
                  Flux's Privacy Bridge ensures secure, anonymous asset
                  transfers across different blockchains. Experience seamless
                  cross-network transactions with enhanced privacy
                </CardBody>
                <CardFooter className="pt-0">
                  <Link href="/bridge">
                    <Button
                      rightIcon={<ArrowRightOutlined />}
                      className="text-white bg-lime-zest hover:bg-silver-gray active:bg-silver-gray focus:bg-silver-gray"
                    >
                      Bridge Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[24%] mb-3 xl:mb-0">
                <CardHeader className="text-white font-semibold text-lg sm:text-2xl">
                  Staking
                </CardHeader>
                <CardBody className="text-white pt-0 font-normal">
                  Stake your assets with Flux to secure the network and earn
                  passive income. It's a simple way to contribute and be
                  rewarded in the Flux ecosystem
                </CardBody>
                <CardFooter className="pt-0">
                  <Link
                    href="/staking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      rightIcon={<ArrowRightOutlined />}
                      className="text-white bg-lime-zest hover:bg-silver-gray active:bg-silver-gray focus:bg-silver-gray"
                    >
                      Stake Flux
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[24%] mb-3 xl:mb-0">
                <CardHeader className="text-white font-semibold text-lg sm:text-2xl">
                  Auditor
                </CardHeader>
                <CardBody className="text-white pt-0 font-normal">
                  With Flux's Smart Contract Auditor, we ensure the security of
                  decentralized applications. Our tools verify and fortify smart
                  contracts for a safer blockchain experience
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    rightIcon={<ArrowRightOutlined />}
                    className="text-white bg-lime-zest hover:bg-silver-gray active:bg-silver-gray focus:bg-silver-gray disabled:forest-green"
                  >
                    Try Auditor
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-transparent border border-white w-full sm:w-[47.5%] xl:w-[24%] mb-3 xl:mb-0">
                <CardHeader className="text-white font-semibold text-lg sm:text-2xl">
                  Launchpad
                </CardHeader>
                <CardBody className="text-white pt-0 font-normal">
                  Flux's Launchpad lets you effortlessly launch custom tokens,
                  fostering growth and diversity in the blockchain space.
                  Empower your projects with Flux
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    rightIcon={<ArrowRightOutlined />}
                    isDisabled
                    className="text-white bg-lime-zest hover:bg-silver-gray active:bg-silver-gray focus:bg-silver-gray disabled:forest-green pointer-events-none"
                  >
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <div id="contract" className="h-10 sm:h-12 lg:h-18" />
        <div className="w-full md:w-4/5 mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 sm:px-0 py-4">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`pt-2 text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl`}
            >
              CA :{contractAddress}
            </div>
            <div
              className={`w-full sm:w-4/5 xl:w-3/5 flex flex-wrap justify-between text-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 gap-2 py-4 lg:px-8`}
            >
              <div className="w-full sm:w-[47.5%]">
                <div className="text-white">Tax</div>
                <div>5/5 Buy & Sell</div>
              </div>

              <div className="w-full sm:w-[47.5%]">
                <div className="text-white">Total Supply</div>
                <div>100,000,000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-20" />

        <div id="findus" className="h-10 sm:h-12 lg:h-18" />
        <div className="w-full md:w-4/5 mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 md:px-0 py-4">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-full text-center mx-auto text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white py-2`}
            >
              Find Us
            </div>
            <div className="w-full flex flex-wrap justify-evenly items-center bg-dark-secondary rounded-2xl mt-6 py-2">
              <Link
                href={findUsLink.uniswap}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[6.75em] xl:w-[7.5em] my-2 sm:my-0 h-12"
              >
                <Image
                  src={Uniswap}
                  alt="uniswap"
                  className="object-contain w-full h-full"
                />
              </Link>
              <Link
                href={findUsLink.etherscan}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[6.75em] xl:w-[7.5em] my-2 sm:my-0 h-10"
              >
                <Image
                  src={Etherscan}
                  alt="etherscan"
                  className="object-contain w-full h-full"
                />
              </Link>
              <Link
                href={findUsLink.dextools}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[6.75em] xl:w-[7.5em] my-2 sm:my-0 h-[15vw] xs:h-[12.5vw] sm:h-full"
              >
                <Image
                  src={Dextools}
                  alt="dextools"
                  className="object-contain w-full h-full"
                />
              </Link>
              <Link
                href={findUsLink.dexscreener}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[6.75em] xl:w-[7.5em] mb-2 sm:mb-0 h-12"
              >
                <Image
                  src={Dexscreener}
                  alt="dexscreener"
                  className="object-contain w-full h-full"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:h-28" />
      </div>

      <div className="join-now">
        {/* <Image
          src={Banner_1}
          alt="banner-1"
          className="w-full h-full brightness-50"
        /> */}

        <div className={`w-full px-2 sm:px-8 lg:px-14 my-auto`}>
          <div
            className={`w-full text-center mx-auto text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white py-1`}
          >
            Everyone New Favorite DeFi
          </div>
          <div
            className={`w-full text-center mx-auto text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white py-1`}
          >
            Join Now!
          </div>

          {/* <div className="xs:h-10 sm:h-14" /> */}

          <div className="w-full text-center mx-auto mt-4">
            <ConnectWallet hideTestnetFaucet className="!h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
