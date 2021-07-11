import React, {useState, useEffect} from "react";
import {SystemCreateForm} from "../../components/Create/SystemCreateForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {updateSystem} from "../../services/processes";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../../redux/processSlice";

export const SystemEditRoute = () => {
  const [errors, setErrors] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  let {id} = useParams();

  const system = useSelector((store) => store.process.process);
  useEffect(() => {
    if (!system) {
      dispatch(fetchProcess(id));
    }
  }, []);

  const getInitialValues = () => {
    if (system) {
      return {
        idAdsorbato: system.idAdsorbato,
        idAdsorbente: system.idAdsorbente,
        tiempoEquilibrio: system.tiempoEquilibrio,
        qmax: system.qmax,
        phinicial: system.phinicial,
        fuente: system.fuente,
        complejacion: system.complejacion,
        intercambioIonico: system.intercambioIonico,
        reaccionQuimica: system.reaccionQuimica,
        observacion: system.observacion,
        temperatura: system.temperatura,
      };
    }
  };

  console.log(system);
  const onSubmit = async (values) => {
    if (!errors) {
      const data = {...values, id: system.id};
      try {
        await updateSystem(data);
        history.push(URLS.PROCESSES_LIST);
      } catch (e) {
        return e.response.data;
      }
    }
  };
  return (
    <SystemCreateForm
      onSubmit={onSubmit}
      setErrors={setErrors}
      initialValues={getInitialValues()}
    />
  );
};
