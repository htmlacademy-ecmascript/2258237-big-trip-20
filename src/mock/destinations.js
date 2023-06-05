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

// const destinations = [
//   {
//     id: 1,
//     description: 'Москва – столица Российской Федерации, город федерального значения. Крупнейший по численности населения город России и её субъект – 12 111 194 человек (2014)',
//     name: 'Moscow',
//     pictures: [
//       {
//         src: 'https://loremflickr.com/248/152?random=10',
//         description: 'Фото города 1'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=11',
//         description: 'Фото города 2'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=12',
//         description: 'Фото города 3'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=13',
//         description: 'Фото города 4'
//       }
//     ]
//   }, {
//     id: 2,
//     description: 'Анапа – черноморский российский курорт, расположенный в юго-западной части Краснодарского края, на стыке предгорий Кавказа и степей Таманского полуострова',
//     name: 'Anapa',
//     pictures: [
//       {
//         src: 'https://loremflickr.com/248/152?random=20',
//         description: 'Фото города 1'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=21',
//         description: 'Фото города 2'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=22',
//         description: 'Фото города 3'
//       }
//     ]
//   }, {
//     id: 3,
//     description: 'Расположен в устье реки Мзымты по обеим её берегам и простирается на 17 км по Черноморскому побережью',
//     name: 'Adler',
//     pictures: [
//       {
//         src: 'https://loremflickr.com/248/152?random=30',
//         description: 'Фото города 1'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=31',
//         description: 'Фото города 2'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=32',
//         description: 'Фото города 3'
//       }
//     ]
//   }, {
//     id: 4,
//     description: 'город уникальный для русской истории, неуловимый и непостижимый. Более двух веков он был блистательной столицей великой Российской империи и сейчас сохраняет статус культурного и духовного центра страны. Санкт-Петербург был основан по приказу российского императора Петра I 16 мая 1703 года.',
//     name: 'Saint Petersburg',
//     pictures: [
//       {
//         src: 'https://loremflickr.com/248/152?random=40',
//         description: 'Фото города 1'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=41',
//         description: 'Фото города 2'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=42',
//         description: 'Фото города 3'
//       }, {
//         src: 'https://loremflickr.com/248/152?random=43',
//         description: 'Фото города 4'
//       }
//     ]
//   }
// ]

function getMockDestinations() {
  return destinations;
}

export {getMockDestinations};
