import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween.js';
dayjs.extend(isBetween);

import { FilterType } from '../const.js';

function isFutureDate(date) {
  return date && dayjs(date).isAfter(dayjs(), 'D');
}

function isPresentDate(dateFrom, dateTo) {
  return dayjs().isBetween(dayjs(dateFrom), dayjs(dateTo), null, '[]');
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
