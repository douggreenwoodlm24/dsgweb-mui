import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  const loadPortfolioData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://37yhk6o9fi.execute-api.eu-west-2.amazonaws.com/Production/portfolio"
    );
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setPortfolioData(jsonData);
  };

  useEffect(() => {
    // Load the accessibility data from the API Gateway
    loadPortfolioData();
  }, []);

  return (
    <>
      <h2>Portfolio of previous projects</h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {portfolioData.map((item) => (
            <Grid item xs={4}>
              <Item>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <img
                  width={100}
                  src={`./assets/images/portfolio/${item.src}`}
                  alt={item.title}
                />
                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <Button variant="contained" href={item.href}>
                  {item.linkText}
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
