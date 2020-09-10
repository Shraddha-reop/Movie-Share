import { Action } from '@ngrx/store';

export enum AppActionType {
    FETCH_USER_DATA = 'Activity: FETCH_USER_DATA',
    FETCH_USER_DATA_SUCCESS = 'Activity: FETCH_USER_DATA_SUCCESS',
    FETCH_USER_DATA_ERROR = 'Activity: FETCH_USER_DATA_ERROR',
    IS_LOGGED_IN = 'Activity: IS_LOGGED_IN',
    IS_LOGGED_IN_SUCCESS = 'Activity: IS_LOGGED_IN_SUCCESS',
    SAVE_SHARED_LINKS = 'Activity: SAVE_SHARED_LINKS',
    SAVE_SHARED_LINKS_SUCCESS = 'Activity: SAVE_SHARED_LINKS_SUCCESS',
    SAVE_SHARED_LINKS_ERROR = 'Activity: SAVE_SHARED_LINKS_ERROR',
    DELETE_LINK = 'Activity: DELETE_LINK',
    DELETE_LINK_SUCCESS = 'Activity: DELETE_LINK_SUCCESS',
    DELETE_LINK_ERROR = 'Activity: DELETE_LINK_ERROR',
    UPDATE_LINK = 'Activity: UPDATE_LINK',
    UPDATE_LINK_SUCCESS = 'Activity: UPDATE_LINK_SUCCESS',
    UPDATE_LINK_ERROR = 'Activity: UPDATE_LINK_SUCCESS',
    IS_ERROR = 'Activity: IS_ERROR',
    USER_LOGIN = 'Activity: USER_LOGIN',
    USER_LOGIN_SUCCESS = 'Activity: USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR = 'Activity: USER_LOGIN_ERROR'
}

export class FetchUserData implements Action {
    readonly type = AppActionType.FETCH_USER_DATA;
    constructor() { }
}

export class FetchUserDataSuccess implements Action {
    readonly type = AppActionType.FETCH_USER_DATA_SUCCESS;
    constructor(public payload: any) { }
}

export class FetchUserDataError implements Action {
    readonly type = AppActionType.FETCH_USER_DATA_ERROR;
    constructor(public error: any) { }
}

export class IsLoggedIn implements Action {
    readonly type = AppActionType.IS_LOGGED_IN;
    constructor(public isLoggedIn: boolean) { }
}

export class SaveSharedLinks implements Action {
    readonly type = AppActionType.SAVE_SHARED_LINKS;
    constructor(public requestBody: any) { }
}

export class SaveSharedLinksSuccess implements Action {
    readonly type = AppActionType.SAVE_SHARED_LINKS_SUCCESS;
    constructor(public payload: any) { }
}

export class SaveSharedLinksError implements Action {
    readonly type = AppActionType.SAVE_SHARED_LINKS_ERROR;
    constructor(public error: any) { }
}

export class DeleteLink implements Action {
    readonly type = AppActionType.DELETE_LINK;
    constructor(public id: any) { }
}

export class DeleteLinkSuccess implements Action {
    readonly type = AppActionType.DELETE_LINK_SUCCESS;
    constructor(public payload: any) { }
}

export class DeleteLinkError implements Action {
    readonly type = AppActionType.DELETE_LINK_ERROR;
    constructor(public error: any) { }
}

export class UpdateLink implements Action {
    readonly type = AppActionType.UPDATE_LINK;
    constructor(public id: any, public requestBody: any) { }
}

export class UpdateLinkSuccess implements Action {
    readonly type = AppActionType.UPDATE_LINK_SUCCESS;
    constructor(public payload: any) { }
}

export class UpdateLinkError implements Action {
    readonly type = AppActionType.UPDATE_LINK_ERROR;
    constructor(public error: any) { }
}

export class IsError implements Action {
    readonly type = AppActionType.IS_ERROR;
    constructor(public err: any) { }
}

export class UserLogin implements Action {
    readonly type = AppActionType.USER_LOGIN;
    constructor(public username: any, public password: any) { }
}

export class UserLoginSuccess implements Action {
    readonly type = AppActionType.USER_LOGIN_SUCCESS;
    constructor(public payload: any) { }
}

export class UserLoginError implements Action {
    readonly type = AppActionType.USER_LOGIN_ERROR;
    constructor(public err: any) { }
}

export type AppAction =
    | FetchUserData
    | FetchUserDataSuccess
    | IsLoggedIn
    | SaveSharedLinks
    | SaveSharedLinksSuccess
    | SaveSharedLinksError
    | IsError
    | UserLogin
    | UserLoginSuccess
    | UserLoginError;