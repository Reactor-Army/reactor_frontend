import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchIdealAdsorbents} from "../../redux/idealAdsorbentsSlice";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {FlexContainer} from "./Styles";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px var(--box-shadow)",
    marginTop: "10px",
  },
});

export function IdealAdsorbentSearch() {
  const classes = useStyles();

  const adsorbatesWithIupacNotation = useSelector(
    (state) => state.adsorbates.adsorbatesWithIupacNotation,
  );

  const adsorbatesSearchArray = adsorbatesWithIupacNotation.map((adsorbate) => {
    return {name: adsorbate.nombre, id: adsorbate.id};
  });

  const dispatch = useDispatch();

  useEffect(() => {}, [adsorbatesWithIupacNotation]);

  let adsorbatesIds = [];

  const onSearchSubmit = async () => {
    dispatch(
      fetchIdealAdsorbents(
        adsorbatesIds.map((item) => {
          return item.id;
        }),
      ),
    );
  };

  return (
    <>
      <Autocomplete
        multiple
        options={adsorbatesSearchArray}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
          adsorbatesIds = value;
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Adsorbatos a remover"
            placeholder="Adsorbatos"
          />
        )}
      />
      <FlexContainer>
        <Button
          className={classes.button}
          onClick={onSearchSubmit}
          variant="contained"
          color="primary">
          Buscar adsorbente ideal
        </Button>
      </FlexContainer>
    </>
  );
}
