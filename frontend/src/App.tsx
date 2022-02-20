import { SearchForm } from "./components/SearchForm/SearchForm";

export const App = () => {
  interface Query {
    keywords: String,
    fromDate?: Date,
    toDate?: Date,
    sort: String
  }

  const onSearch = async (query: Query) => {
    console.log(query)
    // fix sort by value
    const res = await fetch(`http://127.0.0.1:5000/search/?keywords=${query.keywords}&from=${query.fromDate}&to=${query.toDate}&sort-by=${query.sort}&page=2`)
    const articles = await res.json()
    console.log(articles)
  }

  return (
    <div>
      <h1>Search Articles</h1>
      <SearchForm onSearch={ onSearch }/>
    </div>
  );
};

export default App;