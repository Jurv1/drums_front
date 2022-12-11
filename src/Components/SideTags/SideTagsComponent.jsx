import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import TagsSX from "../../themes/TagsSX";

export const SideBlock = ({ title, children }) => {
  return (
    <Paper sx = {{ TagsSX }}>
      <Typography variant="h6">
        {title}
      </Typography>
      <Box sx={{ TagsSX }}>
        {children}
      </Box>
    </Paper>
  );
};