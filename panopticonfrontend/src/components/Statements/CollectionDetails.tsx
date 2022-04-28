import { useState, useEffect } from 'react'
import axios from 'axios'
import { createTable } from '@tanstack/react-table'
import Table from './Table'
import { CollectionDetails } from './Types'


export default function CollectionDetailsTable() {

    const table = createTable<{ Row: CollectionDetails }>()

    const defaultColumns = table.createColumns([
        table.createGroup({
            header: 'Collection Details',
            columns: [
                table.createDataColumn('receiptNo', {
                    header: 'Receipt No',
                    cell: props => props.value,

                }),
                table.createDataColumn('receiptDate', {
                    header: 'Receipt Date',
                    cell: props => props.value,
                    // Cell : (props)=>{
                    //     //props.value will contain your date
                    //     //you can convert your date here
                    //     const custom_date = 'custom_date'+props.value
                    //     return <span>{custom_date}</span>

                }),
                table.createDataColumn('patientName', {
                    header: 'Patient Name',
                    cell: info => info.value,
                    // cell: props => {
                    //     const date = props.value
                    //     const formattedDate = date.toLocaleDateString('en-GB', {
                    //         day: '2-digit', month: 'short', year: 'numeric'
                    //     }).replace(/ /g, '-');
                    //     document.write(formattedDate);

                    // }

                }),
                table.createDataColumn('payee', {
                    header: 'Payee',
                    cell: info => info.value,

                }),
                table.createDataColumn('cash', {
                    header: 'Cash',
                    cell: info => info.value,

                }),
                table.createDataColumn('cheque', {
                    header: 'Cheque',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)

                }),
                table.createDataColumn('card', {
                    header: 'Card',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)


                }),
                table.createDataColumn('cardNo', {
                    header: 'Card Number',
                    cell: props => props.value

                }),
                table.createDataColumn('mpesa', {
                    header: 'Mpesa',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)


                }),
                table.createDataColumn('eTransfer', {
                    header: 'E-Transfer',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)


                }),
                table.createDataColumn('transactionNo', {
                    header: 'Transaction Number',
                    cell: info => info.value,

                }),
                table.createDataColumn('adviceUsed', {
                    header: 'Advice Used',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)


                }),
                table.createDataColumn('employeeName', {
                    header: 'Employee Name',
                    cell: info => info.value,

                }),
                table.createDataColumn('unitName', {
                    header: 'Unit Name',
                    cell: info => info.value,

                }),

            ]
        })])

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://localhost:8080/statements/collectiondetails"
            ).then((response: any) => {

                const incomingdata = response.data.map((cd: any) =>
                ({
                    receiptNo: cd.receipt_no,
                    receiptDate: cd.receipt_date,
                    patientName: cd.patient_name,
                    payee: cd.payee,
                    cash: cd.cash,
                    cheque: cd.cheque,
                    card: cd.card,
                    cardNo: cd.card_number,
                    mpesa: cd.mpesa,
                    eTransfer: cd.e_transfer,
                    transactionNo: cd.transaction_number,
                    adviceUsed: cd.advice_used,
                    employeeName: cd.employee_name,
                    unitName: cd.unit_name

                })
                )
                setData(incomingdata)
                setLoading(false)
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div>
                <Table defaultColumns={defaultColumns} data={data} table={table} />
            </div>
        </>
    );
}