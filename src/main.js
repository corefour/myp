import React from "react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { HashRouter } from "react-router-dom";
import { lastIndexOf, substr } from '@7urtle/lambda';
import Router from './Routes';


import { ChakraProvider } from "@chakra-ui/react";
// import Auth from "./pages/main";
// import Topbar from "./common/layout/topbar"

Amplify.configure(awsconfig);

export default function Main() {

    /**
   * Turns URL path into router basename by removing everything after the last slash
   * 
   * @RajKinkhabwala getBasename :: string -> string
   *
   * @pure
   * @param {string} path URL path, probably window.location.pathname
   * @returns {string} final basename
   * 
   * @example
   * getBaseName('/some/structure/page'); // => '/some/structure'
   */
    const getBasename = path => substr(lastIndexOf('/')(path))(0)(path);

    return (
        <ChakraProvider>
            <Authenticator initialState="signUp" variation="modal">
                {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                        <HashRouter basename={getBasename(window.location.pathname)}>
                            <Router />
                        </HashRouter>
                    </main>
                )}
            </Authenticator>
            {/* <Auth /> */}
            {/* <Topbar /> */}
        </ChakraProvider>
    )
}