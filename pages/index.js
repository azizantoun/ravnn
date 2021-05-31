import Head from 'next/head'
import Layout from '../containers/layout/layout';
import Explore from '../containers/explore/explore';



function HomePage() {
  return (
    <>
      <Head>
        <title>Ravnn</title>
        <script data-ad-client="ca-pub-5707326435810594" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Layout>
        <Explore />
      </Layout>


    </>
  )
}

export default HomePage