import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchAdsorbentsWithParticleSize} from "../../redux/adsorbentsSlice";
import {fetchAdsorbatesWithIupacNotation} from "../../redux/adsorbatesSlice";
import {useQuery} from "../../routing/hooks/useQuery";
import {ProcessSearchContainer} from "../../containers/List/Search/ProcessSearchContainer";
import {ProcessList} from "../../components/List/ProcessList/ProcessList";
import {ListHeader} from "../../components/List/common/ListHeader";
import {URLS} from "../../routing/urls";
import {searchProcesses} from "../../services/processes";

export const ProcessesRoute = () => {
  const [loading, setLoading] = useState(false);
  const [processes, setProcesses] = useState(null);
  const dispatch = useDispatch();

  let query = useQuery();

  useEffect(async () => {
    setLoading(true);
    const processesResponse = await searchProcesses(
      query.get("adsorbato"),
      query.get("adsorbente"),
    );

    if (!processesResponse.status) {
      setProcesses(processesResponse);
    }
    setLoading(false);
    dispatch(fetchAdsorbatesWithIupacNotation());
    dispatch(fetchAdsorbentsWithParticleSize());
  }, []);

  return (
    <>
      <ListHeader title={"Sistemas"} creationUrl={URLS.PROCESS_CREATE} />
      <ProcessSearchContainer
        selectedAdsorbateId={query.get("adsorbato")}
        selectedAdsorbentId={query.get("adsorbente")}
        setProcesses={setProcesses}
      />
      <ProcessList loading={loading} processes={processes} />
    </>
  );
};
