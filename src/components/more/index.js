import "./index.css";

import { Box, Container, Typography } from "@mui/material";

export default function More() {
  const Item = (props) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          position: "relative",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          borderRadius: 3,
          padding: 3,
          border: "1px solid #1f1f1f",
          backgroundImage:
            "radial-gradient(farthest-side at top right, #1f1f1f, #141414);",
        }}
      >
        {props.children}
      </Box>
    );
  };

  const imgHeight = {
    width: "auto",
    height: "80%",
    position: "absolute",
    bottom: "0%",
  };
  return (
    <Container
      sx={{
        display: "flex",
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="g-container-2">
        <div className="item1-2">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>
              Web Landing
            </Typography>
            <img alt="" style={imgHeight} src="./assets/more/carrier.jpg" />
          </Item>
        </div>
        <div className="item2-2">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>
              Web Landing
            </Typography>
            <img alt="" style={imgHeight} src="./assets/more/safari.jpg" />
          </Item>
        </div>
        <div className="item3-2">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>
              Web Landing
            </Typography>
            <img alt="" style={imgHeight} src="./assets/more/sphere.jpg" />
          </Item>
        </div>
      </Box>
    </Container>
  );
}
