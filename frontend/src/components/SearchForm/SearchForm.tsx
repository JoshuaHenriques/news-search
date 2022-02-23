import { useState } from "react";

export const SearchForm = ({ onSearch }: { onSearch: Function }) => {
  const [keywords, setKeywords] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sort, setSort] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!keywords || !fromDate || !toDate || !sort) {
      alert("Please fill out form");
      return;
    }

    onSearch({ keywords, fromDate, toDate, sort, page: 1 });

    // setKeywords("");
    // setFromDate("");
    // setToDate("");
    // setSort("");
  };

  return (
    <section className="text-dark my-5">
      <div className="container">
        <form className="" onSubmit={onSubmit}>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Search:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div id="emailHelp" className="form-text">
              Keywords will be searched through the Article's title,
              description, and content.
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              From:
            </label>
            <div className="col-sm">
              <input
                type="date"
                placeholder="keywords"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              To:
            </label>
            <div className="col-sm">
              <input
                type="date"
                placeholder="keywords"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="form-control"
              ></input>
            </div>
          </div>
          {/* <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              To:
            </label>
            <div className="col-sm">
              <input
                type="date"
                placeholder="keywords"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="form-control"
              ></input>
            </div>
          </div> */}
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Sort By:</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="gridRadios1"
                  value="publishedAt"
                  name="sort"
                  onChange={(e) => setSort(e.target.value)}
                ></input>
                <label className="form-check-label" htmlFor="gridRadios1">
                  Published At
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="gridRadios2"
                  value="relevancy"
                  name="sort"
                  onChange={(e) => setSort(e.target.value)}
                ></input>
                <label className="form-check-label" htmlFor="gridRadios2">
                  Relevancy
                </label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  id="gridRadios3"
                  value="popularity"
                  name="sort"
                  onChange={(e) => setSort(e.target.value)}
                ></input>
                <label className="form-check-label" htmlFor="gridRadios3">
                  Popularity
                </label>
              </div>
            </div>
          </fieldset>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
