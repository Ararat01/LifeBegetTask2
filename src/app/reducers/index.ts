import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { albumModelNg, albumReducer } from './albums';
import { loginReducer, logedUser } from './login';
import { postModelNg, postReducer } from './posts';
import { userReducer, userModelNg } from './users';

export interface State {
  logedUser: logedUser,
  users: userModelNg,
  posts: postModelNg,
  albums: albumModelNg
}

export const reducers: ActionReducerMap<State> = {
  logedUser: loginReducer,
  users: userReducer,
  posts: postReducer,
  albums: albumReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
