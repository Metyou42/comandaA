import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import {
    IGetSubjectNote,
    IGetSubjectsNotes
} from './types';
import Cookies from "js-cookie";
import {IMessage, ISubjectNote} from '../types';

const subjectsNotesUrl = `${REACT_APP_BACKEND_URL}/api/SubjectsNotes`;


export const createSubjectNote = async (
    text: string,
    type: number, 
    isPersonal: boolean,
    date: Date,
    subjectInTimeTableId: number
): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${subjectsNotesUrl}/Create`,
        {
            text,
            type,
            isPersonal,
            date,
            subjectInTimeTableId
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

export const getDeadLinesArchive = async (): Promise<ISubjectNote[]> => {
    const { data, status } = await axios.get<IGetSubjectsNotes>(
        `${subjectsNotesUrl}/GetDeadLinesArchive`,
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

    return data.data as ISubjectNote[];
};

export const getDeadLines = async (): Promise<ISubjectNote[]> => {
    const { data, status } = await axios.get<IGetSubjectsNotes>(
        `${subjectsNotesUrl}/GetDeadlines`,
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

    return data.data as ISubjectNote[];
};

export const getSubjectsNotes = async (): Promise<ISubjectNote[]> => {
    const { data, status } = await axios.get<IGetSubjectsNotes>(
        `${subjectsNotesUrl}/GetByUser`,
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

    return data.data as ISubjectNote[];
};

export const getSubjectNote = async (id: number): Promise<ISubjectNote> => {
    const { data, status } = await axios.get<IGetSubjectNote>(
        `${subjectsNotesUrl}/GetById?id=${id}`,
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

    return data.data as ISubjectNote;
};

export const updateSubjectNote = async (
    id: number,
    text: string,
    date: Date
): Promise<boolean> => {
    const { data, status } = await axios.put<IMessage>(
        `${subjectsNotesUrl}/Update`,
        {
            id,
            text,
            date
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

export const deleteSubjectNote = async (id: number): Promise<boolean> => {
    const { data, status } = await axios.delete<IMessage>(
        `${subjectsNotesUrl}/Delete?id=${id}`,
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

export const changeDeadLineStatus = async (id: number, deadLineStatus: number): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${subjectsNotesUrl}/ChangeDeadLineStatus`,
        {
            id,
            status: deadLineStatus
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