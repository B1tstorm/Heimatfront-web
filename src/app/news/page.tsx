import { List } from "@mui/material";
import StyledCard from "../components/cards/BigCard";
import Footer from "../components/footer/Footer";
import styles from "./styles.module.css";
import PreviewCard from "../components/cards/PreviewCard";
import Grid from "@mui/material/Grid2";
import MongoConnector from "../MongoConnector";
import { Collection, WithId } from "mongodb";

type NewsItem = {
  title: string;
  text: string;
  createdAt: Date;
};

type NewsItemDoc = WithId<NewsItem>;

export default async function Page() {
  async function getNews(): Promise<NewsItemDoc[]> {
    const db = new MongoConnector();
    try {
      const newsCollection: Collection<NewsItemDoc> = await db.getCollection(
        "news"
      );
      const values: NewsItemDoc[] = await newsCollection.find({}).toArray();

      return values.map((doc) => doc);
    } finally {
      await db.close();
    }
  }

  async function addNews(newsItem: NewsItem): Promise<void> {
    const db = new MongoConnector();
    try {
      const newsCollection: Collection<Partial<NewsItemDoc>> =
        await db.getCollection("news");
      await newsCollection.insertOne(newsItem);
    } finally {
      await db.close();
    }
  }

  // await addNews({
  //   title: "Mein zweites item",
  //   text: "Läuft würde ich sagen!",
  //   createdAt: new Date(),
  // });

  return (
    <div className={styles.page}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 12 }}>
          <StyledCard>
            <h1>News</h1>
          </StyledCard>
        </Grid>
        {(await getNews()).map((newsItem, index) => {
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
