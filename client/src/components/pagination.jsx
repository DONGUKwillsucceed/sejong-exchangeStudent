import React from "react";
import '../styles/pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
      <nav>
        <ul className="pageul pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item pageli">
                {
                    number === currentPage ? 
                    <span onClick={() => paginate(number)} className="page-link pagespan selected">{number}</span> 
                    :<span onClick={() => paginate(number)} className="page-link pagespan">{number}</span>
                }
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default Pagination;