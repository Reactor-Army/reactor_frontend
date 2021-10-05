import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
  },
});

export const DataGrid = ({headerItems, items}) => {
  const classes = useStyles();
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
          {items.map((gridItem, index) => (
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
      </Table>
    </TableContainer>
  );
};
