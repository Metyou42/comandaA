/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {IMessage, ISubjectInTimeTable} from "../types";


export interface IGetSubjectInTimeTable extends IMessage {
    data: ISubjectInTimeTable
}

export interface IGetTimeTable extends IMessage {
    data: ISubjectInTimeTable[]
}