"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import MusicPlayer from "./MusicPlayer";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <div className="logo-card">
            <h1 className="text-4xl font-semibold">
              B-KEY<span className="text-green-500">.</span>
            </h1>
          </div>
        </Link>

        {/* Music Player - Now visible on all screens */}
        <div className="flex-1 max-w-[100px] md:max-w-[200px] mx-2 md:mx-4 flex justify-center">
          <MusicPlayer />
        </div>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;