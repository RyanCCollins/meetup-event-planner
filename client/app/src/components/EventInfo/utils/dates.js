import moment from 'moment';

const formatString = 'MMMM Do YYYY, h:mm:ss a';
const parseDates = (a, b) =>
  `From ${moment(a).format(formatString)} to ${moment(b).format(formatString)}`;

export default parseDates;
