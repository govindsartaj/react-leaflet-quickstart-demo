import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MyLocationIcon from "@material-ui/icons/MyLocation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(5),
    },
    zIndex: 500,
    position: "fixed",
  },

  button: {
    marginTop: "1em",
    cursor: "pointer",
  },
}));

export default function GeoLocate(props) {
  const classes = useStyles();

  const handleLocateMeClick = () => {
    navigator.geolocation.getCurrentPosition((result) => {
      props.parentGeolocateFunction(result);
    });
  };

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<MyLocationIcon />}
        onClick={handleLocateMeClick}
      >
        Locate me
      </Button>
    </div>
  );
}
