import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import Base from '../../components/layouts/base'
import Breadcrumbs from '../../components/breadcrumbs';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { imageConfigDefault } from 'next/dist/server/image-config';

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
    const { data, error } = useSWR(() => query.id && `/api/artifact/${query.id}`, fetcher);

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
    <Base>

        <style jsx>{`
            .artifactImage {
                margin: 1em 0;
                max-width:600px;
                max-height:600px;

            }
            .artifactImage img {
                max-height:700px;
                max-width:700px;
                text-align:left;

            }
            .metadata {
                line-height:1.2em;
            }
        `}</style>

        <Head>
          <title>Artifact {query.id}</title>
        </Head>

        <h1>
            <Breadcrumbs type="artifact" item={data.name} />
        </h1>

        <div className="artifactImage">
            <Image
                src={data.image}
                alt={data.description}
                width={660}
                height={660}
                layout="responsive"
                objectPosition="left"
                objectFit="scale-down"
            />
        </div>

        <section className="metadata">
            {data.name}<br />
            artifactId: {query.id}<br />
            date: {data.date}<br />
            <p>
                <em>{data.description}</em>
            </p>
        </section>

    </Base>
    )
  }