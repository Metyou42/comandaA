import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import Cookies from "js-cookie";
import {IClassGroup, IMessage, IStudent} from "../types";
import {IGetClassGroup} from "../ClassGroups/types";
import {IGetStudents} from "./types";

const studentsUrl = `${REACT_APP_BACKEND_URL}/api/Students`;

export const isUserHaveAdminAccess = async (): Promise<boolean> => {
    const { data, status } = await axios.get<IMessage>(
        `${studentsUrl}/IsHaveAccess`,
        {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode === 400) {
        return false;
    }

    return true;
};

export const getClassGroupStudentsByUser = async (): Promise<IStudent[]> => {
    const { data, status } = await axios.get<IGetStudents>(
        `${REACT_APP_BACKEND_URL}/api/ClassGroups/Get`,
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

    return data.data.students as IStudent[];
};

export const isUserOwner = async (ownershipId: number, ownershipType: number): Promise<boolean> => {
    const { data, status } = await axios.get<IMessage>(
        `${studentsUrl}/IsOwner?ownershipId=${ownershipId}&ownershipType=${ownershipType}`,
        {
            headers: {
                Authorization: `Bearer ${Cookies.get('accessToken')}`,
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode === 400) {
        return false;
    }

    return true;
};