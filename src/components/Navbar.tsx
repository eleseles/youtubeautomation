"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Youtube } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header
            className={`fixed top-2 left-2 right-2 z-50 transition-all duration-500 font-sans rounded-xl ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border border-white/20 shadow-sm py-1"
                    : "bg-transparent py-2.5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-base md:text-lg font-serif font-bold tracking-tighter text-gray-900 hover:opacity-80 transition-opacity flex items-center gap-1.5">
                    <Youtube className="text-olive-green" size={18} />
                    YouTube <span className="text-olive-green italic font-medium">Automation AI</span>
                </Link>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-2">
                    <Link
                        href="/auth/login"
                        className="text-[10px] font-bold text-gray-900 hover:text-olive-green transition-colors px-2 py-1"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/register"
                        className="bg-olive-green text-white px-3.5 py-1.5 rounded-lg text-[10px] font-bold hover:bg-olive-green-light transition-all shadow-sm"
                    >
                        Get Started
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-1.5 text-gray-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 p-6 shadow-2xl flex flex-col space-y-4 rounded-b-xl mt-2 animate-in fade-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-gray-900 hover:text-olive-green uppercase tracking-wider"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
                        <Link
                            href="/auth/login"
                            className="text-center text-sm font-bold text-gray-900 py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/auth/register"
                            className="bg-olive-green text-white px-6 py-3 rounded-lg text-sm font-bold w-full text-center shadow-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};


export default Navbar;
