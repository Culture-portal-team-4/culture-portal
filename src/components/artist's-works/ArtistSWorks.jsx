import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import StyledTableCell from './StyledTableCell/StyledTableCell'

export default function ArtistSWorks({ masterpiece }) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Works</StyledTableCell>
            <StyledTableCell align="right">Year of creation</StyledTableCell>
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
