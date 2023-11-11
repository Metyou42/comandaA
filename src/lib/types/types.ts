/* eslint-disable flowtype/no-types-missing-file-annotation */
export interface JwksOptions {
    strictSsl?: boolean;
    jwksUri: string;
    idpUrl: string;
    REACT_APP_PKEY_COOKIE_NAME: string;
}

export interface SigningKey {
    kid: string;
    nbf: string;
    publicKey?: string;
    rsaPublicKey?: string;
}

export interface TokenValidatorOptions {
    iatTtl?: number;
    clientId: string;
}

interface NiamUser {
    _id: string;
    email: string;
    mobilePhone?: string;
    address?: string;
    country?: string;
    createDateTime?: string;
    isVerified: boolean;
    subtype: string;
}

export interface IdToken extends NiamUser {
    sub: string;
    at_hash?: string;
    rt_hash?: string;
    auth_time?: number;
    aud: string | string[];
    azp?: string;
    exp: number;
    iat: number;
    iss: string;
}

export interface AccessToken extends NiamUser {
    active: boolean;
    sub: string;
    iat: number;
    azp?: string;
    auth_time?: number;
    exp: number;
    aud?: string | string[];
    client_id: string;
    scope: string;
    iss: string;
    token_type: string;
}

export interface IUser {
    sub: string;
    subtype: string;
}
