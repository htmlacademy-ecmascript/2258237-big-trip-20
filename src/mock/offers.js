const allOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Доп. место',
        price: 60,
      },
      {
        id: 2,
        title: 'Детское кресло',
        price: 120,
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        title: 'Бизнесс класс',
        price: 560,
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 1,
        title: 'Дозаправка',
        price: 230,
      },
      {
        id: 2,
        title: 'Дорогой бензин',
        price: 120,
      },
      {
        id: 3,
        title: 'Зимняя резина',
        price: 120,
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        title: 'Место для багажа',
        price: 30,
      },
      {
        id: 2,
        title: 'Радио на всю дорогу',
        price: 170,
      },
      {
        id: 3,
        title: 'Ремни безопасности',
        price: 45,
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
        id: 1,
        title: 'Просторная каюта',
        price: 850,
      },
      {
        id: 2,
        title: 'Ужин на палубе',
        price: 145,
      },
      {
        id: 3,
        title: 'Рыбалка в море',
        price: 560,
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        title: 'Питание',
        price: 80,
      },
      {
        id: 2,
        title: 'Постельное белье',
        price: 25,
      },
      {
        id: 3,
        title: 'Интернет на время поездки',
        price: 60,
      }
    ]
  }
];

function getMockOffers() {
  return allOffers;
}

export {allOffers, getMockOffers};
