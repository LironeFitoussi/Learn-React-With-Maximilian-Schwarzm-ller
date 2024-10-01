import Accordion from './components/Accordion/Accordion.jsx';

function App() {
  return ( 
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item" title="We deliver results">
            <article>
              <p>You can&apos;t argue with results, and we have a proven track record of delivering them. Our clients have seen their revenue increase by 34% on average.</p>
            </article>        
          </Accordion.Item>
          <Accordion.Item id="something" className="accordion-item" title="We&apos;re experts in our field">
            <article>
              <p>Our team is highly skilled and experienced. We have experts in web development, digital marketing, and business strategy. Whatever your needs, we&apos;ve got you covered.</p>
            </article>        
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
