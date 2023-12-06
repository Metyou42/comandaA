import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    BlockFlex,
} from "./styled";
import { IconButton, Menu, MenuItem, TextField } from "@mui/material";
import { getSearchLecturer, getSearchSubject, getSearchUsers } from "lib/axios/Search/requests";
import { ILecturerForSubject, ISubjectForLecturer, IUserView } from "lib/axios/types";
import { toastError } from "components/Toastify";

export function Search(): React.ReactElement {
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const [alignment, setAlignment] = React.useState<"students" | "teachers" | "subjects">('students');
    const [searchWord, setSearchWord] = React.useState<string>("");
    const [data, satData] = React.useState<IUserView[] | ILecturerForSubject[] | ISubjectForLecturer[]>([]);


    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: "students" | "teachers" | "subjects",
    ) => {
        if (newAlignment !== alignment) {
            setAlignment(newAlignment);
        }
    };

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };


    // const handleDelete = (id: string) => {

    //     setAnchorEl(null);
    // };

    const fetchData = async () => {
        if (alignment === "students") {
            try {
                const dataRes = await getSearchUsers(page, rowsPerPage, searchWord)
                satData(dataRes)
            } catch (error) {
                console.error('Error fetching students data:', error);
                toastError(error.message)
            }
        } else if (alignment === "teachers") {
            try {
                const dataRes = await getSearchLecturer(page, rowsPerPage, searchWord)
                satData(dataRes)
            } catch (error) {
                console.error('Error fetching teachers data:', error);
                toastError(error.message)
            }
        } else if (alignment === "subjects") {
            try {
                const dataRes = await getSearchSubject(page, rowsPerPage, searchWord)
                satData(dataRes)
            } catch (error) {
                console.error('Error fetching subjects data:', error);
                toastError(error.message)
            }
        }
    }

    const getTale = () => {
        if (alignment === "students") {
            return (
                <Table>
                    <TableBody>
                        {data.map((student) => (
                            <TableRow>
                                <TableCell>{`${student.firstName} ${student.lastName}`}</TableCell>
                                <TableCell>КБ - 49</TableCell>
                                {/* <TableCell align='right'>
                                    <IconButton
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon
                                            sx={{
                                                fontSize: 36,
                                                color: "white"
                                            }}
                                        />
                                    </IconButton>
                                </TableCell>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Видалити</MenuItem>
                                    <MenuItem onClick={handleClose}>Змніити роль</MenuItem>
                                    <MenuItem onClick={handleClose}>Назанчити власником</MenuItem>
                                </Menu> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
        } else if (alignment === "teachers") {
            return (
                <Table>
                    <TableBody>
                        {data.map((teacher) => (
                            <TableRow>
                                <TableCell>{`${teacher.name} ${teacher.surname} ${teacher.patronymic}`}</TableCell>
                                <TableCell>{teacher.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
        } else {
            return (
                <Table>
                    <TableBody>
                        {data.map((subject) => (
                            <TableRow>
                                <TableCell>{subject.name}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
        }
    }

    useEffect(() => {
        fetchData()
    }, [searchWord, page, rowsPerPage]);

    useEffect(() => {
        setSearchWord("")
    }, [alignment]);

    useEffect(() => {
        if (searchWord === "") {
            fetchData()
        }
    }, [alignment]);

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <MainBackGround>
            <PanelHeader picked="Search" />
            <MainContainer>
                <BlockFlex>
                    <TextField
                        required
                        id="outlined-required"
                        label="Search"
                        placeholder="Search"
                        value={searchWord}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setSearchWord(event.target.value);
                        }}
                        sx={{
                            fontSize: "1.6vh",
                            width: "60%",
                        }}
                    />
                </BlockFlex>

                <BlockFlex>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="students" aria-label="students">
                            Students
                        </ToggleButton>
                        <ToggleButton value="teachers" aria-label="teachers">
                            Teachers
                        </ToggleButton>
                        <ToggleButton value="subjects" aria-label="subjects">
                            Subjects
                        </ToggleButton>
                    </ToggleButtonGroup>
                </BlockFlex>

                <BlockFlex>
                    <TableContainer>
                        {getTale()}
                    </TableContainer>
                </BlockFlex>

            </MainContainer>
        </MainBackGround>
    );
}
