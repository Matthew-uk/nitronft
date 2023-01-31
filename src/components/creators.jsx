import CreatorsBox from "./creators-box";
import Creator1 from './../img/creator1.png';
import Creator2 from './../img/creator2.png';
import Creator3 from './../img/creator3.png';
import Creator4 from './../img/creator4.png';
import Creator5 from './../img/creator5.gif';
import Creator6 from './../img/creator6.jpeg';

export default function Creators(){
  return(
    <div className="auctions sellers">
      <div className="left">
        <p className="head">Creators</p>
        <h2>Top Sellers</h2>
      </div>

      <div className="seller-boxes">
        <CreatorsBox 
          image={Creator1} 
          price={9.8} 
          name="Crypto Chicks" 
          username="crypto.chicks" 
          items={62}
        />
        <CreatorsBox 
          image={Creator2} 
          price={9.8} 
          name="Akutar" 
          username="AkuDreams" 
          items={62}
        />
        <CreatorsBox 
          image={Creator3} 
          price={9.8} 
          name="Okay Bear" 
          username="7ttWYWs" 
          items={62}
        />
        <CreatorsBox 
          image={Creator4} 
          price={9.8} 
          name="Akutar" 
          username="AkuDreams" 
          items={62}
        />
        <CreatorsBox 
          image={Creator5} 
          price={9.8} 
          name="Akutar" 
          username="AkuDreams" 
          items={62}
        />
        <CreatorsBox 
          image={Creator6} 
          price={9.8} 
          name="Akutar" 
          username="AkuDreams" 
          items={62}
        />
      </div>
    </div>
  );
}