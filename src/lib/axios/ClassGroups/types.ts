/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {IMessage, IClassGroup} from "../types";


export interface IGetClassGroup extends IMessage {
    data: IClassGroup
}