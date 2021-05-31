import { useRouter } from 'next/router';
import Layout from '../../../containers/layout/layout';
import React from 'react';
import SideBar from '../../../containers/sidebar/sidebar';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Layout>
        <div>Post Page</div>
        <SideBar />
      </Layout>
    </>
  )
}

export default Post