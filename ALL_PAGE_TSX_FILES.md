# 🎯 COMPLETE PAGE.TSX FILES - ALL 10 PAGES

**Copy these exactly into your project folders**

---

## 📁 FOLDER STRUCTURE YOU NEED:

```
src/app/
├── page.tsx                    (HOME PAGE)
├── investment-banking/
│   └── page.tsx
├── research/
│   └── page.tsx
├── moonshot/
│   └── page.tsx
├── nextep/
│   └── page.tsx
├── about/
│   └── page.tsx
├── team/
│   └── page.tsx
├── careers/
│   └── page.tsx
├── resources/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Stats.tsx
    ├── Services.tsx
    ├── About.tsx
    ├── CallToAction.tsx
    └── Footer.tsx
```

---

## ✅ PAGE 1: HOME PAGE (`src/app/page.tsx`)

```typescript
'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <CallToAction />
      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 2: INVESTMENT BANKING (`src/app/investment-banking/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, TrendingUp, Users, Target, Zap } from 'lucide-react';

export default function InvestmentBanking() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Banking</h1>
          <p className="text-xl text-gray-200 mb-8">Specialized Real Estate Fundraising & Advisory</p>
          <p className="text-lg text-gray-300 max-w-3xl">
            We help real estate developers, investors, and operators raise capital efficiently through debt syndication, equity formation, and mezzanine financing.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E3E50]">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">$800 Cr+</div>
              <p className="text-gray-600">Closed Real Estate Deals</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">$2,000 Cr+</div>
              <p className="text-gray-600">Active Pipeline</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">300+</div>
              <p className="text-gray-600">Institutional Investors</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">35+</div>
              <p className="text-gray-600">Active Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E3E50]">What We Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-[#f5f5f5] p-8 rounded-lg border-l-4 border-[#D4AF37]">
              <div className="flex items-start mb-4">
                <TrendingUp className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3E50] mb-3">Capital Raising</h3>
                  <p className="text-gray-700 mb-4">We connect real estate projects with institutional capital through:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Debt syndication and arrangement</li>
                    <li>Equity raise structuring</li>
                    <li>Mezzanine financing solutions</li>
                    <li>100+ financial models available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-8 rounded-lg border-l-4 border-[#D4AF37]">
              <div className="flex items-start mb-4">
                <Users className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3E50] mb-3">Investor Relations</h3>
                  <p className="text-gray-700 mb-4">Direct access to 300+ qualified institutional investors:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Family offices</li>
                    <li>Investment funds</li>
                    <li>HNI investors</li>
                    <li>50+ pitch decks created annually</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-8 rounded-lg border-l-4 border-[#D4AF37]">
              <div className="flex items-start mb-4">
                <Target className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3E50] mb-3">Deal Structuring</h3>
                  <p className="text-gray-700 mb-4">Complex deal architecture and optimization:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>SPV and corporate structuring</li>
                    <li>Tax optimization</li>
                    <li>Agreement negotiation</li>
                    <li>Compliance & documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-8 rounded-lg border-l-4 border-[#D4AF37]">
              <div className="flex items-start mb-4">
                <Zap className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3E50] mb-3">Speed & Execution</h3>
                  <p className="text-gray-700 mb-4">Fast-track your capital raise with:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>48-hour proposal turnaround</li>
                    <li>Direct investor introductions</li>
                    <li>End-to-end execution support</li>
                    <li>Proven playbooks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2E3E50] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Raise Capital?</h2>
          <p className="text-lg text-gray-200 mb-8">Let's discuss your capital needs and timeline</p>
          <a href="/contact" className="bg-[#D4AF37] text-[#2E3E50] px-8 py-3 rounded font-bold hover:bg-yellow-500 inline-flex items-center">
            Start Your Journey <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 3: KEDGE RESEARCH (`src/app/research/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, BarChart3, Briefcase, PieChart } from 'lucide-react';

export default function KedgeResearch() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kedge Research</h1>
          <p className="text-xl text-gray-200">Institutional-Grade Equity Research & Analysis</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E3E50]">Our Research Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <BookOpen className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Equity Research</h3>
              <p className="text-gray-600">Comprehensive company and sector analysis with investment recommendations</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <BarChart3 className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Industry Coverage</h3>
              <p className="text-gray-600">Deep-dive sector analysis covering real estate, infrastructure, and financials</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <PieChart className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Financial Modeling</h3>
              <p className="text-gray-600">Expert-built models for valuation, scenarios, and investor presentations</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <Briefcase className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">M&A Insights</h3>
              <p className="text-gray-600">Strategic insights for mergers, acquisitions, and investment decisions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 4: MOONSHOT (`src/app/moonshot/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Rocket, Users, TrendingUp, Star } from 'lucide-react';

