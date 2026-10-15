export type DietaryTag = 'Vegetarian' | 'Vegan' | 'Gluten-Free';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: DietaryTag[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'handhelds',
    title: 'Handhelds',
    subtitle: 'Loaded, saucy, house-built sandwiches on brioche and panini buns',
    items: [
      {
        id: 'badass-cheeseburger',
        name: 'The Badass Cheeseburger',
        description:
          'Two chuck patties with bacon, cheddar, Swiss, house dill pickles, lettuce, onions, tomatoes, mayo, and a brioche bun.',
        price: '$17',
        image:
          'https://images.pexels.com/photos/32480062/pexels-photo-32480062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'single-burger',
        name: 'The Single Burger',
        description:
          'Chuck patty, house dill pickles, lettuce, onions, tomatoes, mayo, and a brioche bun.',
        price: '$11',
        image:
          'https://images.pexels.com/photos/36691286/pexels-photo-36691286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'burner',
        name: 'The Burner',
        description:
          'Chuck patty, extra spicy mayo, jalapeños, lettuce, house dill pickles, Swiss, and a brioche bun.',
        price: '$14',
        image:
          'https://images.pexels.com/photos/38895877/pexels-photo-38895877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'cubano',
        name: 'The Cubano',
        description:
          'Hickory and oak smoked pork, Swiss, smoked ham, dill pickles, sriracha mustard, and a panini bun.',
        price: '$16',
        image:
          'https://images.pexels.com/photos/8023677/pexels-photo-8023677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'crispy-jerk-chicken',
        name: 'Crispy Jerk Chicken',
        description:
          'Fried chicken thigh, house jerk spice and sauce, tangy slaw, pineapple, house lime crema, and a brioche bun.',
        price: '$15',
        image:
          'https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'hot-chick',
        name: 'The Hot Chick',
        description:
          'Fried chicken thigh, house Nashville hot spice, tangy slaw, house dill pickles, spicy mayo, and a brioche bun.',
        price: '$15',
        image:
          'https://images.pexels.com/photos/34407494/pexels-photo-34407494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'cajun-chicken',
        name: 'Cajun Chicken',
        description:
          'Fried chicken thigh, house Cajun spice, cheddar, bacon, lettuce, jalapeños, house garlic mayo, and a brioche bun.',
        price: '$17',
        image:
          'https://images.pexels.com/photos/5474626/pexels-photo-5474626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'dillicious-chicken',
        name: 'Dill-icious Chicken',
        description:
          'Fried chicken thigh, house dill pickles, onion, tomato, lettuce, house dill mayo, and a brioche bun.',
        price: '$15',
        image:
          'https://images.pexels.com/photos/32177596/pexels-photo-32177596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'hot-honey-mustard-chicken',
        name: 'Hot Honey Mustard Chicken',
        description:
          'Fried chicken thigh, Swiss, bacon, onion, house honey mustard, and a brioche bun.',
        price: '$17',
        image:
          'https://images.pexels.com/photos/18713432/pexels-photo-18713432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
    ],
  },
  {
    id: 'plates-bowls',
    title: 'Plates & Bowls',
    subtitle: 'Comfort food classics, crispy fries, and shareable plates',
    items: [
      {
        id: 'chicken-caesar-salad',
        name: 'Chicken Caesar Salad',
        description:
          'Two grilled chicken thighs, lettuce, bacon, house-made croutons, and house Caesar dressing.',
        price: '$15',
        image:
          'https://images.pexels.com/photos/10480246/pexels-photo-10480246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'patty-melt',
        name: 'Patty Melt',
        description:
          'Chuck patty, double cheddar, caramelized onions, and grilled light rye.',
        price: '$12',
        image:
          'https://images.pexels.com/photos/5374420/pexels-photo-5374420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'jerk-pulled-pork-tacos',
        name: 'Jerk Pulled Pork Tacos',
        description:
          'Hickory and oak smoked pork, house jerk spice and sauce, tangy slaw, pineapple, house lime crema, corn tortillas, and sub jerk beans.',
        price: '$13',
        image:
          'https://images.pexels.com/photos/3015229/pexels-photo-3015229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'nashville-hot-chicken-fries',
        name: 'Nashville Hot Chicken Fries',
        description:
          'Nashville hot fries, fried chicken thigh, Nashville seasoning, tangy slaw, house dill sauce, and spicy or extra spicy mayo.',
        price: '$16',
        image:
          'https://images.pexels.com/photos/11867597/pexels-photo-11867597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'jerk-chicken-fries',
        name: 'Jerk Chicken Fries',
        description:
          'Jerk-spiced fries, fried chicken thigh, house jerk spice and sauce, tangy slaw, pineapple, house lime crema, and a brioche bun.',
        price: '$16',
        image:
          'https://images.pexels.com/photos/9574954/pexels-photo-9574954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'cheeseburger-fries',
        name: 'Cheeseburger Fries',
        description:
          'Fries, chuck patty, shredded cheddar, onion, lettuce, house dill pickles, and house burger sauce.',
        price: '$16',
        image:
          'https://images.pexels.com/photos/30500755/pexels-photo-30500755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'mac-and-cheese',
        name: 'Mac & Cheese',
        description: 'Cheddar, Parmesan, and cheese curds.',
        price: '$15',
        image:
          'https://images.pexels.com/photos/37256257/pexels-photo-37256257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'fresh-cut-fries',
        name: 'Fresh Cut Fries',
        description: 'Crispy fresh-cut fries. Small or large.',
        price: 'S $6 / L $9',
        image:
          'https://images.pexels.com/photos/15838896/pexels-photo-15838896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'poutine',
        name: 'Poutine',
        description: 'Fresh-cut fries, cheese curds, and house beer gravy. Small or large.',
        price: 'S $10 / L $14',
        image:
          'https://images.pexels.com/photos/30301745/pexels-photo-30301745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
    ],
  },
  {
    id: 'extras',
    title: 'Extras & Add-Ons',
    subtitle: 'Customize your order or add a little more to the table',
    items: [
      {
        id: 'add-chuck-patty-or-thigh',
        name: 'Add Chuck Patty or Thigh',
        description: 'Add an extra chuck patty or fried chicken thigh to your order.',
        price: '$5',
        image:
          'https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'add-cheese',
        name: 'Add Cheese',
        description: 'Add cheddar, Swiss, or another cheesy finish.',
        price: '$2',
        image:
          'https://images.pexels.com/photos/4253704/pexels-photo-4253704.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'add-bacon',
        name: 'Add Bacon',
        description: 'Add crispy bacon to your handheld or fries.',
        price: '$2.50',
        image:
          'https://images.pexels.com/photos/19247565/pexels-photo-19247565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'add-fried-egg',
        name: 'Add Fried Egg',
        description: 'Top it with a fried egg.',
        price: '$1.50',
        image:
          'https://images.pexels.com/photos/21823086/pexels-photo-21823086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'gluten-free-bun',
        name: 'Gluten-Free Bun',
        description: 'Swap your bun for a gluten-free bun.',
        price: '$4.50',
        image:
          'https://images.pexels.com/photos/7596517/pexels-photo-7596517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: ['Gluten-Free'],
      },
      {
        id: 'add-a-side',
        name: 'Add a Side',
        description: 'Add a side to round out your meal.',
        price: '$4',
        image:
          'https://images.pexels.com/photos/7961933/pexels-photo-7961933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'single-poutine',
        name: 'Single Poutine',
        description: 'A single serving of fresh-cut fries, curds, and house beer gravy.',
        price: '$7',
        image:
          'https://images.pexels.com/photos/39948182/pexels-photo-39948182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'single-mac',
        name: 'Single Mac',
        description: 'A single serving of cheddar, Parmesan, and cheese curds.',
        price: '$8',
        image:
          'https://images.pexels.com/photos/9659592/pexels-photo-9659592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'single-caesar-salad',
        name: 'Single Caesar Salad',
        description: 'A single serving of house Caesar salad.',
        price: '$8',
        image:
          'https://images.pexels.com/photos/20169223/pexels-photo-20169223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    subtitle: 'Make it a meal with house sides and sauces',
    items: [
      {
        id: 'chefs-soup',
        name: "Chef's Soup",
        description: "Ask what's simmering today. Available in small or large.",
        price: 'S $6 / L $8',
        image:
          'https://images.pexels.com/photos/8694598/pexels-photo-8694598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'tangy-slaw',
        name: 'Tangy Slaw',
        description: 'Crisp house slaw with a bright, tangy dressing.',
        price: '$5',
        image:
          'https://images.pexels.com/photos/15434314/pexels-photo-15434314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'gravy',
        name: 'Gravy',
        description: 'House gravy for fries, poutine, and dipping.',
        price: '$2.50',
        image:
          'https://images.pexels.com/photos/12557560/pexels-photo-12557560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
      {
        id: 'house-side-sauces',
        name: 'House Side Sauces',
        description:
          'Garlic dill, tangy BBQ, spicy maple honey, gold standard, burger sauce, sriracha mustard, spicy, or extra spicy mayo.',
        price: '$1',
        image:
          'https://images.pexels.com/photos/5476510/pexels-photo-5476510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
    ],
  },
  {
    id: 'something-sweet',
    title: 'Something Sweet',
    subtitle: 'Finish strong',
    items: [
      {
        id: 'hot-fudge-cake',
        name: 'Hot Fudge Cake',
        description:
          'Hot fudge cake with French vanilla ice cream, house-made vanilla bean whipped cream, and rotating sauces.',
        price: '$13',
        image:
          'https://images.pexels.com/photos/33674405/pexels-photo-33674405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        tags: [],
      },
    ],
  },
];
