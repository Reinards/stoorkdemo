import Head from 'next/head'
import Image from 'next/image'
import css from '../styles/index.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stoork - Brenda stratēģijas dizains kompānijām, kam rūpa pasaule.</title>
       
        <meta name="keywords" content="stoork, stork, stārķis, media, design, dizains, graphic, grafiskais, branding, studio"/>
        <meta name="description" content="Dažas kompānijas ir devušās nozīmīgā misijā palīdzēt pasaulei. Mēs palīdzam šīm kompānijām pastāstīt to stāstu ar dizainu un organisku sociālo tīklu mārketingu."/>
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <meta charset="utf-8"/>
        <meta name="author" content="Bryson Mercury" />
        <meta name="copyright" content="Bryson Mercury" />

        <meta name="og:title" content="Stoork - Brenda stratēģijas dizains kompānijām, kam rūpa pasaule."/>
        <meta name="og:url" content="https://www.stoork.co"/>
        <meta name="og:site_name" content="Stoork - Brenda stratēģijas dizains kompānijām, kam rūpa pasaule."/>
        <meta name="og:description" content="Dažas kompānijas ir devušās nozīmīgā misijā palīdzēt pasaulei. Mēs palīdzam šīm kompānijām pastāstīt to stāstu ar dizainu un organisku sociālo tīklu mārketingu."/>
      </Head>

      <div className={css.main} >
        <h1>Stoork</h1>
        <div className={css.alert}>
            Mūsu komanda cītīgi strādā, lai sagatavotu lapu. <br/>
          Tikmēr vari mūs atrast soc. tīklos :)
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