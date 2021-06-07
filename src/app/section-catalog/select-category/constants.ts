export const selectMenu = [
  {
    id: 111,
    name: 'Бренд',
    type: 'brand',
    items: [
      { id: 44, value: 0, name: 'Dolce & Gabanna' },
      { id: 55, value: 1, name: 'Gabanna & Dolce' },
    ],
    // event: (num: number) => SetBrand(num),
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
    // event: (num: number) => SetGender(num),
  },
  {
    id: 333,
    name: 'Сезон',
    items: [
      { id: 66, value: 0, name: 'Зима' },
      { id: 77, value: 1, name: 'Лето' },
    ],
    type: 'season',
    // event: (num: number) => SetSeason(num),
  },
  {
    id: 444,
    name: 'Событие',
    items: [
      { id: 88, value: 0, name: 'Свадьба' },
      { id: 99, value: 1, name: 'День рождения' },
    ],
    type: 'event',
    // event: (num: number) => SetEvent(num),
  },
  {
    id: 555,
    name: 'Тип',
    items: [
      { id: 101, value: 0, name: 'Кольцо' },
      { id: 102, value: 1, name: 'Подвеска' },
    ],
    type: 'type',
    // event: (num: number) => SetType(num),
  },
];

export const sortItems = [
  {
    name: 'Сортировка',
    items: [
      {
        id: 11,
        sortByType: 'price',
        order: 'desc',
        name: 'цене',
      },
      {
        id: 22,
        sortByType: 'name',
        order: 'asc',
        name: 'алфавиту',
      },
    ],
  },
];
