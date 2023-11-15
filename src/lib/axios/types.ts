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