import * as React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
export const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "30",
        width: "100%",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
