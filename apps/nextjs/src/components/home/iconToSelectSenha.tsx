import React, { useContext } from "react";
import { Horse } from "@phosphor-icons/react";

import { TicketsToBuyContext } from "~/utils/context";

export const IconToSelectSenha = () => {
  const [checked, setChecked] = React.useState(false);
  const { tickets, setTickets } = useContext(TicketsToBuyContext);
  const IconToSelectSenhaProps = {
    id: 252,
    senha: 101,
    numero: 1,
    comprado: false,
    categoria: "aberta",
    vaquejada: 1,
    checked: checked,
  };
  function HandleCheck() {
    if (checked) {
      setChecked(false);
      // colocar funcao para alterar checked para true
      // colocar funcao para retirar as informações dessa senha no estado do carinho
    } else {
      setChecked(true);
      setTickets((prevState: any) => {
        return [...prevState, { ticket: "02" }];
      });
      // colocar funcao para adicionar as informações dessa senha no estado do carinho
    }
  }
  return (
    <button
      id={`${IconToSelectSenhaProps.id}`}
      onClick={HandleCheck}
      disabled={IconToSelectSenhaProps.comprado ? true : false}
      className={`grid h-11 w-11 justify-items-center rounded-lg border-2 border-solid border-black ${
        IconToSelectSenhaProps.comprado
          ? "bg-red-500"
          : IconToSelectSenhaProps.checked
          ? "bg-green-600"
          : ""
      }`}
    >
      <Horse size={24}></Horse>
      <label
        className={`text-[0.7rem] ${
          IconToSelectSenhaProps.comprado ? "" : "hover:cursor-pointer"
        }`}
      >
        {IconToSelectSenhaProps.numero} -{IconToSelectSenhaProps.senha}
      </label>
    </button>
  );
};
