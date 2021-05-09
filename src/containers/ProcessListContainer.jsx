import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {createSearchProcessesThunk} from "../redux/processesSlice";
import {ProcessList} from "../components/ProcessList/ProcessList";
import {PageTitle} from "../common/PageTitle";
import Container from "@material-ui/core/Container";
import {appFontFamily} from "../common/styles";
import {ProcessSearchContainer} from "./List/Search/ProcessSearchContainer";
import {fetchAdsorbates} from "../redux/adsorbatesSlice";
import {fetchAdsorbents} from "../redux/adsorbentsSlice";
import {useQuery} from "../routing/hooks/useQuery";

export function ProcessListContainer() {
  const loading = useSelector((state) => state.loading);
  const {processes} = useSelector((state) => state.processes);
  const dispatch = useDispatch();

  let query = useQuery();

  useEffect(() => {
    dispatch(
      createSearchProcessesThunk(
        query.get("adsorbato"),
        query.get("adsorbente"),
      )(),
    );
    dispatch(fetchAdsorbates());
    dispatch(fetchAdsorbents());
  }, []);

  return (
    <Container>
      <PageTitle title={"Procesos"} style={{fontFamily: appFontFamily.card}} />
      <ProcessSearchContainer
        selectedAdsorbateId={query.get("adsorbato")}
        selectedAdsorbentId={query.get("adsorbente")}
      />
      <ProcessList loading={loading} processes={processes} />
    </Container>
  );
}
