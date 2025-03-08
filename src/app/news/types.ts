import { WithId } from "mongodb";

export type NewsItem = {
    title: string;
    text: string;
    externalLink: string;
    createdAt: Date;
};

export type NewsItemDoc = WithId<NewsItem>;
