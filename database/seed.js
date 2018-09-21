const db = require("./database.js");

let mockMenuItems = [
  // {
  //   name: "Annah Banana",
  //   price: 22.5,
  //   category: "Cocktails",
  //   imageUrl: "https://i.imgur.com/XtKbUTE.png",
  //   description: "Go bananas with this sweet and tangy tropical delight."
  // },
  // {
  //   name: "Hailey's Commit",
  //   price: 25.0,
  //   category: "Cocktails",
  //   imageUrl: "https://i.imgur.com/iNY6XJZ.png",
  //   description:
  //     "Bold and sassy, this drink is made with with as much love as it is fire!"
  // },
  // {
  //   name: "Rockin' Robin",
  //   price: 11.84,
  //   category: "Cocktails",
  //   imageUrl: "https://i.imgur.com/poJhJPj.png",
  //   description:
  //     "Our take on the old-fashioned made with Korbel brandy and a splash of cranberry juice."
  // },
  // {
  //   name: "Cody on the Rockies",
  //   price: 11.85,
  //   category: "Cocktails",
  //   imageUrl: "https://i.imgur.com/IpL8YWI.png",
  //   description:
  //     "The classic EMT cocktail made with Everclear, Mountain Dew and Tanqueray gin."
  // },
  // {
  //   name: "Erwin's Elixr",
  //   price: 21.0,
  //   category: "Cocktails",
  //   imageUrl: "https://i.imgur.com/jJjPgMV.png",
  //   description: "Like a Manhattan but better."
  // },
  // {
  //   name: "Backend Zin",
  //   price: 14.0,
  //   category: "Wine",
  //   imageUrl: "https://i.imgur.com/5e1rma4.png",
  //   description:
  //     "This 1998 Zinfandel from Jose Rodrigues Winery merges banal oatmeal midtones with a sleep-inducing sloppy joe finish."
  // },
  // {
  //   name: "Git Workflow Merlot",
  //   price: 11.0,
  //   category: "Wine",
  //   imageUrl: "https://i.imgur.com/WCNOCLI.png",
  //   description:
  //     "A conventional millet perfume and cryptic clam undertones are united in this 2000 Coastal Merlot from Skunk Meadows Vineyards."
  // },
  // {
  //   name: "MySQL Table Red",
  //   price: 9.0,
  //   category: "Wine",
  //   imageUrl: "https://i.imgur.com/BgPOcMS.png",
  //   description:
  //     "Scopazzi Winery brings together impossible-to-detect halibut elements and a nutty sauerkraut flavor in their 2001 Table Red."
  // },
  // {
  //   name: "Hack Reactor Pale Ale",
  //   price: 8.5,
  //   category: "Beer",
  //   imageUrl: "https://i.imgur.com/8FTZ7wV.png",
  //   description:
  //     "Pours a magnificent chestnut with a nine-inch head. Excellent lacing. Lovely boozy nose, accompanied by hops and lilac. Intense yeasty taste, with just a hint of split pea soup and grapefruit. Thick and chewy mouthfeel and slightly dry finish."
  // },
  // {
  //   name: "HRR33 Oatmeal Stout",
  //   price: 12.0,
  //   category: "Beer",
  //   imageUrl: "https://i.imgur.com/ySaTSHC.png",
  //   description:
  //     "Pours a breathtaking black with a thick, rocky head. Thick lacing. Beautiful spicy nose, punctuated with papaya and bacon. Well-balanced buttery flavor, and I also get some vanilla and citrus. Silky smooth mouthfeel and pleasant finish."
  // },
  // {
  //   name: "Senior Phase Haze Doppelbock",
  //   price: 12.5,
  //   category: "Beer",
  //   imageUrl: "https://i.imgur.com/rTPKfxo.png",
  //   description:
  //     "Pours an opalescent mahogany with a two-finger head. Heavy lacing. Excellent medicinal scent, with notes of mango and pepper. Delicate catty flavor, with overtones of citrus and molasses. Silky smooth mouthfeel and light finish."
  // }
];

