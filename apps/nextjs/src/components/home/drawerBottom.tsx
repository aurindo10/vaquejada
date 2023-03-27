import React, { useContext } from "react";
import { useRouter } from "next/router";

import { TicketsToBuyContext } from "~/utils/context";

export function Drawer() {
  const { tickets } = useContext(TicketsToBuyContext);
  const router = useRouter();
  const dataString = encodeURIComponent(JSON.stringify(tickets));
  return (
    <>
      {tickets.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 rounded-t-lg bg-white p-6 shadow-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">
                Ingressos selecionados
              </h2>
              <p className="text-lg">
                Quantidade:{" "}
                <span className="font-bold text-blue-600">
                  {tickets.length}
                </span>
              </p>
            </div>
            <button
              className="focus:shadow-outline rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              onClick={() => {
                router.push({
                  pathname: "/checkout",
                  query: { ticketArray: dataString },
                });
              }}
            >
              Preencher Corredores
            </button>
          </div>
        </div>
      )}
    </>
  );
}
