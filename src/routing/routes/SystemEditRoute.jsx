import React, {useState, useEffect} from "react";
import {SystemForm} from "../../components/Create/SystemForm";
import {useHistory} from "react-router-dom";
import {URLS} from "../urls";
import {updateSystem} from "../../services/processes";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../../redux/processSlice";
import {Redirect} from "react-router-dom";
import {errorCodes} from "../../utils/errorStatusCodes";

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
  }, [system]);

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        await updateSystem(id, {...values, id: parseInt(id)});
        history.push(URLS.PROCESSES_LIST);
      } catch (error) {
        return error;
      }
    }
  };

  if (system && errorCodes.includes(system.status)) {
    return <Redirect to={URLS.NOT_FOUND} />;
  }
  return (
    <SystemForm
      title="Modificar Sistema"
      buttonLabel="Actualizar"
      onSubmit={onSubmit}
      setErrors={(value) => {
        setErrors(value);
      }}
      initialValues={system}
    />
  );
};
