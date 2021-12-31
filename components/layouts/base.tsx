import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AodLogo from '../AodLogo';

export const siteTitle = 'Archive of Discoveries'

export default function Layout(props) {
  return (
    <div className="root">

        <style jsx>{`

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
            margin-top:1em;
        }
        .header .logoContainer {
            transform: scale(0.4, 0.4);
            position:absolute;
            top:-5em;
            left:-5em;
        }
        .header h1 {
            margin:0;
            font-size:1.4em;
        }
        .header .menu {
            padding-top:0.75em;
            padding-left:8.5em;
        }
        .header ul {
            margin:0;
            padding:0;
            margin-top:0.5em;
            line-height:1.3em;
        }
        .header .menu li {
            list-style-type:none;
            margin:0;
            padding:0;
        }
        main {
            margin: 3.5rem auto;
            min-width:240px;
        }
            main.home {
                max-width: 36rem;
                padding: 0 1rem;
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
                <div>
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
                <div className="menu">
                    <h1>
                        <Link href="/">
                            <a className="ghosted">
                                Archive of Discoveries
                            </a>
                        </Link>
                    </h1>
                    <ul>
                        <li><a href="/collection" className="ghosted">Collections</a></li>
                        <li><a href="/artifact" className="ghosted">Artifacts</a></li>
                        <li><a href="/about" className="ghosted">About</a></li>
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