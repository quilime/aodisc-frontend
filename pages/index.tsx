import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Base, { siteTitle } from '../components/layouts/base'
import Link from 'next/link'

export default function Home() {
  return (
    <Base>

        <h2>Archive of Discoveres</h2>

        <p>
        <em>Archive of Discoveries</em> (AoD) is an instituancy that collects, archives,
        and catalogs artifacts relevant to humankind&rsquo;s exploration of the uncharted territories of exospace.
        </p>

        <Link href="/artifact">View All Artifacts</Link>

    </Base>
  )
}
