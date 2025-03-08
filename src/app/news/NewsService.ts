import { Collection, MongoClient, WithId } from "mongodb";
import { IMongoConnector, MongoConnector } from "../MongoConnector";

type NewsItem = {
    title: string;
    text: string;
    createdAt: Date;
};

type NewsItemDoc = WithId<NewsItem>;

export interface INewsService {
    fetchNews: () => Promise<any[]>
    addNews: (newsItem: NewsItem) => Promise<void>
}

export default class NewsService implements INewsService {
    private db: MongoConnector;
    private news: Collection<Partial<NewsItemDoc>>;

    constructor() {
        this.db = new MongoConnector();
        this.news = this.db.getCollection('news');
    }

    async fetchNews(): Promise<any[]> {
        try {
            const newsDocs = await this.news.find({}).toArray();

            return newsDocs.map((doc) => doc);
        } finally {
            await this.db.close();
        }
    }

    async addNews(newsItem: NewsItem): Promise<void> {
        try {
            await this.news.insertOne(newsItem);
        } finally {
            await this.db.close();
        }
    }
}

// await addNews({
//   title: "Mein zweites item",
//   text: "Läuft würde ich sagen!",
//   createdAt: new Date(),
// });