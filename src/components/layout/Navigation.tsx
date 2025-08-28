'use client';

import * as React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';
import { navigationConfig } from '@/lib/navigation-config';
import { NavigationItem } from '@/types';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top Bar */}
      <div className="bg-deep-forest text-warm-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Emergency: +254 700 000 000</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@tuskerexpeditions.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select className="bg-transparent text-warm-ivory text-sm border border-warm-ivory/20 rounded px-2 py-1">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="kes">KES</option>
              </select>
              <select className="bg-transparent text-warm-ivory text-sm border border-warm-ivory/20 rounded px-2 py-1">
                <option value="en">EN</option>
                <option value="sw">SW</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-savanna-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">Tusker Expeditions</div>
              <div className="text-sm text-muted-foreground">East African Safaris</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationConfig.map((item) => (
              <NavigationDropdown key={item.title} item={item} />
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/packages/custom-packages/ai-planner"
              className="hidden md:inline-flex items-center px-6 py-2 bg-vibrant-blue text-white rounded-lg hover:bg-vibrant-blue/90 transition-colors font-medium"
            >
              Plan Your Safari
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <div className="space-y-2">
              {navigationConfig.map((item) => (
                <MobileNavigationItem 
                  key={item.title} 
                  item={item}
                  activeDropdown={activeDropdown}
                  onDropdownToggle={handleDropdownToggle}
                />
              ))}
              <div className="pt-4 border-t border-border">
                <Link 
                  href="/packages/custom-packages/ai-planner"
                  className="block w-full text-center px-6 py-3 bg-vibrant-blue text-white rounded-lg hover:bg-vibrant-blue/90 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Plan Your Safari
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavigationDropdown({ item }: { item: NavigationItem }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.items) {
    return (
      <Link
        href={item.href || '#'}
        className="text-foreground hover:text-primary font-medium transition-colors"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors">
        {item.title}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-80 bg-background border border-border rounded-lg shadow-lg py-4 z-50">
          <div className="grid gap-2">
            {item.items.map((subItem) => (
              <div key={subItem.title}>
                <Link
                  href={subItem.href || '#'}
                  className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${
                    subItem.featured ? 'text-primary font-semibold' : 'text-foreground'
                  }`}
                >
                  <div className="font-medium">{subItem.title}</div>
                  {subItem.description && (
                    <div className="text-muted-foreground text-xs mt-1">
                      {subItem.description}
                    </div>
                  )}
                </Link>
                {subItem.items && (
                  <div className="ml-4 mt-1 space-y-1">
                    {subItem.items.map((childItem) => (
                      <Link
                        key={childItem.title}
                        href={childItem.href || '#'}
                        className="block px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {childItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavigationItem({ 
  item, 
  activeDropdown, 
  onDropdownToggle 
}: { 
  item: NavigationItem;
  activeDropdown: string | null;
  onDropdownToggle: (title: string) => void;
}) {
  if (!item.items) {
    return (
      <Link
        href={item.href || '#'}
        className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
      >
        {item.title}
      </Link>
    );
  }

  const isOpen = activeDropdown === item.title;

  return (
    <div>
      <button
        onClick={() => onDropdownToggle(item.title)}
        className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
      >
        {item.title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 space-y-1">
          {item.items.map((subItem) => (
            <div key={subItem.title}>
              <Link
                href={subItem.href || '#'}
                className={`block px-4 py-2 text-sm hover:bg-muted rounded-md transition-colors ${
                  subItem.featured ? 'text-primary font-semibold' : 'text-foreground'
                }`}
              >
                {subItem.title}
              </Link>
              {subItem.items && (
                <div className="ml-4 mt-1 space-y-1">
                  {subItem.items.map((childItem) => (
                    <Link
                      key={childItem.title}
                      href={childItem.href || '#'}
                      className="block px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {childItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}