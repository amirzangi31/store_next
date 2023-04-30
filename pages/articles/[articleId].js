import DetailArticlePage from '@/components/templates/article/DetailArticlePage'
import { loadArticle, loadArticles } from '@/lib/loadData';
import React from 'react'

function ArticleDetail({ article }) {
  console.log(article)
  return (
    <DetailArticlePage {...article} />

  )
}

export default ArticleDetail;



export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/api/article/getAll`)
  const articles = await res.json()
  const articleSlice = articles.data.slice(0, 3)
  const paths = articleSlice.map(item => ({ params: { articleId: item._id } }))
  return {
    paths,
    fallback: "blocking"
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${process.env.BASE_URL}/api/article/${params.articleId}`)
  const data = await res.json()
  const article = data.data
  if (!article.title) {
    return {
      notFound: true
    }
  }


  return {
    props: { article },
    revalidate: 24 * 60 * 60
  }
}