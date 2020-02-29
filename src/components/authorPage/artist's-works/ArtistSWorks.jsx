import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import StyledTableCell from './StyledTableCell/StyledTableCell'
import styles from './artistSWorksStyles'
import { withTranslation } from 'react-i18next';

function ArtistSWorks({ masterpiece, i18n  }) {
  const classes = styles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.root} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{i18n.t("workList")}</StyledTableCell>
            <StyledTableCell align="right">{i18n.t("yearOfCreation")}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {masterpiece.map((masterpieceWorkElement, index) => (
              <TableRow key={`${index}Work`}>
                <StyledTableCell component="th" scope="row">
                  {masterpieceWorkElement.work}
                </StyledTableCell>
                <StyledTableCell align="right">{masterpieceWorkElement.year}</StyledTableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withTranslation()(ArtistSWorks);
