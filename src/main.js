import React from "react";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import { HashRouter } from "react-router-dom";
import { lastIndexOf, substr } from '@7urtle/lambda';
import Router from './Routes';
import { ChakraProvider} from "@chakra-ui/react";
import './style.css';

Amplify.configure(awsconfig);

function Main({signOut, user}) {
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
            <HashRouter basename={getBasename(window.location.pathname)}>
                <Router />
            </HashRouter>
        </ChakraProvider>
    )
}

export default withAuthenticator(Main);
