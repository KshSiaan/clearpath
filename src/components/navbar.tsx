"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  ChevronDown,
  KeyRound,
  MenuIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Referrals", path: "/referrals" },
  ];

  return (
    <nav className="flex items-center justify-between w-full !px-4 md:!px-[7%] !py-3 border-b font-mont bg-white relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/image/logo.png"
          height={40}
          width={100}
          alt="logo"
          className="object-contain w-auto h-10"
        />
      </div>

      {/* Center Nav */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="relative flex items-center justify-between w-full max-w-3xl !px-4 !py-2 rounded-full bg-[#c2eaf8]">
          <div className="absolute inset-0 rounded-full bg-[#c2eaf8]" />
          <div className="relative flex items-center justify-between w-full">
            {navItems.map((item) => {
              const isActive = activeTab === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative !px-4 !py-2 text-xs md:text-sm font-medium text-center transition-colors duration-200"
                  onClick={() => setActiveTab(item.path)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="bubble"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="hidden md:flex items-center gap-2 relative">
        <button
          type="button"
          onClick={() => setIsProfileOpen((prev) => !prev)}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BAE9FF] rounded-full"
        >
          <div className="!p-2 !pr-4 bg-[#BAE9FF] rounded-full flex items-center gap-2 sm:gap-3 transition-all duration-200 group-hover:bg-[#A5DFF9]">
            <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Maria Johns"
              />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
            <span className="hidden sm:block font-semibold text-xs sm:text-sm">
              Maria Johns
            </span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </button>

        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-full right-0 !mt-2 w-[300px] bg-zinc-600/80 border rounded-2xl !p-6 !space-y-4 shadow-lg z-50"
            >
              <button className="w-full flex items-center gap-3 rounded-xl border border-gray-200 !px-4 !py-2 text-base text-background hover:text-foreground hover:bg-gray-100 transition-colors">
                <UserIcon className="size-5" />
                My account
              </button>

              <button className="w-full flex items-center gap-3 rounded-xl border border-gray-200 !px-4 !py-2 text-base text-background hover:text-foreground hover:bg-gray-100 transition-colors">
                <KeyRound className="size-5" />
                Change password
              </button>

              <button className="w-full flex items-center gap-3 rounded-xl border border-gray-200 !px-4 !py-2 text-base text-background hover:text-foreground hover:bg-gray-100 transition-colors">
                <UsersIcon className="size-5" />
                My referrals
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BAE9FF] rounded-full cursor-pointer"
            >
              <MenuIcon />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="!p-4">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/image/logo.png"
                  height={40}
                  width={100}
                  alt="logo"
                  className="object-contain w-auto h-10"
                />
              </SheetTitle>
            </SheetHeader>

            {/* Nav Items */}
            <div className="flex flex-col gap-4 !mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-lg font-medium transition-colors ${
                    activeTab === item.path ? "text-black" : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(item.path)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Profile section */}
            <div className="flex items-center gap-3 !mt-8 !p-3 rounded-full bg-[#c2eaf8]">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Maria Johns"
                />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Maria Johns</span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
