import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import {
    IGetLecturer, IGetLecturers
} from './types';
import Cookies from "js-cookie";
import {ILecturer, IMessage} from '../types';

const lecturersUrl = `${REACT_APP_BACKEND_URL}/api/Lecturers`;

export const getLecturerById = async (id: string): Promise<ILecturer> => {
    const { data, status } = await axios.get<IGetLecturer>(
        `${lecturersUrl}/GetById?id=${id}`,
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

    return data.data as ILecturer;
};
export const getLecturerByUser = async (): Promise<ILecturer[]> => {
    const { data, status } = await axios.get<IGetLecturers>(
        `${lecturersUrl}/GetByUser`,
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

    return data.data as ILecturer[];
};
export const createLecturer = async (
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    rank: string
): Promise<boolean> => {

    const { data, status } = await axios.post<IMessage>(
        `${lecturersUrl}/Create`,
        {
            name,
            surname,
            patronymic,
            email,
            rank
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

export const updateLecturer = async (
    id: string,
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    rank: string
): Promise<boolean> => {

    const { data, status } = await axios.put<IMessage>(
        `${lecturersUrl}/Update`,
        {
            id,
            name,
            surname,
            patronymic,
            email,
            rank
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
