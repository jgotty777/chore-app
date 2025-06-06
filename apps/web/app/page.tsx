import React from "react";
import { Welcome } from "./components/welcome";
import { SessionProvider } from "next-auth/react"

export default function Home() {
  return( 
<SessionProvider>

  <Welcome />
</SessionProvider>  
);
}
