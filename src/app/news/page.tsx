import { Button, Divider, Typography } from "@mui/material";
import StyledCard from "../components/cards/StyledCard";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid2";
import NewsService, { INewsService } from "./NewsService";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default async function Page() {
  const newsService: INewsService = new NewsService();

  return (
    <div className={styles.page}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 12 }}>
          <StyledCard>
            <h1>News</h1>
          </StyledCard>
        </Grid>
        {(await newsService.fetchNews()).map((newsItem, index) => {
          return (
            <Grid size={{ xs: 12, md: 12 }} key={index}>
              <StyledCard align="left">
                <>
                  <Typography variant="h6" component="div" textAlign={"center"}>
                    {newsItem.title}
                  </Typography>

                  <Typography variant="body1">{newsItem.text}</Typography>
                  <Divider sx={{ padding: 1 }} />

                  <Typography variant="overline">
                    <CalendarMonthIcon
                      fontSize="small"
                      sx={{ paddingTop: 0.7 }}
                    />{" "}
                    {newsItem.createdAt.toLocaleDateString()}
                  </Typography>

                  {newsItem.externalLink ? (
                    <Button size="small" sx={{ paddingLeft: 2 }}>
                      <Link target="_blank" href={newsItem.externalLink || ""}>
                        Weitere Infos
                      </Link>
                    </Button>
                  ) : (
                    ""
                  )}
                </>
              </StyledCard>
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
}
