import { Collection, InsertOneResult, WithId } from "mongodb";
import { MongoConnector } from "../MongoConnector";
import { NewsItem, NewsItemDoc } from "./types";


export interface INewsService {
    fetchNews: () => Promise<NewsItemDoc[]>
    fetchLastNewsItem: () => Promise<NewsItemDoc>
    addNews: (newsItem: NewsItem) => Promise<boolean>
}

export default class NewsService implements INewsService {
    private db: MongoConnector;
    private collectionName: string;

    constructor() {
        this.db = new MongoConnector();
        this.collectionName = 'news';
    }

    async fetchNews(): Promise<NewsItemDoc[]> {
        try {
            const news = await this.db.getCollection(this.collectionName);
            return (await news
                .find({})
                .toArray())
                .map((doc) => doc);
        } finally {
            await this.db.close();
        }
    }

    async fetchLastNewsItem(): Promise<NewsItemDoc> {
        try {
            const news = await this.db.getCollection(this.collectionName);
            return (await news.findOne({}, { sort: { createdAt: -1 } }))
        } catch (e) {
            console.error("Fehler beim Abrufen des letzten News eintrags: ", e);
            throw e;
        }
    }

    async addNews(newsItem: NewsItem): Promise<boolean> {
        try {
            const news = await this.db.getCollection(this.collectionName);
            const result: InsertOneResult = await news.insertOne(newsItem);
            return result.acknowledged;
        } finally {
            await this.db.close();
        }
    }
}
