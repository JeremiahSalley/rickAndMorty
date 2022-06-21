import React from "react";
import ReactPaginate from "react-paginate";

const Paginations = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      forcePage={pageNumber===1? 0: pageNumber -1}
      nextLabel='Next'
      previousLabel="Prev"
      nextclassNameName="btn btn-primary"
      previousclassNameName="btn btn-primary"
      pageclassNameName="page-item"
      pageLinkclassNameName="page-link"
      activeclassNameName="active"
      onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
      pageCount={info?.pages}
    />
  );
};




export default Paginations;
