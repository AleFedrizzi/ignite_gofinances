import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRouters } from "./auth.routes";
import { AppRouters } from "./app.routes";

import { useAuth } from "../hooks/auth";



export function Routes(){

  const { user } = useAuth();

  return(
    <NavigationContainer>
      {user.id ? <AppRouters/> : <AuthRouters />}
    </NavigationContainer>
  );
}