import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import AodLogo from '../AodLogo';

export const siteTitle = 'Archive of Discoveries'

export default function Layout(props) {
  return (
    <div className="root">

        <style jsx>{`
        main {
            padding: 0 1.25rem;
            margin: 3rem auto 6rem;
            padding-bottom:1em;
        }
        .home {
            max-width: 36rem;
            padding: 0 1rem;
            margin: 3rem auto 6rem;
        }
        .headerHome {
            margin-top:3em;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .headerHome a {
            cursor: default;
        }
        .header {
            top:0;
            left:0;
            width:100%;
            height:160px;
        }
        .header .logoContainer {
            transform: scale(0.4, 0.4);
            position:absolute;
            top:-4.5em;
            left:-4em;
        }
        .header h1 {
            position:absolute;
            top:0;
            left:6.5em;
            font-size:1.4em;
        }
        .header .menu {
            position: absolute;
            right:1em;
            top:1em;
            text-align:right;
        }
        .header .menu ul {
            margin:0;
            padding:0;
            line-height:1.3em;
        }
        .header .menu li {
            list-style-type:none;
            margin:0;
            padding:0;
        }
        `}
        </style>

        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.svg" />
            <meta name="description" content="Archive of Discoveries" />
            <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        {props.home ? (
            <header className="headerHome">
                <div className="logoContainer">
                    <AodLogo />
                </div>
                <h1>Archive of Discoveries</h1>
            </header>
        ) : (
            <header className="header">
                <div className="logoContainer">
                    <Link href="/">
                        <a><AodLogo /></a>
                    </Link>
                </div>
                <h1>
                    <Link href="/">
                        <a className="ghosted">
                            Archive of Discoveries
                        </a>
                    </Link>
                </h1>
                <div className="menu">
                    <ul>
                        <li><a href="" className="ghosted">Link</a></li>
                        <li><a href="" className="ghosted">Main</a></li>
                        <li><a href="" className="ghosted">Collections</a></li>
                        <li><a href="" className="ghosted">About</a></li>
                    </ul>
                </div>
            </header>
        )}

        <main className={props.home && "home"}>
            {props.children}
        </main>

    </div>
  )
}