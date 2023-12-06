/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {IMessage, ISubjectNote} from "../types";

export interface IGetSubjectsNotes extends IMessage {
    data: ISubjectNote[]
}

export interface IGetSubjectNote extends IMessage {
    data: ISubjectNote
}