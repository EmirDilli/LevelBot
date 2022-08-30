const {MongoClient, Collection} = require("mongodb");


module.exports = {

    /**
     *  the "mongoClient" here is the Mongo Client that is formed while connecting the app to the database, it is not the bot client itself.
     * @param {MongoClient} mongoClient 
     */

    async addData(mongoClient, schema){

        try {
            const collection = mongoClient.db("LevelBotDatabase").collection("users");
            collection.insertOne(schema);
        } catch (error) {
            console.log("Error occured while adding data to database: " + error);
        }

    }
}