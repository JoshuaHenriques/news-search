import { useState } from "react";
import { Articles } from "./components/Articles/Articles";
import { Footer } from "./components/Footer/Footer";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Query } from "./types/Query";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header/Header";
import { render } from "@testing-library/react";

export const App = () => {

  const [articles, setArticles] = useState([])
  const [queryy, setQuery] = useState<Query>( { keywords: '', fromDate: '', toDate: '', sort: '', page: 1 })

  const setArticlesFunc = (articles: any) => {
    setArticles(articles)
  }

  const setQueryFunc = (queryy: any) => {
    setQuery(queryy)
  }

  const onSearch = async (query: Query) => {
    setQuery(query)
    const res = await fetch(`http://127.0.0.1:5000/search/?keywords=${query.keywords}&from=${query.fromDate}&to=${query.toDate}&sort-by=${query.sort}&page=${query.page}`)
    const data = await res.json()
    setArticlesFunc(data.articles)
  }

  const onPageChange = async (updQuery: any) => {
    console.log(`onPageChange() ${queryy.page}`)
    const res = await fetch(`http://127.0.0.1:5000/search/?keywords=${updQuery.keywords}&from=${updQuery.fromDate}&to=${updQuery.toDate}&sort-by=${updQuery.sort}&page=${updQuery.page}`)
    const data = await res.json()
    setArticlesFunc(data.articles)
  }

  const nextPage = () => {
    const newPage = queryy.page + 1
    console.log(`nextPage() ${newPage}`)
    const updQuery = { ...queryy, page: newPage }
    console.log(updQuery.page)
    setQueryFunc(updQuery)
    console.log(queryy.page)
    onPageChange(updQuery)
  }

  const prevPage = () => {
    if(queryy.page === 1) {
      alert("No previous page")
      return
    }
    const newPage = queryy.page - 1
    console.log(newPage)
    const updQuery = {...queryy, page: newPage}
    setQuery({ ...queryy, page: newPage})
    onPageChange(updQuery)
  }

  return (
    <div>
      <Header />
      <div className="container">
        <SearchForm onSearch={ onSearch }/>
        <h3>Keywords: { queryy.keywords } <br></br> FromDate: { queryy.fromDate } <br></br> ToDate: { queryy.toDate } <br></br> sort: { queryy.sort } <br></br> page: { queryy.page }</h3>
        <Pagination query={ queryy } nextPage={ nextPage } prevPage={ prevPage }/>
        <Articles articles={ articles } />
        <Pagination query={ queryy } nextPage={ nextPage } prevPage={ prevPage }/>
      </div>
      <Footer />
    </div>
  );
};

export default App;