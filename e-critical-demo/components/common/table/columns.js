import Action from "./Action"

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
    },
    {
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'IP Address',
        accessor: 'ip_address',
    },
    {
        Header: 'Phone',
        accessor: 'phone',
    },
    {
        Header: 'Country',
        accessor: 'country',
    },
    {
        Header: 'Action',
        accessor: 'action',
        Cell:()=><Action/>
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        columns: [
            {
                Header: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
            },
        ]
    },
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'IP Address',
                accessor: 'ip_address',
            },
            {
                Header: 'Phone',
                accessor: 'phone',
            },
            {
                Header: 'Country',
                accessor: 'country',
            }
        ]
    }
]