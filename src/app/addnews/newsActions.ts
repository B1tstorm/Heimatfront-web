'use server'

import NewsService, { INewsService } from "../news/NewsService"
import { NewsItem } from "../news/types";

export async function addNewsItem(newsItem: NewsItem): Promise<boolean> {
    const newsService: INewsService = new NewsService();

    return await newsService.addNews(newsItem);
}