import React from "react";
import "./Pagination.scss";

export default function Pagination(props) {
  const pages = Array.from({ length: props.numberOfPages }, (i, v) => v + 1);
  return (
    <div
      className="pattern-dots-sm slategray h-5 pagination"
      style={{ display: `${props.prikaz}` }}
    >
      {pages.map((page, index) => {
        return (
          <div
            key={index}
            className={getClassName(props, page)}
            onClick={openPage(props, page)}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
}
const getClassName = (props, page) => {
  return props.pageNum === page ? "" : "open";
};

const openPage = (props, page) => {
  return () => {
    props.clicked(page);
  };
};
