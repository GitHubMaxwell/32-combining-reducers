/*

    create a category reducer in your your reducer directory
    this reducer should support the following interactions
        EXPENSE_CREATE -- store an expense
        EXPENSE_UPDATE -- update an existing expense
        EXPENSE_DELETE -- delete an existing expense
    if you need others feel free to add them

*/

let initialState = []
// is this the shape of the state correct ???
// localstorage it stretch goal

export default (state=initialState, action) => {
    let {type, payload} = action;
    // console.log('payload',payload)
    // console.log('action',action)

    switch(type) {
        //why two returns?
        case 'EXPENSE_CREATE' : return [...state,payload]
        case 'EXPENSE_UPDATE' : return state.map(expense => expense.id === payload.id ? payload : expense)
        case 'EXPENSE_DELETE' : return state.filter(expense => expense.id !== payload)
        case 'EXPENSE_TEST' : payload => console.log('Hello Expense:',payload);

        default : return state
    }
}