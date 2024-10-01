import Accordion from './components/Accordion/Accordion.jsx';

function App() {
  return ( 
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="experience" className="accordion-item-title">We deliver results</Accordion.Title>
            <Accordion.Content id="experience" className="accordion-item-content">
              <article>
                <p>Our team has a proven track record of delivering results. We&apos;ve helped hundreds of clients achieve their goals and grow their businesses.</p>
              </article>
            </Accordion.Content> 
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="something" className="accordion-item-title">We&apos;re experts in our field</Accordion.Title>
            <Accordion.Content id="something" className="accordion-item-content">
              <article>
                <p>Our team is made up of experts in their respective fields. We have years of experience and a wealth of knowledge that we bring to every project.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
