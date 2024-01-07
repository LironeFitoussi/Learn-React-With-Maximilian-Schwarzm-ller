import { CORE_CONCEPTS } from "./data"
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
    return (
        <div>
            <Header />
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    <CoreConcept {...CORE_CONCEPTS[0]} />
                    <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept
                        title={CORE_CONCEPTS[3].title}
                        description={CORE_CONCEPTS[3].description}
                        img={CORE_CONCEPTS[3].image}
                    />
                </ul>
            </section>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;