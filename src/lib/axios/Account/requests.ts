import { REACT_APP_BACKEND_URL, REACT_APP_DATALOADER_URL } from 'environmentVariables';
import { CSVWarningDuplicates, LoadDataEror, StratLoadTransactionError } from 'lib/types/customErrors';
import axios from '../axios';
import {
    ILogin
} from './types';
import Cookies from "js-cookie";
import { IMessage } from "../types";

const accountUrl = `${REACT_APP_BACKEND_URL}/api/Account`;

export const login = async (email: string, password: string): Promise<string> => {
    const { data, status } = await axios.post<ILogin>(
        `${accountUrl}/Login`,
        {
            email,
            password
        },
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return data.data as string
}

export const register = async (universityEmail: string, email: string, password: string): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${accountUrl}/Register`,
        {
            universityEmail,
            email,
            password
        },
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return true;
}

export const confirmRegister = async (email: string, universityEmail: string, token: number): Promise<boolean> => {
    const { data, status } = await axios.get<IMessage>(
        `${accountUrl}/ConfirmRegister?email=${email}&universityEmail=${universityEmail}&token=${token}`,
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return true;
}

export const forgotPassword = async (email: string): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${accountUrl}/ForgotPassword`,
        {
            email
        },
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return true;
}

export const confirmResetPassword = async (email: string, token: number): Promise<boolean> => {
    const { data, status } = await axios.get<IMessage>(
        `${accountUrl}/ResetPassword?email=${email}&token=${token}`,
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return true;
}

export const resetPassword = async (email: string, password: string, token: number): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${accountUrl}/ResetPassword`,
        {
            email,
            password,
            token
        },
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return true;
}

export const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${accountUrl}/ChangePassword`,
        {
            currentPassword,
            newPassword
        },
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
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

    return true;
}

export const changeEmail = async (newEmail: string): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${accountUrl}/ChangeEmail`,
        {
            newEmail
        },
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
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

    return true;
}

export const confirmChangeEmail = async (email: string, newEmail: string, token: number): Promise<boolean> => {
    const { data, status } = await axios.get<IMessage>(
        `${accountUrl}/ConfirmChangeEmail?email=${email}&newEmail=${newEmail}&token=${token}`,
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return true;
}

export const confirmNewEmail = async (email: string, newEmail: string, token: number): Promise<boolean> => {
    const { data, status } = await axios.get<IMessage>(
        `${accountUrl}/ConfirmNewEmail?email=${email}&newEmail=${newEmail}&token=${token}`,
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
            }
        },
    );

    if (!data) {
        throw new Error("Some error");
    }

    if (data.httpCode !== 200) {
        throw new Error("Invalid login");
    }

    return true;
}
