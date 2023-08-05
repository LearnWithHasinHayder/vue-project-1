const invoice1 = {
    sender: 'John Doe',
    billTo: 'Donuld Duck',
    shipTo: 'Donuld Ducks Office Address',
    invoiceNumber: 'DD-016',
    date: '08/01/2023',
    dueDate: '08/05/2023',
    additionalNote: 'Not Applicable',
    items: [{ "description": "Frontend", "quantity": 23, "rate": 50, "amount": 1150 }, { "description": "Backend", "quantity": 40, "rate": 50, "amount": 2000 }, { "description": "Devops", "quantity": 10, "rate": 150, "amount": 1500 }],
    notes: 'Account Number: 0199283',
    terms: 'Send by wire transfer',
    subtotal: '',
    tax: '',
    total: '',
    balanceDue: ''
}

const invoice2 = {
    sender: 'Jane Doe',
    billTo: 'Uncle Tom',
    shipTo: 'Uncle Toms Office Address',
    invoiceNumber: 'UT-012',
    date: '07/31/2023',
    dueDate: '08/03/2023',
    additionalNote: 'Not Applicable',
    items: [{ "description": "Burger", "quantity": 5, "rate": 4, "amount": 20 }, { "description": "Bread", "quantity": 3, "rate": 2, "amount": 6 }, { "description": "French Fry", "quantity": 6, "rate": 3, "amount": 18 }],
    notes: 'Counter Number 3',
    terms: 'Pay by cash',
    subtotal: '',
    tax: '',
    total: '',
    balanceDue: ''
}

export { invoice1, invoice2}