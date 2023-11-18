/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

export interface ILogin {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ],
    data: string
}

export interface IGetUser {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ],
    data: IUser
}

export interface IUser {
    id: number,
    firstName: string, 
    lastName: string,
    universityEmail: string,
    avatar: string,
    university: string,
    group: string,
    year: number,
    nickName: string,
    special: string
}