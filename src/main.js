import React from "react";
import { Amplify, Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "./aws-exports";
import { ChakraProvider } from "@chakra-ui/react";
import "./style.css";
import Dashboard from "./pages/Dashboard/index";
import { listUserRole } from "./services/Users";

Amplify.configure(awsconfig);

function Main({ signOut, user }) {  
    return (
        <ChakraProvider>
            <Dashboard userdata={user.attributes} />
        </ChakraProvider>
    )
}

export default withAuthenticator(Main);
