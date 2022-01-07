import Action from "./Action"

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        minWidth:60,
        maxWidth:60,
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        minWidth:200,
        maxWidth:200
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        minWidth:200,
        maxWidth:200
    },
    {
        Header: 'Email',
        accessor: 'email',
        minWidth:400,
        maxWidth:400
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        minWidth:150,
        maxWidth:150
    },
    {
        Header: 'IP Address',
        accessor: 'ip_address',
        minWidth:250,
        maxWidth:250
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        minWidth:250,
        maxWidth:250
    },
    {
        Header: 'Country',
        accessor: 'country',
        minWidth:150,
        maxWidth:150
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