import moment from "moment";

export const getMonth = (datum) => {
  if (datum === undefined) {
    console.log("Invalides Datum (getMonth)");
    return;
  }
  var dateString = datum.toDate().toDateString();
  var splitted = dateString.split(/\s+/);
  return splitted[1];
};

export const getDay = (datum) => {
  if (datum === undefined) {
    console.log("Invalides Datum (getDay)");
    return;
  }
  var dateString = datum.toDate().toDateString();
  var splitted = dateString.split(/\s+/);
  return splitted[2];
};
export const getWeek = (datum) => {
  var oneJan = new Date(datum.getFullYear(), 0, 1);
  var numberOfDays = Math.floor((datum - oneJan) / (24 * 60 * 60 * 1000));
  var result = Math.ceil((datum.getDay() + 1 + numberOfDays) / 7);
  return result;
};

// MOMENT.JS LIBARY

// SOMMERZEIT
const getDST = (datum) => {
  return moment(datum).isDST();
};

export const getMomentHour = (datum) => {
  var hour = moment(datum).format("H");
  if (!getDST(datum)) {
    hour = parseInt(hour) + 1;
  }
  return hour.toString();
};
export const getMomentDay = (datum) => {
  const day = moment(datum).format("dddd");
  return day;
};
export const getMomentMonth = (datum) => {
  const month = moment(datum).format("M");
  return month;
};
