import React from "react";
import TopBar from "../../common/layout/topbar";
import { HashRouter } from "react-router-dom";
import { lastIndexOf, substr } from "@7urtle/lambda";
import Router from "../../Router";
import { Box } from "@chakra-ui/react";

export default function Dashboard() {
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
   * getBaseName("/some/structure/page"); // => "/some/structure"
   */
    const getBasename = path => substr(lastIndexOf("/")(path))(0)(path);

    return (
        <Box>
            <HashRouter basename={getBasename(window.location.pathname)}>
                <TopBar />
                <Router />
            </HashRouter>
        </Box>
    )
}