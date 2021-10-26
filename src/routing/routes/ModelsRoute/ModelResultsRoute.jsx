import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {PageLayout} from "../../../components/ChemicalModels/Models/ModelsStyles";
import {ModelResults} from "../../../components/ChemicalModels/Results/ModelResults";
import {Redirect} from "react-router-dom";
import {URLS} from "../../urls";
import {searchProcesses} from "../../../services/processes";

export const ModelResultsRoute = () => {
  const modelData = useSelector((state) => state.modelData.models);
  const [processes, setProcesses] = useState(
    useSelector((state) => state.processes),
  );

  const getProcesses = async () => {
    return await searchProcesses();
  };

  useEffect(() => {
    if (!processes) {
      const apiResponse = getProcesses();
      setProcesses(apiResponse);
    }
  }, [processes]);

  if (!modelData.length) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return (
    <PageLayout>
      <ModelResults responses={modelData} modelType={modelData[0].modelType} />
    </PageLayout>
  );
};
