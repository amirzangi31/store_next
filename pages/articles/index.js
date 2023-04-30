import ArticlePage from '@/components/templates/article/ArticlePage';
import { loadArticles } from '@/lib/loadData';
import React from 'react'

function Articles({ articles }) {
  return (
    <ArticlePage articles={articles} />
  )
}

export default Articles;




export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/article/getAll`)
  const articles = await res.json()

  return {
    props: { articles: articles.data },
    revalidate: 2 * 60
  }
}