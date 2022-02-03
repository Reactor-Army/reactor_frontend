import React, {useState} from "react";
import {getProcess} from "../../services/processes";
import CircularProgress from "@material-ui/core/CircularProgress";
import {SectionHeader} from "../Detail/SectionHeader";
import {ProcessSearchContainer} from "../CalculateVolumeView/ProcessSearchContainer";
import {ProcessPickerResults} from "../CalculateVolumeView/ProcessPickerResults";
import {ProcessList} from "../List/ProcessList/ProcessList";

export const ProcessPicker = ({setProcessId}) => {
  const [processes, setProcesses] = useState(null);
  const [process, setProcess] = useState(null);
  const [loading, setLoading] = useState(false);
  const _setProcesses = (newProcesses) => {
    setProcess(null);
    setProcesses(newProcesses);
  };
  const changeProcess = async (id) => {
    setProcessId(id);
    setProcess(null);
    if (id === null) {
      return;
    }
    setLoading(true);
    const process = await getProcess(id);
    setProcess(process);
    setLoading(false);
  };

  return (
    <>
      <SectionHeader>
        En esta página podés calcular el área sobre la curva para la curva de
        ruptura del sistema en estudio y restarle el área sobre la curva para el
        ensayo con relleno inerte (línea de base). Así, la cantidad de adsorbato
        removido será el área encerrada entre ambas curvas, calculada como la
        resta. Seleccioná el sistema para el cual querés calcular el área.
        <br />
        <br />
        <b>Nota o comentario</b>: para cargar las curvas de ruptura y la línea
        de base se deben ingresar los datos mediante los archivos
        correspondientes desde la solapa de alguno de los modelos de curva de
        ruptura.
      </SectionHeader>
      <ProcessSearchContainer setProcesses={_setProcesses} />
      {loading && <CircularProgress />}

      {!loading && process === null && (
        <ProcessPickerResults
          processes={processes}
          setProcess={changeProcess}
        />
      )}
      {process && <ProcessList processes={[process]} />}
    </>
  );
};
