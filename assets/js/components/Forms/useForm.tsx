import * as React from "react";

import { FormState, State, MapOfFields, ErrorMap } from "./FormState";

interface UseFormProps<FieldTypes extends MapOfFields> {
  fields: FieldTypes;
  validate?: (fields: FieldTypes, addError: (field: keyof FieldTypes, message: string) => void) => void;
  submit: (form: FormState<FieldTypes>) => Promise<void>;
  cancel?: (form: FormState<FieldTypes>) => Promise<void>;
}

export function useForm<FieldTypes extends MapOfFields>(props: UseFormProps<FieldTypes>): FormState<FieldTypes> {
  const [state, setState] = React.useState<State>("idle");
  const [errors, setErrors] = React.useState<ErrorMap<FieldTypes>>({});

  const form = {
    state: state,
    setState,
    fields: props.fields,
    errors,
    setErrors,
    hasCancel: !!props.cancel,
    actions: {
      clearErrors: () => setErrors({}),
      validate: (): boolean => {
        const newErrors: ErrorMap<FieldTypes> = {};

        if (props.validate) {
          props.validate(props.fields, (field, message) => {
            newErrors[field] = message;
          });
        }

        for (const key in props.fields) {
          const field = props.fields[key]!;
          const error = field.validate();

          if (error) {
            newErrors[key] = error;
          }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
      },
      submit: async () => {
        console.log("submitting");
        setState("validating");
        if (!form.actions.validate()) {
          setState("idle");
          return;
        }

        setState("submitting");
        await props.submit(form);
        setState("idle");
      },
      cancel: async () => {
        if (props.cancel) await props.cancel(form);
      },
    },
  };

  return form;
}
