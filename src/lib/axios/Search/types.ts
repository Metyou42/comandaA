/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {ILecturerForSubject, IMessage, ISubjectForLecturer, IUserView} from "../types";

export interface IGetSearchUsers extends IMessage {
    data: IUserView[]
}

export interface IGetSearchLecturers extends IMessage {
    data: ILecturerForSubject[]
}

export interface IGetSearchSubjects extends IMessage {
    data: ISubjectForLecturer[]
}