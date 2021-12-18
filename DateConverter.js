export const getMonth = (datum)=> {
  if(datum === undefined){console.log("Invalides Datum (getMonth)");return;}
    var dateString = datum.toDate().toDateString()
    var splitted = dateString.split(/\s+/);
    return splitted[1]
  }
  
export const getDay = (datum) =>{
  if(datum === undefined){console.log("Invalides Datum (getDay)");return;}
    var dateString = datum.toDate().toDateString()
    var splitted = dateString.split(/\s+/);
    return splitted[2]
  }