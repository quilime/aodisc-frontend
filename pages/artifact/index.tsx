import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Base from '../../components/layouts/base'
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
            list.push(<li key={i} ><Link href={`/artifact/${token.tokenId}`}>{token.name}</Link></li>);
        }
        return list;
    }

    return (
    <Base>

        <Head>
          <title>Artifacts</title>
        </Head>

        <h1>Artifacts</h1>

        <ul>
        {artifactLinks(data)}
        </ul>

    </Base>
    )
  }