import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({pageCount, onChange}) => {
    
    return (
        <ReactPaginate
            activeClassName={'item active '}
            breakClassName={'item break-me '}
            containerClassName={'pagination'}
            disabledClassName={'disabled-page'}
            nextClassName={"item next "}
            pageClassName={'item pagination-page '}
            previousClassName={"item previous"}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={onChange}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(pageCount / 10)}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination