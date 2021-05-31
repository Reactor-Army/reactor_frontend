import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbentsWithParticleSize} from "../../redux/adsorbentsSlice";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {createSearchProcessesThunk} from "../../redux/processesSlice";
import {useQuery} from "../../routing/hooks/useQuery";
import {ProcessSearchContainer} from "./Search/ProcessSearchContainer";
import {appFontFamily} from "../../common/styles";
import {PageTitle} from "../../common/PageTitle";
import {ProcessList} from "../../components/List/ProcessList/ProcessList";

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
    dispatch(fetchAdsorbatesWithIupacNotation());
    dispatch(fetchAdsorbentsWithParticleSize());
  }, []);

  return (
    <>
      <PageTitle title={"Procesos"} style={{fontFamily: appFontFamily.card}} />
      <ProcessSearchContainer
        selectedAdsorbateId={query.get("adsorbato")}
        selectedAdsorbentId={query.get("adsorbente")}
      />
      <ProcessList loading={loading} processes={processes} />
    </>
  );
}
