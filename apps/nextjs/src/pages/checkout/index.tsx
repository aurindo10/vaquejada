import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Stepper from "~/components/checkout/stepper";
import { BuyStepper } from "~/components/checkout/steppercontent/form";

interface FormValues {
  puxador: string;
  cavalo: string;
  cpf: string;
  telefone: string;
  estereiro?: string;
  cavaloEstereiro?: string;
  representacao?: string;
}
export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [arrayOfPuxadores, setArrayOfPuxadores] = useState([
    {
      puxador: "",
      cavalo: "",
      cpf: "",
      telefone: "",
      estereiro: "",
      cavaloEstereiro: "",
      representacao: "",
    },
  ]);
  const router = useRouter();
  const { ticketArray: dataString } = router.query;

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const ticketsInfo = dataString
    ? JSON.parse(decodeURIComponent(dataString as string))
    : [];
  const editedTickets = ticketsInfo.map((state: FormValues) => {
    return {
      puxador: "",
      cavalo: "",
      cpf: "",
      telefone: "",
      estereiro: "",
      cavaloEstereiro: "",
      representacao: "",
    };
  });
  useEffect(() => {
    setArrayOfPuxadores(editedTickets);
  }, [dataString]);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div className="mt-2 flex justify-center">
      <div>
        <BuyStepper
          arrayOfPuxadores={arrayOfPuxadores}
          setArrayOfPuxadores={setArrayOfPuxadores}
          currentStep={currentStep}
          onPrev={handlePrev}
          onNext={handleNext}
        ></BuyStepper>
        <Stepper
          steps={ticketsInfo}
          currentStep={currentStep}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
