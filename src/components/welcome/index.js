import { Box, Container, Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Container sx={container}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "80%", lg: "60%" },
        }}
      >
        <Typography variant="title">Panuwat Suwanritdej</Typography>
        <Typography variant="subTitle" sx={{ mt: 3 }}>
          Software Engineer
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="download">Tel: +66 0957682515</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="download">
            Email: shopanuwat.suwa@gmail.com
          </Typography>
        </Box>

        <Box mt={2}>
          <a
            href="./assets/file/Resume-Panuwat_Suwanritdej.pdf"
            download="Resume-Panuwat_Suwanritdej"
          >
            <Typography variant="download">
              Click here to Download Resume
            </Typography>
          </a>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="subTitle2">
            I&apos;m a Software Engineer with almost 5 years of experience
            specializing in both front-end and back-end development using React,
            React Native, Next.js, Apollo GraphQL, Node.js, and Micro-service My
            database expertise includes MongoDB, PostgreSQL, and Redis, allowing
            me to manage both relational and non-relational data effectively.
            For a unit test expertise in Jest
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

const container = {
  height: "70dvh",
  width: "100vw",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
};
