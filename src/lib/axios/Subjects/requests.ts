import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import {
} from './types';
import Cookies from "js-cookie";
import {ISubject, IMessage} from "../types";
import {IGetSubject, IGetSubjects} from "../Subjects/types";

const subjectsUrl = `${REACT_APP_BACKEND_URL}/api/Subjects`;

export const getSubjectById = async (id: string): Promise<ISubject> => {
    const { data, status } = await axios.get<IGetSubject>(
        `${subjectsUrl}/GetById?id=${id}`,
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

    return data.data as ISubject;
};
export const getSubjectByUser = async (): Promise<ISubject[]> => {
    const { data, status } = await axios.get<IGetSubjects>(
        `${subjectsUrl}/GetByUser`,
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

    return data.data as ISubject[];
};
export const createSubject = async (
    name: string,
    description: string,
): Promise<boolean> => {

    const { data, status } = await axios.post<IMessage>(
        `${subjectsUrl}/Create`,
        {
            name,
            description
        },
        {
            headers: {
                "Content-Type": "application/json",
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

export const updateSubject = async (
    id: string,
    name: string,
    description: string,
): Promise<boolean> => {

    const { data, status } = await axios.put<IMessage>(
        `${subjectsUrl}/Update`,
        {
            id,
            name,
            description
        },
        {
            headers: {
                "Content-Type": "application/json",
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