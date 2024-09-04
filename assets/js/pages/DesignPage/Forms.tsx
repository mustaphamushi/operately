import * as React from "react";

import { Section, SectionTitle } from "./Section";
import Forms from "@/components/Forms";

export function FormExamples() {
  return (
    <Section>
      <SectionTitle>Forms</SectionTitle>

      <div className="max-w-2xl mt-2 mb-10">
        The components/Forms directory contains a collection of form-related components that can be used to build forms.
      </div>

      <div className="flex flex-col gap-10">
        <VerticalForm />
        <HorizontalForm />
        <GridForm />
      </div>
    </Section>
  );
}

function VerticalForm() {
  const form = Forms.useForm({
    fields: {
      name: Forms.useTextField(""),
      email: Forms.useTextField(""),
      password: Forms.useTextField(""),
    },
    submit: async (form) => {
      console.log("Form submitted with values:", form);
    },
  });

  return (
    <div className="p-6 border border-stroke-base rounded shadow-sm">
      <Forms.Form form={form}>
        <div className="mb-4 font-bold text-lg">Vertical layout</div>

        <Forms.FieldGroup>
          <Forms.TextInput field={"name"} label={"Name"} placeholder="e.g. Martin Smith" />
          <Forms.TextInput field={"email"} label={"Email"} placeholder="e.g. martin@acme.org" />
          <Forms.PasswordInput field={"password"} label={"Password (min 8 characters)"} />
        </Forms.FieldGroup>

        <Forms.Submit saveText="Submit" />
      </Forms.Form>
    </div>
  );
}

function HorizontalForm() {
  const form = Forms.useForm({
    fields: {
      name: Forms.useTextField(""),
      description: Forms.useTextField(""),
    },
    submit: async (form) => {
      console.log("Form submitted with values:", form);
    },
  });

  return (
    <div className="p-6 border border-stroke-base rounded shadow-sm">
      <Forms.Form form={form}>
        <div className="mb-8 font-bold text-lg border-b border-stroke-base pb-4">Horizontal layout</div>

        <Forms.FieldGroup layout="horizontal">
          <Forms.TextInput field={"name"} label={"Project Name"} />
          <Forms.PasswordInput field={"description"} label={"Description"} />
        </Forms.FieldGroup>

        <div className="border-b border-stroke-base mt-8" />

        <Forms.Submit saveText="Create Project" />
      </Forms.Form>
    </div>
  );
}

function GridForm() {
  const form = Forms.useForm({
    fields: {
      name: Forms.useTextField(""),
      email: Forms.useTextField(""),
      password: Forms.useTextField(""),
      confirmPassword: Forms.useTextField(""),
    },
    submit: async (form) => {
      console.log("Form submitted with values:", form);
    },
  });

  return (
    <div className="p-6 border border-stroke-base rounded shadow-sm">
      <Forms.Form form={form}>
        <div className="mb-4 font-bold text-lg">Grid layout form</div>

        <Forms.FieldGroup layout="grid" gridColumns={2}>
          <Forms.TextInput field={"name"} label={"Name"} placeholder="e.g. Martin Smith" />
          <Forms.TextInput field={"email"} label={"Email"} placeholder="e.g. martin@acme.org" />
          <Forms.PasswordInput field={"password"} label={"Password"} />
          <Forms.PasswordInput field={"confirmPassword"} label={"Confirm Password"} />
        </Forms.FieldGroup>
      </Forms.Form>
    </div>
  );
}
