import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';

import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { MainBoxText, StyledPaperMui } from "./styled";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';


function createData(
  name: string,
  group: string,
) {
  return { name, group };
}

const rows = [
  createData('I need more bullet', "КБ-49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),
  createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),createData('I need more', "КБ49"),
];

export function List() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ minWidth: 650, maxHeight:640}}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.group}</TableCell>
              <TableCell align='right'>
              <IconButton>
                            <MoreVertIcon
                                sx={{
                                    fontSize: 36,
                                    color: "white"
                                }}
                            />
                        </IconButton>
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}


export function GroupList(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />
            <MainContainer>
                <MainBoxText>
                    Group
                </MainBoxText>
                {List()}
            </MainContainer>
        </MainBackGround>
    );
}


