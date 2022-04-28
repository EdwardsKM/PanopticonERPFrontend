export type MpesaStatement = {
    receiptNo: string
    completionTime: string
    initiationTime: string
    details: string
    transactionStatus: string
    paidIn: number
    withdrawn: number
    balance: number
    balanceConfirmed: string
    reasonType: string
    otherPartyInfo: string
    linkedTransactionId: string
    acNo: string

}

export type MtibaStatement = {
    transactionStateId: string
    transactionTypeId: string
    facilityZoHold: string
    facilityName: string
    fullReferenceNo: string
    phoneNumber: string
    payerName: string
    senderName: string
    medicalProgramName: string
    amountForDisplay: number
    transactionDate: string
    paymentDate: string
    transactionType: string

}

export type CollectionDetails = {
    receiptNo: string
    receiptDate: string
    patientName: string
    payee: string
    cash: number
    cheque: number
    card: number
    cardNo: string
    mpesa: number
    eTransfer: number
    transactionNo: string
    adviceUsed: number
    employeeName: string
    unitName: string


}

export type BillDetails = {
    billDate: string
    billNo: string
    skypeId: string
    uhid: string
    visitType: string
    patientName: string
    payee: string
    serviceName: string
    quantity: number
    ratePerUnit: number
    discount: number
    gross: number
    paidAmount: number
    outstanding: number
    serviceDoctor: string
    department: string
    consultingDoctor: string
    referringDoctor: string
    servicingDoctor: string
    paymentMode: string

}

