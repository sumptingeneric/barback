const db = require("./database.js");

let mockMenuItems = [
  {
    name: "Annah Banana",
    price: 22.5,
    category: "cocktail",
    imageUrl: "/images/cocktails/annahbanana.png",
    description: "Go bananas with this sweet and tangy tropical delight."
  },
  {
    name: "Hailey's Commit",
    price: 25.0,
    category: "cocktail",
    imageUrl: "/images/cocktails/haileyscommit.png",
    description:
      "Bold and sassy, this drink is made with with as much love as it is fire!"
  },
  {
    name: "Rockin' Robin",
    price: 11.84,
    category: "cocktail",
    imageUrl: "/images/cocktails/rockinrobin.png",
    description:
      "Our take on the old-fashioned made with Korbel brandy and a splash of cranberry juice."
  },
  {
    name: "Cody on the Rockies",
    price: 11.85,
    category: "cocktail",
    imageUrl: "/images/cocktails/codyontherockies.png",
    description:
      "The classic EMT cocktail made with Everclear, Mountain Dew and Tanqueray gin."
  },
  {
    name: "Erwin's Elixr",
    price: 21.0,
    category: "cocktail",
    imageUrl: "/images/cocktails/erwinselixr.png",
    description: "Like a Manhattan but better."
  },
  {
    name: "Backend Zin",
    price: 14.0,
    category: "wine",
    imageUrl: "/images/wine/backendzin.png",
    description:
      "This 1998 Zinfandel from Jose Rodrigues Winery merges banal oatmeal midtones with a sleep-inducing sloppy joe finish."
  },
  {
    name: "Git Workflow Merlot",
    price: 11.0,
    category: "wine",
    imageUrl: "/images/wine/gitworkflowmerlot.png",
    description:
      "A conventional millet perfume and cryptic clam undertones are united in this 2000 Coastal Merlot from Skunk Meadows Vineyards."
  },
  {
    name: "MySQL Table Red",
    price: 9.0,
    category: "wine",
    imageUrl: "/images/wine/mysqltablered.png",
    description:
      "Scopazzi Winery brings together impossible-to-detect halibut elements and a nutty sauerkraut flavor in their 2001 Table Red."
  },
  {
    name: "Hack Reactor Pale Ale",
    price: 8.5,
    category: "beer",
    imageUrl: "/images/beer/hackreactorpaleale.png",
    description:
      "Pours a magnificent chestnut with a nine-inch head. Excellent lacing. Lovely boozy nose, accompanied by hops and lilac. Intense yeasty taste, with just a hint of split pea soup and grapefruit. Thick and chewy mouthfeel and slightly dry finish."
  },
  {
    name: "HRR33 Oatmeal Stout",
    price: 12.0,
    category: "beer",
    imageUrl: "/images/beer/hrr33oatmealstout.png",
    description:
      "Pours a breathtaking black with a thick, rocky head. Thick lacing. Beautiful spicy nose, punctuated with papaya and bacon. Well-balanced buttery flavor, and I also get some vanilla and citrus. Silky smooth mouthfeel and pleasant finish."
  },
  {
    name: "Senior Phase Haze Doppelbock",
    price: 12.5,
    category: "beer",
    imageUrl: "/images/beer/seniorphasehazedoppelbock.png",
    description:
      "Pours an opalescent mahogany with a two-finger head. Heavy lacing. Excellent medicinal scent, with notes of mango and pepper. Delicate catty flavor, with overtones of citrus and molasses. Silky smooth mouthfeel and light finish."
  }
];

const mockCustomers = [
  {
    name: "Carlos"
  },
  {
    name: "Fredrick"
  },
  {
    name: "Michael"
  },
  {
    name: "Duke"
  },
  {
    name: "J.P."
  }
];

const mockOrders = [
  {
    status: "current",
    CustomerId: 1
  },
  {
    status: "pending",
    CustomerId: 1
  },
  {
    status: "pending",
    CustomerId: 1
  },
  {
    status: "pending",
    CustomerId: 1
  },
  {
    status: "complete",
    CustomerId: 1
  },
  {
    status: "complete",
    CustomerId: 1
  },
  {
    status: "complete",
    CustomerId: 1
  }
];

const mockOrderDetails = [
  {
    quantity: 2,
    subtotal: 50,
    OrderId: 1,
    MenuItemId: 2
  },
  {
    quantity: 1,
    subtotal: 22.5,
    OrderId: 1,
    MenuItemId: 1
  },
  {
    quantity: 1,
    subtotal: 12,
    OrderId: 2,
    MenuItemId: 10
  },
  {
    quantity: 1,
    subtotal: 14,
    OrderId: 3,
    MenuItemId: 6
  },
  {
    quantity: 2,
    subtotal: 25,
    OrderId: 4,
    MenuItemId: 11
  },
  {
    quantity: 1,
    subtotal: 12,
    OrderId: 4,
    MenuItemId: 10
  },
  {
    quantity: 1,
    subtotal: 11,
    OrderId: 5,
    MenuItemId: 7
  },
  {
    quantity: 1,
    subtotal: 9,
    OrderId: 5,
    MenuItemId: 8
  },
  {
    quantity: 1,
    subtotal: 8.5,
    OrderId: 6,
    MenuItemId: 9
  },
  {
    quantity: 1,
    subtotal: 21,
    OrderId: 7,
    MenuItemId: 5
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

const insertionFunctions = [
  insertMockMenuItems,
  insertMockCustomers,
  insertMockOrders,
  insertMockOrderDetails
];

const asyncInsertionFunctions = insertionFunctions.map(func => {
  new Promise(func);
});

Promise.all(asyncInsertionFunctions).then(() => db.connection.disconnect());
