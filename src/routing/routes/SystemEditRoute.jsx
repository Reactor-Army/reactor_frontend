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

  const onSubmit = async (values) => {
    if (!errors) {
      try {
        await updateSystem(id, {...values, id: parseInt(id)});
        history.push(URLS.PROCESSES_LIST);
      } catch (e) {
        return e;
      }
    }
  };
  return (
    <SystemCreateForm
      onSubmit={onSubmit}
      setErrors={setErrors}
      initialValues={system}
    />
  );
};
