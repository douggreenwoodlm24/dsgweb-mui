import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import codeexamples from "../data/codeexamples.json";

const CodeExamples = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={4} md={4}>
          Code Examples
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Typography>
            {codeexamples.map((item) => (
              <div key={item.title}>
                {item.title}
                <br />
                {item.description}
                <br />
                <a href={item.hrefGithub}>View files on Github</a>
              </div>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CodeExamples;
