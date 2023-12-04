import { REACT_APP_BACKEND_URL, REACT_APP_DATALOADER_URL } from 'environmentVariables';
import { CSVWarningDuplicates, LoadDataEror, StratLoadTransactionError } from 'lib/types/customErrors';
import axios from '../axios';
import {
    ILogin
} from './types';
import Cookies from "js-cookie";
import {IMessage} from "../types";
// import { IapiServerInfo, IEndLoadTransactionRequest, IloadDataRequest, IloadDataRequestBody, IloadDataRequestResponse, IStartLoadTransaction, IStartLoadTransactionRequestBody, IStartLoadTransactionResponse } from './types';

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

// export const startLoadTransactionRequest = async (apiServerUrl: string, accessToken: string, body: IStartLoadTransactionRequestBody): Promise<IStartLoadTransaction> => {
//     const res = {
//         message: null,
//         transactionID: null,
//         warning: null
//     }

//     try {
//         const { data, status } = await axios.post<IStartLoadTransactionResponse>(
//             `${REACT_APP_DATALOADER_URL}/startloadtransaction`,
//             {
//                 serverURL: apiServerUrl,
//                 nbRows: body.rows.length,
//                 entityName: body.fileName,
//                 headers: body.headers,
//                 action: body.action,
//                 acceptDublicates: body.acceptDublicates
//             },
//             {
//                 headers: {
//                     "Access-Control-Allow-Origin": "*",
//                     Authorization: `Bearer ${accessToken}`
//                 }
//             },
//         );

//         if (status === 200 && data && data.transactionID) {
//             res.transactionID = data.transactionID
//         } else {
//             throw new StratLoadTransactionError("Start load trnsaction Error: missing transaction_id")
//         }
//     } catch (error) {
//         if(error instanceof StratLoadTransactionError) {
//             res.message = error.message
//         } else if (error?.response?.data?.message) {
//             if (error.response.data.message.startsWith("CSV ERROR:")) {
//                 res.message = error.response.data.message.replace('CSV ERROR:','')
//             } else if (error.response.data.message.startsWith("CSV WARNING")) {
//                 res.warning = new CSVWarningDuplicates(`Load may result in the creation of duplicate nodes`)
//             } else {
//                 res.message = `Start load trnsaction Error: ${error.response.data.message}`
//             }
//         } else {
//             console.log(error);
//             res.message = `Start load trnsaction Error: ${error.message}`
//         }
//     }

//     return res
// }

// export const loadDataRequest = async (accessToken: string, transactionID: string, body: IloadDataRequestBody): Promise<IloadDataRequest> => {
//     const res = {
//         message: null,
//         data: null
//     }

//     try {
//         const { data, status } = await axios.post<IloadDataRequestResponse>(
//             `${REACT_APP_DATALOADER_URL}/load`, body, {
//                 headers: {
//                     "Access-Control-Allow-Origin": "*",
//                     Authorization: `Bearer ${accessToken}`,
//                     transactionid: `${transactionID}`
//                 }
//             },
//         );

//         if (status === 200 && data) {
//             res.data = data?.ThreeEdgesObjects ? data?.ThreeEdgesObjects : data?.ThreeEdgesRelationships;
//         } else {
//             throw new LoadDataEror("Load Data Error: missing body in response")
//         }
//     } catch (error) {
//         if(error instanceof LoadDataEror) {
//             res.message = error.message
//         } else if (error?.response?.data?.message) {
//             res.message = `Load Data Error: ${error.response.data.message}`
//         } else {
//             console.log(error);
//             res.message = `Load Data Error: ${error.message}`
//         }
//     }

//     return res
// }

// export const endLoadTransactionRequest = async (apiServerUrl: string, accessToken: string, transactionID: string): Promise<IEndLoadTransactionRequest> => {
//     const res = {
//         message: null
//     }

//     try {
//         await axios.post<void>(
//             `${REACT_APP_DATALOADER_URL}/endloadtransaction`,
//             {
//                 transactionID: transactionID,
//                 serverURL: apiServerUrl
//             },
//             {
//                 headers: {
//                     "Access-Control-Allow-Origin": "*",
//                     Authorization: `Bearer ${accessToken}`
//                 }
//             },
//         );
//     } catch (error) {
//         if (error?.response?.data?.message) {
//             res.message = `End load transaction Error: ${error.response.data.message}`
//         } else {
//             console.log(error);
//             res.message = `End load transaction Error: ${error.message}`
//         }
//     }

//     return res
// }
