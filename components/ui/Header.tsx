import Image from "next/image";
import React from "react";
import { ThemeToggler } from "../ThemeToggler";
import SearchInput from "../SearchInput";
import GenreDropdown from "../GenreDropdown";
import { CgProfile } from "react-icons/cg";
import login_icon from "../login_icon";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex space-x-2">
        {/* Profile */}
        {/* <button style={{fontSize:"1.2rem"}}>
          <Link href="/signin">
            <span>
            <CgProfile/>
            </span> ProfileName
          </Link>
          <Link href="/logout">
            Logout
          </Link>
          </button> */}

        {/* <div className='flex'>*/}
        {/* <div className='signin'> */}
        {/* <Link href="/signin">
            <div className='icon_container'>
              <CgProfile className='icon_style'/>
            </div>
          </Link>
          </div>
            <div style={{ height:'40px',display: "flex", flexDirection: "column" }}>
              <p style={{fontSize: "12px"}}>Hello, <span>gudu</span></p>
              <button style={{fontSize: "14px !important", fontWeight: 700,textAlign: "center"}}>Logout</button>
            </div>  */}
        {/* </div> */}

        {/* <login_icon /> */}
        <div className="icon_container">
          <Link href="/signin">
            <CgProfile />
          </Link>
        </div>
        <div className="icon_text">
              <span>Hi ---,</span>
              <span style={{ marginTop: "-10px" }}>Logout</span>
        </div>
       

        {/* GenreDropDown */}
        <GenreDropdown />
        {/* SearchInput */}
        <SearchInput />
        {/* THemeToggler */}
        <ThemeToggler />

        {/* Profile */}
      </div>
    </header>
  );
}

export default Header;
