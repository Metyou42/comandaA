import React from "react";
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

import {
    BlockFlex,
} from "./styled";
import { TextField } from "@mui/material";

export function Search(): React.ReactElement {
    const [alignment, setAlignment] = React.useState<"students" | "teachers" | "subjects">('students');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: "students" | "teachers" | "subjects",
    ) => {
        setAlignment(newAlignment);
    };


    // https://mui.com/material-ui/react-table/#custom-pagination-options
    const getTale = () => {
        if (alignment === "students") {
            return (
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Маштак Денис Олегович</TableCell>
                            <TableCell>ІПЗ - 21/2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Маштак Денис Олегович</TableCell>
                            <TableCell>ІПЗ - 21/2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Маштак Денис Олегович</TableCell>
                            <TableCell>ІПЗ - 21/2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )
        } else if (alignment === "teachers") {
            return (
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Прикладна математика</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Прикладна математика</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Прикладна математика</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )
        } else {
            return (
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Максименко Лідія Анатолівна</TableCell>
                            <TableCell>maksymenko.l@lpnu.ua</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Максименко Лідія Анатолівна</TableCell>
                            <TableCell>maksymenko.l@lpnu.ua</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Максименко Лідія Анатолівна</TableCell>
                            <TableCell>maksymenko.l@lpnu.ua</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )
        }
    }

    return (
        <MainBackGround>
            <PanelHeader />
            <MainContainer>
                <BlockFlex>
                    <TextField
                        required
                        id="outlined-required"
                        label="Search"
                        placeholder="Search"
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
