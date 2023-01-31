export default function Navbar({navBtn, handleMobileMenu}){
  return(
    <div className="navbar">
      <div className="nav-logo">
        <h2>Nitro NFT</h2>
      </div>
      <div data-visible={navBtn} className="nav-links">
        <ul>
          <li>Home</li>
          <li>Auction</li>
          <li>Top</li>
          <li>Explore</li>
          <li>Works</li>
          <li data-visible={navBtn}>
            <div className="wallet">
              <button>Connect Wallet</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="wallet">
        <button>Connect Wallet</button>
        <div
          onClick={handleMobileMenu}
          className="mobile-menu"
          data-visible={navBtn}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

window.addEventListener('scroll', ()=>{
  const nav = document.querySelector('.navbar');
  if(window.scrollY > 20){
    nav.classList.add('scrolled');
  } else if(window.scrollY < 20){
    nav.classList.remove('scrolled');
  }
})