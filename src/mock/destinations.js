const destinations = [
  {
    city: 'Moscow',
    destinations: {
      id: 1,
      description: 'Москва – столица Российской Федерации, город федерального значения. Крупнейший по численности населения город России и её субъект – 12 111 194 человек (2014)',
      photos: [{
        src: 'https://loremflickr.com/248/152?random=122',
        alt: 'Фото города 1'
      }, {
        src: 'https://loremflickr.com/248/152?random=123',
        alt: 'Фото города 2'
      }, {
        src: 'https://loremflickr.com/248/152?random=143',
        alt: 'Фото города 3'
      }],
    },
  }, {
    city: 'Anapa',
    destinations: {
      id: 2,
      description: 'Анапа – черноморский российский курорт, расположенный в юго-западной части Краснодарского края, на стыке предгорий Кавказа и степей Таманского полуострова',
      photos: [{
        src: 'https://loremflickr.com/248/152?random=21',
        alt: 'Фото города 1'
      }, {
        src: 'https://loremflickr.com/248/152?random=22',
        alt: 'Фото города 2'
      }, {
        src: 'https://loremflickr.com/248/152?random=23',
        alt: 'Фото города 3'
      }],
    },
  }, {
    city: 'Adler',
    destinations: {
      id: 3,
      description: 'Расположен в устье реки Мзымты по обеим её берегам и простирается на 17 км по Черноморскому побережью',
      photos: [{
        src: 'https://loremflickr.com/248/152?random=12',
        alt: 'Фото города 1'
      }, {
        src: 'https://loremflickr.com/248/152?random=13',
        alt: 'Фото города 3'
      }],
    },
  }
];

function getMockDestinations() {
  return destinations;
}

export {getMockDestinations};
