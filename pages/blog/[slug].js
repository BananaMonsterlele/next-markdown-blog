import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Head from 'next/head'

export default function PostPage({frontmatter: {title, date, cover_image}, content}) {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <Link href="/">
            <button className='btn'>Go Back</button>
        </Link>
        <div className='px-6 py-4'>
            <h1 className='mx-0 my-2.5 text-2xl font-semibold'>{title}</h1>

            <div className='mb-5 px-2.5 py-1 pl-0'>Posted on {date}</div>

            <img src={cover_image} alt={title} />

            <div className='post-body'>
             <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </div>
    </>
  )
}

export async function getStaticPaths(){
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}){
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + ".md"), "utf-8")

    const {data: frontmatter, content} = matter(markdownWithMeta)
    
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}