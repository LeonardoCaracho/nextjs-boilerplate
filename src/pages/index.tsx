import Head from 'next/head'

export default function Home({ title = 'React Avançado' }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Hello there!</h1>
      </main>
    </div>
  )
}
