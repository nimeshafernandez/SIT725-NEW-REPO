const { MongoClient } = require('mongodb');


const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

async function insertMusicData() {
  try {
   
    await client.connect();

    
    const database = client.db("music");
    const collection = database.collection("albums");

   
    const musicData = [
      {
        artist: "Adele",
        album: "25",
        releaseDate: "2015-11-20",
        tracks: [
          { title: "Hello", duration: "4:55", genre: "Pop" },
          { title: "When We Were Young", duration: "4:10", genre: "Pop" },
          { title: "Send My Love (To Your New Lover)", duration: "3:43", genre: "Pop" }
        ]
      },
      {
        artist: "Taylor Swift",
        album: "1989",
        releaseDate: "2014-10-27",
        tracks: [
          { title: "Shake It Off", duration: "3:39", genre: "Pop" },
          { title: "Blank Space", duration: "3:51", genre: "Pop" },
          { title: "Style", duration: "3:50", genre: "Pop" }
        ]
      }
    ];

  
    const result = await collection.insertMany(musicData);
    console.log(`Successfully inserted ${result.insertedCount} records.`);
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
   
    await client.close();
  }
}


insertMusicData();
