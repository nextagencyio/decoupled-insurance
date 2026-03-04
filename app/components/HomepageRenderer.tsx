'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Shield, Umbrella, Heart, Home, Car, FileText, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface HomepageRendererProps { homepageContent: DrupalHomepage | null | undefined }

const commitmentItems = [
  { icon: Shield, title: 'Comprehensive Coverage', description: 'Full-spectrum insurance products tailored to protect every aspect of your life and business.' },
  { icon: Umbrella, title: 'Risk Management', description: 'Expert risk assessment and mitigation strategies to keep you protected in any situation.' },
  { icon: Heart, title: 'Health & Life', description: 'Affordable health and life insurance plans designed to give your family peace of mind.' },
  { icon: Home, title: 'Home Protection', description: 'Complete homeowner coverage from natural disasters to liability, with competitive rates.' },
  { icon: Car, title: 'Auto Insurance', description: 'Flexible auto coverage options with bundling discounts and 24/7 roadside assistance.' },
  { icon: FileText, title: 'Claims Support', description: 'Streamlined claims processing with dedicated adjusters ensuring fast, fair settlements.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&fit=crop', alt: 'Financial consultation' },
  { src: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80&fit=crop', alt: 'Family protection' },
  { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&fit=crop', alt: 'Home insurance' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop', alt: 'Business coverage' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Why TrustShield</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We combine industry expertise with personalized service to deliver insurance solutions that truly protect what matters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentItems.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-primary-700" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-primary-950 mb-4 font-display">Protecting Every Moment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From family milestones to business ventures, TrustShield is there when it matters most.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20"><Shield className="w-5 h-5 text-accent-400" /></div>
                <span className="text-lg font-bold text-white font-display">TrustShield</span>
              </div>
              <p className="text-primary-300 text-sm mb-4 leading-relaxed">Trusted insurance coverage protecting families and businesses since 1985.</p>
              <div className="space-y-2 text-sm text-primary-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /><span>800 Financial Plaza<br />Hartford, CT 06103</span></div>
                <div className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /><span>(555) 456-7890</span></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Products</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Auto Insurance</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Home Insurance</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Life Insurance</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Business Insurance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/resources" className="hover:text-white transition-colors">All Resources</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Claims Center</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Insurance Glossary</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">News</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-2 text-sm text-primary-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">File a Claim</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Find an Agent</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div><h4 className="text-white font-bold mb-1">Stay Protected</h4><p className="text-primary-300 text-sm">Get insurance tips, coverage updates, and safety resources delivered to your inbox.</p></div>
              <NewsletterForm />
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-400">
            <p>&copy; {new Date().getFullYear()} TrustShield Insurance. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/about" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/about" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-primary-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64" />
      <button type="submit" className="px-6 py-2.5 bg-primary-600 text-white rounded-r-lg hover:bg-primary-500 transition-colors font-bold text-sm whitespace-nowrap">Subscribe</button>
    </form>
  )
}
