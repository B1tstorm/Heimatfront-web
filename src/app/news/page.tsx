import { List } from "@mui/material";
import StyledCard from "../components/cards/BigCard";
import Footer from "../components/footer/Footer";
import styles from "./styles.module.css";
import PreviewCard from "../components/cards/PreviewCard";
import Grid from "@mui/material/Grid2";
import MongoConnector from "../MongoConnector";

const news = [
  { title: "Test title1", text: "abcahjhs ashdhashdha has d!" },
  { title: "Test title2", text: "abcahjhs ashdhashdha has d!" },
  { title: "Test title3", text: "abcahjhs ashdhashdha has d!" },
  { title: "Test title4", text: "abcahjhs ashdhashdha has d!" },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 12 }}>
          <StyledCard>
            <h1>News</h1>
          </StyledCard>
        </Grid>
        {news.map((newsItem) => {
          return (
            <Grid size={{ xs: 12, md: 6 }}>
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
