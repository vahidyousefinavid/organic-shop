import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import axios from 'axios'







export default function OrdersStore() {

    const [page, setPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(20)
    const [data, setData] = React.useState([])
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(1)
    }
    React.useEffect(() => {

        axios({
            url: (`https://api.balamala.ir/adminPanel/oShow?page=${page}`),

            method: "GET"
        })
            .then((response) => {

                const g = response.data.reverse()
                return setData([...g])


            }).catch((error) => {
                console.log(error)
            })



    }, [page])
    // const b = data.map((item) => JSON.parse(item.basket).map((itemB) => itemB._id))
    // const g = JSON.parse(b)
    console.log(data)
    const columns = [
        { id: 'name', label: 'نام و نام خانوادگی', minWidth: 170 },
        { id: 'payChoice', label: 'روش پرداخت', minWidth: 100 },
        { id: 'postalCode', label: 'کد پستی', minWidth: 100 },
        {
            id: 'amount',
            label: 'مبلغ پرداختی',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'takhfifAmount',
            label: 'مبلغ با تخفیف',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'addres',
            label: 'آدرس',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'phone',
            label: 'تلفن',
            minWidth: 170,
            align: 'right',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'takhfifCode',
            label: 'کد تخفیف',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'shahr',
            label: 'شهر',
            minWidth: 170,
            align: 'right',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'ostan',
            label: 'استان',
            minWidth: 170,
            align: 'right',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'orderCode',
            label: 'کد سفارش',
            minWidth: 170,
            align: 'right',
            // format: (value) => value.toFixed(2),
        },
        {
            id: 'basket',
            label: 'سبد خرید',
            minWidth: 170,
            align: 'right',
            b1: (value) => JSON.parse(value),


        },
    ]

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', paddingTop: 20 }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id]
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}