export const selectMenu = [
  {
    id: 111,
    name: 'Бренд',
    type: 'brand',
    items: [
      { id: 44, value: 0, name: 'Dolce & Gabanna' },
      { id: 55, value: 1, name: 'Gabanna & Dolce' },
    ],
  },
  {
    id: 222,
    name: 'Для кого',
    items: [
      { id: 11, value: 0, name: 'Жены' },
      { id: 22, value: 1, name: 'Мужа' },
      { id: 33, value: 2, name: 'Парнера' },
    ],
    type: 'gender',
  },
  {
    id: 333,
    name: 'Сезон',
    items: [
      { id: 66, value: 0, name: 'Зима' },
      { id: 77, value: 1, name: 'Лето' },
    ],
    type: 'season',
  },
  {
    id: 444,
    name: 'Событие',
    items: [
      { id: 88, value: 0, name: 'Свадьба' },
      { id: 99, value: 1, name: 'День рождения' },
    ],
    type: 'event',
  },
  {
    id: 555,
    name: 'Тип',
    items: [
      { id: 101, value: 0, name: 'Кольцо' },
      { id: 102, value: 1, name: 'Подвеска' },
    ],
    type: 'types',
  },
  {
    id: 666,
    name: 'Сортировка',
    items: [
      {
        id: 11,
        sortByType: 'price',
        value: 0,
        // value: 'desc',
        name: 'цене',
      },
      {
        id: 22,
        sortByType: 'name',
        value: 1,
        // value: 'asc',
        name: 'алфавиту',
      },
    ],
    type: 'sorting',
  },
];
