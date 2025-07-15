"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Scale, IdCard, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [labPopoverOpen, setLabPopoverOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-[1000] w-full border-b border-neutral-200 bg-white/80 backdrop-blur-lg shadow-[0_2px_6px_0_rgba(0,0,0,0.07)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/chat_principal" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
            <Scale className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-neutral-900">Dante AI</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {["/agentes-de-ia", "/planos"].map((path) => (
              <NavigationMenuItem key={path}>
                <Link href={path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "h-9 px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center",
                      isActive(path)
                        ? "text-orange-600 bg-orange-50"
                        : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5"
                    )}
                  >
                    {path.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace("De Ia", "de IA")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            {/* LAB menu */}
            <NavigationMenuItem>
              <div
                onMouseEnter={() => setLabPopoverOpen(true)}
                onMouseLeave={() => setLabPopoverOpen(false)}
              >
                <Popover open={labPopoverOpen} onOpenChange={setLabPopoverOpen}>
                  <PopoverTrigger asChild>
                    <button className="h-9 px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5">
                      LAB <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-2">
                    <Link href="/ui" className="block px-2 py-2 rounded hover:bg-orange-50 text-neutral-900 font-medium">
                      UI Components
                    </Link>
                  </PopoverContent>
                </Popover>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/chat_principal">
            <Button size="sm" className="bg-neutral-900 text-white hover:bg-neutral-800">
              💬 Iniciar Chat
            </Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-orange-500 text-white hover:bg-orange-600 ml-2">
                <IdCard className="mr-2 h-5 w-5" />Entrar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Entrar ou Cadastrar</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Senha</label>
                  <input type="password" className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50" required />
                </div>
                <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">Entrar / Cadastrar</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-neutral-700" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-700" />
          )}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-neutral-200 md:hidden">
            <div className="px-4 py-6 space-y-4">
              {["/agentes-de-ia", "/como-funciona", "/planos"].map((path) => (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "block py-2 text-base font-medium",
                    isActive(path) ? "text-orange-600" : "text-neutral-700"
                  )}
                >
                  {path.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace("De Ia", "de IA")}
                </Link>
              ))}
              <Link href="/chat_principal">
                <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800">
                  Iniciar Chat
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
