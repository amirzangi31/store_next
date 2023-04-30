import HomePage from "@/components/templates/HomePage";
import { loadArticles } from "@/lib/loadData";

export default function Home({ articles }) {


  return (
    <HomePage articles={articles} />
  )
}
export async function getStaticProps() {
  const articles = await loadArticles()
  const articlesSlice = articles.slice(0, 5)

  return {
    props: { articles: articlesSlice }
  }

}