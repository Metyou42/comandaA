/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable flowtype/require-valid-file-annotation */
import bcryptjs from 'bcryptjs';
import sha256 from 'crypto-js/sha256';
// @flow

export const hashCode = async (value) => {
    const salt = await bcryptjs.genSaltSync(10);
    return await bcryptjs.hash(value, salt);
}

export const hashCodeSHA256 = (value) => {
    return sha256(value);
}

export const compareHash = async (originalPassword, hashedPassword) =>
{
    return await bcryptjs.compare(originalPassword, hashedPassword);
}

export const base64_encode = (s) => {
    return btoa(unescape(encodeURIComponent(s)));
}

export const base64_decode = (s) => {
    return decodeURIComponent(escape(atob(s)));
}

export const generateRandomString = (length = 10) => Math.random().toString(20).slice(2, length +2);

export const getCookieDomain = () =>
{
    if (window.location.hostname.includes("3edges.io")) {
        return window.location.hostname.includes("qa.3edges.io") ? ".qa.3edges.io" : ".3edges.io"
    } else {
        return window.location.hostname
    }
}

export const isEmpty = (value): boolean => {
    if (
        !value ||
        value === "" ||
        value.length === 0 ||
        value === null ||
        isObjectEmpty(value) ||
        value === undefined
    ) {
        return true;
    }

    return false;
};

const isObjectEmpty = (obj): boolean => {
    for(const prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
};

export const isNotEmpty = (value): boolean => !isEmpty(value);

export type ArrayElement<ArrayType extends readonly unknown[]> =
    // eslint-disable-next-line @typescript-eslint/no-type-alias
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
