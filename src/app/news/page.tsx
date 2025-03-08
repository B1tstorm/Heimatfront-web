import { List } from "@mui/material";
import StyledCard from "../components/cards/BigCard";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import PreviewCard from "../components/cards/PreviewCard";
import Grid from "@mui/material/Grid2";
import NewsService, { INewsService } from "./NewsService";

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
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <PreviewCard
                title={newsItem.title}
                description={newsItem.text}
                moreBtnHref={"/news"}
              />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
}
