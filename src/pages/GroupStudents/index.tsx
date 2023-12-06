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
import { Menu, MenuItem, Paper } from '@mui/material';
import { useEffect } from 'react';
import { getClassGroupStudentsByUser } from "../../lib/axios/Students/requests";
import { IStudent } from "../../lib/axios/types";
import { useHistory } from 'react-router-dom';
import {changeOwnerGroup, removeFromGroup, setRoleGroup} from 'lib/axios/ClassGroups/requests';
import { toastError, toastSuccess } from 'components/Toastify';

export function GroupStudents(): React.ReactElement {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const selectedPanel: "Group" = "Group";
  const [users, setUsers] = React.useState<IStudent[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnClose = (id: string) => {
    setAnchorEl(null);
  };


  const handleDelete = async (id: number) => {
    try {
      setAnchorEl(null);
      await removeFromGroup(Number(id))
      toastSuccess("Корситувача було видалено")
      await fetchData();
    } catch (error) {
      console.error('Error deelete user:', error);
      toastError(error.message)
    }
  };

  const handleSetOwner = async (id: number) => {
    try {
      setAnchorEl(null);
      await changeOwnerGroup(Number(id))
      toastSuccess("Користувача став власником")
      await fetchData();
    } catch (error) {
      console.error('Error SetOwner user:', error);
      toastError(error.message)
    }
  };
  
  const handleSetAdmin = async (id: number) => {
    try {
      setAnchorEl(null);
      await setRoleGroup(Number(id), 1)
      toastSuccess("Користувача став адміном")
      await fetchData();
    } catch (error) {
      console.error('Error SetOwner user:', error);
      toastError(error.message)
    }
  };

  const fetchData = async () => {
    try {
      const students = await getClassGroupStudentsByUser();

      setUsers(students)
    } catch (error) {
      console.error('Error fetching ClassGroups data:', error);
      toastError(error.message)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainBackGround>
      <PanelHeader picked={selectedPanel} />
      <MainContainer>
        <MainBoxText>
          Список групи
        </MainBoxText>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ minWidth: 650, maxHeight: 640 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {users.map((student) => (
                  <TableRow
                    key={student.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"
                      onClick={() => {
                        history.push(`/profile?id=${student.id}`)
                      }}
                      sx={{
                        cursor: "pointer"
                      }}
                    >
                      {`${student.name} ${student.surname} ${student.patronymic}`}
                    </TableCell>
                    <TableCell align='right'>
                      {(() => {
                        switch (student.roleInGroup) {
                          case 0:
                            return 'В';
                          case 1:
                            return 'А';
                          case 2:
                            return 'У';
                          default:
                            return '';
                        }
                      })()}
                    </TableCell>
                    <TableCell align='right'>
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
                      onClose={handleOnClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => {
                        handleDelete(student.id)
                      }}>
                        Видалити
                      </MenuItem>
                      {/* <MenuItem onClick={handleClose}>Змніити роль</MenuItem> */}
                      <MenuItem onClick={() => {
                        handleSetOwner(student.id)
                      }}>
                        Назначити власником
                      </MenuItem>
                      <MenuItem onClick={() => {
                        handleSetAdmin(student.id)
                      }}>
                        Назначити адміном
                      </MenuItem>
                    </Menu>
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


