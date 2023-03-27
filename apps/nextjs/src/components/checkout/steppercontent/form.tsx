import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { produce } from "immer";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { PuxadorButton } from "./puxadorCheckBox";

const schema = z.object({
  puxador: z
    .string()
    .min(4, { message: "Este campo deve conter mais de 4 caracteres" }),
  cavalo: z
    .string()
    .min(4, { message: "Este campo deve conter mais de 4 caracteres" }),
  cpf: z
    .string()
    .min(4, { message: "Este campo deve conter mais de 4 caracteres" }),
  telefone: z
    .string()
    .min(4, { message: "Este campo deve conter mais de 4 caracteres" }),
  estereiro: z
    .string()
    .min(4, { message: "Este campo deve conter mais de 4 caracteres" }),
  cavaloEstereiro: z
    .string()
    .min(4, { message: "Este campo deve conter mais de 4 caracteres" }),
  representacao: z
    .string()
    .min(4, { message: "Este campo deve conter mais de 4 caracteres" }),
});
type SchemaType = z.infer<typeof schema>;
interface Puxadores {
  arrayOfPuxadores: SchemaType[];
  currentStep: number;
  setArrayOfPuxadores: Dispatch<SetStateAction<SchemaType[]>>;
  onPrev: () => void;
  onNext: () => void;
}
export const BuyStepper = ({
  arrayOfPuxadores,
  currentStep,
  setArrayOfPuxadores,
  onPrev,
  onNext,
}: Puxadores) => {
  const methods = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const [filteredPuxadores, setFilteredPuxadores] = useState<SchemaType[]>([]);
  const { handleSubmit, register, reset, setValue, getValues, control } =
    methods;

  const onSubmit = (data: SchemaType) => {
    const filtered = [
      ...new Set(
        arrayOfPuxadores
          .slice()
          .filter(
            (puxador) =>
              puxador.cpf !== null &&
              puxador.cpf !== undefined &&
              puxador.cpf !== "",
          )
          .map((puxador) => puxador.cpf),
      ),
    ]
      .map((cpf) =>
        arrayOfPuxadores.slice().find((puxador) => puxador.cpf === cpf),
      )
      .filter(Boolean);
    setFilteredPuxadores(filtered as SchemaType[]);

    console.log(filtered);
    setArrayOfPuxadores(
      produce<SchemaType[]>((draft) => {
        draft[currentStep]!.puxador = data.puxador;
        draft[currentStep]!.cavalo = data.cavalo;
        draft[currentStep]!.cavaloEstereiro = data.cavaloEstereiro;
        draft[currentStep]!.cpf = data.cpf;
        draft[currentStep]!.estereiro = data.estereiro;
        draft[currentStep]!.telefone = data.telefone;
        draft[currentStep]!.representacao = data.representacao;
      }),
    );
  };
  useEffect(() => {
    const filtered = [
      ...new Set(
        arrayOfPuxadores
          .slice()
          .filter(
            (puxador) =>
              puxador.cpf !== null &&
              puxador.cpf !== undefined &&
              puxador.cpf !== "",
          )
          .map((puxador) => puxador.cpf),
      ),
    ]
      .map((cpf) =>
        arrayOfPuxadores.slice().find((puxador) => puxador.cpf === cpf),
      )
      .filter(Boolean);
    setFilteredPuxadores(filtered as SchemaType[]);
  }, [arrayOfPuxadores]);
  useEffect(() => {
    setValue("puxador", arrayOfPuxadores[currentStep]?.puxador!);
    setValue("cavalo", arrayOfPuxadores[currentStep]?.cavalo!);
    setValue(
      "cavaloEstereiro",
      arrayOfPuxadores[currentStep]?.cavaloEstereiro!,
    );
    setValue("cpf", arrayOfPuxadores[currentStep]?.cpf!);
    setValue("estereiro", arrayOfPuxadores[currentStep]?.estereiro!);
    setValue("telefone", arrayOfPuxadores[currentStep]?.telefone!);
    setValue("representacao", arrayOfPuxadores[currentStep]?.representacao!);
  });
  const handlePrev = () => {
    if (onPrev && typeof onPrev === "function") {
      onPrev();
      const formData = getValues();
      onSubmit(formData);
    }
  };
  const handleNext = () => {
    if (onNext && typeof onNext === "function") {
      onNext();
      const formData = getValues();
      onSubmit(formData);
    }
  };

  return (
    <div className="flex  max-w-2xl flex-col items-center justify-center bg-gray-100">
      {filteredPuxadores.map((puxador) => {
        return (
          <PuxadorButton setValue={setValue} puxador={puxador}></PuxadorButton>
        );
      })}
      <form
        className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="sm: mx-2 grid min-w-[16rem] max-w-[18rem] grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex flex-col">
            <label
              htmlFor="puxador"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Puxador
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="puxador"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="puxador"
                  className="rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring"
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cavalo"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Cavalo
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="cavalo"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="cavalo"
                  className="rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring"
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cpf"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              CPF
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="cpf"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="puxador"
                  className="rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring"
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="telefone"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Telefone
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="telefone"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="puxador"
                  className="rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring"
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="estereiro"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Estereiro
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="estereiro"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="puxador"
                  className="rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring"
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="cavaloEstereiro"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Cavalo Estereiro
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="cavaloEstereiro"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="puxador"
                  className="rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring"
                />
              )}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="representacao"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Representação
              <span className="text-red-500">*</span>
            </label>
            <Controller
              name="representacao"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="representacao"
                  className="rounded-lg border border-gray-300 py-2 px-3 text-sm focus:border-blue-500 focus:outline-none focus:ring"
                />
              )}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-lg bg-blue-500 py-2 px-6 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-600"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-lg bg-blue-500 py-2 px-6 font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-600"
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  );
};
