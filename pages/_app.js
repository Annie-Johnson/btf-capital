import * as React from 'react'
import RightArrow from '../public/icons/rightArrow'
import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SiteNavigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

function Footer() {
  return (
    <div className="footer">
      <Image src="/BTFCapital.png" alt="BTF Capital" width={300} height={89} />
      <div className="footerNavigation">
        <Link href="/about">About Us</Link>
        <Link href="/capital">Capital</Link>
        <Link href="/partner">Partners</Link>
        <Link href="/faq">FAQs</Link>
        <Link href="/terms">Legal</Link>
      </div>
      <div className="baseline">
        <span className="copyright">
          © 2022 BTFCapital.com. All rights reserved.{' '}
        </span>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <span className="logo">
            <Image src="/BTFLogo.png" alt="BTF Logo" width={60} height={50} />
          </span>
        </Link>
      </div>
    </div>
  )
}

function SiteNavigation() {
  return (
    <header className="header">
      <nav className="navigation">
        <div>
          <Link aria-label="Business Loans home page" className="navLogo" href="/" passHref>
            <Image src="/BTFCapital.png" alt="BTF Logo" width={248} height={71} />
          </Link>
        </div>
        <div style={{ display: 'block' }}>
          <div className="navLinks">
            <Link href="/about">About Us</Link>
            <Link href="/capital">Capital</Link>
            <Link href="/partner">Partners</Link>
            <Link href="/faq">FAQs</Link>
            <Link rel="noopener" target="_self" href="/apply" passHref>
              <span className="cta">
                <span className="ctaText">Apply Now</span>
                <RightArrow />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}