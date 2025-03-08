import { Collection, MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'

export default class MongoConnector {
    private dbName: string;
    private uri: string;
    private client: MongoClient;

    constructor() {
        dotenv.config();
        this.dbName = process.env.MONGO_DATABASE_NAME || '';
        this.uri = process.env.MONGO_CONNECTION_STRING || '';
        this.client = new MongoClient(this.uri);
    }

    async close(): Promise<void> {
        await this.client.close();
    }

    async getCollection(collectionName: string): Promise<Collection<any>> {
        return this.client.db(this.dbName).collection(collectionName);
    }
}

// const mongo = new MongoConnector();
// mongo.getCollection('news').then(async conn => {
//     await conn.insertOne({ "test": "abc" })
// }).finally(async () => await mongo.close());

