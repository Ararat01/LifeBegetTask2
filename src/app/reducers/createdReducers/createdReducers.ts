import { createFeatureSelector, createSelector } from "@ngrx/store"
import { albumModelNg } from "../albums"
import { logedUser } from "../login"
import { postModelNg } from "../posts"
import { userModelNg } from "../users"

const featureSelector1 = createFeatureSelector<userModelNg>('users')

export const userSelector = createSelector(
    featureSelector1,
    state => state.users
)

const featureSelector2 = createFeatureSelector<postModelNg>('posts')

export const postSelector = createSelector(
    featureSelector2,
    state => state.posts
)

const featureSelector3 = createFeatureSelector<logedUser>('logedUser')

export const loginSelector = createSelector(
    featureSelector3,
    state => state.user
)

const featureSelector4 = createFeatureSelector<albumModelNg>('albums')


export const loginSelectorUser = createSelector(
    featureSelector3,
    state => state.isUserLoged
)

export const albumSelector = createSelector(
    featureSelector4,
    state => state.albums
)
