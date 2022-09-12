import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post.js'

export default function Home({ posts }) {
  const sortedPosts = posts.sort(function (a, b){
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  })

  return (
    <>
      <Head>
        <title>Just a blog</title>
      </Head>
      <h1 className='main-title text-center text-3xl'>Makin dummy things and havin fun</h1>
      <div className='flex flex-col sm:grid-cols-2 grid-cols-1 gap-8 mt-8'>
        {sortedPosts.map((post, index) => {
          return <Post key={index} post={post} />
        })}
      </div>
    </>
  )
}

export async function getStaticProps (){
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace(".md", "")

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts
    }
  }
}
