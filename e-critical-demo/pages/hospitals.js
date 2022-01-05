import Head from 'next/head';
import React from 'react'
import { TableWithPagination } from '../components/common/table/Table'
import MOCK_DATA from "../public/MOCK_DATA.json";
import { COLUMNS } from '../components/common/table/columns'
import Layout from '../components/Layout/Layout';


function Hospitals() {
    return (
        <>
            <Head>
                <title>Hospitals</title>
            </Head>
            <Layout>
                <div className='p-3'>
                    <TableWithPagination tableData={MOCK_DATA} tableColumns={COLUMNS} />
                </div>
            </Layout>
        </>
    )
}

export default Hospitals
