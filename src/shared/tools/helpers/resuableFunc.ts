import moment from "moment";

// create a resuable function to comver moment date to string in MM/DD/YYYY format
export const momentToString = (date: moment.Moment): string => {
  return date.format("MM/DD/YYYY");
};

// carete a resuable function to convert string to moment ISO format date in to YYYY-MM-DD format
export const stringToMoment = (date: string): moment.Moment => {
  return moment(date, "YYYY-MM-DD");
};
