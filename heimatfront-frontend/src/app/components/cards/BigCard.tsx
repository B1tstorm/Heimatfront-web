import { Card, CardContent } from "@mui/material";
import { JSX } from "react";

interface BigCardProps {
  children: JSX.Element;
}

function StyledCard({ children }: BigCardProps): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ textAlign: "center" }}>{children}</CardContent>
    </Card>
  );
}

export default StyledCard;
