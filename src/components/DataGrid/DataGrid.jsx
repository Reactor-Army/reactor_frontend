import React, {useState} from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import TableFooter from "@material-ui/core/TableFooter";
import {appColors, appFontFamily} from "../../common/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: appColors.primary,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  body: {
    fontSize: 16,
    fontFamily: appFontFamily.card,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight: 400,
  },
});

export const DataGrid = ({headerItems, items}) => {
  const classes = useStyles();
  const rowsPerPage = 4;
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
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
              rowsPerPageOptions={[]}
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
