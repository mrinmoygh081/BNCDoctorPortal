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
