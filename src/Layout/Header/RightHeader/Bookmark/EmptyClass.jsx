import React, { Fragment } from "react";

const EmpltyClass = ({ searchIcon, search }) => {
  let abc  =""
    return (
    <Fragment>
      <div
        className={`${
abc? `Typeahead-menu empty-menu ${searchIcon ? "is-open" : ""}`
            : `Typeahead-menu empty-bookmark ${searchIcon ? "is-open" : ""}`
        } `}
      >
        <div className="tt-dataset tt-dataset-0">
          <div className="EmptyMessage">
            {"Opps!! There are no result found."}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmpltyClass;
