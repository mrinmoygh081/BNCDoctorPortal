export const getDateTimeNow = () => {
  let currentdate = new Date();
  let datetime =
    "Last Sync: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  return datetime;
};

export const getDateToday = () => {
  let currentdate = new Date();
  let date =
    currentdate.getDate() < 10
      ? `0${currentdate.getDate()}`
      : currentdate.getDate();
  let month =
    currentdate.getMonth() + 1 < 10
      ? `0${currentdate.getMonth() + 1}`
      : currentdate.getMonth() + 1;
  let datetime = `${date}-${month}-${currentdate.getFullYear()}`;

  return datetime;
};

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  console.log(d);

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

export const formattedDDMMYYYY = (date) => {
  var datePart = date.match(/\d+/g),
    year = datePart[0], // get only two digits
    month = datePart[2],
    day = datePart[1];

  return day + "/" + month + "/" + year;
};

export const getFormattedDate = (date) => {
  let today = new Date(date);
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  return today;
};

export const getDateOnly = (date) => {
  return date.substring(0, 10);
};
