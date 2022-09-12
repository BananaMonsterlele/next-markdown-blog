import Link from "next/link"

export default function Post({post}) {
  return (
    <div className="p-4 pb-0 rounded-xl last-of-type:mb-16">
        <div className="post-date">{post.frontmatter.date}</div>

        <Link href={`/blog/${post.slug}`}>
            <a className="text-xl font-semibold hover:cursor-pointer">{post.frontmatter.title}</a>
        </Link>
    </div>
  )
}
