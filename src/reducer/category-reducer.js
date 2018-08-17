let initialState = []

export default (state=initialState,action) => {
    let {type, payload} = action;
    console.log('payload',payload)
    // console.log('action',action)

    switch(type) {
        case 'CATEGORY_CREATE' : return [...state,payload]
        case 'CATEGORY_UPDATE' : return state.map(category => {return category.id === payload.id ? payload : category})
        case 'CATEGORY_DESTROY' : return state.filter(category => {return category.id !== payload})
        // case 'CATEGORY_TEST' : return console.log('Hello')

        default : return state
    }
}