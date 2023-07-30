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

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};
