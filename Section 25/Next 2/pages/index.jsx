import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

function HomePage({ meetups}) {
  return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!" />
            </Head>
            <MeetupList meetups={meetups} />
        </>
    );
}

// Using getServerSideProps() to fetch data from an API
// export async function getServerSideProps(context) {
//     const { req, res } = context;


//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }


// Using getStaticProps() to fetch data from an API
export async function getStaticProps() {
    // fetch data from an API
    
    const client = await MongoClient.connect('mongodb+srv://lironefit:<password>@cluster0.57drh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    // get all meetups from meetups collection
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        }, // will be passed to the page component as props
        revalidate: 10 // data will be revalidated every 10 seconds
    };
}


export default HomePage;