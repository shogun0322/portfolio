import "./index.css";

import { Box, Container, Typography } from "@mui/material";

export default function About() {
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

  const imageStyle = {
    width: "80%",
    height: "auto",
    position: "absolute",
    top: "30%",
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
        flexDirection: "column",
        py: 5,
      }}
    >
      <Box className="g-container">
        <div className="item1">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>Design Api</Typography>
            <img alt="" style={imageStyle} src="./assets/about/api.jpg" />
          </Item>
        </div>
        <div className="item2">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>
              Webview for mobile app
            </Typography>
            <img alt="" style={imgHeight} src="./assets/about/content.jpg" />
          </Item>
        </div>
        <div className="item3">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>
              Webview for mobile app
            </Typography>
            <img alt="" style={imgHeight} src="./assets/about/indoor.jpg" />
          </Item>
        </div>
        <div className="item4">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>
              Webview for mobile app
            </Typography>
            <img alt="" style={imgHeight} src="./assets/about/privilege.jpg" />
          </Item>
        </div>
        <div className="item5">
          <Item>
            <Typography sx={{ alignSelf: "flex-start" }}>
              Webview for mobile app
            </Typography>
            <img alt="" style={imgHeight} src="./assets/about/carpark.jpg" />
          </Item>
        </div>
      </Box>
    </Container>
  );
}
