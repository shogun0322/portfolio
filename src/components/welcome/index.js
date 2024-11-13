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
        <Typography variant="title" noWrap>
          Panuwat Suwanritdej
        </Typography>
        <Typography variant="subTitle">Software Engineer</Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="subTitle2">
            I&apos;m a Software Engineer with Software Engineer with almost 5
            years of experience specializing in both front-end and back-end
            development using Reacet, React Native, Next.js, Apollo GraphQL,
            Node.js, and Micro-service
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
