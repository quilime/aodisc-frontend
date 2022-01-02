import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Base from '../../components/layouts/base'
import Breadcrumbs from '../../components/breadcrumbs'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { listenerCount } from 'process';

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
}

export default function Artifacts() {

    const { query } = useRouter();
    const { data, error } = useSWR(() => "/api/artifact", fetcher)

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    const artifactLinks = (data:any) => {
        let list = [];
        for (var i = 0; i < data.length; i++) {
            const token = data[i];
            list.push(
                <li key={i} className="artifact_thumb">
                    <a href={`/artifact/${token.tokenId}`}>
                        <img src={token.image} />
                        {token.name}
                    </a>
                </li>
            );
        }
        return list;
    }

    return (
    <Base>

        <Head>
          <title>Artifacts</title>
        </Head>

        <style global>{`
            .thumbs {
                display: flex;
                flex-wrap: wrap;
                padding:0;
                margin:0;
            }
            .artifact_thumb {
                flex: 1 0 25%;
                flex-grow: 0;
                list-style-type:none;
                margin:1em;
                padding:0;
            }
            .thumbs .artifact_thumb img {
                width:400px;
            }
        `}</style>

        <h1><Breadcrumbs type="artifact" item="" /></h1>

        <ul className="thumbs">
            {artifactLinks(data)}
        </ul>

    </Base>
    )
  }