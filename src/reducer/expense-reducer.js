let initialState = []

export default (state=initialState, action) => {
    let {type, payload} = action;

    switch(type) {
        case 'EXPENSE_CREATE' : return [...state,payload]
        case 'EXPENSE_UPDATE' : return state.map(expense => expense.id === payload.id ? payload : expense)
        case 'EXPENSE_DELETE' : return state.filter(expense => expense.id !== payload)

        default : return state
    }
}