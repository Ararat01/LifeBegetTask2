import { createAction, createReducer, on, props } from "@ngrx/store";
import { postModel } from "../modules/postsModule/posts/ipost";


export const allPosts = createAction('[USER] get posts', props<{postsArr: postModel[]}>())
export const editPost = createAction('[USER] post edited', props<{postEditedArr: postModel[]}>())


export interface postModelNg {
    posts: postModel[],
}


export const initStateOfUsers: postModelNg = {
    posts: []
}


export const postReducer = createReducer(
    initStateOfUsers,
    on(allPosts, (state, { postsArr }) => {
        return {    
            ...state,
            posts: postsArr
        }
    }),
    on(editPost, (state, { postEditedArr }) => {
        return {
            posts: postEditedArr
        }
    })
)

