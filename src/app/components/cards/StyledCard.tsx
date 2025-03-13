import { Card, CardContent } from "@mui/material";
import { JSX } from "react";
import styles from "./styles.module.css";

interface BigCardProps {
  children: JSX.Element;
  align?: "center" | "left" | "right";
}

function StyledCard({ children, align }: BigCardProps): JSX.Element {
  switch (align) {
    case "right":
      return (
        <Card className={styles.myMuiCard} sx={{ minWidth: 275 }}>
          <CardContent style={{ textAlign: "right" }}>{children}</CardContent>
        </Card>
      );
    case "left":
      return (
        <Card className={styles.myMuiCard} sx={{ minWidth: 275 }}>
          <CardContent style={{ textAlign: "left" }}>{children}</CardContent>
        </Card>
      );
    default:
      return (
        <Card className={styles.myMuiCard} sx={{ minWidth: 275 }}>
          <CardContent style={{ textAlign: "center" }}>{children}</CardContent>
        </Card>
      );
  }
}

export default StyledCard;
