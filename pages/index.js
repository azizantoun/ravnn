import Head from 'next/head'
import Layout from '../containers/layout/layout';
import Explore from '../containers/explore/explore';



function HomePage() {
  return (
    <>
      <Head>
        <title>Ravnn</title>
      </Head>
      <Layout>

          <Explore/>

      </Layout>

    
    </>
  )
}

export default HomePage