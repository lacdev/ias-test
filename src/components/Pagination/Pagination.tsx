import styles from './Pagination.module.scss'
import { PaginationProps } from './Pagination.types'
import { useState } from 'react'

const Pagination = ({
  currentPage,
  maxPageLimit,
  minPageLimit,
}: PaginationProps) => {
  // const totalPages = props.response.totalPages - 1
  // const data = props.response.data

  const [pageNumber, setPageNumber] = useState<number>(1) // No of pages
  const itemsPerPage = 4
  // // build page numbers list based on total number of pages
  // const pages = []
  // for (let i = 1; i <= totalPages; i++) {
  //   pages.push(i)
  // }

  // const pageNumbers = pages.map((page) => {
  //   if (page <= maxPageLimit && page > minPageLimit) {
  //     return (
  //       <li
  //         key={page}
  //         id={page}
  //         onClick={handlePageClick}
  //         className={currentPage === page ? 'active' : null}
  //       >
  //         {page}
  //       </li>
  //     )
  //   } else {
  //     return null
  //   }
  // })

  return <div>Pagination</div>
}

export default Pagination
