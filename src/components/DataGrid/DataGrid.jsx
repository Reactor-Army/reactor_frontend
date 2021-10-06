import React, {useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import {StyledTableCell, StyledTableRow, useStyles} from "./DataGridStyles";

export const DataGrid = ({headerItems, items}) => {
  const classes = useStyles();
  const rowsPerPage = 10;
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {headerItems.map((headerItem, index) => {
              return (
                <StyledTableCell key={index}>{headerItem}</StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {items
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((gridItem, index) => (
              <StyledTableRow key={index}>
                {Object.values(gridItem).map((value, index) => {
                  return (
                    <StyledTableCell align="left" key={index}>
                      {value || "-"}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              rowsPerPageOptions={[]} //This is intentional, there's no other way to remove the footer selector
              labelDisplayedRows={({page}) => {
                return `Página ${page + 1} de ${Math.ceil(
                  items.length / rowsPerPage,
                )}`;
              }}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
