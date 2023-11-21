/* eslint-disable @typescript-eslint/no-type-alias */
// @flow

export interface IMessage {
    httpCode: number,
    status: string,
    displayMessage: string,
    additionalMessages: [
        string
    ]
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

export interface IUserView {
    id: number,
    firstName: string,
    lastName: string,
    avatar: string,
    nickName: string,
}

export interface IClassGroup {
    id: number,
    specialty: string,
    year: number,
    subgroup: string,
    students: IStudent[]
}

export interface IStudent {
    id: number,
    Name: string, 
    Surname: string, 
    Patronymic: string, 
    Email: string, 
    roleInGroup: number,
    educationalInstitution: IEducationalInstitution 
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

export interface ISubjectNote {
    id: number,
  text: string,
  type: number,
  isPersonal: boolean,
  date: Date,
  status: number,
  subjectInTimeTable: ISubjectInTimeTable
}

export interface ISubjectInTimeTable {
    id: number,
  position: number,
  day: number,
  isEveryWeek: boolean,
  isNumerator: boolean,
  description: string,
  type: number,
  lecturer: ILecturerForSubject
  subject: ISubjectForLecturer
}