export default function Moonshot() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Moonshot</h1>
          <p className="text-xl text-gray-200">Early-Stage Investment Platform</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E3E50]">Investment Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {['Evaluation', 'Pitch', 'Bridging', 'Commitment', 'Tracking'].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-[#D4AF37] text-[#2E3E50] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-[#2E3E50]">{step}</h3>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-[#2E3E50] mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Rocket className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-[#2E3E50] mb-2">Investor Pitches</h4>
                  <p className="text-gray-700">Direct access to curated investor meetings and funding opportunities</p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-[#2E3E50] mb-2">Founder Network</h4>
                  <p className="text-gray-700">Connect with other founders, advisors, and mentors</p>
                </div>
              </div>

              <div className="flex items-start">
                <TrendingUp className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-[#2E3E50] mb-2">Growth Resources</h4>
                  <p className="text-gray-700">Access to templates, playbooks, and expert guidance</p>
                </div>
              </div>

              <div className="flex items-start">
                <Star className="text-[#D4AF37] mr-4 mt-1" size={28} />
                <div>
                  <h4 className="font-bold text-[#2E3E50] mb-2">Elite Program</h4>
                  <p className="text-gray-700">Premium membership for high-growth startups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 5: NEXTEP (`src/app/nextep/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Compass, Users, FileText, Zap } from 'lucide-react';

export default function Nextep() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nextep</h1>
          <p className="text-xl text-gray-200">Business Advisory & Growth Services</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E3E50]">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border-l-4 border-[#D4AF37] rounded-lg hover:shadow-lg transition">
              <Compass className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Strategic Advisory</h3>
              <p className="text-gray-600">Business strategy, market entry, and growth planning</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#D4AF37] rounded-lg hover:shadow-lg transition">
              <FileText className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Compliance & Legal</h3>
              <p className="text-gray-600">Regulatory compliance, documentation, and legal structuring</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#D4AF37] rounded-lg hover:shadow-lg transition">
              <Users className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Talent Recruitment</h3>
              <p className="text-gray-600">Executive search and talent acquisition services</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-[#D4AF37] rounded-lg hover:shadow-lg transition">
              <Zap className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Network Access</h3>
              <p className="text-gray-600">Direct connections to investors, partners, and industry leaders</p>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#2E3E50] mb-6">Our 4-Phase Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#D4AF37] text-[#2E3E50] w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-[#2E3E50]">Phase 1: Basics</h4>
                  <p className="text-gray-600">Foundation setting and planning</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#D4AF37] text-[#2E3E50] w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-[#2E3E50]">Phase 2: Funding</h4>
                  <p className="text-gray-600">Capital raising and investor relations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#D4AF37] text-[#2E3E50] w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-[#2E3E50]">Phase 3: Transactions</h4>
                  <p className="text-gray-600">M&A and strategic partnerships</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#D4AF37] text-[#2E3E50] w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">4</div>
                <div>
                  <h4 className="font-bold text-[#2E3E50]">Phase 4: Scaling</h4>
                  <p className="text-gray-600">Growth optimization and expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 6: ABOUT (`src/app/about/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Lightbulb, Shield, Zap, Users, Handshake } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Shield, title: 'Integrity', desc: 'Complete honesty and ethical standards' },
    { icon: Lightbulb, title: 'Meticulous', desc: 'Excellence in every detail' },
    { icon: Heart, title: 'Perseverance', desc: 'Committed to long-term success' },
    { icon: Zap, title: 'Agility', desc: 'Quick adaptation to market changes' },
    { icon: Users, title: 'Communication', desc: 'Clear and transparent dialogue' },
    { icon: Handshake, title: 'Teamwork', desc: 'Collective success mindset' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RedeFin Capital</h1>
          <p className="text-xl text-gray-200">Boutique Investment Banking & Advisory</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#2E3E50]">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            RedeFin Capital is a boutique investment banking and advisory firm specializing in real estate fundraising, research, and business advisory. With over 75 years of cumulative team experience and a proven track record of closing $800M+ in real estate deals, we help entrepreneurs and investors achieve their financial goals.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to bridge the gap between ambitious entrepreneurs and institutional capital through transparent, meticulous advisory services.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E3E50]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition">
                  <Icon className="text-[#D4AF37] mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-[#2E3E50] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 7: TEAM (`src/app/team/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Arvind Kalyan',
      title: 'Founder & CEO',
      credentials: 'CFA, FRM | IIT Madras | IIM Lucknow',
      image: '👨‍💼'
    },
    {
      name: 'VLN Srinivas',
      title: 'Investment Banking Head',
      credentials: '39 years experience | IRS Officer',
      image: '👨‍💼'
    },
    {
      name: 'Pragnya Kotaru',
      title: 'Research Director',
      credentials: 'MBA ISB | Market Research Expert',
      image: '👩‍💼'
    },
    {
      name: 'Rahul Sharma',
      title: 'Advisory Lead',
      credentials: 'CA | IIM Indore',
      image: '👨‍💼'
    },
    {
      name: 'Priya Bansal',
      title: 'Business Development',
      credentials: 'MBA INSEAD | Sales Excellence',
      image: '👩‍💼'
    },
    {
      name: 'Arun Kumar',
      title: 'Financial Analyst',
      credentials: 'CFA Level 2 | NIT Graduate',
      image: '👨‍💼'
    },
    {
      name: 'Neha Gupta',
      title: 'Operations Manager',
      credentials: 'MBA Delhi University',
      image: '👩‍💼'
    },
    {
      name: 'Sanjay Reddy',
      title: 'Senior Analyst',
      credentials: 'BE Mechanical | 8 years experience',
      image: '👨‍💼'
    },
    {
      name: 'Anjali Verma',
      title: 'Client Relations',
      credentials: 'BBA | Client Success Specialist',
      image: '👩‍💼'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-200">75+ Years of Combined Experience</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] p-8 flex justify-center text-6xl">
                  {member.image}
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#2E3E50] mb-1">{member.name}</h3>
                  <p className="text-[#D4AF37] font-semibold mb-3">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.credentials}</p>
                  <button className="text-[#2E3E50] hover:text-[#D4AF37] transition">
                    <Linkedin size={20} className="mx-auto" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 8: CAREERS (`src/app/careers/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, TrendingUp, Users, Zap } from 'lucide-react';

export default function Careers() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at RedeFin</h1>
          <p className="text-xl text-gray-200">Join Our Growing Team</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2E3E50]">Why Join RedeFin?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start">
              <Heart className="text-[#D4AF37] mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-[#2E3E50] mb-2">Competitive Compensation</h3>
                <p className="text-gray-600">Market-leading salary and benefits package</p>
              </div>
            </div>

            <div className="flex items-start">
              <TrendingUp className="text-[#D4AF37] mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-[#2E3E50] mb-2">Career Growth</h3>
                <p className="text-gray-600">Clear path to leadership and expertise development</p>
              </div>
            </div>

            <div className="flex items-start">
              <Users className="text-[#D4AF37] mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-[#2E3E50] mb-2">Collaborative Culture</h3>
                <p className="text-gray-600">Work with talented professionals and mentors</p>
              </div>
            </div>

            <div className="flex items-start">
              <Zap className="text-[#D4AF37] mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-[#2E3E50] mb-2">Impact Work</h3>
                <p className="text-gray-600">Direct influence on significant capital raises and deals</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-12 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-[#2E3E50] mb-4">Current Openings</h3>
            <p className="text-gray-600 mb-6">We're looking for talented professionals in:</p>
            <ul className="text-gray-700 mb-8 space-y-2">
              <li>Investment Banking Analysts</li>
              <li>Research Associates</li>
              <li>Business Development Managers</li>
              <li>Financial Analysts</li>
            </ul>
            <a href="/contact" className="bg-[#D4AF37] text-[#2E3E50] px-8 py-3 rounded font-bold hover:bg-yellow-500 inline-block">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 9: RESOURCES (`src/app/resources/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Newspaper, FileText, Mail } from 'lucide-react';

export default function Resources() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-gray-200">Research, Insights & Market Intelligence</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <BookOpen className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Research Reports</h3>
              <p className="text-gray-600 mb-4">In-depth analysis of market trends and investment opportunities</p>
              <a href="#" className="text-[#D4AF37] font-semibold hover:text-[#2E3E50]">View Reports →</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <Newspaper className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Market Insights</h3>
              <p className="text-gray-600 mb-4">Latest news and commentary on industry developments</p>
              <a href="#" className="text-[#D4AF37] font-semibold hover:text-[#2E3E50]">Read Blog →</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <FileText className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Tools & Templates</h3>
              <p className="text-gray-600 mb-4">Useful resources for fundraising and deal-making</p>
              <a href="#" className="text-[#D4AF37] font-semibold hover:text-[#2E3E50]">Download →</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <Mail className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-[#2E3E50] mb-3">Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe to our weekly market and investment updates</p>
              <a href="#" className="text-[#D4AF37] font-semibold hover:text-[#2E3E50]">Subscribe →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## ✅ PAGE 10: CONTACT (`src/app/contact/page.tsx`)

```typescript
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'general',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', interest: 'general', message: '' });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-gradient-to-r from-[#2E3E50] to-[#3a4a5a] text-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in Touch with Our Team</p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Mail className="text-[#D4AF37] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#2E3E50] mb-2">Email</h3>
            <p className="text-gray-600">contact@redefincapital.com</p>
          </div>

          <div className="text-center">
            <Phone className="text-[#D4AF37] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#2E3E50] mb-2">Phone</h3>
            <p className="text-gray-600">+91-7380798555</p>
          </div>

          <div className="text-center">
            <MapPin className="text-[#D4AF37] mx-auto mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#2E3E50] mb-2">Locations</h3>
            <p className="text-gray-600">
              Hyderabad, India<br/>
              Mumbai, India
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-[#f5f5f5] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#2E3E50] mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#2E3E50] mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4AF37]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2E3E50] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4AF37]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2E3E50] mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4AF37]"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2E3E50] mb-2">Interest</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="general">General Inquiry</option>
                <option value="investment-banking">Investment Banking</option>
                <option value="research">Kedge Research</option>
                <option value="moonshot">Moonshot</option>
                <option value="nextep">Nextep Advisory</option>
                <option value="careers">Careers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2E3E50] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#D4AF37]"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-[#2E3E50] py-3 rounded font-bold hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

## 📋 SUMMARY

You now have **ALL 10 page.tsx files**:

✅ Home Page (`src/app/page.tsx`)
✅ Investment Banking (`src/app/investment-banking/page.tsx`)
✅ Kedge Research (`src/app/research/page.tsx`)
✅ Moonshot (`src/app/moonshot/page.tsx`)
✅ Nextep (`src/app/nextep/page.tsx`)
✅ About (`src/app/about/page.tsx`)
✅ Team (`src/app/team/page.tsx`)
✅ Careers (`src/app/careers/page.tsx`)
✅ Resources (`src/app/resources/page.tsx`)
✅ Contact (`src/app/contact/page.tsx`)

### **How to use:**

1. Create the folder structure above
2. Copy each file exactly as shown
3. Paste the code into each respective `page.tsx` file
4. Upload to GitHub
5. Deploy to Vercel!

**Done!** 🎉