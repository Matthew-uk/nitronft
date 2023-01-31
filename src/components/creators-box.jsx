export default function CreatorsBox({image, price, name, username, items}){
  return(
    <div className="seller-box">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <p>{price}ETH</p>
        <p>{name}</p>
        <p>@{username}</p>
      </div>
      <div className="items">
        <p>{items}</p>
        <p>Items</p>
      </div>
    </div>
  );
}