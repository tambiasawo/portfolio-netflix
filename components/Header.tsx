import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Header() {
  const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

  useEffect(() => {
    console.log("isndie");
    console.log(hasScrolled);
    const scrollHandler = () => {
      if (window?.scrollY > 0) {
        setHasScrolled(true);
      } else setHasScrolled(false);
    };
    window.addEventListener("scroll", scrollHandler);
    console.log(hasScrolled);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className={`${hasScrolled} && bg-[#141414]`}>
      <div className="flex items-center  justify-between  h-16 w-full">
        <div className="flex items-center justify-between text-white space-x-9">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="object-contain cursor-pointer pl-5"
          />

          <ul className="hidden md:flex items-center space-x-5">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>
        <div className="text-white">
          <ul className="flex items-center space-x-5 justify-around">
            <li className="hidden sm:inline ">
              <SearchIcon />
            </li>
            <li className="hidden lg:inline">Kids</li>
            <li className="">
              <NotificationsIcon />
            </li>
            <li className="pr-5">
              <AccountBoxIcon />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
