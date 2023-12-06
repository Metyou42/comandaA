import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import {
    IGetUser
} from './types';
import Cookies from "js-cookie";
import {IMessage, IUser} from "../types";

const usersUrl = `${REACT_APP_BACKEND_URL}/api/Users`;

export const getUser = async (): Promise<IUser> => {
    const { data, status } = await axios.get<IGetUser>(
        `${usersUrl}/Get`,
        {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Not found");
    }

    if (!data.data) {
        throw new Error("Data not found");
    }

    return data.data as IUser;
};

export const getUserById = async (id: string): Promise<IUser> => {
    const { data, status } = await axios.get<IGetUser>(
        `${usersUrl}/GetById?id=${id}`,
        {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Not found");
    }

    if (!data.data) {
        throw new Error("Data not found");
    }

    return data.data as IUser;
};

export const changeUserAvatar = async (): Promise<boolean> => { 
    const { data, status } = await axios.put<IMessage>(
        `${usersUrl}/ChangeAvatar`,
        {
        },
        {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Not found");
    }

    return true;
}; //TODO: File send

export const editUser = async (nickName: string): Promise<boolean> => {
    const { data, status } = await axios.put<IMessage>(
        `${usersUrl}/Edit`,
        {
            nickName
        },
        {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Not found");
    }

    return true;
};