import { useState } from "react";
import { SearchFormProps } from "../../interfaces/SearchFormProps"
import "./SearchForm.css"

export const SearchForm = ({ onSearch }: SearchFormProps) => {
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
  };

  return (
    <section className="text-dark mt-5 d-flex justify-content-center">
      <div className="form">
        <form className="" onSubmit={onSubmit}>
          <div className="row mb-3">
            <div className="col-sm">
              <input
                type="text"
                placeholder="Search Keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div id="emailHelp" className="form-text text-center">
              Will be searched through the Article's title,
              description, and content.
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-3 col-form-label"
                >
                  From:
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    placeholder="keywords"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-3 col-form-label"
                >
                  To:
                </label>
                <div className="col-sm-8">
                  <input
                    type="date"
                    placeholder="keywords"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
            </div>
            <div className="col ">
              <fieldset className="row mb-3 ">
                <legend className="col-form-label col-sm-4 pt-0">
                  Sort By:
                </legend>
                <div className="col-sm">
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
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
