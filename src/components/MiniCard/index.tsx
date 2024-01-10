import { FC } from "react";
import { Box, Card, Typography } from "@mui/material";

import { MiniCardProps } from "./Types";

const MiniCard: FC<MiniCardProps> = ({ value, description }) => {
  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        py: 2.5,
        px: 3.5,
        borderRadius: 5,
        border: 1,
        borderColor: theme.palette.warning.dark,
        bgcolor: theme.palette.warning.light,
      })}
    >
      <Typography color="warning.main" textAlign="center" variant="h2">
        {value}
      </Typography>
      <Box>
        <Typography maxWidth={200} variant="body2" textAlign="center">
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default MiniCard;
