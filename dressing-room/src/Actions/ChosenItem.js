import * as types from '../Contants/ChosenItem';

export const addItem = (item) => {
    return {
        type: types.ADD_ITEM,
        item
    }
}

export const delItem = (item) => {
    return {
        type: types.DEL_ITEM,
        item
    }
}