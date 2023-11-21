/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {ILecturer, IMessage} from "../types";

export interface IGetLecturer extends IMessage {
    data: ILecturer
}

export interface IGetLecturers extends IMessage {
    data: ILecturer[]
}