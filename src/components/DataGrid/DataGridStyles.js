import {withStyles, makeStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {appColors, appFontFamily} from "../../common/styles";

export const StyledTableCell = withStyles((theme) => ({
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

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const useStyles = makeStyles({
  table: {
    minWidth: 700,
    minHeight: 400,
  },
});
