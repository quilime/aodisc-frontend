import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Base, { siteTitle } from '../components/layouts/base'
import Link from 'next/link'

export default function Home() {
  return (
    <Base home>
        <p>
            <em>Archive of Discoveries</em> (AoD) is an instituancy that collects, archives,
            and catalogs artifacts relevant to humankind’s exploration of the uncharted territories of exospace.
        </p>
        <p>
            As humans migrate to new celestial regions, it is imperative that we consider how we may
            influence new environments and how they may influence us. The AoD's goal is to preserve
            and transmit extraordinary items from its collection in order to contribute a
            greater awareness of our cultural evolution as we expand deeper into the vast universe.
        </p>

        <Link href="/artifacts/">All Artifacts</Link>
        <br />
        <Link href="/artifact/1">Artifact 1</Link>
        <br />
        <Link href="/artifact/2">Artifact 2</Link>


    </Base>
  )
}
