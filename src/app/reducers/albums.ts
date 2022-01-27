import { createAction, createReducer, on, props } from "@ngrx/store";
import { albumModel } from "../modules/albumModule/albums/ialbum";


export const allAlbums = createAction('[USER] get albums', props<{albumsArr: albumModel[]}>())


export interface albumModelNg {
    albums: albumModel[],
}


export const initStateOfUsers: albumModelNg = {
    albums: []
}


export const albumReducer = createReducer(
    initStateOfUsers,
    on(allAlbums, (state, { albumsArr }) => {
        return {    
            ...state,
            albums: albumsArr
        }
    })
)

