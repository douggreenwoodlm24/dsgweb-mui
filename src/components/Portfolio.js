import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import portfolioData from "../data/portfolio.json";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Portfolio() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {portfolioData.map((item) => (
          <Grid item xs={4}>
            <Item>
              <h3>{item.title}</h3>
              <p>{item.description1}</p>
              <img
                src={`./assets/images/portfolio/${item.src}`}
                alt={item.title}
              />
              <p>{item.description2}</p>
              <p>
                <a href={item.href}>{item.linkText}</a>
              </p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
