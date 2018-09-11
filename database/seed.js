const db = require("./database.js");

let mockMenuItems = [
  {
    name: "Annah Banana",
    price: 22.5,
    category: "cocktail",
    imageUrl: "/images/cocktails/annahbanana.png",
    description: ""
  },
  {
    name: "Hailey's Commit",
    price: 25.0,
    category: "cocktail",
    imageUrl: "/images/cocktails/haileyscommit.png",
    description: ""
  },
  {
    name: "Rockin' Robin",
    price: 11.84,
    category: "cocktail",
    imageUrl: "/images/cocktails/rockinrobin.png",
    description: ""
  },
  {
    name: "Cody on the Rockies",
    price: 11.85,
    category: "cocktail",
    imageUrl: "/images/cocktails/codyontherockies.png",
    description: ""
  },
  {
    name: "Erwin's Elixr",
    price: 21.0,
    category: "cocktail",
    imageUrl: "/images/cocktails/annahbanana.png",
    description: ""
  },
  {
    name: "Backend Zin",
    price: 14.0,
    category: "wine",
    imageUrl: "/images/wine/backendzin.png",
    description: ""
  },
  {
    name: "Git Workflow Merlot",
    price: 11.0,
    category: "wine",
    imageUrl: "/images/wine/gitworkflowmerlot.png",
    description: ""
  },
  {
    name: "MySQL Table Red",
    price: 9.0,
    category: "wine",
    imageUrl: "/images/wine/mysqltablered.png",
    description: ""
  },
  {
    name: "Hack Reactor Pale Ale",
    price: 8.5,
    category: "beer",
    imageUrl: "/images/beer/hackreactorpaleale.png",
    description: ""
  },
  {
    name: "HRR33 Oatmeal Stout",
    price: 12.0,
    category: "beer",
    imageUrl: "/images/beer/hrr33breakfaststout.png",
    description: ""
  },
  {
    name: "Senior Phase Haze Doppelbock",
    price: 12.5,
    category: "beer",
    imageUrl: "/images/beer/seniorphasehazedoppelbock.png",
    description: ""
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
    status: "current", //1
    CustomerId: 3
  },
  {
    status: "pending", //2
    CustomerId: 3
  },
  {
    status: "pending", //3
    CustomerId: 2
  },
  {
    status: "pending", //4
    CustomerId: 4
  },
  {
    status: "complete", //5
    CustomerId: 5
  },
  {
    status: "complete", //6
    CustomerId: 2
  },
  {
    status: "complete", //7
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

// insertMockMenuItems();
// insertMockCustomers();
// insertMockOrders();
// insertMockOrderDetails();
