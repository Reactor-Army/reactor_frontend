import {Modal} from "../Modal";
import React, {useState, useEffect} from "react";
import {Form, FORM_LAYOUTS} from "../../Form/Form";
import {
  FormTextField,
  FormSelectorField,
  FormBooleanField,
} from "../../Form/Fields/FormFields";
import {MODEL_FORM_INITIAL_VALUES} from "../../../common/constants";
import {
  MODEL_PERSISTENCE_FIELDS,
  MODEL_PERSISTENCE_REQUEST_FIELDS,
} from "../../../common/fields";
import {filterBlank} from "../../CustomForms/validations";
import {isSet} from "../../Form/Validation/formValidations";
import {
  Title,
  FormWrapper,
  TableContainer,
} from "./SaveModelResultsModalStyles";
import {searchProcesses} from "../../../services/processes";
import {useDispatch, useSelector} from "react-redux";
import {fetchProcess} from "../../../redux/processSlice";
import {DetailTable, DetailTableRow} from "../../DetailTable/DetailTable";
import {UNITS} from "../../../common/fields";
import {PROCESS_FIELDS} from "../../../common/fields";
import {getKineticConstantUnits} from "../../../common/UnitsUtils";
import {saveBreakCurveData} from "../../../services/models";
import {displayUpdateMessage} from "../../../utils/displayUpdateMessage";
import {displayErrorMessage} from "../../../utils/displayErrorMessage";
import {useHistory} from "react-router-dom";
import {modelResultsUrlFor} from "../../../routing/urls";

