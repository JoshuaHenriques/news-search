import { useState, useEffect } from "react";
import { Articles } from "./components/Articles/Articles";
import { Footer } from "./components/Footer/Footer";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { Query } from "./interfaces/QueryType";
import { Header } from "./components/Header/Header";
import { ArticleType } from "./interfaces/ArticleType";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [pages, setPages] = useState(0);
  const [queryy, setQuery] = useState<Query>({
    keywords: "",
    fromDate: "",
    toDate: "",
    sort: "",
    page: 1,
  });

  useEffect(() => {
    const getTopHeadlines = async () => {
      const headlines = await topHeadlines();
      setArticles(headlines);
    };

    getTopHeadlines();
  }, []);

  const topHeadlines = async () => {
    const res = await fetch(`http://localhost:8000/top-headlines/`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await res.json();
    return data.articles;
  };

  const onSearch = async (query: Query) => {
    setQuery(query);

    if (query.fromDate && query.toDate) {
      const res = await fetch(
        `http://localhost:8000/search/?keywords=${query.keywords}&from=${query.fromDate}&to=${query.toDate}&sort-by=${query.sort}&page=${query.page}`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )

      const data = await res.json();
      setPages(data.totalResults / 5);
      setArticles(data.articles);
    }
    else if (query.fromDate && !query.toDate) {
      const res = await fetch(
        `http://localhost:8000/search/?keywords=${query.keywords}&from=${query.fromDate}&sort-by=${query.sort}&page=${query.page}`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )

      const data = await res.json();
      setPages(data.totalResults / 5);
      setArticles(data.articles);
    }
    else if (!query.fromDate && query.toDate) {
      const res = await fetch(
        `http://localhost:8000/search/?keywords=${query.keywords}&to=${query.toDate}&sort-by=${query.sort}&page=${query.page}`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )

      const data = await res.json();
      setPages(data.totalResults / 5);
      setArticles(data.articles);
    }
    else if (!query.fromDate && !query.toDate) {
      const res = await fetch(
        `http://localhost:8000/search/?keywords=${query.keywords}&sort-by=${query.sort}&page=${query.page}`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )

      const data = await res.json();
      setPages(data.totalResults / 5);
      setArticles(data.articles);
    }
  };

  const nextPage = () => {
    if (queryy.page + 1 > pages) {
      alert("No more pages");
      return;
    }
    onSearch({ ...queryy, page: queryy.page + 1 });
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    if (queryy.page === 1) {
      alert("No previous page");
      return;
    }
    onSearch({ ...queryy, page: queryy.page - 1 });
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Header />
      <SearchForm onSearch={onSearch} />
      <Articles articles={articles} />
      <Pagination nextPage={nextPage} prevPage={prevPage} />
      <Footer />
    </div>
  );
};

export default App;