const mockCustomers = [
  // {
  //   name: "Carlos"
  // },
  // {
  //   name: "Fredrick"
  // },
  // {
  //   name: "Michael"
  // },
  // {
  //   name: "Duke"
  // },
  // {
  //   name: "J.P."
  // }
];

const mockOrders = [
  // {
  //   status: "current",
  //   CustomerId: 1
  // },
  // {
  //   status: "pending",
  //   CustomerId: 1
  // },
  // {
  //   status: "pending",
  //   CustomerId: 1
  // },
  // {
  //   status: "pending",
  //   CustomerId: 1
  // },
  // {
  //   status: "complete",
  //   CustomerId: 1
  // },
  // {
  //   status: "complete",
  //   CustomerId: 1
  // },
  // {
  //   status: "complete",
  //   CustomerId: 1
  // }
];

const mockOrderDetails = [
  {
    quantity: 2,
    subtotal: 50,
    OrderId: 1,
    MenuItemId: 91
  },
  {
    quantity: 1,
    subtotal: 22.5,
    OrderId: 1,
    MenuItemId: 51
  },
  {
    quantity: 1,
    subtotal: 12,
    OrderId: 2,
    MenuItemId: 10,
    SurveyId: 2
  },
  {
    quantity: 1,
    subtotal: 14,
    OrderId: 3,
    MenuItemId: 6,
    SurveyId: 3
  },
  {
    quantity: 2,
    subtotal: 25,
    OrderId: 4,
    MenuItemId: 11,
    SurveyId: 4
  },
  {
    quantity: 1,
    subtotal: 12,
    OrderId: 4,
    MenuItemId: 10,
    SurveyId: 4
  },
  {
    quantity: 1,
    subtotal: 11,
    OrderId: 5,
    MenuItemId: 7,
    SurveyId: 5
  },
  {
    quantity: 1,
    subtotal: 9,
    OrderId: 5,
    MenuItemId: 8,
    SurveyId: 5
  },
  {
    quantity: 1,
    subtotal: 8.5,
    OrderId: 6,
    MenuItemId: 9,
    SurveyId: 6
  },
  {
    quantity: 1,
    subtotal: 21,
    OrderId: 7,
    MenuItemId: 5,
    SurveyId: 7
  }
];

const mockSurveys = [
  {
    drinkQuality: 2,
    customerService: 5
  },
  {
    drinkQuality: 2,
    customerService: 2
  },
  {
    drinkQuality: 1,
    customerService: 1
  },
  {
    drinkQuality: 3,
    customerService: 3
  },
  {
    drinkQuality: 1,
    customerService: 5
  },
  {
    drinkQuality: 4,
    customerService: 1
  },
  {
    drinkQuality: 3,
    customerService: 4
  }
];

const insertMockMenuItems = () => {
  mockMenuItems.forEach(item => {
    db.MenuItems.create(item);
  });
};

const insertMockCustomers = () => {
  mockCustomers.forEach(customer => {
    db.Customers.create(customer);
  });
};

const insertMockOrders = () => {
  mockOrders.forEach(order => {
    db.Orders.create(order);
  });
};

const insertMockOrderDetails = () => {
  mockOrderDetails.forEach(detail => {
    db.OrderDetails.create(detail);
  });
};

const insertMockSurvey = () => {
  mockSurveys.forEach(survey => {
    db.Surveys.create(survey);
  });
};

const insertionFunctions = [
  insertMockCustomers,
  insertMockMenuItems,
  insertMockOrders,
  insertMockSurvey,
  insertMockOrderDetails,
];

const asyncInsertionFunctions = insertionFunctions.map(func => {
  return new Promise(func);
});

Promise.all(asyncInsertionFunctions).then(() => db.connection.disconnect());
