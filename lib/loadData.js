
const loadArticles = async () => {
    // const res = await axios(`${process.env.BASE_URL}/api/article/getAll`)
    const res = await fetch(`${process.env.BASE_URL}/api/article/getAll`)
    const data = await res.json()

    return data.data
}
const loadArticle = async (id) => {
    // const res = await axios(`${process.env.BASE_URL}/api/article/${id}`)
    const res = await fetch(`${process.env.BASE_URL}/api/article/${id}`)
    const data = await res.json()

    return data.data
}




export { loadArticles, loadArticle }