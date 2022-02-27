import React from "react";
import login from "../../assets/login.png";
import cart from "../../assets/cart.png";
import setting from '../../assets/setting.png';
import search from '../../assets/search.png';
import menu from "../../assets/menu.png";
const Header = () => {
  return (
      <>
    <div className="flex flex-row justify-around">
{/* BRANDING */}
      <div className="flex flex-col justify-center">
        <div className="font-mono font-bold text-black text-3xl ">
          Artistic Alley
        </div>
        <div className="font-mono font-semibold text-black">
          The eHub for Artisans
        </div>
      </div>
{/* SEARCH */}
<div className = "flex flex-col justify-around w-3/6">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src = {search} alt = "search" />
        </span>
        <input
          className="placeholder:italic placeholder:text-black block bg-gray-400 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>
      </div>
{/* BUTTONS */}
      <div className="flex flex-row justify-between  mx-2 my-2">
        <div className="flex flex-col justify-between text-black font-semibold mx-3  text-xl ">
          <img src={login} alt="login" width = "50px" />
          Login
        </div>
        <div className="flex flex-col justify-between text-black font-semibold mx-2 text-xl ">
          <img src={setting} alt="setting"  width = "50px"  />
          Setting
        </div>
        <div className="flex flex-col justify-between text-black font-semibold mx-2 text-xl">
          <img src={cart} alt="cart"   width = "50px" />
          Cart
        </div>
      </div>

  
    </div>
<hr style = {{color:'black'}}/>
<div className="flex flex-row justify-around my-2">
<div className = "my-2" >
    <img src = {menu} alt = "menu" width="50px" ></img>
</div>
<button className = "text-black font-semibold hover:bg-gray-400 border-2 border-black my-1 px-2">Deals of the Day!</button>
<button className = "text-black font-semibold hover:bg-gray-400 border-2 border-black my-1 px-2">Your Orders</button>
<button className = "text-black font-semibold hover:bg-gray-400 border-2 border-black my-1 px-2">Customer Service</button>
<button className = "text-black font-semibold hover:bg-gray-400 border-2 border-black my-1 px-2">Want to be a Seller?</button>
<button className = "text-black font-semibold hover:bg-gray-400 border-2 border-black my-1 px-2">Enter your Address</button>

</div>
<hr style = {{color:'black'}}/>
    </>
  );
};
export default Header;
