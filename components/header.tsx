"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Scale, Zap, Users, Building, Award, FileText } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
            <Scale className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-neutral-900">Dante AI</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/agentes-de-ia" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "h-9 px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center",
                  isActive("/agentes-de-ia") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5"
                )}>
                  Agentes de IA
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/como-funciona" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "h-9 px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center",
                  isActive("/como-funciona") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5"
                )}>
                  Como funciona
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/suporte" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "h-9 px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center",
                  isActive("/suporte") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5"
                )}>
                  Suporte
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/planos" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "h-9 px-4 py-2 text-sm font-medium rounded-lg inline-flex items-center",
                  isActive("/planos") 
                    ? "text-orange-600 bg-orange-50" 
                    : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5"
                )}>
                  Planos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-neutral-900">
              Entrar
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-neutral-900 text-white hover:bg-neutral-800">
              Comece grátis
            </Button>
          </Link>
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
              <Link href="/agentes-de-ia" className={cn(
                "block py-2 text-base font-medium",
                isActive("/agentes-de-ia") ? "text-orange-600" : "text-neutral-700"
              )}>
                Agentes de IA
              </Link>

              <Link href="/como-funciona" className={cn(
                "block py-2 text-base font-medium",
                isActive("/como-funciona") ? "text-orange-600" : "text-neutral-700"
              )}>
                Como funciona
              </Link>
              <Link href="/suporte" className={cn(
                "block py-2 text-base font-medium",
                isActive("/suporte") ? "text-orange-600" : "text-neutral-700"
              )}>
                Suporte
              </Link>
              <Link href="/planos" className={cn(
                "block py-2 text-base font-medium",
                isActive("/planos") ? "text-orange-600" : "text-neutral-700"
              )}>
                Planos
              </Link>
              <div className="pt-4 space-y-2">
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800">
                    Comece grátis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}