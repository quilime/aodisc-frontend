import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Base from '../components/layouts/base'
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

export default function Artifacts() {

    // const { query } = useRouter();
    // const { data, error } = useSWR(
    //   () => query.id && `/api/artifact/${query.id}`,
    //   fetcher
    // )

    // console.log(data);

    // if (error) return <div>{error.message}</div>
    // if (!data) return <div>Loading...</div>

    return (
    <Base>

        <Head>
          <title>Artifacts</title>
        </Head>

        <h1>Artifacts</h1>

        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
    </Base>
    )
  }