"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-500">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/img/make-my-bharat-yatra-logo.png"
                alt="Make My Bharat Yatra Logo"
                width={300}
                height={48}
                className="object-contain object-center h-15 "
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <Link
              href="/"
              className={`text-gray-700 hover:text-orange-500 font-medium ${
                router.pathname === "/" ? "text-orange-500" : "text-slate-900 hover:text-white hover:bg-orange-500 rounded-full px-2 py-1"
              }`}
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
             className={`text-gray-700 hover:text-orange-500 font-medium ${
                router.pathname === "/aboutUs" ? "text-orange-500" : "text-slate-900 hover:text-white hover:bg-orange-500 rounded-full px-2 py-1"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/holiday"
               className={`text-gray-700 hover:text-orange-500 font-medium ${
                router.pathname === "" ? "text-orange-500" : "text-slate-900 hover:text-white hover:bg-orange-500 rounded-full px-2 py-1"
              }`}
            >
              Travel Packages
            </Link>
            <Link
              href="#"
              className={`text-gray-700 hover:text-orange-500 font-medium ${
                router.pathname === "" ? "text-orange-500" : "text-slate-900 hover:text-white hover:bg-orange-500 rounded-full px-2 py-1"
              }`}
            >
              Travel Attraction
            </Link>
            <Link
              href="/blog"
               className={`text-gray-700 hover:text-orange-500 font-medium ${
                router.pathname === "/blog" ? "text-orange-500" : "text-slate-900 hover:text-white hover:bg-orange-500 rounded-full px-2 py-1"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contactUs"
              className={`text-gray-700 hover:text-orange-500 font-medium ${
                router.pathname === "/contactUs" ? "text-orange-500" : "text-slate-900 hover:text-white hover:bg-orange-500 rounded-full px-2 py-1"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button>
             <Link href="/login"><User className="w-5 h-5 mr-2" /> </Link> 
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className=" md:hidden">
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className=" md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-500 bg- font-medium"
              >
                Home
              </Link>
              <Link
                href="/aboutUs"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Travel Packages
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Travel Attraction
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contactUs"
                className="text-gray-700 hover:text-orange-500 font-medium"
              >
                Contact Us
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              
              <Button className="justify-center font-semibold bg-">
                <User className="w-4 h-4 mr-2 " /> 
                <Link href="/login"> Login</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
