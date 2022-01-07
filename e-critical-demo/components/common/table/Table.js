import React, { useEffect, useMemo } from "react";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import SearchFilter from "./SearchFilter";
import Card from "../Card";
import Button from "../Button";
import ContextRight from "./ContextRight";

export const TableWithPagination = ({ tableData, tableColumns, fetchData, isPaginated = true, }) => {
    const columns = useMemo(() => tableColumns, []);
    const data = useMemo(() => tableData, [tableData]);
    const tableInstance = useTable({
        columns: columns,
        data: data,
        // manualPagination: true,
        // pageCount: controlledPageCount,
        initialState: { pageSize: 12 }
    }, useGlobalFilter, useSortBy, usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize
    } = tableInstance

    const { globalFilter, pageIndex, pageSize } = state
    const rightClickHandler = (event) => {
        event.preventDefault()
    }

    const listenScrollEvent = (event) => {
        const myDiv = document.querySelector('#scroll1');
        if (myDiv.clientHeight + myDiv.scrollTop > myDiv.scrollHeight) {
            myDiv.scrollTo(0, 0)
            nextPage()
            console.log('scrolled to bottom')
        }
    }


    useEffect(() => {
        document.querySelector('#scroll1').addEventListener('scroll', listenScrollEvent);
        //ReactDOM.findDOMNode(this.refs.category_scroll).addEventListener('scroll', listenScrollEvent);
    }, [])

    // useEffect(() => {
    //     fetchData && fetchData({ pageIndex, pageSize });
    // }, [fetchData, pageIndex, pageSize]);
    return (
        <>
            <div className="d-flex justify-content-between mb-2">
                <SearchFilter filter={globalFilter} setFilter={setGlobalFilter} />
                <Button><span className="fa-plus fas"></span> Add Patient</Button>
            </div>
            <Card className="h-100">
                <div className="overflow-auto" id="scroll1" onScroll={listenScrollEvent} >
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps({
                                                style: { minWidth: column.minWidth, maxWidth: column.maxWidth, width: column.width },
                                            }, column.getSortByToggleProps())}>{column.render('Header')}
                                                <span> {column.isSorted ? (column.isSortedDesc ? <span>&#8681;</span> : <span>&#8679;</span>) : ''}</span> </th>
                                        ))
                                    }

                                </tr>
                            ))}

                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map(row => {
                                prepareRow(row)
                                return (

                                    <tr onContextMenu={rightClickHandler} {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}><ContextRight>{cell.render('Cell')}</ContextRight></td>
                                        })}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end align-items-center mx-1 my-3">
                    <span className="mx-2">
                        Items Per Page:{' '}
                        <input type="number" defaultValue={pageSize} onChange={e => {
                            setPageSize(Number(e.target.value))
                        }} style={{ width: "50px" }} />
                    </span>
                    <span className="mx-2">
                        {' '}
                        <strong>{pageIndex + 1}/{pageOptions.length}</strong>{' '}
                    </span>
                    <button className="fa-angle-double-left fas border-0 bg-transparent mx-2 fs-5" onClick={() => gotoPage(0)} disabled={!canPreviousPage}></button>
                    <button className="fa-angle-left fas border-0 bg-transparent mx-2 fs-5" onClick={() => previousPage()} disabled={!canPreviousPage}></button>
                    <button className="fa-angle-right fas border-0 bg-transparent mx-2 fs-5" onClick={() => nextPage()} disabled={!canNextPage}></button>
                    <button className="fa-angle-double-right fas border-0 bg-transparent fs-5 mx-2" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}></button>
                    <span>
                        | Go To Page: {' '}
                        <input type="number" defaultValue={pageIndex + 1} onChange={e => {
                            gotoPage(Number(e.target.value - 1))
                        }} style={{ width: "50px" }} />
                    </span>
                </div>
            </Card>
        </>
    );
};
