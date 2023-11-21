/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

import {IMessage} from "../types";

export interface ILogin extends IMessage {
    data: string
}