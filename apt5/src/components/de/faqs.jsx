import { useState } from "react";

function FAQS() {

    const [openParagraphs, setOpenParagraphs] = useState({});

    const toggleParagraph = (index) => {
        setOpenParagraphs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const faqData = [
        {
            question: `Wie komme ich nach Wismar und zum Apartment 5?`,
            answer: (<>Bei der Anreise mit dem Auto nimmst du von der Autobahn A20 kommend die Ausfahrt 
            "Wismar-Mitte". Zum Apartment 5 gelangst du dann am Kreisverkehr über die zweite Ausfahrt. 
            <br/>Per Zug nutzt du entweder die Verbindungen der Deutschen Bahn oder der ODEG.
            Der Flixbus hält ebenfalls in Wismar. ZOB und Bahnhof liegen in der nördlichen 
            Altstadt, das Apartment 5 ist von dort in nur 15 Gehminuten erreichbar.</>),
        },
        {
            question: `Wo kann ich parken, wenn ich mit dem Auto anreise?`,
            answer: (<>Rund um das Apartment 5 gibt es gleich mehrere Parkmöglichkeiten:
                    <br/><br/>
                    Kostenfrei: 
                    <br/>
                    <ul>
                        <li>Straße Vogelsang; 3-5 Gehminuten</li>
                        <li>Parkplatz Vogelsang Ecke Goethestraße; 6 Gehminuten</li>
                        <li>Straße Turnerweg; 5-7 Gehminuten</li>
                        <li>Parkplatz An der Hochbrücke; 12 Gehminuten</li>
                        <li>Parkplatz Schiffbauerdamm; 15 Gehminuten</li>
                        <li>Parkplatz Lübsche Straße Wismar (Lübsche Straße 105); 15 Gehminuten</li>
                    </ul>
                    Kostenpflichtig: 
                    <br/>
                    <ul>
                        <li>Parkplatz Turmstraße (Dr.-Leber-Str. 9); 8 Gehminuten; (15. Mrz - 31. Okt 4€ Tagesgebühr, sonst 1€, Bar- und Kartenzahlung)</li>
                        <li>Parkhaus Altstadt/Hafen (Stockholmer Str. 8); 18 Gehminuten</li>
                    </ul></>)
        },
        {
            question: `Wann sind Checkin und Checkout?`,
            answer: (<>Der Checkin ist zwischen 16 und 22 Uhr möglich. Solltest du erst nach 22 Uhr anreisen wollen,
                    kontaktiere die Gastgeberin über Airbnb, damit dir ein später Checkin ermöglicht werden kann. 
                    <br/><br/>Bis 11 Uhr solltest du wieder ausgecheckt haben.</>)
        },
        {
            question: `Gibt es einen Fahrstuhl zum Apartment?`,
            answer: `Da das Apartment 5 in einem Altbau aus dem Jahr 1902 liegt, ist kein Fahrstuhl 
                    vorhanden. Ein bisschen Treppensteigen ist hier notwendig. Der Ausblick lohnt sich 
                    dafür umso mehr.`
        },
        {
            question: `Muss ich Handtücher usw. mitbringen?`,
            answer: (<>Nein, musst du nicht. Handtücher, Bettwäsche, Duschbad & Shampoo, Seife sowie 
                    Toilettenpapier sind, wie du es auch aus dem Hotel kennst, mit im Buchungspreis 
                    enthalten und liegen im Apartment bei deiner Anreise bereit.<br/>Du kannst dir aber 
                    natürlich trotzdem dein Lieblingshandtuch von zu Hause mitbringen, wenn du möchtest.</>)
        },
        {
            question: `Welche Ausstattung gibt es im Apartment 5 noch?`,
            answer: (<>In deinem Urlaub soll es dir an nichts fehlen. Folgendes Equipment kannst du im Apartment 5 ohne 
                Aufpreis nutzen: 
                <br/><br/>
                <ul>
                    <li>Föhn</li>
                    <li>Bademäntel</li>
                    <li>Erste-Hilfe-Set</li>
                    <li>Ersatz-Zahnbürste</li>
                    <li>Ohropax</li>
                    <li>Waschpulver & Weichspüler</li>
                    <li>Wäscheständer & Wäscheklammern</li>
                    <li>Bügeleisen & Bügelbrett</li>
                    <li>Kaffee, Tee</li>
                    <li>Salz, Pfeffer, Gewürze</li>
                    <li>Bratöl</li>
                    <li>Beamer & Leinwand</li>
                    <li>Playstation (PS4) inkl. Spielen</li>
                    <li>Gesellschaftsspiele, Lego</li>
                    <li>Malstifte & -farben</li>
                    <li>Bücher</li>
                    <li>Sonos-Lautsprecher</li>
                    <li>Strandzelt & -liegen</li>
                    <li>Picknickdecke</li>
                    <li>Strandhandtücher</li>
                    <li>Strand- & Kühltasche</li>
                    <li>Ventilatoren</li>
                </ul></>)
        },
        {
            question: `Wird es im Sommer sehr warm im Dachgeschoss?`,
            answer: (<>Ein bisschen wärmer als im Erdgeschoss wird es auf jeden Fall. Die schlechtere 
                    Dämmung im Altbau hat im Sommer tatsächlich den Vorteil, dass die Innenwärme bei 
                    kühleren Außentemperaturen auch schneller wieder abgegeben wird. Was in gut gedämmten 
                    Gebäuden häufig einfach sehr viel länger dauert. Im Altbau staut sich die Hitze somit 
                    nicht.<br/>Dir stehen zusätzlich Ventilatoren zur Verfügung, die du an wärmeren Tagen 
                    einsetzen kannst. Das Schlafzimmer ist außerdem nach Norden ausgerichtet und somit 
                    der kühlste Ort in der Wohnung.</>)
        },
        {
            question: `Kann ich mit Baby im Apartment 5 urlauben?`,
            answer: `Auch die kleisten Erdenbürger sind im Apartment 5 herzlich willkommen. Beachte 
                    jedoch, dass das Apartment keine Ausstattung für Babys oder Kleinkinder bereithält 
                    und auch auch keine Sicherheitsmaßnahmen inbegriffen hat. Du kannst dir jedoch alles 
                    selbst mitbringen, was dein Baby oder Kind benötigt und du gut ins oberste Stockwerk 
                    transportiert bekommst.`
        },
    ];

    return (
        <div className="content">
            <article>
                <h1>FAQs</h1>
                {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggleParagraph(index)}>
                        <h2>
                            <span className="icon">{openParagraphs[index] ? "-" : "+"}</span>
                            {faq.question}
                        </h2>
                    </div>
                    {openParagraphs[index] && (
                        <p className="faq-answer">
                            {faq.answer}
                        </p>
                    )}
                </div>
            ))}
            </article>
        </div>
    )
};

export default FAQS;