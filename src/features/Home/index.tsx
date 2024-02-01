"use client";
import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  Button,
  Card,
  CardBody,
  // CardHeader,
  // Divider,
  // List,
  // ListItem,
} from "@chakra-ui/react";
// import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import {
  ArrowRightOutlined,
  ReadOutlined,
  // SearchOutlined,
} from "@ant-design/icons";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";
// import { useCopyText } from "@/hooks/useCopyText";

import { ecosystemList } from "./constants/ecosystem";
import { contractAddress, findUsLink, socialsLink } from "@/constants/links";

// import LogoApp from "@/assets/logo-app.png";
import Banner_1 from "@/assets/banner-1.jpg";

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
            Unleashing Privacy and Protection in Your DeFi Experience
          </div>
          <div
            className={`w-full text-center mx-auto text-md xs:text-lg lg:text-xl font-bold text-slate-400 py-4 lg:px-8`}
          >
            Step into a World of Financial Liberation — Decrepify Ensures Every
            Transaction is Shielded and Private
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

      <div id="features" className="h-20 sm:h-24 lg:h-36" />
      <div className="w-full md:w-11/12 xl:w-3/4 flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white pt-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            Explore <span className="app-title mx-1">Decrepify</span> Ecosystem
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
      </div>

      <div className="md:h-28" />
      <div id="about" className="h-10 sm:h-12 lg:h-18" />
      <div className="w-full md:w-4/5 flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 sm:px-0 py-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            About <span className="app-title mx-1">Decrepify</span>
          </div>
          <div
            className={`w-full text-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 py-4 lg:px-8`}
          >
            Decrepify is committed to redefining the DeFi experience by
            providing a suite of utilities tailored to ensure both security and
            privacy. Our platform is designed to cater to every facet of the
            crypto journey, offering users a comprehensive range of tools to
            navigate the decentralized financial landscape
          </div>
        </div>
      </div>

      <div id="privacy" className="h-10 sm:h-12 lg:h-18" />
      <div className="w-full md:w-4/5 flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 sm:px-0 py-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            <span className="app-title mr-1">Privacy and Protection</span> at
            the Core
          </div>
          <div
            className={`w-full text-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 py-4 lg:px-8`}
          >
            Our commitment extends beyond security. With the Anonymous Bridge,
            we prioritize privacy, enabling users to conduct transactions with a
            shielded identity. Decrepify envisions a decentralized future where
            financial activities are not just secure but also private
          </div>
        </div>
      </div>

      <div id="contract" className="h-10 sm:h-12 lg:h-18" />
      <div className="w-full md:w-4/5 mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white px-2 sm:px-0 py-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            {contractAddress}
          </div>
          <div
            className={`w-full sm:w-4/5 xl:w-3/5 flex flex-wrap justify-between text-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 gap-2 py-4 lg:px-8`}
          >
            <div className="w-full sm:w-[47.5%]">
              <div className="text-primary">Total Supply</div>
              <div>100,000,000</div>
            </div>

            <div className="w-full sm:w-[47.5%]">
              <div className="text-primary">Tax</div>
              <div>5/5 Buy and Sell Tax</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-28" />

      <div className="w-full h-full sm:h-[100vw] xl:h-[75vw] flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white relative">
        <Image
          src={Banner_1}
          alt="banner-1"
          className="w-full h-full object-fill"
        />
        <div className="w-full md:w-4/5 xl:w-[70%] flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white py-4 absolute top-0 sm:top-[10%] z-20">
          <div
            className={`w-full text-center mx-auto text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white py-2`}
          >
            Find Us
          </div>
          <div className="w-full flex flex-wrap justify-evenly items-center bg-black bg-opacity-40 rounded-2xl mt-6">
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
            {/* <Link
              href={`/`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[6.75em] xl:w-[7.5em] mb-2 sm:mb-0 h-14"
            >
              <Image
                src={Coingecko}
                alt="coingecko"
                className="object-cover w-full h-full"
              />
            </Link> */}
          </div>
          {/* <div className="w-full flex flex-wrap justify-evenly items-center mt-6 bg-black bg-opacity-40 py-3 rounded-2xl">
            <Link
              href={`/`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[6.75em] xl:w-[7.5em] my-2 sm:my-0 h-12"
            >
              <Image
                src={Etherscan}
                alt="etherscan"
                className="object-contain w-full h-full"
              />
            </Link>
            <Link
              href={`/`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[6.75em] xl:w-[7.5em] mb-2 sm:mb-0 h-14"
            >
              <Image
                src={Coingecko}
                alt="coingecko"
                className="object-cover w-full h-full"
              />
            </Link>
          </div> */}
        </div>

        <div
          className={`w-full px-2 sm:px-8 lg:px-14 absolute top-[60%] sm:top-2/4 z-20`}
        >
          <div
            className={`w-full text-center mx-auto text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white py-2`}
          >
            Experience DeFi's Ultimate Haven
          </div>
          <div
            className={`w-full text-center mx-auto text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold text-white py-2`}
          >
            Join Decrepify Now!
          </div>

          {/* <div className="xs:h-10 sm:h-14" /> */}

          <div className="w-full text-center mx-auto mt-8">
            <ConnectWallet hideTestnetFaucet className="!h-12" />
          </div>
        </div>
        {/* <div className="w-full md:w-4/5 flex flex-wrap justify-evenly sm:justify-center mx-auto text-lg xs:text-xl lg:text-2xl font-extrabold text-white py-4 absolute top-[60%]">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`pt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
            >
              Embark on the <span className="app-title mx-1">Decrepify</span>{" "}
              Journey
            </div>
            <div
              className={`w-full text-center mx-auto text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 py-4 lg:px-8`}
            >
              Decrepify is not just a DeFi platform; it's a revolutionary step
              towards financial liberation. Whether you're an experienced
              investor or a newcomer to DeFi, Decrepify is your trusted
              companion in navigating the decentralized world of finance. Join
              us and experience the next era of decentralized finance
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
