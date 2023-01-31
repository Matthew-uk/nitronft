import HeroImage from './../img/nitronft.png';

export default function Hero(){
  return(
    <div className="hero">
      <div className="left">
        <h1>Create your NFT Dream Gallery</h1>
        <p>Find Exclusive Digital artwork, made by amazing people.<br/>Make money by doing something you're passionate about.</p>
        <button className='coloredBtn'>🎷  Explore</button>
        <button className='notColoredBtn'>🎻  Create</button>
      </div>

      <div className="right">
        <img src={HeroImage} alt="" />
        <div className="descriptions">
          <div className="artwork">
            <h2>32K</h2>
            <p>Artwork</p>
          </div>
          <div className="auction">
            <h2>27K</h2>
            <p>Auction</p>
          </div>
          <div className="artist">
            <h2>16K</h2>
            <p>Artist</p>
          </div>
        </div>
      </div>
    </div>
  );
}