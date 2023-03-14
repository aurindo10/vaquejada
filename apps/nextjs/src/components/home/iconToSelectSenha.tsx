import React from "react";
import { Horse } from "@phosphor-icons/react";

export const IconToSelectSenha = () => {
  const IconToSelectSenhaProps = {
    id: 252,
    senha: 101,
    numero: 1,
    comprado: false,
    categoria: "aberta",
  };
  const [checked, setChecked] = React.useState(false);
  function HandleCheck() {
    if (checked) {
      setChecked(false);
      // colocar funcao para retirar as informações dessa senha no estado do carinho
    } else {
      setChecked(true);
      // colocar funcao para adicionar as informações dessa senha no estado do carinho
    }
  }
  return (
    <div className="grid w-11 justify-items-center px-1 py-1">
      <button
        id={`${IconToSelectSenhaProps.id}`}
        onClick={HandleCheck}
        disabled={IconToSelectSenhaProps.comprado ? true : false}
        className={`flex h-7 w-7 items-center justify-center  rounded-md ${
          IconToSelectSenhaProps.comprado
            ? "bg-red-500"
            : checked
            ? "bg-green-600"
            : ""
        }`}
      >
        <Horse size={24}></Horse>
      </button>
      <label
        className={`text-[0.7rem] ${
          IconToSelectSenhaProps.comprado ? "" : "hover:cursor-pointer"
        }`}
        htmlFor={`${IconToSelectSenhaProps.id}`}
      >
        {IconToSelectSenhaProps.numero} -{IconToSelectSenhaProps.senha}
      </label>
    </div>
  );
};
