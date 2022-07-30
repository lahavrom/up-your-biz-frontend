export const makeDateTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  return `${day}/${month}/${date.getFullYear()}`;
};

export const makeDateFromDay = (day, month) => {
  const outDay = day < 10 ? `0${day}` : day;
  const outMonth = month < 10 ? `0${month}` : month;
  return `${outDay}/${outMonth}/${new Date().getFullYear()}`;
};

export const generateEffectiveDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
};

export const getDayOfMonth = () => {
  const today = new Date();
  return today.getDate();
};
