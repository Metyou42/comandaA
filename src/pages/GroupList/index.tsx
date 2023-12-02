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
import { getClassGroups } from 'lib/axios/requests';
import { useEffect } from 'react';

// function createData(
//   name: string,
//   group: string,
// ) {
//   return { name, group };
// }

// const rows = [
//   createData('I need more bullet', "КБ-49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
//   createData('I need more', "КБ49"),
// ];

interface UsersGroupItem {
  name: string,
  group: string
}

export function GroupList(): React.ReactElement {
  const [users, setUsers] = React.useState<UsersGroupItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classGroups = await getClassGroups();
        const students = []

        classGroups.students.forEach(student => {
          students.push({
            name: `${student.name} ${student.surname} ${student.patronymic}`,
            group: student.classGroup
          })
        });

        setUsers(students)
      } catch (error) {
        console.error('Error fetching ClassGroups data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainBackGround>
      <PanelHeader />
      <MainContainer>
        <MainBoxText>
          Group
        </MainBoxText>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ minWidth: 650, maxHeight: 640 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {users.map((row) => (
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
      </MainContainer>
    </MainBackGround>
  );
}


