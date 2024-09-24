import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
// Custom Component Imports
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails (props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />

        </>
    )
}
 
export async function getStaticPaths() {
    // fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://lironefit:<password>@cluster0.57drh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    // get all meetups from meetups collection
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, 
        { _id: 1 }
    ).toArray();

    return {
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        })),
        fallback: 'blocking'
    };
}

export async function getStaticProps(context) {
    // get id of all meetup fron context params
    const meetupId = context.params?.meetupId;

    const client = await MongoClient.connect('mongodb+srv://lironefit:<password>@cluster0.57drh.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

    client.close();

    // fetch data for a single meetup
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;