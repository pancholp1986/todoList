import React from "react";

import { Pagination as Paginator } from 'semantic-ui-react'

const Pagination = ({currentPage, totalItems, onPageChange }) => {
    console.log('Pagination - currentPage: ', currentPage);
    console.log('Pagination - totalItems: ', totalItems);
    const nextPage = currentPage + 1;
    return (
        <>
            <Paginator defaultActivePage={currentPage} totalPages={totalItems} onPageChange={onPageChange(nextPage)} />
        </>
    )
}

export default Pagination;