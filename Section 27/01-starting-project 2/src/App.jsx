import Accordion from './components/Accordion/Accordion.jsx';
import SearchableList from './components/SearchableList/SearchableList.jsx';
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return ( 
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">We deliver results</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Our team has a proven track record of delivering results. We&apos;ve helped hundreds of clients achieve their goals and grow their businesses.</p>
              </article>
            </Accordion.Content> 
          </Accordion.Item>
          <Accordion.Item id="something" className="accordion-item">
            <Accordion.Title className="accordion-item-title">We&apos;re experts in our field</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Our team is made up of experts in their respective fields. We have years of experience and a wealth of knowledge that we bring to every project.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} />
        <SearchableList items={['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'orange', 'pear', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon']} />
      </section>
    </main>
  );
}

export default App;
