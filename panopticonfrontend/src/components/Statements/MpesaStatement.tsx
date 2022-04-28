import { useState, useEffect } from 'react'
import axios from 'axios'
import { createTable } from '@tanstack/react-table'
import Table from './Table'
import { MpesaStatement } from './Types'


export default function MpesaTable() {

    const table = createTable<{ Row: MpesaStatement }>()

    const defaultColumns = table.createColumns([
        table.createGroup({
            header: 'Mpesa Statement',
            columns: [
                table.createDataColumn('receiptNo', {
                    header: 'Receipt No',
                    cell: props => props.value,

                }),
                table.createDataColumn('completionTime', {
                    header: 'Completion Time',
                    cell: props => props.value,
                    // Cell : (props)=>{
                    //     //props.value will contain your date
                    //     //you can convert your date here
                    //     const custom_date = 'custom_date'+props.value
                    //     return <span>{custom_date}</span>

                }),
                table.createDataColumn('initiationTime', {
                    header: 'Initiation Time',
                    cell: info => info.value,
                    // cell: props => {
                    //     const date = props.value
                    //     const formattedDate = date.toLocaleDateString('en-GB', {
                    //         day: '2-digit', month: 'short', year: 'numeric'
                    //     }).replace(/ /g, '-');
                    //     document.write(formattedDate);

                    // }

                }),
                table.createDataColumn('details', {
                    header: 'Details',
                    cell: info => info.value,

                }),
                table.createDataColumn('transactionStatus', {
                    header: 'Transaction Status',
                    cell: info => info.value,

                }),
                table.createDataColumn('paidIn', {
                    header: 'Paid In',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)

                }),
                table.createDataColumn('withdrawn', {
                    header: 'Withdrawn',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)


                }),
                table.createDataColumn('balance', {
                    header: 'Balance',
                    cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'KSH' }).format(props.value)


                }),
                table.createDataColumn('balanceConfirmed', {
                    header: 'Balance Confirmed',
                    cell: info => info.value,

                }),
                table.createDataColumn('reasonType', {
                    header: 'Reason Type',
                    cell: info => info.value,

                }),
                table.createDataColumn('otherPartyInfo', {
                    header: 'Other Party Info',
                    cell: info => info.value,

                }),
                table.createDataColumn('linkedTransactionId', {
                    header: 'Linked Transaction ID',
                    cell: info => info.value,

                }),
                table.createDataColumn('acNo', {
                    header: 'Ac No',
                    cell: info => info.value,

                }),

            ]
        })])

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://localhost:8080/statements/mpesa"
            ).then((response: any) => {

                const incomingdata = response.data.map((mpesabill: any) =>
                ({
                    receiptNo: mpesabill.receipt_no,
                    completionTime: mpesabill.completion_time,
                    initiationTime: mpesabill.initiation_time,
                    details: mpesabill.details,
                    transactionStatus: mpesabill.transaction_status,
                    paidIn: mpesabill.paid_in,
                    withdrawn: mpesabill.withdrawn,
                    balance: mpesabill.balance,
                    balanceConfirmed: mpesabill.balance_confirmed,
                    reasonType: mpesabill.reason_type,
                    otherPartyInfo: mpesabill.other_party_info,
                    linkedTransactionId: mpesabill.linked_transaction_id,
                    acNo: mpesabill.ac_no,

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