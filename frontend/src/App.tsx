import { useState } from "react";
import { Articles } from "./components/Articles/Articles";
import { Footer } from "./components/Footer/Footer";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Query } from "./types/Query";
import { Header } from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [queryy, setQuery] = useState<Query>({
    keywords: "",
    fromDate: "",
    toDate: "",
    sort: "",
    page: 1,
  });

  const onSearch = async (query: Query) => {
    setQuery(query);
    // console.log(process.env.REACT_APP_FLASK_IP)
    // const res = await fetch(`http://127.0.0.1:5000/search/?keywords=${query.keywords}&from=${query.fromDate}&to=${query.toDate}&sort-by=${query.sort}&page=${query.page}`)
    const res = await fetch(
      `http://${process.env.REACT_APP_FLASK_IP}:8000/search/?keywords=${query.keywords}&from=${query.fromDate}&to=${query.toDate}&sort-by=${query.sort}&page=${query.page}`,
      { mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      } 
      });
    const data = await res.json();
    setArticles(data.articles);
  };

  const nextPage = () => {
    onSearch({ ...queryy, page: queryy.page + 1 });
  };

  const prevPage = () => {
    if (queryy.page === 1) {
      alert("No previous page");
      return;
    }
    onSearch({ ...queryy, page: queryy.page - 1 });
  };

  return (
    <div>
      <Header />
      <SearchForm onSearch={onSearch} />
      {/* <h3>Keywords: { queryy.keywords } <br></br> FromDate: { queryy.fromDate } <br></br> ToDate: { queryy.toDate } <br></br> sort: { queryy.sort } <br></br> page: { queryy.page }</h3> */}
      <Pagination query={queryy} nextPage={nextPage} prevPage={prevPage} />
      <Articles articles={articles} />
      <Pagination query={queryy} nextPage={nextPage} prevPage={prevPage} />
      <Footer />
    </div>
  );
};

export default App;
