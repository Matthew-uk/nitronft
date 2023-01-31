import AuctionBox from "./auction-box";
import Explore1 from './../img/nitronft5.png';
import Explore2 from './../img/nitronft6.png';
import Explore3 from './../img/nitronft7.png';
import Explore4 from './../img/nitronft8.png';
import Explore5 from './../img/nitronft9.gif';
import Explore6 from './../img/nitronft10.png';
import Explore7 from './../img/nitronft1.png';
import Explore8 from './../img/nitronft2.png';
import MutantApeYatch from './../img/creator4.png';
import Creator2 from './../img/creator2.png';
import Azuki from './../img/creator6.jpeg';
import Okay from './../img/creator3.png';
import CryptoChick from './../img/creator1.png';

export default function Explore(){
  return(
    <div className="auctions explore">
      <div className="left">
      <p className="head">Today's Pick</p>
      <h2>Explore</h2>
      </div>

      <div className="auction-boxes">
        <AuctionBox img={Explore1} profile={MutantApeYatch} name="Mutant Ape Yatch Club"/>
        <AuctionBox img={Explore2} profile={Creator2} name="Mutant Ape Yatch Club"/>
        <AuctionBox img={Explore3} profile={Azuki} name="Mutant Ape Yatch Club"/>
        <AuctionBox img={Explore4} profile={Okay} name="Mutant Ape Yatch Club"/>
        <AuctionBox img={Explore5} profile={CryptoChick} name="Mutant Ape Yatch Club"/>
        <AuctionBox img={Explore6} profile={MutantApeYatch} name="Mutant Ape Yatch Club"/>
        <AuctionBox img={Explore7} profile={CryptoChick} name="Mutant Ape Yatch Club"/>
        <AuctionBox img={Explore8} name="Mutant Ape Yatch Club"/>
      </div>
    </div>
  );
}