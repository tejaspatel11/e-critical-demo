import Head from 'next/head';
import React, { useCallback, useRef, useState } from 'react'
import { TableWithPagination } from '../components/common/table/Table'
import MOCK_DATA from "../public/MOCK_DATA.json";
import { COLUMNS } from '../components/common/table/columns'
import Layout from '../components/Layout/Layout';


function Hospitals() {
    const [pageCount, setPageCount] = useState(0);
    const [data, setData] = useState([]);
    const fetchIdRef = useRef(0);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchAPIData = async ({ limit, skip, search }) => {
        try {
            setLoading(true);
            const response = await fetch(
                `http://localhost:3006/posts?_limit=${limit}&skip=${skip}&search=${search}`
            );
            const data = await response.json();
            console.log(data);

            setData(data);

            setPageCount(10);    
            setLoading(false);
        } catch (e) {
            console.log("Error while fetching", e);
            // setLoading(false)
        }
    };

    const fetchData = useCallback(
        ({ pageSize, pageIndex }) => {
            // console.log("fetchData is being called")
            // This will get called when the table needs new data
            // You could fetch your data from literally anywhere,
            // even a server. But for this example, we'll just fake it.
            // Give this fetch an ID
            console.log("check",pageIndex,pageSize);
            const fetchId = ++fetchIdRef.current;
            setLoading(true);
            if (fetchId === fetchIdRef.current) {
                fetchAPIData({
                    limit: pageSize,
                    skip: pageSize * pageIndex,
                    search: searchTerm,
                });
            }
        },
        [searchTerm]
    );

    return (
        <>
            <Head>
                <title>Hospitals</title>
            </Head>
            <Layout>
                <div className='p-3 h-100'>
                    <TableWithPagination fetchData={fetchData} pageCount={pageCount} tableData={MOCK_DATA} tableColumns={COLUMNS} />
                </div>
            </Layout>
        </>
    )
}

export default Hospitals
