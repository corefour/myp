import React from "react";
import TopBar from "../../common/layout/topbar";
import { HashRouter } from "react-router-dom";
import { lastIndexOf, substr } from "@7urtle/lambda";
import Router from "../../Router";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { set_userData } from "../../redux/dispatch/dispatch";

function Dashboard(props) {
    props.set_userData(props.userdata)
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

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

const mapDispatchToProps = (dispatch) => {
    return {
        set_userData: (options) => {
            dispatch(set_userData(options))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)