import AuctionBox from "./auction-box";
import Img1 from './../img/nitronft1.png';
import Img2 from './../img/nitronft2.png';
import Img3 from './../img/nitronft3.png';
import Img4 from './../img/nitronft4.png';
import profileImg from './../img/nitronft.png';

export default function Auction() {
  return(
    <div className="auctions">
      <div className="left">
        <p className="head">Auctions</p>
        <h2>Live Auctions</h2>
      </div>
      
      <div className="auction-boxes">
        <AuctionBox name="Crypto.Chick#1540" profile={profileImg} img={Img1}/>
        <AuctionBox name="Crypto.Chick#1540" profile={profileImg} img={Img2}/>
        <AuctionBox name="Crypto.Chick#1540" profile={profileImg} img={Img3}/>
        <AuctionBox name="Crypto.Chick#1540" profile={profileImg} img={Img4}/>
      </div>
    </div>
  );
}