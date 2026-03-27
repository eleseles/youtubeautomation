"use client";

import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Key, 
  Shield, 
  CreditCard, 
  Bell, 
  ExternalLink,
  ChevronRight,
  Database,
  Youtube,
  Smartphone,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "api", label: "API Keys", icon: Key },
    { id: "plan", label: "Subscription", icon: Zap },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-20">
      <div className="space-y-1">
        <h1 className="text-sm font-black text-gray-900 leading-tight">Settings</h1>
        <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest pl-0.5">Manage your workspace and personal account</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Navigation Tabs */}
        <div className="space-y-1">
           {tabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
                 activeTab === tab.id 
                   ? "bg-olive-green text-white shadow-md shadow-olive-green/10" 
                   : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
               }`}
             >
                <tab.icon size={12} strokeWidth={2.5} />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">{tab.label}</span>
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 space-y-6">
           {activeTab === "profile" && (
             <div className="space-y-6 animate-fadeIn">
                <div className="bg-white border border-gray-50 rounded-2xl p-5 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="relative group">
                         <div className="w-16 h-16 rounded-full bg-gray-50 border-2 border-gray-100 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=dashboard" className="w-full h-full object-cover" alt="User Avatar" />
                         </div>
                         <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[8px] font-black text-white uppercase tracking-tighter">Change</span>
                         </button>
                      </div>
                      <div className="space-y-1">
                         <h3 className="text-xs font-black text-gray-900">Eles Workspace</h3>
                         <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Personal Account</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                         <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                         <input type="text" defaultValue="Eles Workspace" className="w-full h-8 bg-gray-50 border border-gray-100 rounded-lg px-3 text-[10px] font-bold text-gray-900 focus:outline-none focus:border-olive-green/20" />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                         <input type="email" defaultValue="hi@eles.cc" className="w-full h-8 bg-gray-50 border border-gray-100 rounded-lg px-3 text-[10px] font-bold text-gray-900 focus:outline-none focus:border-olive-green/20" />
                      </div>
                   </div>
                   
                   <button className="h-8 px-5 bg-olive-green text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-md shadow-olive-green/10">
                      Save Changes
                   </button>
                </div>

                <div className="bg-white border border-gray-50 rounded-2xl p-5 space-y-4">
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-lg bg-red-50 flex items-center justify-center text-red-500"><Shield size={12} /></div>
                         <h3 className="text-[11px] font-black text-gray-900">Danger Zone</h3>
                      </div>
                   </div>
                   <p className="text-[9px] font-medium text-gray-400 max-w-[300px]">Once you delete your account, there is no going back. Please be certain.</p>
                   <button className="text-[9px] font-black text-red-500 uppercase tracking-widest border-b border-red-200 pb-0.5 hover:text-red-700 transition-colors">Delete Account</button>
                </div>
             </div>
           )}

           {activeTab === "api" && (
             <div className="space-y-6 animate-fadeIn">
                <div className="bg-white border border-gray-50 rounded-2xl p-5 space-y-6">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400"><Youtube size={16} /></div>
                      <div>
                         <h3 className="text-xs font-black text-gray-900">YouTube API Credentials</h3>
                         <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Required for AI Generator</p>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="space-y-1.5">
                         <div className="flex items-center justify-between">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">API Key</label>
                            <span className="text-[8px] font-black text-green-500 flex items-center gap-1 uppercase tracking-tighter"><CheckCircle2 size={10} /> Validated</span>
                         </div>
                         <input type="password" value="************************" readOnly className="w-full h-8 bg-gray-50 border border-gray-100 rounded-lg px-3 text-[10px] font-bold text-gray-900 focus:outline-none" />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Client ID</label>
                         <input type="text" placeholder="G-123456789..." className="w-full h-8 bg-gray-50 border border-gray-100 rounded-lg px-3 text-[10px] font-bold text-gray-900 focus:outline-none focus:border-olive-green/20" />
                      </div>
                   </div>
                   
                   <div className="pt-2">
                      <button className="flex items-center gap-2 text-[9px] font-black text-olive-green uppercase tracking-widest">
                         <ExternalLink size={10} /> Get API Keys from Console
                      </button>
                   </div>
                </div>
             </div>
           )}

           {activeTab === "plan" && (
             <div className="space-y-6 animate-fadeIn">
                <div className="bg-white border border-red-50/50 rounded-2xl p-5 flex items-center justify-between shadow-sm">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-olive-green/5 flex items-center justify-center text-olive-green border border-olive-green/10">
                         <Zap size={18} fill="currentColor" />
                      </div>
                      <div className="space-y-0.5">
                         <div className="flex items-center gap-2">
                            <h4 className="text-[11px] font-black text-gray-900 uppercase tracking-tighter">Business Pro Plan</h4>
                            <span className="px-2 py-0.5 bg-olive-green text-white text-[7px] font-black rounded-full uppercase tracking-widest">Active</span>
                         </div>
                         <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">$49.00 / Month (Auto-renews Mar 30)</p>
                      </div>
                   </div>
                   <button className="h-7 px-4 bg-gray-50 border border-gray-100 text-gray-900 text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-gray-100 transition-all">Manage Billing</button>
                </div>

                <div className="bg-white border border-gray-50 rounded-2xl p-5 space-y-6">
                   <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400"><Database size={12} /></div>
                      <h3 className="text-xs font-black text-gray-900 uppercase tracking-tighter">Storage Usage</h3>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="flex items-center justify-between text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                         <span>1.2 GB of 10 GB Used</span>
                         <span>12%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                         <div className="h-full w-[12%] bg-olive-green rounded-full shadow-sm" />
                      </div>
                   </div>
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
