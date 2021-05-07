import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchProcesses} from "../redux/processesSlice";
import {ProcessList} from "../components/ProcessList/ProcessList";
import {PageTitle} from "../common/PageTitle";
import Container from "@material-ui/core/Container";
import {appFontFamily} from "../common/styles";

export function ProcessListContainer() {
  const loading = useSelector((state) => state.loading);
  const {processes} = useSelector((state) => state.processes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProcesses());
  }, []);

  return (
    <Container>
      <PageTitle title={"Procesos"} style={{fontFamily: appFontFamily.card}} />
      <ProcessList loading={loading} processes={processes} />
    </Container>
  );
}
