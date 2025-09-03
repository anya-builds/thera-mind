"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Menu,
  X,
  MessageCircle,
  AudioWaveform,
  LogOut,
  LogIn,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "./theme-toggle";
// import { SignInButton } from "@/components/auth/sign-in-button";
// import { useSession } from "@/lib/contexts/session-context";

const Header = () => {
  return (
    <div  className="w-full fixed top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="absolute inset-0 border-b border-primary/10" />
  <header className="relative max-w-6xl mx-auto px-4">
     <div className="flex h-16 items-center justify-between"> 
        <Link
            href="/"

            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          > <AudioWaveform className="h-7 w-7 text-primary animate-pulse-gentle" />
            <div className="flex flex-col">
              <span className="font-semibold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Aura3.0
              </span>
              <span className="text-xs dark:text-muted-foreground">
                Your mental health Companion{" "}
              </span>
            </div>
          </Link></div>
        </header>
    </div>
  )
}

export default Header
