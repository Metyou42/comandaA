/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {IMessage, IUser} from "../types";

export interface IGetUser extends IMessage {
    data: IUser
}