export const Colors = {
  red: "#F32F4D",
  bg: "#131321",
  offColor: "#1E1E26",
  green: "lightgreen",
  blue: "#499DFF",

  darkOrange: "#F48E15",
  lightOrange: "#FFEBD2",

  darkBlue: "#0E7DFF",
  lightBlue: "#C4D1E0",

  darkGreen: "#006440",
  lightGreen: "#ACECD5",

  grey: "#212127",

  selectionColor: "rgba(61, 132, 215, 0.2)",
};

export const getMuskelGruppeColor = (muskelgruppe) => {
  switch (muskelgruppe) {
    case "Bizeps":
      return "#00A6FB";
    case "Beine":
      return "#008CFB";
    case "Bauch":
      return "#0056FB";
    case "Rücken":
      return "#001FFB";
    case "Brust":
      return "#2D00FB";
    case "Schulter":
      return "#5F3EFA";
    case "Trizeps":
      return "#9680FF";
    case "Nacken":
      return "#60ABFF";
    default:
      return "#77B1F2";
  }
};
