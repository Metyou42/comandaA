import { REACT_APP_BACKEND_URL } from 'environmentVariables';
import axios from '../axios';
import { IMessage } from "../types";
import Cookies from 'js-cookie';

const supportUrl = `${REACT_APP_BACKEND_URL}/api/Support`;

export const sendSupportMail = async (email: string, text: string): Promise<boolean> => {
    const { data, status } = await axios.post<IMessage>(
        `${supportUrl}/SendMail`,
        {
            email,
            text
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