import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/index.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stoork - Brand strategy design consultancy for brands that care.</title>
       
        <meta name="keywords" content="stoork, stork, stārķis, media, design, dizains, graphic, grafiskais, branding, studio"/>
        <meta name="description" content="Some brands have a serious mission to help the world. We help these brands connect with their audience and spread the message through organic social media content marketing."/>
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <meta charset="utf-8"/>
        <meta name="author" content="Bryson Mercury" />
        <meta name="copyright" content="Bryson Mercury" />

        <meta name="og:title" content="Stoork - Brand strategy design consultancy for brands that care."/>
        <meta name="og:url" content="https://www.stoork.co"/>
        <meta name="og:site_name" content="Stoork - Brand strategy design consultancy for brands that care."/>
        <meta name="og:description" content="Some brands have a serious mission to help the world. We help these brands connect with their audience and spread the message through organic social media content marketing."/>
      </Head>

      <div className={css.main} >
        <h1>Stoork</h1>
        <div className={css.alert}>
          Our team is working hard to get this page ready. <br/>
          Meanwhile you can find us on socials :)
          <ul className={css.socials}>
            <li><a href="https://www.instagram.com/stoorkco" rel="noreferrer" target="_blank" title="Instagram">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/stoork/" rel="noreferrer" target="_blank" title="LinkedIn">LinkedIn</a></li>
            <li><a href="https://www.behance.net/stoork" rel="noreferrer" target="_blank" title="Instagram">Behance</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}