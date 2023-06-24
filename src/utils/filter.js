import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

import { FilterType } from '../const.js';

function isFutureDate(date) {
  return date && dayjs(date).isAfter(dayjs(), 'D');
}

function isPresentDate(dateFrom, dateTo) {
  const isDateFromPast = dayjs().isSameOrAfter(dayjs(dateFrom), 'D');
  const isDateToFuture = dayjs().isSameOrBefore(dayjs(dateTo), 'D');

  return isDateFromPast && isDateToFuture;
}

function isPastDate(date) {
  return date && dayjs(date).isBefore(dayjs(), 'D');
}

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureDate(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentDate(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastDate(point.dateFrom))
};

export {filter};
