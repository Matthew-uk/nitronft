export default function AuctionBox({img, name, profile}) {
  return(
    <div className="auction-box">
      <div className="auction-image">
        <div className="img">
          <img src={img} alt=""/>
        </div>
        <p className="title">{name}</p>
      </div>
      
      <div className="userProfile">
        <img src={profile} alt="" />
        <p className="title">{name}</p>
        <p className="price">6.9<br/>ETH</p>
      </div>

      <div className="history-bid">
        <p>History</p>
        <p className="bid">Place a Bid</p>
      </div>

    </div>
  );
}