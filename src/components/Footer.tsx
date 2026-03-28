"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Twitter, Github, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = {
        solutions: [
            { name: "Marketing Automation", href: "/ai-marketing-automation" },
            { name: "Email Automation", href: "/ai-email-automation" },
            { name: "LinkedIn Automation", href: "/ai-linkedin-automation" },
            { name: "Faceless YouTube", href: "/faceless-youtube-automation" },
            { name: "TikTok Generator", href: "/ai-tiktok-video-generator" },
        ],
        resources: [
            { name: "Blog", href: "/blog" },
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "How it Works", href: "#how-it-works" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
            { name: "Disclaimer", href: "/disclaimer" },
        ]
    };

    return (
        <footer className="bg-[#FCFCFA] pt-24 pb-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="text-xl font-serif font-bold tracking-tighter text-gray-900 flex items-center gap-2">
                            <Youtube className="text-olive-green" size={24} />
                            AI YouTube <span className="text-olive-green italic font-medium">Automation</span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            The world&apos;s leading platform for AI-driven content automation. Build your digital empire on autopilot with our suite of smart agents.
                        </p>
                        <div className="flex items-center gap-4 text-gray-400">
                           <a href="https://twitter.com/YTAutoAI" target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-100 rounded-full flex items-center justify-center hover:text-olive-green hover:border-olive-green/20 transition-all">
                              <Twitter size={16} />
                           </a>
                           <a href="https://github.com/YTAutoAI" target="_blank" rel="noreferrer" className="w-9 h-9 border border-gray-100 rounded-full flex items-center justify-center hover:text-olive-green hover:border-olive-green/20 transition-all">
                              <Github size={16} />
                           </a>
                           <a href="mailto:hello@youtubeautomation.app" className="w-9 h-9 border border-gray-100 rounded-full flex items-center justify-center hover:text-olive-green hover:border-olive-green/20 transition-all">
                              <Mail size={16} />
                           </a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Automation Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-olive-green transition-colors flex items-center group">
                                        {link.name}
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-olive-green transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-olive-green transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                        &copy; {currentYear} AI YouTube Automation. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-olive-green uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 bg-olive-green rounded-full animate-pulse" />
                            System Status: Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
