"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="pb-10 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <Link href="/" className="text-base md:text-lg font-serif font-bold tracking-tighter text-gray-900 hover:opacity-80 transition-opacity flex items-center gap-1.5">
                        <Youtube className="text-olive-green" size={18} />
                        YouTube <span className="text-olive-green italic font-medium">Automation AI</span>
                    </Link>

                    {/* Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                        <Link href="/blog" className="text-[9px] md:text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest whitespace-nowrap">
                            Blog
                        </Link>
                        <Link href="/ai-tiktok-video-generator" className="text-[9px] md:text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest whitespace-nowrap">
                            TikTok Generator
                        </Link>
                        <Link href="/privacy" className="text-[9px] md:text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest whitespace-nowrap">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-[9px] md:text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest whitespace-nowrap">
                            Terms
                        </Link>
                        <Link href="/cookies" className="text-[9px] md:text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest whitespace-nowrap">
                            Cookies
                        </Link>
                        <Link href="/disclaimer" className="text-[9px] md:text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest whitespace-nowrap">
                            Disclaimer
                        </Link>

                    </nav>


                    {/* Socials & Copyright */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 text-gray-400">
                           <a href="https://twitter.com/YTAutoAI" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                              <Twitter size={16} />
                           </a>
                           <a href="https://github.com/YTAutoAI" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                              <Github size={16} />
                           </a>
                           <a href="mailto:hello@youtubeautomation.app" className="hover:text-gray-900 transition-colors">
                              <Mail size={16} />
                           </a>
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 border-l border-gray-100 pl-6 uppercase tracking-widest">
                            &copy; {currentYear}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
