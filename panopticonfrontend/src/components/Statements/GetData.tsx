import { useEffect, useState } from "react";
import axios from "axios";

export function GetData(url: string) {

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

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

}