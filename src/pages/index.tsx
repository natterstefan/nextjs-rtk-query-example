import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Page } from '@/components/page'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageType } from '@/types/next'

import { useGetRandomJokeQuery } from '../services/jokes'

/**
 * What do you call a group of 8 Hobbits?
 * A Hobbyte.
 */
const IndexPage: NextPageType = () => {
  const { data } = useGetRandomJokeQuery(undefined, { pollingInterval: 10000 })

  if (!data) {
    return null
  }

  return (
    <>
      <Head>
        <title>Random Joke</title>
      </Head>
      <Page>
        <Page.Content>
          <div className="flex flex-col items-center justify-center h-screen space-y-12 font-medium">
            <h1 className="text-2xl">Random Joke</h1>
            <div className="text-center">
              {data.type === 'twopart' ? (
                <div className="space-y-12">
                  <p>{data.setup}</p>
                  <p>{data.delivery}</p>
                </div>
              ) : (
                <div>
                  <p>{data.joke}</p>
                </div>
              )}
            </div>
          </div>
        </Page.Content>
      </Page>
    </>
  )
}

IndexPage.layout = AppLayout

export const getStaticProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale, ['common']))),
  },
})

export default IndexPage
