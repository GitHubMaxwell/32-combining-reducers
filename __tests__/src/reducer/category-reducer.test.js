import reducer from '../../../src/reducer/category-reducer.js'
import { categoryCreate, categoryDestroy, categoryUpdate } from '../../../src/action/actions.js'

//check if state initializes
// if you pass it some unknown action it will pass back the default which is just the state
//first argument is the state the second argument is the action
//second argument can be an action thats either a string or a POJO

describe('testing the reducer', ()=> {
    it('Test: return orignal state on passing in an incorrect/invalid action', () => {
        const red = reducer([], 'wrong')
        expect(red).toEqual([])
    })

    it('Test: CATEGORY_CREATE', () => {
        let action = {
            type: 'CATEGORY_CREATE',
            payload: {
                id : 1,
                content : 'hello'
            }
        }
        let state = [{
            id : 1,
            content : 'hello'
        }]

        const red = reducer([], action)
        expect(red).toEqual(state)
    })

    it('Test: CATEGORY_UPDATE', () => {
        let action = {
            type: 'CATEGORY_UPDATE',
            payload: {
                id : 1,
                content : 'bye'
            }
        }

        let oldState = [{
            id : 1,
            content : 'hello'
        }]

        let newState = [{
            id : 1,
            content : 'bye'
        },
        ]
        const red = reducer(oldState, action)
        expect(red).toEqual(newState)
    })

    it('Test: CATEGORY_DESTROY', () => {
        
        let action = {
            type: 'CATEGORY_DESTROY',
            payload: 1
        }
        let state = [{
            id : 1,
            content : 'hello'
        }]
        const red = reducer(state, action)
        expect(red).toEqual([])
    })
})
