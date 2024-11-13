import { Box, Container, Typography } from "@mui/material";
import "./index.css";
export default function About() {
  const Item = (props) => {
    return (
      <Box
        sx={{
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
  return (
    <Container
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="g-container">
        <div className="item1">
          <Item>1</Item>
        </div>
        <div className="item2">
          <Item>2</Item>
        </div>
        <div className="item3">
          <Item>3</Item>
        </div>
        <div className="item4">
          <Item>4</Item>
        </div>
        <div className="item5">
          <Item>5</Item>
        </div>
      </Box>
    </Container>
  );
}
