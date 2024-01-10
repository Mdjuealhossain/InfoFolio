import { FC } from "react";
import { Avatar, Divider, Paper, Stack, Typography } from "@mui/material";

import MiniCard from "src/components/MiniCard";

import { MiniProfileProps } from "./Types";

const MiniProfile: FC<MiniProfileProps> = () => {
  return (
    <>
      <Stack
        elevation={0}
        px={5}
        py={4.1}
        gap={3.1}
        component={Paper}
        alignItems="center"
        height="100vh - 64px  "
        borderRadius={0}
      >
        <Stack gap={1.2} alignItems="center">
          <Avatar
            src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
            sx={(theme) => ({
              height: 160,
              width: 160,
              border: 4,
              borderColor: theme.palette.warning.main,
            })}
          />
          <Typography variant="h3"> Jueal Hossain</Typography>
          <Typography variant="h6" color="warning.main">
            Web Developer
          </Typography>
        </Stack>
        <MiniCard value="9+" description="Years Working Experience" />
        <MiniCard value="10k" description="Happy & Satisfied Customer" />
      </Stack>
      <Divider sx={(theme) => ({ borderColor: theme.palette.warning.main })} />
    </>
  );
};

export default MiniProfile;
