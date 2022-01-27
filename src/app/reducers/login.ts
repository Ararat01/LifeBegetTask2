import { createAction, createReducer, on, props } from "@ngrx/store";
import { userModel } from "../iuser";


export const login = createAction('[USER] login', props<{ userlog: userModel | undefined }>())
export const logout = createAction('[USER] logout')



export interface logedUser {
    user?: userModel,
    isuserloged: boolean
}


export const initStateOfUser: logedUser = {
    user: undefined,
    isuserloged: false
}

export const loginReducer = createReducer(
    initStateOfUser,
    on(login, (state, { userlog }) => ({
        ...state,
        user: userlog,
        isuserloged: true
    })),
    on(logout, state => ({
        ...state,
        user: undefined,
        isuserloged: false
    }))
)

