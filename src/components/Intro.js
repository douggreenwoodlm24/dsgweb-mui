import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Intro() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h1" component="div" gutterBottom>
        Doug Greenwood
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        Experienced front-end web developer. HTML, CSS, JavaScript, React,
        Vue.js and User Experience.
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        About me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Effective web design is judged by the users. A site should always look
        great but its not just about how good it looks, but how easy it is to
        use. I believe in the importance of good planning and understanding what
        visitors want. Translating this via wireframes into good code, I always
        try to deliver a high quality user experience – mobile-friendly,
        accessible, fast, navigable and enjoyable to browse.
      </Typography>
      <Typography variant="body1" gutterBottom>
        I've spent the last 8 years as a front-end web developer at two
        medium-sized web design companies, which means I'm used to working on
        multiple projects simultaneously and delivering (on schedule) web
        applications that fully meet the needs of their clients and visitors.
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Experience
      </Typography>
      <Typography variant="body1" gutterBottom>
        Over 15 years creating, developing and managing web sites &amp; online
        systems, from small, media-rich promotions to large-scale site
        re-designs.
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Career
      </Typography>
      <Typography variant="body1" gutterBottom>
        In my career I've been a front-end web developer at the McGraw-Hill
        Publishing Company, Avid Technology, PJ Media, Brandpath and Feedback
        Ferret.
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Team player
      </Typography>
      <Typography variant="body1" gutterBottom>
        I'm a conscientious, organised and meticulous worker, a team player with
        good communication skills, excellent at problem-solving and dedicated to
        achieving project goals.
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Agile
      </Typography>
      <Typography variant="body1" gutterBottom>
        I can successfully manage multiple web projects simultaneously - from
        inception and planning, through on-schedule delivery to analysis of
        their success and long-term strategy recommendations.
      </Typography>
    </Box>
  );
}
