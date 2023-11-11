/* eslint-disable @typescript-eslint/no-type-alias */
// @flow


export enum SubscriptionLevelENUM {
    FREE = "FREE",
    PRO = "PRO",
    ENT = "ENT"
}

export interface IapiServerInfo {
    isUp: boolean;
    // apiServerObjects?: string[];
    message?: string;
}

export interface IStartLoadTransactionRequestBody {
    fileName: string
    rows: Array<Record<string, string>>
    headers: Array<string>
    acceptDublicates: boolean
}

export interface IStartLoadTransactionResponse {
    transactionID: string;
}

export interface IStartLoadTransaction {
    transactionID: string;
    message?: string;
    warning?: string | any;
}

export interface IloadDataRequestBody {
    fileName: string,
    rows: Array<Record<string, string>>,
    serverURL: string
}

interface IloadDataRequestOptionalResponse {
    ThreeEdgesObjects: string;
    ThreeEdgesRelationships: string;
}

export interface IEndLoadTransactionRequest {
    message?: string
}
