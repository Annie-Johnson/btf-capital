import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import RightArrow from '../public/icons/rightArrow'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BTF Capital</title>
        <meta name="description" content="BTF Business Capital Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.title}>Funding to Fuel Your Business</span>
            <span className={styles.description}>Compare multiple loan options at once and choose the best fit for your needs with confidence.</span>
            <div style={{ width: '100%' }}>
              <span className={styles.cta}>
                <span className={styles.ctaText}>Get Started</span>
                <RightArrow />
              </span>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/BusinessOwner.png" alt="BTF Capital" width={1200} height={1200} />
          </div>
        </div>
        <div className={styles.about}>
          <div style={{ width: '50%' }}>
          <div className={styles.aboutImage}>
            <Image src="/MoneyApp.png" alt="BTF Capital" width={375} height={294} />
          </div>
          </div>
          <div className={styles.aboutText}>
            <span className={styles.title}>The Process</span>
            <span className={styles.description}>Answer some basic questions in less than 3 minutes with no impact to your credit score and compare multiple offers. YOU are in the driver’s seat!</span>
            <div style={{ width: '100%' }}>
              <span className={styles.cta}>
              <span className={styles.ctaText}>View Your Options</span>
                <RightArrow />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsText}>
            <span className={styles.title}>What We Do</span>
            <span className={styles.description}>Using proprietary technology, we quickly review your business information and match you with the right lending partners. We are connected to a vast network of lending professionals we handpicked to help fund your capital needs. With loan standards frequently changing, we stay on top of it all for you to deliver the right lenders at the right time.</span>
          </div>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Working Capital <RightArrow /></h2>
              <p>The original expansion capital.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Term Loans <RightArrow /></h2>
              <p>Long term loan options for strategic growth plans.</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Line of Credit <RightArrow /></h2>
              <p>Revolving options for maximum flexibility.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Merchant Cash Advance <RightArrow /></h2>
              <p>
                Funds for your business, when you need them.
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
