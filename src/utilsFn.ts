import CryptoJS from "crypto-js";
import { TokenValidator } from "lib";
import { CSVParseError } from "lib/types/customErrors";
import { IUser } from "lib/types/types";
import { base64_decode } from "utils";
import isURL from 'validator/lib/isURL';

export const isTrue = (value): any => {
    return (value && typeof value == "boolean") || value === "true" ? true : false
};

export const isFalse = (value): any => {
    return !isTrue(value)
};

export const encryptText = (value, secret = "x-secret"): any => CryptoJS.AES.encrypt(value, secret);

export const decryptText = (value, secret = "x-secret"): any => {
    const res = CryptoJS.AES.decrypt(value, secret);
    return res.toString(CryptoJS.enc.Utf8);
};

export const verifyToken = async (token): Promise<any> => {
    const tokenValidator = new TokenValidator(process.env.secret)
    return tokenValidator.verify(token)
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// export const selectedUser = (idTokenCookie: string): IUser => {
//     const payload = decodeToken(base64_decode(idTokenCookie))
//     const { subtype, sub } = payload
//     return { subtype, sub }
// }

export const rowFabric = (headersOfCSV: string): ((fileRow: string) => Record<string, string>) => {
    const splitHeadersOfCSV = headersOfCSV.split(",");

    return (fileRow) => {
        const splitRowOfCSV = fileRow.split(",");

        if (splitHeadersOfCSV.length !== splitRowOfCSV.length) {
            throw new CSVParseError('Invalid json')
        }

        // eslint-disable-next-line unicorn/prefer-object-from-entries
        const resObject = splitRowOfCSV.reduce((acc, cur, index) => {
            return { ...acc, [splitHeadersOfCSV[index]]: cur }
        }, {})

        return resObject
    }
}

export const toOrigin = (url: string): string => {
    if (!url) {
        return ""
    }

    const pathArray = url.split('/');
    const protocol = pathArray[0];
    const host = pathArray[2];
    const origin = protocol + '//' + host;

    if (!protocol || !host) {
        return url
    }

    return origin
};

export const validURL = (str: string): boolean => {
    if (str.startsWith("http://localhost:")) {
        return true
    }

    return isURL(str)
}

export const defineCountOfIterations = (csvLength: number, banchSize: number): void[] => {
    const template = [];
    const counts = Math.ceil(csvLength / banchSize)
    template.length = counts

    return template
}
