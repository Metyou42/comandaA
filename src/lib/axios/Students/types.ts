/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {IMessage, IClassGroup} from "../types";


export interface IGetStudents extends IMessage {
    data: IClassGroup
}