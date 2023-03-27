import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

export const TicketsToBuyContext = createContext([{}] as any);

interface ContextWrapper {
  children: ReactNode;
}
export function ContextWrapper({ children }: ContextWrapper) {
  const [tickets, setTickets] = useState([]);

  return (
    <TicketsToBuyContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketsToBuyContext.Provider>
  );
}
