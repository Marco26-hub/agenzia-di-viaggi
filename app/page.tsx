const destinations = [
  {
    title: "Costiera Amalfitana privata",
    tag: "Luxury Italia",
    image:
      "https://perasail.com/_next/image?q=75&url=https%3A%2F%2Fminio.perasail.com%2Fperasail-storage%2Fblog%2F8436d7d3-a45a-40b9-a244-202c10b2172a.jpg&w=3840",
    details: "Hotel 5 stelle, yacht day, chef table, transfer privati",
    price: "da 4.900 euro",
  },
  {
    title: "Maldives overwater retreat",
    tag: "Honeymoon",
    image:
      "https://travelsort.com/wp-content/uploads/2017/11/travelsort-2883.jpeg",
    details: "Villa sull'acqua, spa, seaplane, dining personalizzato",
    price: "da 7.800 euro",
  },
  {
    title: "Safari lodge experience",
    tag: "Signature",
    image:
      "https://south-africa.net/uploads/luxury-retreats-in-south-africa-1-1024x558.jpg",
    details: "Game drive, lodge boutique, guida privata, estensione mare",
    price: "da 8.600 euro",
  },
];

const operatingLinks = [
  ["Hotel e ville", "Expedia Rapid, Hotelbeds, RateHawk, WebBeds, direct luxury contracts"],
  ["Voli", "Amadeus, Sabre, Travelport, Duffel, NDC airline direct"],
  ["Tour ed esperienze", "Viator, GetYourGuide, Musement, partner locali selezionati"],
  ["Transfer e auto", "Mozio, Welcome Pickups, Talixo, Rentalcars, CarTrawler"],
  ["Pagamenti", "Stripe, PayPal, acconti, saldo pratica, link pagamento"],
  ["CRM e vendite", "HubSpot, Airtable, WhatsApp Business, email automation"],
];

const luxuryServices = [
  "Consulente dedicato",
  "Itinerario su misura",
  "Hotel benefit e upgrade",
  "Assistenza durante il viaggio",
  "Ville, yacht, safari e retreat",
  "Profilo cliente e preferenze",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Navigazione principale">
          <a className="brand" href="#top" aria-label="Aurum Travel">
            <span>Aurum</span> Travel
          </a>
          <div className="navLinks">
            <a href="#viaggi">Viaggi</a>
            <a href="#luxury">Luxury</a>
            <a href="#sistema">Sistema</a>
            <a className="navCta" href="#preventivo">
              Preventivo
            </a>
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">Agenzia online boutique</p>
            <h1>Aurum Travel</h1>
            <p className="lead">
              Viaggi su misura, luxury concierge e pacchetti selezionati con
              una piattaforma pronta a collegare hotel, voli, esperienze,
              pagamenti e CRM.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#preventivo">
                Disegna il viaggio
              </a>
              <a className="secondaryButton" href="#sistema">
                Vedi collegamenti
              </a>
            </div>
            <dl className="metrics" aria-label="Indicatori operativi">
              <div>
                <dt>48h</dt>
                <dd>prima proposta</dd>
              </div>
              <div>
                <dt>24/7</dt>
                <dd>supporto luxury</dd>
              </div>
              <div>
                <dt>6</dt>
                <dd>aree integrate</dd>
              </div>
            </dl>
          </div>

          <div className="searchPanel" aria-label="Richiesta rapida viaggio">
            <div className="panelHeader">
              <span>Smart quote</span>
              <strong>Lead qualificato</strong>
            </div>
            <form>
              <label>
                Destinazione
                <input placeholder="Maldive, Giappone, Costiera..." />
              </label>
              <div className="formRow">
                <label>
                  Partenza
                  <input type="date" />
                </label>
                <label>
                  Budget
                  <select defaultValue="">
                    <option value="" disabled>
                      Seleziona
                    </option>
                    <option>2-5k</option>
                    <option>5-10k</option>
                    <option>10k+</option>
                  </select>
                </label>
              </div>
              <label>
                Stile di viaggio
                <select defaultValue="tailor">
                  <option value="tailor">Su misura</option>
                  <option value="luxury">Luxury concierge</option>
                  <option value="family">Famiglia</option>
                  <option value="corporate">Corporate</option>
                </select>
              </label>
              <button type="button">Prepara richiesta</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">Strategia</p>
          <h2>Partire snelli, vendere bene, integrare dopo.</h2>
        </div>
        <p>
          La prima versione punta a convertire richieste reali: form chiaro,
          offerte curate, canali di contatto e posizionamento premium. Le API
          complesse arrivano quando sappiamo quali prodotti generano margine.
        </p>
      </section>

      <section className="section" id="viaggi">
        <div className="sectionHeading">
          <p className="eyebrow">Collezione iniziale</p>
          <h2>Viaggi ad alto valore</h2>
        </div>
        <div className="destinationGrid">
          {destinations.map((destination) => (
            <article className="destinationCard" key={destination.title}>
              <img src={destination.image} alt={destination.title} />
              <div>
                <span>{destination.tag}</span>
                <h3>{destination.title}</h3>
                <p>{destination.details}</p>
                <strong>{destination.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="luxuryBand" id="luxury">
        <div>
          <p className="eyebrow">Private travel</p>
          <h2>Divisione luxury separata dal catalogo standard.</h2>
          <p>
            Per clienti alto spendenti il sito deve trasmettere accesso, cura e
            discrezione: call conoscitiva, profilo preferenze, partner hotel,
            benefit, assistenza durante il viaggio e itinerari firmati.
          </p>
        </div>
        <ul>
          {luxuryServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="section system" id="sistema">
        <div className="sectionHeading">
          <p className="eyebrow">Architettura commerciale</p>
          <h2>Collegamenti da prevedere</h2>
        </div>
        <div className="linkMatrix">
          {operatingLinks.map(([category, tools]) => (
            <div className="linkRow" key={category}>
              <h3>{category}</h3>
              <p>{tools}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quoteSection" id="preventivo">
        <div>
          <p className="eyebrow">Primo flusso vendita</p>
          <h2>Richiesta preventivo pronta per CRM e WhatsApp.</h2>
          <p>
            Il prossimo passo operativo e' collegare questo form a email,
            WhatsApp Business e CRM. Subito dopo si aggiungono pagamenti per
            acconto e area pratica cliente.
          </p>
        </div>
        <form className="quoteForm">
          <label>
            Nome e cognome
            <input placeholder="Mario Rossi" />
          </label>
          <label>
            Email o WhatsApp
            <input placeholder="+39 oppure email" />
          </label>
          <label>
            Che viaggio vuoi creare?
            <textarea placeholder="Destinazione, periodo, persone, budget, desideri speciali" />
          </label>
          <button type="button">Invia richiesta</button>
        </form>
      </section>
    </main>
  );
}
