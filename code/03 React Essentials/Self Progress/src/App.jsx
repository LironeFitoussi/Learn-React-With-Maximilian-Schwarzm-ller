import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from "./components/TabButton.jsx"
import { EXAMPLES } from './data.js';
function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please Select a topic.</p>;
    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    const handleClick = (selectedButton) => {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedButton);
        // console.log(selectedTopic);
    };

    // console.log("App Component executing");

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/* <TabButton>Component</TabButton> */}
                        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')} label="Component" />
                        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')} label="JSX" />
                        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')} label="Props" />
                        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')} label="State" />
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
