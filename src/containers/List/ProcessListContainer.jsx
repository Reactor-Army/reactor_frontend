import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchAdsorbentsWithParticleSize} from "../../redux/adsorbentsSlice";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {createSearchProcessesThunk} from "../../redux/processesSlice";
import {useQuery} from "../../routing/hooks/useQuery";
import {ProcessSearchContainer} from "./Search/ProcessSearchContainer";
import {ProcessList} from "../../components/List/ProcessList/ProcessList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../../routing/urls";

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
      <ListHeader title={"Procesos"} creationUrl={URLS.PROCESS_CREATE} />
      <ProcessSearchContainer
        selectedAdsorbateId={query.get("adsorbato")}
        selectedAdsorbentId={query.get("adsorbente")}
      />
      <ProcessList loading={loading} processes={processes} />
    </>
  );
}
