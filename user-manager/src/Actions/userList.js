import * as types from '../Contants/userList';

export const allUser = () => {
    return {
        type: types.ALL_USER,
    }
}
export const addUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
}
export const delUser = (id) => {
    return {
        type: types.DEL_USER,
        id
    }
}
export const updateUser = (user) => {
    return {
        type: types.UPDATE_USER,
        user
    }
}
export const search = (key) => {
    return {
        type: types.SEARCH,
        key
    }
}