import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import Base from '../../components/layouts/base'
import Breadcrumbs from '../../components/breadcrumbs'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { listenerCount } from 'process';


export default function Collections() {
    return (
    <Base>

        <Head>
          <title>Collections</title>
        </Head>

        <h1><Breadcrumbs type="collection" item="" /></h1>

        <p>
            wip
        </p>

    </Base>
    )
  }