import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

// Components
import PostsList from '../components/Index/PostsList'
import Header from '../components/Index/Header'

export default function Index({ posts }) {
  return (
    <div>
      <Header />
      <PostsList posts={posts} />
    </div>
  )
}

export function getStaticProps() {
  const posts = postFilePaths().map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}