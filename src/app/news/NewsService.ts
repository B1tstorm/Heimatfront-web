import { Collection, InsertOneResult, WithId } from "mongodb";
import { MongoConnector } from "../MongoConnector";
import { NewsItem, NewsItemDoc } from "./types";


export interface INewsService {
    fetchNews: () => Promise<NewsItemDoc[]>
    addNews: (newsItem: NewsItem) => Promise<boolean>
}

export default class NewsService implements INewsService {
    private db: MongoConnector;
    private news: Collection<NewsItemDoc | NewsItem>;

    constructor() {
        this.db = new MongoConnector();
        this.news = this.db.getCollection('news');
    }

    async fetchNews(): Promise<NewsItemDoc[]> {
        try {
            return (await this.news
                .find({})
                .toArray())
                .map((doc) => doc);
        } finally {
            await this.db.close();
        }
    }

    async addNews(newsItem: NewsItem): Promise<boolean> {
        try {
            const result: InsertOneResult = await this.news.insertOne(newsItem);
            return result.acknowledged;
        } finally {
            await this.db.close();
        }
    }
}
