/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

export interface ILogin {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ],
    data: string
}

export interface IGetUser {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ],
    data: IUser
}

export interface IUser {
    id: number,
    firstName: string, 
    lastName: string,
    universityEmail: string,
    avatar: string,
    university: string,
    group: string,
    year: number,
    nickName: string,
    special: string
}

export interface IGetLecturer {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ],
    data: ILecturer
}

export interface IGetSubject {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ],
    data: ISubject
}

export interface ILecturer {
    id: number,
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    rank: string,
    educationalInstitution: IEducationalInstitution,
    subjects: ISubjectForLecturer[]
}

export interface ISubjectForLecturer {
    id: number,
    name: string,
    description: string
}

export interface ISubject {
    id: number,
    name: string,
    description: string
    lecturers: ILecturerForSubject[]
}

export interface ILecturerForSubject {
    id: number,
    name: string,
    surname: string,
    patronymic: string,
    email: string,
}

export interface IEducationalInstitution {
    id: number,
    name: string
}