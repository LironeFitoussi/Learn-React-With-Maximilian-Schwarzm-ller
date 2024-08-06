import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function Root() {
    const navigation = useNavigation();
    return (
        <div>
            <MainNavigation />
            { navigation.state === 'loading' && <p>Loading...</p> }
            <main>
                <Outlet />
            </main>
        </div>
    );
}