import { MongoClient} from 'mongodb';

// api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // console.log(data);

        const client = await MongoClient.connect('mongodb+srv://lironefit:<password>@cluster0.57drh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({ message: 'Meetup created!', data: data, id: result.insertedId });
    }
}

export default handler;


// NUULTJmL1GACQhVn
// lironefit