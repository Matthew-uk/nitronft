import { useState } from "react";
import Auction from "./auction";
import Creators from "./creators";
import Explore from "./explore";
import Footer from "./footer";
import Footer1 from "./footer1";
import Hero from "./hero";
import Navbar from "./navbar";
import Works from "./works";

const NitroNft = () => {
  const [navBtn, setNavBtn] = useState(false);

  const handleMobileMenu = () => {
    setNavBtn(!navBtn);
  };
  return (
    <div>
      <header>
        <Navbar navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
        <Hero />
      </header>
      <Auction />
      <Creators />
      <Explore />
      <Works />
      <Footer1/>
      <Footer />
    </div>
  );
};

export default NitroNft;
