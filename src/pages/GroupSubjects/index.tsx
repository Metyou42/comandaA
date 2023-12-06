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
import { useEffect } from 'react';
import { getClassGroupStudentsByUser } from "../../lib/axios/Students/requests";
import { IStudent, ISubject } from "../../lib/axios/types";
import { getSubjectByUser } from "../../lib/axios/Subjects/requests";
import { useHistory } from 'react-router-dom';

export function GroupSubjects(): React.ReactElement {
  const history = useHistory();

  const selectedPanel: "Study" = "Study";
  const [subjects, setSubjects] = React.useState<ISubject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let subjects = await getSubjectByUser();

        setSubjects(subjects)
      } catch (error) {
        console.error('Error fetching ClassGroups data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainBackGround>
      <PanelHeader picked={selectedPanel} />
      <MainContainer>
        <MainBoxText>
          Предмети
        </MainBoxText>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ minWidth: 650, maxHeight: 640 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {subjects.map((subject) => (
                  <TableRow
                    key={subject.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row"
                      onClick={() => {
                        history.push(`/subject?id=${subject.id}`)
                      }}
                      sx={{
                        cursor: "pointer"
                      }}
                    >
                      {`Предмет - ${subject.name}: Опис - ${subject.description}`}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </MainContainer>
    </MainBackGround >
  );
}


