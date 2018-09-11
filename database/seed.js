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

// const mockOrders = [
//   {
//     status: 'current' // 'pending' and 'complete',
//     CustomerId: 3
//   },
// ];

// const mockOrderDetails = [
//   {

//   }
// ];

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

// const insertMockOrders = () => {
//   db.Orders.create(mockOrders).then(
//     console.log("Mock Orders added to the database.")
//     () => db.connection.disconnect()
//   );
// };

// const insertMockOrderDetails = () => {
//   db.OrderDetails.create(mockOrderDetails).then(
//     console.log("Mock OrderDetails added to the database.")
//   );
// };

insertMockMenuItems();
insertMockCustomers();
// insertMockOrders();
// insertMockOrderDetails();
