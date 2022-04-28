import { useState, useEffect } from 'react'
import axios from 'axios'
import { createTable } from '@tanstack/react-table'
import Table from './Table'
import { BillDetails } from './Types'



export default function BillDetailsTable() {

    const table = createTable<{ Row: BillDetails }>()

    const defaultColumns = table.createColumns([
        table.createGroup({
            header: 'Bill Details',
            columns: [
                table.createDataColumn('billDate', {
                    header: 'Bill Date',
                    cell: props => props.value,

                }),
                table.createDataColumn('billNo', {
                    header: 'Bill No',
                    cell: props => props.value,

                }),
                table.createDataColumn('skypeId', {
                    header: 'Skype ID',
                    cell: info => info.value,

                }),
                table.createDataColumn('uhid', {
                    header: 'UHID',
                    cell: info => info.value,

                }),
                table.createDataColumn('visitType', {
                    header: 'Visit Type',
                    cell: info => info.value,

                }),
                table.createDataColumn('patientName', {
                    header: 'Patient Name',
                    cell: props => props.value,

                }),
                table.createDataColumn('payee', {
                    header: 'Payee',
                    cell: props => props.value,


                }),
                table.createDataColumn('serviceName', {
                    header: 'Service Name',
                    cell: props => props.value,


                }),
                table.createDataColumn('quantity', {
                    header: 'Quantity',
                    cell: info => info.value,

                }),
                table.createDataColumn('ratePerUnit', {
                    header: 'Rate Per Unit',
                    cell: info => info.value,

                }),
                table.createDataColumn('discount', {
                    header: 'Discount',
                    cell: info => info.value,

                }),
                table.createDataColumn('gross', {
                    header: 'Gross Amount',
                    cell: info => info.value,

                }),
                table.createDataColumn('paidAmount', {
                    header: 'Paid Amount',
                    cell: info => info.value,

                }),
                table.createDataColumn('outstanding', {
                    header: 'Outstanding',
                    cell: info => info.value,

                }),
                table.createDataColumn('serviceDoctor', {
                    header: 'Service Doctor',
                    cell: info => info.value,

                }),
                table.createDataColumn('department', {
                    header: 'Department',
                    cell: info => info.value,

                }),
                table.createDataColumn('consultingDoctor', {
                    header: 'Consulting Doctor',
                    cell: info => info.value,

                }),
                table.createDataColumn('referringDoctor', {
                    header: 'Referring Doctor',
                    cell: info => info.value,

                }),
                table.createDataColumn('servicingDoctor', {
                    header: 'Servicing Doctor',
                    cell: info => info.value,

                }),
                table.createDataColumn('paymentMode', {
                    header: 'Payment Mode',
                    cell: info => info.value,

                }),

            ]
        })])

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://localhost:8080/statements/billdetails"
            ).then((response: any) => {

                const incomingdata = response.data.map((bd: any) =>
                ({
                    billDate: bd.bill_date,
                    billNo: bd.bill_no,
                    skypeId: bd.skype_id,
                    uhid: bd.uhid,
                    visitType: bd.visit_type,
                    patientName: bd.patient_name,
                    payee: bd.payee,
                    serviceName: bd.service_name,
                    quantity: bd.quantity,
                    ratePerUnit: bd.rate_per_unit,
                    discount: bd.discount,
                    gross: bd.gross,
                    paidAmount: bd.paid_amount,
                    outstanding: bd.outstanding,
                    serviceDoctor: bd.service_doctor,
                    department: bd.department,
                    consultingDoctor: bd.consulting_doctor,
                    referringDoctor: bd.referring_doctor,
                    servicingDoctor: bd.service_doctor,
                    paymentMode: bd.payment_mode

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