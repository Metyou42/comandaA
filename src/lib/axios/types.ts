/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

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

export interface IMessage {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ]
}

export interface ILogin extends IMessage {
    data: string
}

export interface IGetUser extends IMessage {
    data: IUser
}

export interface IGetLecturer extends IMessage {
    data: ILecturer
}

export interface IGetSubject extends IMessage {
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