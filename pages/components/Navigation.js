import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          style={{
            opacity: 0.9,
            backgroundImage:
              "radial-gradient( circle farthest-corner at 5.3% 17.2%, #16213e 0%, #2d4059 90% )",
          }}
        >
          <Toolbar>
            <img
              src="https://res.cloudinary.com/image-chatbot/image/upload/v1600958589/Portfolio/Black_Framed_Sports_Logo_qcaqly.png"
              width="100"
            />

            <Typography
              variant="h7"
              style={{
                opacity: 1,
                marginLeft: "50px",
                justifyContent: "center",
                fontFamily: "'Caveat', cursive",
                fontWeight: "bold",
                color: "#ffc93c",
              }}
            >
              Pattanan Numpong
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
