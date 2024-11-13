import { Box } from "@mui/material";
import Image from "next/image";

const imageContainer = {
  width: "90%",
  height: "90dvh",
  overflow: "hidden",
  borderRadius: "20px",
  position: "sticky",
  top: "5dvh",
};

const imageList = [
  "./assets/intro/mdss.jpg",
  "./assets/intro/mettlink.jpg",
  "./assets/intro/floor-plan.jpg",
  "./assets/intro/kt-axa.jpg",
  "./assets/intro/my-wealth+.jpg",
  "./assets/intro/swd-pass.jpg",
  "./assets/intro/swd-cms.jpg",
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
              height={900}
              width={1600}
              layout="responsive"
            />
          </Box>
        );
      })}
    </Box>
  );
}
