/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {ISubject, IMessage} from "../types";

export interface IGetSubject extends IMessage {
    data: ISubject
}

export interface IGetSubjects extends IMessage {
    data: ISubject[]
}