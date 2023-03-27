import "../styles/globals.css";
import type { AppType } from "next/app";
import { ThemeProvider } from "@mui/material";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";
import { ContextWrapper } from "~/utils/context";
import { theme } from "~/utils/theme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ContextWrapper>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ContextWrapper>
  );
};

export default api.withTRPC(MyApp);
