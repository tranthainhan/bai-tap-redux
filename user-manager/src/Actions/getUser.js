import * as types from '../Contants/getUser';

export const getUser = (user) => {
    return{ 
        type: types.GET_USER,
        user
    }
}
export const resetUserSelected = () => {
    return{ 
        type: types.RESET_USER_SELECTED,
    }
}