export const SaveModelResultsModal = ({
  closeModal,
  open,
  adsorbates,
  adsorbents,
  modelId,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorValues, setErrorValues] = useState({});
  const [adsorbateId, setAdsorbateId] = useState();
  const [adsorbentId, setAdsorbentId] = useState();
  const [systems, setSystems] = useState([]);
  const [selectedSystemId, setSelectedSystemId] = useState();
  const selectedSystem =
    useSelector((store) => store.process.process) || undefined;

  const errorsSet = Object.keys(errorValues).some((key) => {
    return errorValues[key] !== undefined;
  });

  const onSubmit = async (values) => {
    if (!errorsSet) {
      try {
        const result = await saveBreakCurveData(
          modelId,
          values.nombre,
          values.sistemaId,
          values.esLineaBase,
        );
        if (result.status) {
          displayErrorMessage(result.response.message);
        } else {
          displayUpdateMessage();
          reset();
          closeModal();
          history.push(modelResultsUrlFor(modelId));
        }
      } catch (error) {
        return error.response.data;
      }
    }
  };

  const adsorbateSelectItems = adsorbates.map((adsorbate) => {
    return {
      label: adsorbate.nombreIUPAC,
      value: adsorbate.id,
    };
  });

  const adsorbentSelectItems = adsorbents.map((adsorbent) => {
    return {
      label: `${adsorbent.nombre}(${adsorbent.particulaT})`,
      value: adsorbent.id,
    };
  });

  const systemSelectItems = systems
    ? systems.map((system, index) => {
        return {
          label: `Opción ${index + 1}`,
          value: system.id,
        };
      })
    : [];

  useEffect(() => {
    const getProcesses = async () => {
      const processes = await searchProcesses(adsorbateId, adsorbentId);
      setSystems(processes);
    };
    setSelectedSystemId();
    setSystems();
    if (adsorbateId && adsorbentId) {
      getProcesses();
    }
  }, [adsorbateId, adsorbentId]);

  useEffect(() => {
    if (selectedSystemId) {
      dispatch(fetchProcess(selectedSystemId));
    }
  }, [selectedSystemId]);

  const reset = () => {
    setAdsorbateId();
    setAdsorbentId();
    setSystems();
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        reset();
        closeModal();
      }}>
      <Title>Guardar Resultado</Title>
      {selectedSystemId && selectedSystem && (
        <TableContainer>
          <DetailTable title="Características">
            <DetailTableRow
              label={PROCESS_FIELDS.QMAX}
              value={selectedSystem.qmax}
              units={UNITS.QMAX}
            />
            <DetailTableRow
              label={PROCESS_FIELDS.EQUILIBRIUM_TIME}
              value={selectedSystem.tiempoEquilibrio}
              units={UNITS.EQUILIBRIUM_TIME}
            />
            <DetailTableRow
              label={PROCESS_FIELDS.TEMPERATURE}
              value={selectedSystem.temperatura}
              units={UNITS.TEMPERATURE}
            />
            <DetailTableRow
              label={PROCESS_FIELDS.INITIAL_PH}
              value={selectedSystem.phinicial}
            />
            <DetailTableRow
              label={PROCESS_FIELDS.KINETIC_CONSTANT}
              value={selectedSystem.constanteCinetica}
              units={
                selectedSystem.constanteCinetica &&
                getKineticConstantUnits(selectedSystem.ordenReaccion)
              }
            />
            <DetailTableRow
              label={PROCESS_FIELDS.REACTION_ORDER}
              value={selectedSystem.ordenReaccion}
            />
          </DetailTable>
        </TableContainer>
      )}
      <FormWrapper>
        <Form
          layout={FORM_LAYOUTS.ROWS}
          singleColumn={true}
          initialValues={MODEL_FORM_INITIAL_VALUES}
          onSubmit={onSubmit}
          buttonLabel="Aceptar"
          errors={filterBlank(errorValues)}
          fields={[
            <FormTextField
              placeholder={MODEL_PERSISTENCE_FIELDS.NAME}
              key={1}
              name={MODEL_PERSISTENCE_REQUEST_FIELDS.NAME}
              error={errorValues[MODEL_PERSISTENCE_REQUEST_FIELDS.NAME]}
              validate={(value) => {
                setErrorValues((previousState) => {
                  return {
                    ...previousState,
                    [MODEL_PERSISTENCE_REQUEST_FIELDS.NAME]: isSet(value),
                  };
                });
              }}
            />,
            <FormSelectorField
              key={2}
              onChangeCallback={(value) => {
                setAdsorbateId(value && value.value);
              }}
              placeholder={MODEL_PERSISTENCE_FIELDS.ADSORBATE}
              items={adsorbateSelectItems}
              name={MODEL_PERSISTENCE_REQUEST_FIELDS.ADSORBATE_ID}
              error={errorValues[MODEL_PERSISTENCE_REQUEST_FIELDS.ADSORBATE_ID]}
              validate={(value) => {
                setErrorValues((previousState) => {
                  return {
                    ...previousState,
                    [MODEL_PERSISTENCE_REQUEST_FIELDS.ADSORBATE_ID]: isSet(
                      value,
                    ),
                  };
                });
              }}
            />,
            <FormSelectorField
              onChangeCallback={(value) => {
                setAdsorbentId(value && value.value);
              }}
              key={3}
              placeholder={MODEL_PERSISTENCE_FIELDS.ADSORBENT}
              items={adsorbentSelectItems}
              name={MODEL_PERSISTENCE_REQUEST_FIELDS.ADSORBENT_ID}
              error={errorValues[MODEL_PERSISTENCE_REQUEST_FIELDS.ADSORBENT_ID]}
              validate={(value) => {
                setErrorValues((previousState) => {
                  return {
                    ...previousState,
                    [MODEL_PERSISTENCE_REQUEST_FIELDS.ADSORBENT_ID]: isSet(
                      value,
                    ),
                  };
                });
              }}
            />,
            <FormSelectorField
              key={4}
              onChangeCallback={(value) => {
                setSelectedSystemId(value && value.value);
              }}
              placeholder={MODEL_PERSISTENCE_FIELDS.SYSTEM}
              items={systemSelectItems}
              disabled={!systemSelectItems.length}
              name={MODEL_PERSISTENCE_REQUEST_FIELDS.SYSTEM_ID}
              error={errorValues[MODEL_PERSISTENCE_REQUEST_FIELDS.SYSTEM_ID]}
              validate={(value) => {
                setErrorValues((previousState) => {
                  return {
                    ...previousState,
                    [MODEL_PERSISTENCE_REQUEST_FIELDS.SYSTEM_ID]: isSet(value),
                  };
                });
              }}
            />,
            <FormBooleanField
              key={5}
              name={MODEL_PERSISTENCE_REQUEST_FIELDS.BASE_LINE}
              title={MODEL_PERSISTENCE_FIELDS.BASE_LINE}
            />,
          ]}
        />
      </FormWrapper>
    </Modal>
  );
};
