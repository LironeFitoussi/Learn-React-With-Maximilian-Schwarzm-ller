import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    
    let title = "An error occurred!";
    let message = "Something went wrong!";

    if (error.status === 404) {
        title = "Not found!";
        message = error.data.message || error.data;
    }

    if (error.status === 500) {
        message = error.data.message || error.data;
    }

    return (
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    )
}