import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

function sortPointsByDate (a, b) {
  return dayjs(a.dateFrom) > dayjs(b.dateFrom) ? 1 : -1;
}

function sortPointsByTime (a, b) {
  return dayjs(a.dateFrom).diff(dayjs(a.dateTo)) > dayjs(b.dateFrom).diff(dayjs(b.dateTo)) ? 1 : -1;
}

function sortPointsByPrice (a, b) {
  return a.basePrice > b.basePrice ? -1 : 1;
}


export {sortPointsByDate, sortPointsByTime, sortPointsByPrice};
