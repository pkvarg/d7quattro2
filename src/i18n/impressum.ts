import type { LegalText } from "../types.ts";

// Company data as published by the company itself on d7bau.at/impressum_at.
export const impressum: Record<string, LegalText> = {
  de: {
    title: "Impressum",
    effective: "Informationen gemäß § 5 ECG, § 14 UGB und § 25 MedienG",
    sections: [
      {
        id: "unternehmen",
        title: "Medieninhaber und Diensteanbieter",
        body: [
          "D7 BAU GmbH",
          "Feldgasse 3, 2412 Wolfsthal, Österreich",
          "Tel.: +43 676 374 9858 · E-Mail: info@d7quattro.at",
        ],
      },
      {
        id: "register",
        title: "Firmendaten",
        body: [
          [
            "Rechtsform: Gesellschaft mit beschränkter Haftung",
            "Firmenbuchnummer: FN 363308 b",
            "Firmenbuchgericht: Landesgericht Korneuburg",
            "UID-Nummer: ATU66592706",
            "Geschäftsführer: Dipl. Ing. Lubos Dzuriak",
            "Unternehmensgegenstand: Bauunternehmen und Immobilienhandel",
            "Kammerzugehörigkeit: Wirtschaftskammer Österreich, Wirtschaftskammer Burgenland, Landesinnung Baumeister",
            "Berufsrecht: Gewerbeordnung 1994, abrufbar unter www.ris.bka.gv.at",
          ],
        ],
      },
      {
        id: "blattlinie",
        title: "Grundlegende Richtung",
        body: ["Information über die Wohnbauprojekte der D7 BAU GmbH."],
      },
      {
        id: "website",
        title: "Website",
        body: [
          "Konzept und Umsetzung: Pictusweb s.r.o., Nové Zámky, Slowakei – pictusweb.sk",
        ],
      },
    ],
  },
  sk: {
    title: "Impressum",
    effective: "Údaje podľa § 5 ECG, § 14 UGB a § 25 MedienG (Rakúsko)",
    sections: [
      {
        id: "unternehmen",
        title: "Vlastník média a poskytovateľ služby",
        body: [
          "D7 BAU GmbH",
          "Feldgasse 3, 2412 Wolfsthal, Rakúsko",
          "Tel.: +43 676 374 9858 · E-mail: info@d7quattro.at",
        ],
      },
      {
        id: "register",
        title: "Údaje o spoločnosti",
        body: [
          [
            "Právna forma: spoločnosť s ručením obmedzeným (GmbH)",
            "Číslo v obchodnom registri: FN 363308 b",
            "Registrový súd: Krajinský súd Korneuburg",
            "DIČ pre DPH (UID): ATU66592706",
            "Konateľ: Dipl. Ing. Lubos Dzuriak",
            "Predmet činnosti: stavebná činnosť a obchod s nehnuteľnosťami",
            "Členstvo v komore: Hospodárska komora Rakúska (WKÖ), Hospodárska komora Burgenlandu, krajinský cech stavebných majstrov",
            "Profesijné predpisy: rakúsky živnostenský poriadok (Gewerbeordnung 1994), www.ris.bka.gv.at",
          ],
        ],
      },
      {
        id: "blattlinie",
        title: "Zameranie",
        body: ["Informácie o bytových projektoch spoločnosti D7 BAU GmbH."],
      },
      {
        id: "website",
        title: "Web",
        body: [
          "Koncept a realizácia: Pictusweb s.r.o., Nové Zámky, Slovensko – pictusweb.sk",
        ],
      },
    ],
  },
  en: {
    title: "Legal notice",
    effective:
      "Information under Section 5 ECG, Section 14 UGB and Section 25 MedienG (Austria)",
    sections: [
      {
        id: "unternehmen",
        title: "Media owner and service provider",
        body: [
          "D7 BAU GmbH",
          "Feldgasse 3, 2412 Wolfsthal, Austria",
          "Phone: +43 676 374 9858 · E-mail: info@d7quattro.at",
        ],
      },
      {
        id: "register",
        title: "Company details",
        body: [
          [
            "Legal form: limited liability company (GmbH)",
            "Company register number: FN 363308 b",
            "Register court: Regional Court Korneuburg",
            "VAT ID (UID): ATU66592706",
            "Managing director: Dipl. Ing. Lubos Dzuriak",
            "Business: construction and real estate trading",
            "Chamber membership: Austrian Economic Chamber (WKÖ), Economic Chamber of Burgenland, Provincial Guild of Master Builders",
            "Professional regulations: Austrian Trade Regulation Act (Gewerbeordnung 1994), www.ris.bka.gv.at",
          ],
        ],
      },
      {
        id: "blattlinie",
        title: "Editorial line",
        body: ["Information about the residential projects of D7 BAU GmbH."],
      },
      {
        id: "website",
        title: "Website",
        body: [
          "Concept and development: Pictusweb s.r.o., Nové Zámky, Slovakia – pictusweb.sk",
        ],
      },
    ],
  },
};
