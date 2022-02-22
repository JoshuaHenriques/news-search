import { useState } from "react";
import { Articles } from "./components/Articles/Articles";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Query } from "./types/Query";

export const App = () => {

  const [articles, setArticles] = useState([])
  const [queryy, setQuery] = useState<Query>( { keywords: '', fromDate: '', toDate: '', sort: '', page: 1 })

  const onSearch = async (query: Query) => {
    setQuery(query)
    const res = await fetch(`http://127.0.0.1:5000/search/?keywords=${query.keywords}&from=${query.fromDate}&to=${query.toDate}&sort-by=${query.sort}&page=${query.page}`)
    const data = await res.json()
    setArticles(data.articles)
  }

  const onPageChange = async () => {
    const res = await fetch(`http://127.0.0.1:5000/search/?keywords=${queryy.keywords}&from=${queryy.fromDate}&to=${queryy.toDate}&sort-by=${queryy.sort}&page=${queryy.page}`)
    const data = await res.json()
    setArticles(data.articles)
  }

  const nextPage = () => {
    setQuery({ ...queryy, page: queryy.page + 1})
    onPageChange()
  }

  const prevPage = () => {
    if(queryy.page === 1) {
      alert("No previous page")
      return
    }
    setQuery({ ...queryy, page: queryy.page - 1})
    onPageChange()
  }

  return (
    <div>
      <h1>Search Articles</h1>
      <SearchForm onSearch={ onSearch }/>
      <h3>Keywords: { queryy.keywords } <br></br> FromDate: { queryy.fromDate } <br></br> ToDate: { queryy.toDate } <br></br> sort: { queryy.sort } <br></br> page: { queryy.page }</h3>
      <Pagination query={ queryy } nextPage={ nextPage } prevPage={ prevPage }/>
      <Articles articles={ articles } />
      <h3>Keywords: { queryy.keywords } <br></br> FromDate: { queryy.fromDate } <br></br> ToDate: { queryy.toDate } <br></br> sort: { queryy.sort } <br></br> page: { queryy.page }</h3>
      <Pagination query={ queryy } nextPage={ nextPage } prevPage={ prevPage }/>
    </div>
  );
};

export default App;