import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Img1 from "./../img/creator1.png";
// import Img2 from "./../img/creator2.png";
// import Img3 from "./../img/creator3.png";

export default function Works() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="auctions sellers">
      <div className="left">
        <p className="head">How it Works</p>
        <h2>Create and Sell Your NFT</h2>
      </div>
      <Carousel className="slides" responsive={responsive}>
        <div className="item">
          <h3>Create Your Collection</h3>
          <p>
            Click my collections and set up your collection. Add social links, a
            description, profile & banner images, and set a secondary sales fee.
          </p>
        </div>
        <div className="item">
          <h3>Add your NFT</h3>
          <p>
            Upload your work(image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unblockable content.
          </p>
        </div>
        <div className="item">
          <h3>Upload them for Sale</h3>
          <p>
            Choose between auction, and fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!
          </p>
        </div>
        <div className="item">Item 4</div>
      </Carousel>
    </div>
  );
}
