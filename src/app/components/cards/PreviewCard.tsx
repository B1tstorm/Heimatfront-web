import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface PreviewCardProps {
  title: string;
  description: string;
  moreBtnHref: string;
  extraBtnHref?: string;
}

function PreviewCard({
  title,
  description,
  moreBtnHref,
  extraBtnHref,
}: PreviewCardProps) {
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
        <Typography
          variant="h6"
          component="div"
          textAlign={"center"}
          sx={{ p: 1 }}
        >
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
        <Button size="small" variant="contained">
          <Link href={moreBtnHref}>Mehr</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PreviewCard;
