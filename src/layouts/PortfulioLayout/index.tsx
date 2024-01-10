"use client";
import { FC } from "react";
import { Box, Grid } from "@mui/material";

import MiniProfile from "src/widgets/MiniProfile";
import Footer from "src/widgets/Footer";

import { PortfulioLayoutProps } from "./Types";

const PortfulioLayout: FC<PortfulioLayoutProps> = ({ children }) => {
  return (
    <>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={2.88}>
            <MiniProfile />
          </Grid>
          <Grid item xs={8.12}>
            {children}
          </Grid>
          <Grid item xs={1}>
            SideBar
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default PortfulioLayout;
