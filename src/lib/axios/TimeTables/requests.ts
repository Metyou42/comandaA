import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import {
    IGetSubjectInTimeTable,
    IGetTimeTable
} from './types';
import Cookies from "js-cookie";
import {IMessage, ISubjectInTimeTable} from "../types";

const timeTablesUrl = `${REACT_APP_BACKEND_URL}/api/TimeTables`;

export const setSubjectInTimeTable = async (
 position: number, 
 day: number, 
 isEveryWeek: boolean, 
 isNumerator: boolean, 
 description: string, 
 type: number,
    lecturerId: number,
    subjectId: number
): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${timeTablesUrl}/SetSubjectInTimeTable`,
        {
            position,
            day,
            isEveryWeek,
            isNumerator,
            description,
            type,
            lecturerId,
            subjectId
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

export const getSubjectInTimeTable = async (id: number): Promise<ISubjectInTimeTable> => {
    const { data, status } = await axios.get<IGetSubjectInTimeTable>(
        `${timeTablesUrl}/GetById?id=${id}`,
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

    return data.data as ISubjectInTimeTable;
};

export const getTimeTable = async (): Promise<ISubjectInTimeTable[]> => {
    const { data, status } = await axios.get<IGetTimeTable>(
        `${timeTablesUrl}/GetByUser`,
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

    return data.data as ISubjectInTimeTable[];
};

export const deleteSubjectInTimeTable = async (id: number): Promise<boolean> => {
    const { data, status } = await axios.delete<IMessage>(
        `${timeTablesUrl}/DeleteSubjectInTimeTable?id=${id}`,
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