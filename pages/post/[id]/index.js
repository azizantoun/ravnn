import { useRouter } from 'next/router';
import Layout from '../../../containers/layout/layout';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Layout>

Post Page

</Layout>
    </>
  )
}

export default Post