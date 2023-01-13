import Layout from "../components/layout"
import prisma from '../lib/prisma'

export default function IndexPage() {
  return (
    <Layout>
      <h1>Example</h1>
      <p>
        This is an example
      </p>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};