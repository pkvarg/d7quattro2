import type { LegalText } from "../types.ts";

// Section ids are anchors: #kontaktformular from the contact form, #cookies from the cookie bar.
export const privacy: Record<string, LegalText> = {
  de: {
    title: "Datenschutzerklärung",
    effective: "Gültig ab 11. 10. 2026",
    intro:
      "Hier erfahren Sie, welche personenbezogenen Daten diese Website verarbeitet, zu welchem Zweck, wie lange, wer Zugriff darauf hat und welche Rechte Sie nach der Datenschutz-Grundverordnung (DSGVO) und dem österreichischen Datenschutzgesetz (DSG) haben.",
    sections: [
      {
        id: "verantwortlicher",
        title: "1. Verantwortlicher",
        body: [
          "D7 BAU GmbH, Feldgasse 3, 2412 Wolfsthal, Österreich, FN 363308 b, Landesgericht Korneuburg.",
          "Kontakt: info@d7quattro.at, Tel. +43 676 374 9858.",
        ],
      },
      {
        id: "kontaktformular",
        title: "2. Kontaktformular und E-Mail",
        body: [
          "Daten: Name, E-Mail-Adresse, Telefonnummer (freiwillig) und Ihre Nachricht.",
          "Zweck und Rechtsgrundlage: Beantwortung Ihrer Anfrage, gegebenenfalls Vorbereitung eines Vertrags – vorvertragliche Maßnahmen auf Ihre Anfrage und unser berechtigtes Interesse, Anfragen zu beantworten (Art. 6 Abs. 1 lit. b und f DSGVO). Eine Einwilligung ist dafür nicht erforderlich.",
          "Die Nachricht wird per E-Mail an info@d7quattro.at zugestellt. Wir speichern Anfragen höchstens 2 Jahre nach dem letzten Kontakt, sofern daraus kein Vertrag entsteht.",
        ],
      },
      {
        id: "besuch",
        title: "3. Besuch der Website",
        body: [
          "Beim Aufruf der Website verarbeiten der Hosting-Anbieter und Cloudflare technische Daten, die für die Auslieferung und den Schutz vor Angriffen nötig sind: IP-Adresse, Browsertyp und Zeitpunkt des Zugriffs (berechtigtes Interesse am sicheren Betrieb, Art. 6 Abs. 1 lit. f DSGVO). Diese Protokolle werden nur kurz, in der Regel einige Wochen, gespeichert.",
        ],
      },
      {
        id: "cookies",
        title: "4. Cookies und Besucherstatistik",
        body: [
          "Notwendig (ohne Einwilligung):",
          [
            "CookieConsent – speichert Ihre Auswahl in der Cookie-Leiste, 365 Tage",
          ],
          "Besucherstatistik (nur mit Ihrer Einwilligung): Umami, ein datenschutzfreundliches Statistik-Tool auf einem Server in Deutschland (Contabo GmbH), betrieben von Pictusweb s.r.o. Es verwendet keine Cookies, speichert keine IP-Adressen und erstellt keine Nutzerprofile; sichtbar sind nur zusammengefasste Zahlen. Es startet erst nach Klick auf „Zustimmen“. Lehnen Sie ab, merkt sich Ihr Browser dies (umami.disabled). Bei Ihrer ersten Auswahl wird außerdem ein anonymer Besuchszähler erhöht.",
          "Schriften werden von dieser Website geladen, nicht von Google. Die Karte öffnet Google Maps erst, wenn Sie darauf klicken. Wir verwenden keine Werbe- oder Tracking-Cookies.",
          "Ihre Einwilligung können Sie jederzeit über „Cookie-Einstellungen“ in der Fußzeile ändern oder widerrufen (§ 165 Abs. 3 TKG 2021).",
        ],
      },
      {
        id: "empfaenger",
        title: "5. Empfänger",
        body: [
          "Wir verkaufen Ihre Daten nicht und nutzen sie nicht für Werbung. Zugriff haben nur diese Dienstleister, soweit es für ihre Leistung nötig ist:",
          [
            "Pictusweb s.r.o., Nábrežná 4895/42, 940 02 Nové Zámky, Slowakei – Entwicklung und Betrieb der Website, Versand der E-Mails aus dem Formular, Besucherstatistik",
            "Cloudflare, Inc. – Auslieferung der Website und Schutz vor Angriffen",
            "Contabo GmbH (Deutschland) – Server für den E-Mail-Versand und die Besucherstatistik",
            "Hostinger / Titan Mail – E-Mail-Postfach info@d7quattro.at",
          ],
        ],
      },
      {
        id: "drittland",
        title: "6. Übermittlung in Drittländer",
        body: [
          "Cloudflare und Titan Mail haben ihren Sitz oder Muttergesellschaften außerhalb der EU (insbesondere in den USA). Eine Übermittlung erfolgt nur mit geeigneten Garantien nach Kapitel V DSGVO – auf Grundlage des EU-U.S. Data Privacy Framework oder der Standardvertragsklauseln der Europäischen Kommission.",
        ],
      },
      {
        id: "rechte",
        title: "7. Ihre Rechte",
        body: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen sowie auf jederzeitigen Widerruf einer Einwilligung. Schreiben Sie uns an info@d7quattro.at – wir antworten unverzüglich, spätestens innerhalb eines Monats.",
          "Sie können sich auch bei der Österreichischen Datenschutzbehörde beschweren: Barichgasse 40–42, 1030 Wien, www.dsb.gv.at.",
        ],
      },
      {
        id: "aenderungen",
        title: "8. Änderungen",
        body: [
          "Wir passen diese Erklärung an, wenn sich die eingesetzten Dienste oder die Verarbeitung ändern. Diese Fassung gilt ab 11. 10. 2026.",
        ],
      },
    ],
  },
  sk: {
    title: "Zásady ochrany osobných údajov",
    effective: "Účinné od 11. 10. 2026",
    intro:
      "Tu nájdete, aké osobné údaje tento web spracúva, prečo, ako dlho, kto k nim má prístup a aké máte práva podľa nariadenia (EÚ) 2016/679 (GDPR) a rakúskeho zákona o ochrane údajov (DSG).",
    sections: [
      {
        id: "verantwortlicher",
        title: "1. Prevádzkovateľ",
        body: [
          "D7 BAU GmbH, Feldgasse 3, 2412 Wolfsthal, Rakúsko, FN 363308 b, Krajinský súd Korneuburg.",
          "Kontakt: info@d7quattro.at, tel. +43 676 374 9858.",
        ],
      },
      {
        id: "kontaktformular",
        title: "2. Kontaktný formulár a e-mail",
        body: [
          "Údaje: meno, e-mail, telefón (nepovinne) a vaša správa.",
          "Účel a právny základ: odpoveď na vašu otázku, prípadne príprava zmluvy – opatrenia pred uzavretím zmluvy na vašu žiadosť a náš oprávnený záujem odpovedať na správy (čl. 6 ods. 1 písm. b) a f) GDPR). Súhlas na to nepotrebujeme.",
          "Správa sa doručí e-mailom na info@d7quattro.at. Správy uchovávame najviac 2 roky od poslednej komunikácie, ak z nich nevznikne zmluva.",
        ],
      },
      {
        id: "besuch",
        title: "3. Návšteva webu",
        body: [
          "Pri návšteve webu spracúvajú poskytovateľ hostingu a Cloudflare technické údaje potrebné na doručenie stránky a ochranu pred útokmi: IP adresu, typ prehliadača a čas požiadavky (oprávnený záujem na bezpečnom fungovaní webu, čl. 6 ods. 1 písm. f) GDPR). Tieto záznamy sa uchovávajú len krátko, spravidla niekoľko týždňov.",
        ],
      },
      {
        id: "cookies",
        title: "4. Cookies a meranie návštevnosti",
        body: [
          "Nevyhnutné (bez súhlasu):",
          ["CookieConsent – zapamätá si vašu voľbu v lište cookies, 365 dní"],
          "Meranie návštevnosti (len s vaším súhlasom): Umami – nástroj na meranie návštevnosti na serveri v Nemecku (Contabo GmbH), ktorý prevádzkuje Pictusweb s.r.o. Nepoužíva cookies, neukladá IP adresu a nevytvára profil návštevníka; vidno len súhrnné štatistiky. Spustí sa až po kliknutí na „Súhlasím“. Ak meranie odmietnete, prehliadač si to zapamätá (umami.disabled). Pri prvej voľbe sa tiež pripočíta návšteva do anonymného počítadla.",
          "Písma sa načítavajú z tohto webu, nie od Google. Mapa otvorí Google Maps až po kliknutí. Nepoužívame reklamné ani sledovacie cookies.",
          "Súhlas môžete kedykoľvek zmeniť alebo odvolať odkazom „Nastavenia cookies“ v pätičke webu (§ 165 ods. 3 rakúskeho zákona TKG 2021).",
        ],
      },
      {
        id: "empfaenger",
        title: "5. Kto má k údajom prístup",
        body: [
          "Údaje nepredávame ani nepoužívame na reklamu. Prístup majú len títo poskytovatelia, v rozsahu potrebnom pre ich službu:",
          [
            "Pictusweb s.r.o., Nábrežná 4895/42, 940 02 Nové Zámky, Slovensko – vývoj a prevádzka webu, odosielanie e-mailov z formulára, meranie návštevnosti",
            "Cloudflare, Inc. – doručovanie webu a ochrana pred útokmi",
            "Contabo GmbH (Nemecko) – server na odosielanie e-mailov a meranie návštevnosti",
            "Hostinger / Titan Mail – e-mailová schránka info@d7quattro.at",
          ],
        ],
      },
      {
        id: "drittland",
        title: "6. Prenos údajov mimo EÚ",
        body: [
          "Cloudflare a Titan Mail majú sídlo alebo materskú spoločnosť mimo EÚ (najmä v USA). Prenos sa uskutočňuje len s primeranými zárukami podľa kapitoly V GDPR – na základe rámca EÚ – USA na ochranu osobných údajov (EU-U.S. Data Privacy Framework) alebo štandardných zmluvných doložiek Európskej komisie.",
        ],
      },
      {
        id: "rechte",
        title: "7. Vaše práva",
        body: [
          "Máte právo na prístup k údajom, ich opravu a vymazanie, obmedzenie spracúvania, prenosnosť, právo namietať proti spracúvaniu na základe oprávneného záujmu a kedykoľvek odvolať súhlas. Napíšte nám na info@d7quattro.at – odpovieme bez zbytočného odkladu, najneskôr do 1 mesiaca.",
          "Sťažnosť môžete podať na rakúsky úrad na ochranu údajov (Österreichische Datenschutzbehörde), Barichgasse 40–42, 1030 Viedeň, www.dsb.gv.at.",
        ],
      },
      {
        id: "aenderungen",
        title: "8. Zmeny",
        body: [
          "Tieto zásady aktualizujeme, keď sa zmenia použité služby alebo spôsob spracúvania. Toto znenie je účinné od 11. 10. 2026.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    effective: "Effective from 11 October 2026",
    intro:
      "This page explains what personal data this website processes, why, for how long, who has access to it and what rights you have under the GDPR and the Austrian Data Protection Act (DSG).",
    sections: [
      {
        id: "verantwortlicher",
        title: "1. Controller",
        body: [
          "D7 BAU GmbH, Feldgasse 3, 2412 Wolfsthal, Austria, FN 363308 b, Regional Court Korneuburg.",
          "Contact: info@d7quattro.at, phone +43 676 374 9858.",
        ],
      },
      {
        id: "kontaktformular",
        title: "2. Contact form and e-mail",
        body: [
          "Data: name, e-mail address, phone number (optional) and your message.",
          "Purpose and legal basis: answering your enquiry and, where relevant, preparing a contract – steps prior to a contract at your request and our legitimate interest in answering enquiries (Art. 6(1)(b) and (f) GDPR). No consent is needed for this.",
          "The message is delivered by e-mail to info@d7quattro.at. Enquiries are kept for at most 2 years after our last contact unless a contract follows.",
        ],
      },
      {
        id: "besuch",
        title: "3. Visiting the website",
        body: [
          "When you visit the site, the hosting provider and Cloudflare process the technical data needed to deliver it and protect it from attacks: IP address, browser type and time of request (legitimate interest in running the site securely, Art. 6(1)(f) GDPR). These logs are kept only briefly, usually a few weeks.",
        ],
      },
      {
        id: "cookies",
        title: "4. Cookies and visitor statistics",
        body: [
          "Necessary (no consent required):",
          ["CookieConsent – remembers your choice in the cookie bar, 365 days"],
          "Visitor statistics (only with your consent): Umami, a privacy-friendly analytics tool on a server in Germany (Contabo GmbH) operated by Pictusweb s.r.o. It uses no cookies, stores no IP addresses and builds no visitor profiles; only aggregate figures are visible. It starts only after you click “Accept”. If you decline, your browser remembers it (umami.disabled). Your first choice also adds one to an anonymous visit counter.",
          "Fonts are loaded from this website, not from Google. The map opens Google Maps only when you click it. No advertising or tracking cookies are used.",
          "You can change or withdraw your consent at any time via “Cookie settings” in the footer (Section 165(3) of the Austrian TKG 2021).",
        ],
      },
      {
        id: "empfaenger",
        title: "5. Recipients",
        body: [
          "We do not sell your data or use it for advertising. Only these providers have access, to the extent their service requires:",
          [
            "Pictusweb s.r.o., Nábrežná 4895/42, 940 02 Nové Zámky, Slovakia – development and operation of the website, sending form e-mails, visitor statistics",
            "Cloudflare, Inc. – website delivery and attack protection",
            "Contabo GmbH (Germany) – server for sending e-mails and visitor statistics",
            "Hostinger / Titan Mail – the info@d7quattro.at mailbox",
          ],
        ],
      },
      {
        id: "drittland",
        title: "6. Transfers outside the EU",
        body: [
          "Cloudflare and Titan Mail are based, or have parent companies, outside the EU (mainly in the USA). Transfers take place only with appropriate safeguards under Chapter V GDPR – the EU-U.S. Data Privacy Framework or the European Commission’s standard contractual clauses.",
        ],
      },
      {
        id: "rechte",
        title: "7. Your rights",
        body: [
          "You have the right to access, rectification, erasure, restriction of processing, data portability, to object to processing based on legitimate interest and to withdraw consent at any time. Write to info@d7quattro.at – we reply without undue delay, within one month at the latest.",
          "You can also lodge a complaint with the Austrian Data Protection Authority (Österreichische Datenschutzbehörde), Barichgasse 40–42, 1030 Vienna, www.dsb.gv.at.",
        ],
      },
      {
        id: "aenderungen",
        title: "8. Changes",
        body: [
          "We update this policy when the services used or the processing change. This version is effective from 11 October 2026.",
        ],
      },
    ],
  },
};
