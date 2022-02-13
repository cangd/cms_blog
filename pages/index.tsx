import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'

type Author = {
  name: string,
  photo?: string,
  bio?: string,
}

type Category = {
  name: string,
  slug: string[],
}

type Post = {
  title: string,
  excerpt: string,
  slug?: string,
  content? : string,
  featuredImage?: string,
  featuredPost?: boolean,
  author?: Author,
  categories?: Category[],
}

const posts: Post[] = [
  { title: 'React Testing', excerpt: 'Foo bar' },
  { title: 'React Testing with Tailwind', excerpt: 'So cool!' },
];


export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => (
          <div>
            <PostCard post={post} key={post.title} />
          </div>
        ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}
