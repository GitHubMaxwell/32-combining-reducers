import uuid from 'uuid/v1';

export const categoryCreate = category => {
    // console.log('category in actions.js: ',category)
    category.id = uuid();
    category.date = new Date;
    return {
        type:'CATEGORY_CREATE',
        payload : category,
    }
}

export const categoryUpdate = category => ({
    type: 'CATEGORY_UPDATE',
    payload: category,
})

export const categoryDestroy = category => ({
    type:'CATEGORY_DESTROY',
    payload : category,
})

export const categoryTest = () => ({
    type:'CATEGORY_TEST',
})