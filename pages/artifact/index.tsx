import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, forwardRef } from 'react';
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

    return (
    <Base>

        <Head>
          <title>Artifacts</title>
        </Head>

        <style jsx>{`
            .thumbs {
                display: flex;
                flex-wrap: wrap;
                padding:0;
                margin:0;
            }
            .thumbs li {
                list-style-type:none;
                width:200px;
                height:240px;
                margin:0 1em 2em 0;
            }
                .thumbs li:hover {
                }
                .thumbs li .thumb {
                    width:200px;
                    height:200px;
                    background:#ddd;
                    cursor:pointer;
                }
                .thumbs li a:link {
                    text-decoration: none;
                }
        `}</style>

        <h1><Breadcrumbs type="artifact" item="" /></h1>

        <ul className="thumbs">
            {data.map((artifact, k) => {
                return (
                    <li key={k}>
                        <div className="thumb">
                            <Link href={`/artifact/${artifact.id}`} passHref>
                                <Image
                                    alt={artifact.description}
                                    objectFit="cover"
                                    src={artifact.image}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        </div>
                        <Link href={`/artifact/${artifact.id}`} passHref>
                            <a>{artifact.name}</a>
                        </Link>
                    </li>
                );
            })}
            {/* {artifactLinks(data)} */}
        </ul>
    </Base>
    )
}