import reducer from '../../../src/reducer/root-reducer.js'

//check if state initializes
// if you pass it some unknown action it will pass back the default which is just the state
//first argument is the state the second argument is the action
//second argument can be an action thats either a string or a POJO

describe('CATEGORY Reducers', ()=> {
    it('Test: return orignal state on passing in an incorrect/invalid action', () => {
        let state = {
            catReducer: [], 
            expReducer: []
        }
        const red = reducer(state, 'wrong')
        expect(red).toEqual({
            catReducer: [], 
            expReducer: []
        })
    })

    it('Test: CATEGORY_CREATE', () => {
        let action = {
            type: 'CATEGORY_CREATE',
            payload: {
                id : 1,
                content : 'hello'
            }
        }
        let oldState = {
            catReducer: [], 
            expReducer: []
        }
        let newState = {
            catReducer: [{
                content: "hello",
                 id: 1}], 
            expReducer: []}

        const red = reducer(oldState, action)
        expect(red).toEqual(newState)
    })

    it('Test: CATEGORY_UPDATE', () => {
        let action = {
            type: 'CATEGORY_UPDATE',
            payload: {
                id : 1,
                content : 'bye'
            }
        }

        let oldState = {
            catReducer: [{
                content: "hello", 
                id: 1}], 
            expReducer: []
            }

        let newState = {
            catReducer: [{
                content: "bye", 
                id: 1}], 
            expReducer: []
        }

        const red = reducer(oldState, action)
        expect(red).toEqual(newState)
    })

    it('Test: CATEGORY_DESTROY', () => {
        
        let action = {
            type: 'CATEGORY_DESTROY',
            payload: 1
        }

        let state = {
            catReducer: [{
                content: "hello", 
                id: 1}], 
            expReducer: []
            }

        const red = reducer(state, action)
        expect(red).toEqual({"catReducer": [], "expReducer": []})
    })
})

describe('EXPENSE Reducers', ()=> {
    it('Test: return orignal state on passing in an incorrect/invalid action', () => {
        let state = {
            catReducer: [], 
            expReducer: []
        }
        const red = reducer(state, 'wrong')
        expect(red).toEqual({"catReducer": [], "expReducer": []})
    })

    it('Test: EXPENSE_CREATE', () => {
        // have to create CATEGORY first probably?
        let action = {
            type: 'EXPENSE_CREATE',
            payload: {
                name : 'one',
                price : '1',
                categoryId: 1
            }
        }
        let oldState = {
            catReducer: [], 
            expReducer: []
        }
        let newState = {
            catReducer: [], 
            expReducer: [{
                name : 'one',
                price : '1',
                categoryId: 1
            }]}

        const red = reducer(oldState, action)
        expect(red).toEqual(newState)
    })

    it('Test: EXPENSE_UPDATE', () => {
        let action = {
            type: 'EXPENSE_UPDATE',
            payload: {
                id : 1,
                name : 'two',
                price : '2'
            }
        }

        let oldState = {
            catReducer: [], 
            expReducer: [{
                name : 'one',
                price : '1',
                // categoryId: 1,
                id: 1
            }]
            }

        let newState = {
        catReducer: [], 
        expReducer: [{
            name : 'two',
            price : '2',
            // categoryId: 1,
            id: 1
        }]
        }
        const red = reducer(oldState, action)
        expect(red).toEqual(newState)
    })

    it('Test: EXPENSE_DELETE', () => {
        
        let action = {
            type: 'EXPENSE_DELETE',
            payload: 1
        }

        let state = {
            catReducer: [], 
            expReducer: [{
                name : 'two',
                price : '2',
                categoryId: 1,
                id: 1
            }]
        }
        const red = reducer(state, action)
        expect(red).toEqual({"catReducer": [], "expReducer": []})
    })
})
