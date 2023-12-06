import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import {IGetClassGroup} from './types';
import Cookies from "js-cookie";
import {IClassGroup, IMessage} from "../types";

const classGroupUrl = `${REACT_APP_BACKEND_URL}/api/ClassGroups`;

export const createClassGroup = async (subGroup: string): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${classGroupUrl}/Create`,
        {
            subGroup
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
        throw new Error("Invalid login");
    }

    return true
}

export const getClassGroupByUser = async (): Promise<IClassGroup> => {
    const { data, status } = await axios.get<IGetClassGroup>(
        `${classGroupUrl}/Get`,
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

    return data.data as IClassGroup;
};

export const addToGroup = async (studentId: number): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${classGroupUrl}/AddToGroup`,
        {
            studentId,
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

export const removeFromGroup = async (studentId: number): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${classGroupUrl}/RemoveFromGroup`,
        {
            studentId,
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

export const changeOwnerGroup = async (studentId: number): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${classGroupUrl}/ChangeOwner`,
        {
            studentId,
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

export const setRoleGroup = async (studentId: number, role: number): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${classGroupUrl}/SetRole`,
        {
            studentId,
            role
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


