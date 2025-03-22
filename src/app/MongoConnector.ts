import { Collection, MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'

export interface IMongoConnector {
    close: () => Promise<void>;
    getCollection: (collectionname: string) => Promise<Collection<any>>;
}

export class MongoConnector implements IMongoConnector {
    private dbName: string;
    private uri: string;
    private client: MongoClient | null = null;

    constructor() {
        dotenv.config();
        if (!process.env.MONGO_CONNECTION_STRING || !process.env.MONGO_DATABASE_NAME) {
            throw new Error('Missing environment variables in .env file')
        }
        this.dbName = process.env.MONGO_DATABASE_NAME || '';
        this.uri = process.env.MONGO_CONNECTION_STRING || '';
    }

    async close(): Promise<void> {
        if (this.client) {
            await this.client.close();
            this.client = null;
        }
    }

    public async getCollection(collectionName: string): Promise<Collection<any>> {
        if (!this.client) {
            this.client = new MongoClient(this.uri);
            await this.client.connect();
        }
        return this.client.db(this.dbName).collection(collectionName);
    }
}
