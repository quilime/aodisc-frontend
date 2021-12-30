import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Base from '../../components/layouts/base'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
}

export default function Artifact() {

    const { query } = useRouter();
    const { data, error } = useSWR(
      () => query.id && `/api/artifact/${query.id}`,
      fetcher
    )

    console.log(data);

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
    <Base>

        <style jsx>{`
            .breadcrumbs {
                opacity:0.65;
            }
            .artifactImage {
                width:700px;
                height:700px;
                margin: 2em 0;
                max-width:600px;
                max-height:600px;
                background:rgb(232,225,200);
            }
            .metadata {
                line-height:1.2em;
            }
        `}</style>

        <Head>
          <title>Artifact {query.id}</title>
        </Head>

        <h1>
            <span className="breadcrumbs">
                <Link href="/"><a className="ghosted">home</a></Link>
                {' '}/{' '}
                <Link href="/artifacts"><a className="ghosted">Artifacts</a></Link>
                {' '}/{' '}
            </span>
            {data.name}
        </h1>

        <div className="artifactImage"></div>

        <section className="metadata">
            {data.name}<br />
            artifactId: {query.id}<br />
            date: {data.date}<br />
            description:<br /><br />
            <em>{data.description}</em>
        </section>

    </Base>
    )
  }