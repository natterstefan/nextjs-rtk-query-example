/* eslint-disable no-nested-ternary */
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
  const { data, isFetching, refetch } = useGetRandomJokeQuery(undefined, {
    pollingInterval: 10000,
  })

  return (
    <>
      <Head>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <title>🤡 Random Programming Jokes 🤡</title>
      </Head>
      <Page>
        <Page.Content>
          <div className="flex flex-col items-center justify-center h-screen px-6 space-y-12 font-medium">
            <div>
              <h1 className="text-2xl text-center">
                <span aria-label="Clown" role="img">
                  🤡
                </span>{' '}
                Random Programming Jokes{' '}
              </h1>
            </div>
            <div className="text-center md:max-w-3xl">
              {isFetching || !data ? (
                '...'
              ) : data.type === 'twopart' ? (
                <div className="space-y-4">
                  <p>{data.setup}</p>
                  <p>{data.delivery}</p>
                </div>
              ) : (
                <div>
                  <p>{data.joke}</p>
                </div>
              )}
            </div>
            <div>
              <button
                className="p-3 border-4 border-indigo-500 rounded"
                onClick={refetch}
                type="button"
              >
                Refetch Joke
              </button>
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
