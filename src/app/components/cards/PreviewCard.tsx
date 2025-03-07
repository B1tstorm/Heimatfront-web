import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface SmallCardProps {
  title: string;
  description: string;
  moreBtnHref: string;
  extraBtnHref?: string;
}

function SmallCard({
  title,
  description,
  moreBtnHref,
  extraBtnHref,
}: SmallCardProps) {
  return (
    <Card
      sx={{
        minHeight: 420,
        maxHeight: 420,
        maxWidth: 800,
        overflow: "auto",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" textAlign={"center"}>
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
          {extraBtnHref ? (
            <Button size="small">
              <Link target="_blank" href={extraBtnHref || ""}>
                Weitere Infos
              </Link>
            </Button>
          ) : (
            ""
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link href={moreBtnHref}>Mehr</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default SmallCard;
