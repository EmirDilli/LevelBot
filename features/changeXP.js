const { MongoClient } = require("mongodb");
const {readData} = require("../databaseFeatures/dbReadData")
const {updateData} = require("../databaseFeatures/dbUpdateUser")
const {levelControl} = require("./levelControl")
/**
 * @param {MongoClient} mongoClient
 */


module.exports = {

    async addXP(mongoClient, userID, amount){
        let xp;
        
        await readData(mongoClient, {
            "userID": userID
        }).then(datas => {
            xp = datas[0].XP;
        });

        console.log(xp);
        await updateData(mongoClient, {
            "userID": userID
        },
        {
            "XP": xp + amount
        })
        //level control after changing of the xp
        levelControl(mongoClient, userID)
    }
}