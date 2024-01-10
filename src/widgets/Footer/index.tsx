import React, { FC } from "react";
import { Paper, Stack, Typography } from "@mui/material";

import { FooterPerops } from "./Types";

const Footer: FC<FooterPerops> = () => {
  return (
    <Stack
      component={Paper}
      height={64}
      justifyContent="center"
      alignItems="center"
    >
      <Typography>
        Copyright © 2024-25 Webstrot. All Rights Reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
