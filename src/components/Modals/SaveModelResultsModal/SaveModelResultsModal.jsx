import {Modal} from "../Modal";
import React, {useState, useEffect} from "react";
import {Form, FORM_LAYOUTS} from "../../Form/Form";
import {FormTextField, FormSelectorField} from "../../Form/Fields/FormFields";
import {MODEL_FORM_INITIAL_VALUES} from "../../../common/constants";
import {
  MODEL_PERSISTENCE_FIELDS,
  MODEL_PERSISTENCE_REQUEST_FIELDS,
} from "../../../common/fields";
import {filterBlank} from "../../CustomForms/validations";
import {isSet} from "../../Form/Validation/formValidations";
import {Title, FormWrapper} from "./SaveModelResultsModalStyles";
import {searchProcesses} from "../../../services/processes";

export const SaveModelResultsModal = ({
  closeModal,
  open,
  adsorbates,
  adsorbents,
  modelId,
}) => {
  const [errorValues, setErrorValues] = useState({});
  const [adsorbateId, setAdsorbateId] = useState();
  const [adsorbentId, setAdsorbentId] = useState();
  const [systems, setSystems] = useState([]);

  const onSubmit = async (values) => {
    alert(values, modelId, systems, setAdsorbateId);
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
    setSystems();
    if (adsorbateId && adsorbentId) {
      getProcesses();
    }
  }, [adsorbateId, adsorbentId]);

  return (
    <Modal
      open={open}
      onClose={() => {
        setAdsorbateId();
        setAdsorbentId();
        setSystems();
        closeModal();
      }}>
      <Title>Guardar Resultado</Title>
      <FormWrapper>
        <Form
          layout={FORM_LAYOUTS.SINGLE_COLUMN}
          singleColumn={true}
          initialValues={MODEL_FORM_INITIAL_VALUES}
          onSubmit={onSubmit}
          buttonLabel="Aceptar"
          errors={filterBlank(errorValues)}
          forceDisable={errorValues}
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
                setAdsorbateId(value.value);
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
                setAdsorbentId(value.value);
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
                setAdsorbateId(value.value);
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
          ]}
        />
      </FormWrapper>
    </Modal>
  );
};
