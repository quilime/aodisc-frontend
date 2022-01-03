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

    console.log(data.imageInfo.width, data.imageInfo.height);
    const tall = data.imageInfo.height > data.imageInfo.width;
    const imageWidth = data.imageInfo.width;
    const imageHeight = data.imageInfo.height;

    const imageStyle = tall ? { maxWidth: Math.min(imageWidth/1.4, 600) + "px" } : { };

    return (
    <Base>

        <style jsx>{`
            .artifactImage {
                margin: 1em 0;
                background:#030;
            }
            .artifactImage img {
                max-height:100px;
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

        <div className="artifactImage" style={imageStyle}>
            <Image
                src={data.image}
                alt={data.description}
                width={imageWidth}
                height={imageHeight}
                layout="responsive"
                objectPosition="left"
                objectFit="fill"
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