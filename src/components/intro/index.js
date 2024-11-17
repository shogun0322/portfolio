import { Box } from "@mui/material";
import Image from "next/image";

const imageContainer = {
  width: "90%",
  height: { xs: "30dvh", sm: "40dvh", md: "90dvh" },
  overflow: "hidden",
  position: { md: "sticky" },
  borderRadius: { md: "20px" },
  top: { xs: "25dvh", md: "5dvh" },
};

const imageList = [
  "./assets/intro/mdss.webp",
  "./assets/intro/mettlink.webp",
  "./assets/intro/floor-plan.webp",
  "./assets/intro/kt-axa.webp",
  "./assets/intro/my-wealth+.webp",
  "./assets/intro/swd-pass.webp",
  "./assets/intro/swd-cms.webp",
];

export default function Intro() {
  return (
    <Box
      sx={{
        mb: 5,
        gap: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {imageList.map((row) => {
        return (
          <Box sx={imageContainer} key={row}>
            <Image
              alt=""
              src={row}
              height={716}
              width={1296}
              layout="responsive"
            />
          </Box>
        );
      })}
    </Box>
  );
}
