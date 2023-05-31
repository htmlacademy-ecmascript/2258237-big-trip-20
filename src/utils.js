import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MSEC_IN_SEC * SEC_IN_MIN * MIN_IN_HOUR;
const MSEC_IN_DAY = MSEC_IN_HOUR * HOUR_IN_DAY;

const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

const humanizePointDueTime = (dueDate, dateFormat) => {
  const DATE_FORMAT = (dateFormat === 'minutes') ? 'HH:mm' : 'MMMM DD';
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
};

// const getPointDuration = (dateFrom. dateTo) => {
//   const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));
//   let pointDuration = 0;
// }

const getOffersByType = (fullListOffers, currentType) => {
  for (let i = 0; i < fullListOffers.length; i++) {
    if (fullListOffers[i].type === currentType) {
      return fullListOffers[i].offers;
    }
  }
};

export {getRandomArrayElement, humanizePointDueTime, getOffersByType};
