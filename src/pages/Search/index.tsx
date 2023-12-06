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
import {ILecturerForSubject, IStudent, ISubjectForLecturer, IUserView} from "lib/axios/types";
import {toastError, toastSuccess} from "components/Toastify";
import {useHistory} from "react-router-dom";
import {addToGroup, removeFromGroup} from "../../lib/axios/ClassGroups/requests";

export function Search(): React.ReactElement {
    const history = useHistory();
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const [alignment, setAlignment] = React.useState<"students" | "lecturers" | "subjects">('students');
    const [searchWord, setSearchWord] = React.useState<string>("");
    const [data, satData] = React.useState<IUserView[] | ILecturerForSubject[] | ISubjectForLecturer[]>([]);


    const [anchorEl, setAnchorEl] = React.useState<{ [key: number]: null | HTMLElement }>({});
    const open = Boolean(anchorEl);

    const [users, setUsers] = React.useState<IStudent[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setAnchorEl((prev) => ({ ...prev, [id]: event.currentTarget }));
    };

    const handleOnClose = (id: number) => {
        setAnchorEl((prev) => ({ ...prev, [id]: null }));
    };

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: "students" | "lecturers" | "subjects",
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
        } else if (alignment === "lecturers") {
            try {
                const dataRes = await getSearchLecturer(page, rowsPerPage, searchWord)
                satData(dataRes)
            } catch (error) {
                console.error('Error fetching lecturers data:', error);
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
    
    const handleAddToGroup = async (id: number) => {
        try {
            await addToGroup(Number(id))
            setAnchorEl((prev) => ({ ...prev, [id]: null }));
            toastSuccess("Корситувача було додано")
            await fetchData();
        } catch (error) {
            console.error('Error deelete user:', error);
            toastError(error.message)
        }
    };

    const getTale = () => {
        if (alignment === "students") {
            return (
                <Table>
                    <TableBody>
                        {data.map((student) => (
                            <TableRow>
                                <TableCell>{`${student.firstName} ${student.lastName}`}</TableCell>
                                <TableCell>{`${student.group}`}</TableCell>
                                <TableCell align='right'>
                                    <IconButton
                                        onClick={(event) => {
                                            handleClick(event, student.id)
                                        }}
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
                                    id={`basic-menu-${student.id}`}
                                    key={student.id}
                                    anchorEl={anchorEl[student.id]}
                                    open={Boolean(anchorEl[student.id])}
                                    onClose={() => handleOnClose(student.id)}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={() => {
                                        handleAddToGroup(student.id)
                                    }}>
                                        Добавити у групу
                                    </MenuItem>
                                    <MenuItem onClick={() => {
                                        history.push("/profile?id=" + student.id)
                                    }}>
                                        Відкрити профіль
                                    </MenuItem>
                                </Menu>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
        } else if (alignment === "lecturers") {
            return (
                <Table>
                    <TableBody>
                        {data.map((lecturer) => (
                            <TableRow>
                                <TableCell>{`${lecturer.name} ${lecturer.surname} ${lecturer.patronymic}`}</TableCell>
                                <TableCell>{lecturer.email}</TableCell>
                                <TableCell align='right'>
                                    <IconButton
                                        onClick={(event) => {
                                            handleClick(event, lecturer.id)
                                        }}
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
                                    id={`basic-menu-${lecturer.id}`}
                                    key={lecturer.id}
                                    anchorEl={anchorEl[lecturer.id]}
                                    open={Boolean(anchorEl[lecturer.id])}
                                    onClose={() => handleOnClose(lecturer.id)}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={() => {
                                        history.push("/lecturer?id=" + lecturer.id)
                                    }}>
                                        Відкрити лектора
                                    </MenuItem>
                                </Menu>
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
                                <TableCell align='right'>
                                    <IconButton
                                        onClick={(event) => {
                                            handleClick(event, subject.id)
                                        }}
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
                                    id={`basic-menu-${subject.id}`}
                                    key={subject.id}
                                    anchorEl={anchorEl[subject.id]}
                                    open={Boolean(anchorEl[subject.id])}
                                    onClose={() => handleOnClose(subject.id)}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={() => {
                                        history.push("/subject?id=" + subject.id)
                                    }}>
                                        Відкрити предмет
                                    </MenuItem>
                                </Menu>
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
                        <ToggleButton value="lecturers" aria-label="lecturers">
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
