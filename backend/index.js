const express = require('express')
const app = express()
const port = process.env.PORT ||5000
const cors = require('cors')
//middleware makes connection to frontend side

app.use(cors());
app.use(express.json());
 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//mongodb 

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://atheekhebbar:atheek@cluster0.bjooka8.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //collection of database
      const atheekhebbar = client.db("bookinventory").collection("books");

      //insert a book to the database using post method
      app.post("/upload-book",async(req,res) => {
        const data =req.body;
        console.log(data)
        const result = await atheekhebbar.insertOne( data);
        res.send(result);

      })

      //get all books from database 
      // app.get("/all-books", async (req, res) => {
      //   const books = await atheekhebbar.find().toArray(); // Use await and toArray()
      //   res.send(books);
      // });

      //update a book data by patch or update method
      app.patch("/book/:id",async(req,res)=>{
        const _id = req.params._id;
        const updatebookdata = req.body;
        const filter = {_id: new ObjectId(_id)};
        const options = { upsert: true };
        const updatedoc = {
          $set: {
            ...updatebookdata
          }
        }

        const result = await atheekhebbar.updateOne(filter,updatedoc,options);
        res.send(result);
      })
      //for deleting the data 
      app.delete("/book/:id", async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) }; // Use ObjectId to create the filter
        const result = await atheekhebbar.deleteOne(filter);
        res.send(result);
      });

     //find by category
     app.get("/all-books", async (req, res) => {
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await atheekhebbar.find(query).toArray();
      res.send(result)

     });
     app.get("/search", async (req, res) => {
      const query = req.query.q;
    
      try {
        const results = await atheekhebbar.find({
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
          ],
        }).toArray();
    
        res.json(results);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    

      


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})