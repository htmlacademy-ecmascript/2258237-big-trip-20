import dayjs from 'dayjs';

const getRandomArrayElement = (array) => array[Math.floor(Math.random() * array.length)];

function humanizePointDueTime (dueDate, dateFormat) {
  const DATE_FORMAT = (dateFormat === 'minutes') ? 'HH:mm' : 'MMMM DD';
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

const getOffersByType = (fullListOffers, currentType) => {
  for (let i = 0; i < fullListOffers.length; i++) {
    if (fullListOffers[i].type === currentType) {
      return fullListOffers[i].offers;
    }
  }
};

export {getRandomArrayElement, humanizePointDueTime, getOffersByType};
