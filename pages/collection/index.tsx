import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Base from '../../components/layouts/base'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { listenerCount } from 'process';


export default function Collections() {
    return (
    <Base>

        <Head>
          <title>Collections</title>
        </Head>

        <h1>Collections</h1>

        <p>
            tbd
        </p>

    </Base>
    )
  }