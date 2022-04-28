import { createTable } from '@tanstack/react-table'
import Table from './Table'
import { MtibaStatement } from './Types'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function MtibaTable() {
    const table = createTable<{ Row: MtibaStatement }>()

    const defaultColumns = table.createColumns([
        table.createGroup({
            header: 'Mtiba Statement',
            columns: [
                table.createDataColumn('transactionStateId', {
                    header: 'Transaction State ID',
                    cell: info => info.value,

                }),
                table.createDataColumn('transactionTypeId', {
                    header: 'Transaction Type ID',
                    cell: info => info.value,

                }),
                table.createDataColumn('facilityZoHold', {
                    header: 'FacilityZoHold',
                    cell: info => info.value,

                }),
                table.createDataColumn('facilityName', {
                    header: 'Facility Name',
                    cell: info => info.value,

                }),
                table.createDataColumn('fullReferenceNo', {
                    header: 'Full Reference No',
                    cell: info => info.value,

                }),
                table.createDataColumn('phoneNumber', {
                    header: 'Phone Number',
                    cell: info => info.value,

                }),
                table.createDataColumn('payerName', {
                    header: 'Payer Name',
                    cell: info => info.value,

                }),
                table.createDataColumn('senderName', {
                    header: 'Sender Name',
                    cell: info => info.value,

                }),
                table.createDataColumn('medicalProgramName', {
                    header: 'Medical Program Name',
                    cell: info => info.value,

                }),
                table.createDataColumn('amountForDisplay', {
                    header: 'Amount for Display',
                    cell: info => info.value,

                }),
                table.createDataColumn('transactionDate', {
                    header: 'Transaction Date',
                    cell: info => info.value,

                }),
                table.createDataColumn('paymentDate', {
                    header: 'Payment Date',
                    cell: info => info.value,

                }),
                table.createDataColumn('transactionType', {
                    header: 'Transaction Type',
                    cell: info => info.value,

                }),

            ]
        })])

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    let url = "https://localhost:8080/statements/mtiba"

    useEffect(() => {
        axios
            .get(
                url
            ).then((response: any) => {

                const incomingdata = response.data.map((mtibabill: any) =>
                ({

                    transactionStateId: mtibabill.transaction_state_id,
                    transactionTypeId: mtibabill.transaction_type_id,
                    facilityZoHold: mtibabill.facilityzohold,
                    facilityName: mtibabill.facility_name,
                    fullReferenceNo: mtibabill.full_reference_no,
                    phoneNumber: mtibabill.phone_number,
                    payerName: mtibabill.payer_name,
                    senderName: mtibabill.sender_name,
                    medicalProgramName: mtibabill.medical_program_name,
                    amountForDisplay: mtibabill.amount_for_display,
                    transactionDate: mtibabill.transaction_date,
                    paymentDate: mtibabill.payment_date,
                    transactionType: mtibabill.transaction_type
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