import { categoryCreate, categoryDestroy, categoryUpdate } from '../../../src/action/category-actions.js'
import { expenseCreate, expenseDelete, expenseUpdate } from '../../../src/action/expense-actions.js'

describe('CATEGORY Action Creators', () => {

    it('categoryCreate', () => {
        const payload = { 
            name: 'expense', 
            price: 1 };
    
        const action = categoryCreate(payload);
    
        expect(action.type).toBe('CATEGORY_CREATE');
        expect(action.payload.name).toBe(payload.name);
        expect(action.payload.price).toBe(payload.price);

    })

    it('categoryDestroy', () => {
        const payload = { 
            name: 'expense', 
            price: 1 };
    
        const action = categoryDestroy(payload);
    
        expect(action.type).toBe('CATEGORY_DESTROY');
        expect(action.payload.name).toBe(payload.name);
        expect(action.payload.price).toBe(payload.price);

    })

    it('categoryUpdate', () => {
        const payload = { 
            name: 'expense', 
            price: 1 };
    
        const action = categoryUpdate(payload);
    
        expect(action.type).toBe('CATEGORY_UPDATE');
        expect(action.payload.name).toBe(payload.name);
        expect(action.payload.price).toBe(payload.price);
    })
})

describe('EXPENSE Action Creators', () => {

    it('expenseCreate', () => {
        const payload = { 
            name: 'expense', 
            price: 1 };
    
        const action = expenseCreate(payload);
    
        expect(action.type).toBe('EXPENSE_CREATE');
        expect(action.payload.name).toBe(payload.name);
        expect(action.payload.price).toBe(payload.price);
    })

    it('expenseDelete', () => {
        const payload = { 
            name: 'test', 
            price: 1 };
    
        const action = expenseDelete(payload);
    
        expect(action.type).toBe('EXPENSE_DELETE');
        expect(action.payload.name).toBe(payload.name);
        expect(action.payload.price).toBe(payload.price);
    })

    it('expenseUpdate', () => {
        const payload = { 
            name: 'test', 
            price: 1 };

        const action = expenseUpdate(payload);

        expect(action.type).toBe('EXPENSE_UPDATE');
        expect(action.payload.name).toBe(payload.name);
        expect(action.payload.price).toBe(payload.price);
    })
})