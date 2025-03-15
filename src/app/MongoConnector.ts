import { Collection, MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'

export interface IMongoConnector {
    close: () => Promise<void>;
    getCollection: (collectionname: string) => Promise<Collection<any>>;
}

export class MongoConnector implements IMongoConnector {
    private dbName: string;
    private uri: string;

    constructor() {
        dotenv.config();
        this.dbName = process.env.MONGO_DATABASE_NAME || '';
        this.uri = process.env.MONGO_CONNECTION_STRING || '';
    }

    async close(): Promise<void> {
        const client = new MongoClient(this.uri);
        await client.close();
    }

    public async getCollection(collectionName: string): Promise<Collection<any>> {
        const client = new MongoClient(this.uri);
        return await client.db(this.dbName).collection(collectionName);
    }
}
