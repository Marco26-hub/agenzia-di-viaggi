const destinations = [
  {
    title: "Costiera Amalfitana privata",
    tag: "Luxury Italia",
    image:
      "https://www.labellavitamalficharter.com/wp-content/uploads/2024/04/LaBellavita-Charter-Boats-Rentals-AmalfiCoast_Capri_Positano_Boat_DJI_0483.jpg",
    details: "Hotel 5 stelle, yacht day, chef table, transfer privati",
    price: "da 4.900 euro",
  },
  {
    title: "Maldives overwater retreat",
    tag: "Honeymoon",
    image:
      "https://multimedia.alpitour.it/images/205641/I_883277.webp",
    details: "Villa sull'acqua, spa, seaplane, dining personalizzato",
    price: "da 7.800 euro",
  },
  {
    title: "Safari lodge experience",
    tag: "Signature",
    image:
      "https://www.madikwereserve.org/wp-content/uploads/2016/05/pool-4.jpg",
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

const privateCollections = [
  {
    number: "01",
    label: "Mare Privato",
    title: "Orizzonti che appartengono solo a voi.",
    copy: "Yacht con equipaggio, ville con accesso al mare, isole riservate e tavoli che non si prenotano: ogni giorno segue il vostro ritmo, non un programma preconfezionato.",
    details: ["Yacht e tender privato", "Ville sul mare e island buyout", "Chef, sommelier e beach club access"],
    image: "https://bestchoiceyachting.com/search-images/optimized/luxury-motor-yacht-charter-sunset-stern-2.jpg",
  },
  {
    number: "02",
    label: "Alta Quota",
    title: "La montagna, quando il silenzio vale di piu' del rumore.",
    copy: "Chalet contemporanei, piste raggiunte prima degli altri, guide private e spa con vista sulle Dolomiti. L'alta quota diventa il vostro spazio personale.",
    details: ["Chalet con staff dedicato", "Ski concierge e heli transfer", "Wellness, cucina privata, accessi speciali"],
    image: "https://static.wixstatic.com/media/90be2d_ef864e56ba284b40823b3f10323ad8c3~mv2.jpg/v1/fill/w_2458%2Ch_1638%2Cal_c%2Cq_90/mountain-chalet-pool-family-south-tyrol.jpg",
  },
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
          <p className="eyebrow">Agenzia viaggi luxury online</p>
          <h2>Viaggi su misura che iniziano dall&apos;ascolto.</h2>
        </div>
        <p>
          Aurum Travel e&apos; un&apos;agenzia viaggi luxury online italiana per
          itinerari su misura, lune di miele, safari privati, yacht, ville e
          retreat in montagna. Dalla Costiera Amalfitana alle Maldive, ogni
          proposta unisce consulenza personale, partner selezionati e
          assistenza dedicata prima, durante e dopo il viaggio.
        </p>
      </section>

      <section className="manifesto" aria-label="Aurum Private Travel">
        <div className="manifestoOverlay">
          <p className="eyebrow">Aurum Private Travel</p>
          <p className="manifestoLine">Il lusso non e&apos; una categoria. E&apos; il modo in cui ogni dettaglio arriva al posto giusto.</p>
          <a className="textLink" href="#preventivo">Parla con un travel designer <span aria-hidden="true">→</span></a>
        </div>
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

      <section className="luxuryDivision" id="luxury">
        <div className="luxuryIntro">
          <div>
            <p className="eyebrow">Aurum private travel</p>
            <h2>Due mondi. Un unico standard senza compromessi.</h2>
          </div>
          <p>
            Una divisione dedicata a chi non cerca semplicemente una
            destinazione, ma accesso, tempo e discrezione. La costruiamo
            ascoltando prima di proporre.
          </p>
        </div>

        <div className="collectionGrid">
          {privateCollections.map((collection) => (
            <article className="collectionCard" key={collection.label}>
              <img src={collection.image} alt={collection.label} />
              <div className="collectionCopy">
                <span>{collection.number} / {collection.label}</span>
                <h3>{collection.title}</h3>
                <p>{collection.copy}</p>
                <ul>
                  {collection.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="serviceSignature">
          <p>La firma Aurum</p>
          <ul>
            {luxuryServices.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
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
