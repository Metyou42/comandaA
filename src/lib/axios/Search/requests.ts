import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import {
    IGetSearchLecturers, IGetSearchSubjects, IGetSearchUsers
} from './types';
import Cookies from "js-cookie";
import {ILecturerForSubject, ISubjectForLecturer, IUserView} from "../types";

const searchUrl = `${REACT_APP_BACKEND_URL}/api/Search`;

export const getSearchUsers = async (pageNumber: number, pageSize: number, search: string): Promise<IUserView[]> => {
    const { data, status } = await axios.get<IGetSearchUsers>(
        `${searchUrl}/Users?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`,
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

    return data.data as IUserView[];
};

export const getSearchLecturer = async (pageNumber: number, pageSize: number, search: string): Promise<ILecturerForSubject[]> => {
    const { data, status } = await axios.get<IGetSearchLecturers>(
        `${searchUrl}/Lecturers?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`,
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

    return data.data as ILecturerForSubject[];
};

export const getSearchSubject = async (pageNumber: number, pageSize: number, search: string): Promise<ISubjectForLecturer[]> => {

    const { data, status } = await axios.get<IGetSearchSubjects>(
        `${searchUrl}/Subjects?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`,
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

    return data.data as ISubjectForLecturer[];
};