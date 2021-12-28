class Anteile {
  constructor({
    Bauch = 0,
    Beine = 0,
    Bizeps = 0,
    Brust = 0,
    Rücken = 0,
    Trizeps = 0,
    Schulter = 0,
    Nacken = 0,
  }) {
    this.Bauch = Bauch;
    this.Beine = Beine;
    this.Bizeps = Bizeps;
    this.Brust = Brust;
    this.Rücken = Rücken;
    this.Trizeps = Trizeps;
    this.Schulter = Schulter;
    this.Nacken = Nacken;
  }
}

export const Uebungen = {
  Brust: [
    {
      label: "Bankdrücken",
      value: "Bankdrücken",
      anteile: new Anteile({ Brust: 0.7, Schulter: 0.1, Trizeps: 0.2 }),
    },
    {
      label: "Positives Schrägbankdrücken",
      value: "Positives Schrägbankdrücken",
      anteile: new Anteile({ Brust: 0.7, Schulter: 0.1, Trizeps: 0.2 }),
    },
    {
      label: "Negatives Schrägbankdrücken",
      value: "Negatives Schrägbankdrücken",
      anteile: new Anteile({ Brust: 0.7, Schulter: 0.1, Trizeps: 0.2 }),
    },
    {
      label: "Butterfly",
      value: "Butterfly",
      anteile: new Anteile({ Brust: 0.9, Schulter: 0.1 }),
    },
    {
      label: "Cable Crossover",
      value: "Cablecrossover",
      anteile: new Anteile({ Brust: 0.9, Schulter: 0.1 }),
    },
    {
      label: "Dips",
      value: "Dips",
      anteile: new Anteile({ Brust: 0.5, Trizeps: 0.5 }),
    },
    {
      label: "Liegestütze",
      value: "Liegestütze",
      anteile: new Anteile({ Brust: 0.7, Schulter: 0.1, Trizeps: 0.2 }),
    },
    {
      label: "Überzüge",
      value: "Überzüge",
      anteile: new Anteile({ Brust: 0.9, Trizeps: 0.1 }),
    },
  ],

  Schultern: [
    {
      label: "Schulterdrücken",
      value: "Schulterdrücken",
      anteile: new Anteile({ Schulter: 0.9, Trizeps: 0.1 }),
    },
    {
      label: "Seitheben",
      value: "Seitheben",
      anteile: new Anteile({ Schulter: 1 }),
    },
    {
      label: "Frontheben",
      value: "Frontheben",
      anteile: new Anteile({ Schulter: 1 }),
    },
    {
      label: "Facepulls",
      value: "Facepulls",
      anteile: new Anteile({ Schulter: 1 }),
    },
    {
      label: "Reverse Butterfly",
      value: "Reverse Butterfly",
      anteile: new Anteile({ Schulter: 1 }),
    },
  ],
  Rücken: [
    { label: "Latzug", value: "Latzug", anteile: new Anteile({ Rücken: 1 }) },
    {
      label: "Klimmzüge",
      value: "Klimmzüge",
      anteile: new Anteile({ Rücken: 1 }),
    },
    {
      label: "Überzüge",
      value: "Überzüge",
      anteile: new Anteile({ Rücken: 0.9, Trizeps: 0.1 }),
    },
    {
      label: "Rudern",
      value: "Rudern",
      anteile: new Anteile({ Rücken: 0.9, Bizeps: 0.1 }),
    },
    {
      label: "Kreuzheben",
      value: "Kreuzheben",
      anteile: new Anteile({ Rücken: 0.4, Nacken: 0.2, Beine: 0.4 }),
    },
    {
      label: "Rückenstrecker",
      value: "Rückenstrecker",
      anteile: new Anteile({ Rücken: 0.6, Beine: 0.4 }),
    },
  ],
  Beine: [
    { label: "Squats", value: "Squats", anteile: new Anteile({ Beine: 1 }) },
    {
      label: "Kreuzheben",
      value: "Kreuzheben",
      anteile: { Rücken: 0.4, Nacken: 0.2, Beine: 0.4 },
    },
    {
      label: "Beinpresse",
      value: "Beinpresse",
      anteile: new Anteile({ Beine: 1 }),
    },
    {
      label: "Beinstrecker",
      value: "Beinstrecker",
      anteile: new Anteile({ Beine: 1 }),
    },
    {
      label: "Beinbeuger",
      value: "Beinbeuger",
      anteile: new Anteile({ Beine: 1 }),
    },
    {
      label: "Abduktoren",
      value: "Abduktoren",
      anteile: new Anteile({ Beine: 1 }),
    },
    {
      label: "Adduktoren",
      value: "Adduktoren",
      anteile: new Anteile({ Beine: 1 }),
    },
    {
      label: "Rückenstrecker",
      value: "Rückenstrecker",
      anteile: new Anteile({ Rücken: 0.6, Beine: 0.4 }),
    },
    {
      label: "Wadenheben",
      value: "Wadenheben",
      anteile: new Anteile({ Beine: 1 }),
    },
  ],
  Bizeps: [
    {
      label: "Langhantelcurls",
      value: "Langhantelcurls",
      anteile: new Anteile({ Bizeps: 1 }),
    },
    {
      label: "Kurzhantelcurls",
      value: "Kurzhantelcurls",
      anteile: new Anteile({ Bizeps: 1 }),
    },
    {
      label: "Hammercurls",
      value: "Hammercurls",
      anteile: new Anteile({ Bizeps: 1 }),
    },
    {
      label: "Kabelcurls",
      value: "Kabelcurls",
      anteile: new Anteile({ Bizeps: 1 }),
    },
  ],
  Trizeps: [
    {
      label: "Trizepsdrücken",
      value: "Trizepsdrücken",
      anteile: new Anteile({ Trizeps: 1 }),
    },
    {
      label: "Frenchpress",
      value: "Frenchpress",
      anteile: new Anteile({ Trizeps: 1 }),
    },
    {
      label: "Dips",
      value: "Dips",
      anteile: new Anteile({ Brust: 0.5, Trizeps: 0.5 }),
    },
  ],

  Bauch: [
    { label: "SitUps", value: "Situps", anteile: new Anteile({ Bauch: 1 }) },
    {
      label: "Crunches",
      value: "Crunches",
      anteile: new Anteile({ Bauch: 1 }),
    },
    { label: "Beinheben", value: "Beinheben", anteile: { Bauch: 1 } },
    { label: "planks", value: "Planks", anteile: new Anteile({ Bauch: 1 }) },
  ],
  Nacken: [
    {
      label: "Nackenheben",
      value: "Nackenheben",
      anteile: new Anteile({ Nacken: 1 }),
    },
    {
      label: "Kreuzheben",
      value: "Kreuzheben",
      anteile: new Anteile({ Rücken: 0.4, Nacken: 0.2, Beine: 0.4 }),
    },
    
  ],
};
