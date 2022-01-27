import { createAction, createReducer, on, props } from "@ngrx/store";
import { userModel } from "../iuser";


export const allUsers = createAction('[USER] get users', props<{usersArr: userModel[]}>())


export interface userModelNg {
    users: userModel[],
}


export const initStateOfUsers: userModelNg = {
    users: []
}


export const userReducer = createReducer(
    initStateOfUsers,
    on(allUsers, (state, { usersArr }) => {
        return {    
            ...state,
            users: usersArr
        }
    })
)

