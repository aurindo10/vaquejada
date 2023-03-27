import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { type UseFormSetValue } from "react-hook-form";

interface SetValue {
  setValue: UseFormSetValue<{
    puxador: string;
    cavalo: string;
    cpf: string;
    telefone: string;
    estereiro: string;
    cavaloEstereiro: string;
    representacao: string;
  }>;
  puxador: {
    puxador: string;
    cavalo: string;
    cpf: string;
    telefone: string;
    estereiro: string;
    cavaloEstereiro: string;
    representacao: string;
  };
}
export const PuxadorButton = ({ setValue, puxador }: SetValue) => {
  const handleChange = () => {
    setValue("puxador", puxador.puxador);
    setValue("cavalo", puxador.cavalo);
    setValue("cpf", puxador.cpf);
    setValue("telefone", puxador.telefone);
    setValue("estereiro", puxador.estereiro);
    setValue("cavaloEstereiro", puxador.cavaloEstereiro);
    setValue("representacao", puxador.representacao);
  };
  return (
    <div>
      <button
        className="mt-2 rounded-md bg-blue-500 py-1 px-2 text-white"
        onClick={() => {
          handleChange();
        }}
      >
        {`Usar as informações do puxador ${puxador.puxador}`}
      </button>
    </div>
  );
};
