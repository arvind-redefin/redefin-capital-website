# 🎯 COMPLETE COMPONENT.TSX FILES - ALL 7 COMPONENTS

**Copy these exactly into your `src/app/components/` folder**

---

## ✅ COMPONENT 1: HEADER.TSX

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/investment-banking', label: 'Investment Banking' },
    { href: '/research', label: 'Research' },
    { href: '/moonshot', label: 'Moonshot' },
    { href: '/nextep', label: 'Nextep' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[#2E3E50] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#D4AF37]">
          RC
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#D4AF37] transition text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#D4AF37]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#1a2533] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 hover:text-[#D4AF37] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
```

---

## ✅ COMPONENT 2: HERO.TSX

```typescript
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Boutique Investment Banking & Advisory
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Specializing in real estate fundraising, equity research, and business advisory. Over $800M in closed deals and 300+ investor relationships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/investment-banking" className="bg-[#D4AF37] text-[#2E3E50] px-8 py-4 rounded font-bold hover:bg-yellow-500 transition inline-flex items-center w-fit">
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link href="/contact" className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded font-bold hover:bg-[#D4AF37] hover:text-[#2E3E50] transition">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
```

---

## ✅ COMPONENT 3: STATS.TSX

```typescript
'use client';

export default function Stats() {
  const stats = [
    { value: '$800 Cr+', label: 'Closed Real Estate Deals' },
    { value: '$2,000 Cr+', label: 'Active Pipeline' },
    { value: '300+', label: 'Institutional Investors' },
    { value: '75 Yrs', label: 'Combined Team Experience' },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## ✅ COMPONENT 4: SERVICES.TSX

```typescript
'use client';

import Link from 'next/link';
import { TrendingUp, BarChart3, Lightbulb, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Investment Banking',
      desc: 'Real estate capital raising, debt syndication, and equity structuring',
      href: '/investment-banking'
    },
    {
      icon: BarChart3,
      title: 'Kedge Research',
      desc: 'Institutional-grade equity research and financial modeling',
      href: '/research'
    },
    {
      icon: Rocket,
      title: 'Moonshot',
      desc: 'Early-stage investment platform connecting founders and investors',
      href: '/moonshot'
    },
    {
      icon: Lightbulb,
      title: 'Nextep Advisory',
      desc: 'Business advisory, compliance, recruitment, and investor networks',
      href: '/nextep'
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#2E3E50]">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Comprehensive solutions for your financial and business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={idx}
                href={service.href}
                className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg hover:border-[#D4AF37] transition group"
              >
                <Icon className="text-[#D4AF37] mb-4 group-hover:scale-110 transition" size={40} />
                <h3 className="text-xl font-bold text-[#2E3E50] mb-3 group-hover:text-[#D4AF37] transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

## ✅ COMPONENT 5: ABOUT.TSX

```typescript
'use client';

export default function About() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2E3E50]">
          About RedeFin Capital
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#2E3E50] mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              RedeFin Capital is a boutique investment banking and advisory firm specializing in real estate fundraising, research, and business advisory. We bridge the gap between ambitious entrepreneurs and institutional capital.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 75 years of cumulative team experience and a proven track record of closing $800M+ in real estate deals, we help entrepreneurs achieve their financial goals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#2E3E50] mb-4">Our Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-4">✓</span>
                <span className="text-gray-700">Meticulous attention to detail and quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-4">✓</span>
                <span className="text-gray-700">Transparent communication with all stakeholders</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-4">✓</span>
                <span className="text-gray-700">Fast execution with proven track records</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] font-bold mr-4">✓</span>
                <span className="text-gray-700">Direct access to 300+ institutional investors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## ✅ COMPONENT 6: CALLTOACTION.TSX

```typescript
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-[#2E3E50] text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Let's discuss your capital needs, investment goals, or business challenges
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#D4AF37] text-[#2E3E50] px-8 py-4 rounded font-bold hover:bg-yellow-500 transition inline-flex items-center justify-center w-full sm:w-auto">
            Schedule a Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link href="/investment-banking" className="border-2 border-[#D4AF37] text-white px-8 py-4 rounded font-bold hover:bg-[#D4AF37] hover:text-[#2E3E50] transition">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
```

---

## ✅ COMPONENT 7: FOOTER.TSX

```typescript
'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">RC</h3>
            <p className="text-gray-400 text-sm mb-4">
              Boutique investment banking and advisory firm specializing in real estate, research, and business advisory.
            </p>
            <p className="text-gray-500 text-xs">© 2025 RedeFin Capital. All rights reserved.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/investment-banking" className="hover:text-[#D4AF37] transition">Investment Banking</Link></li>
              <li><Link href="/research" className="hover:text-[#D4AF37] transition">Kedge Research</Link></li>
              <li><Link href="/moonshot" className="hover:text-[#D4AF37] transition">Moonshot</Link></li>
              <li><Link href="/nextep" className="hover:text-[#D4AF37] transition">Nextep Advisory</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-[#D4AF37] transition">About</Link></li>
              <li><Link href="/team" className="hover:text-[#D4AF37] transition">Team</Link></li>
              <li><Link href="/careers" className="hover:text-[#D4AF37] transition">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                <span>contact@redefincapital.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                <span>+91-7380798555</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                <span>Hyderabad & Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center flex-col md:flex-row">
          <p className="text-gray-500 text-sm">RedeFin Capital - Redefining Investment Banking</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 📋 SUMMARY

You now have **ALL 7 COMPONENTS**:

✅ Header.tsx (Navigation)
✅ Hero.tsx (Landing hero section)
✅ Stats.tsx (Metrics dashboard)
✅ Services.tsx (Service cards)
✅ About.tsx (About section)
✅ CallToAction.tsx (CTA section)
✅ Footer.tsx (Footer with links)

### **How to Use:**

1. **Create folder:** `src/app/components/`
2. **Create each file** with the exact name:
   - `Header.tsx`
   - `Hero.tsx`
   - `Stats.tsx`
   - `Services.tsx`
   - `About.tsx`
   - `CallToAction.tsx`
   - `Footer.tsx`
3. **Copy the code** exactly as shown
4. **Paste into each file**
5. Upload to GitHub
6. Deploy to Vercel!

---

## 🎯 COMPLETE FILE STRUCTURE NOW:

```
src/
├── app/
│   ├── page.tsx                    ✅ (HOME)
│   ├── investment-banking/
│   │   └── page.tsx               ✅
│   ├── research/
│   │   └── page.tsx               ✅
│   ├── moonshot/
│   │   └── page.tsx               ✅
│   ├── nextep/
│   │   └── page.tsx               ✅
│   ├── about/
│   │   └── page.tsx               ✅
│   ├── team/
│   │   └── page.tsx               ✅
│   ├── careers/
│   │   └── page.tsx               ✅
│   ├── resources/
│   │   └── page.tsx               ✅
│   ├── contact/
│   │   └── page.tsx               ✅
│   ├── components/
│   │   ├── Header.tsx             ✅
│   │   ├── Hero.tsx               ✅
│   │   ├── Stats.tsx              ✅
│   │   ├── Services.tsx           ✅
│   │   ├── About.tsx              ✅
│   │   ├── CallToAction.tsx       ✅
│   │   └── Footer.tsx             ✅
│   ├── layout.tsx                 (Already have)
│   └── globals.css                (Already have)
```

**Everything is now ready!** 🎉

Simply:
1. Copy all page files → Create folder structure
2. Copy all component files → Create components folder
3. Upload to GitHub
4. Deploy to Vercel

**You're done!** 🚀