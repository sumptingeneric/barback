var example = [
    {
        "quantity": 5,
        "subtotal": 112.5,
        "createdAt": "2018-09-22T06:35:49.000Z",
        "updatedAt": "2018-09-22T06:35:49.000Z",
        "OrderId": 301,
        "MenuItemId": 51,
        "menuName": 'something',
        "category": 'wine'
    },
    {
        "quantity": 4,
        "subtotal": 36,
        "createdAt": "2018-09-22T06:04:21.000Z",
        "updatedAt": "2018-09-22T06:04:21.000Z",
        "OrderId": 161,
        "MenuItemId": 101
    },
    {
        "quantity": 3,
        "subtotal": 33,
        "createdAt": "2018-09-22T05:56:56.000Z",
        "updatedAt": "2018-09-22T05:56:56.000Z",
        "OrderId": 131,
        "MenuItemId": 71
    },
    {
        "quantity": 2,
        "subtotal": 42,
        "createdAt": "2018-09-22T06:28:08.000Z",
        "updatedAt": "2018-09-22T06:28:08.000Z",
        "OrderId": 281,
        "MenuItemId": 21
    },
];

var menus = [
    {
        "id": 51,
        "name": "Erwin's Elixr",
        "price": 21,
        "category": "Cocktails",
        "imageUrl": "/images/cocktails/erwinselixr.png",
        "description": "Like a Manhattan but better.",
        "createdAt": "2018-09-22T03:18:28.000Z",
        "updatedAt": "2018-09-22T03:18:28.000Z"
    },
    {
        "id": 101,
        "name": "Git Workflow Merlot",
        "price": 11,
        "category": "Wine",
        "imageUrl": "/images/wine/gitworkflowmerlot.png",
        "description": "A conventional millet perfume and cryptic clam undertones are united in this 2000 Coastal Merlot from Skunk Meadows Vineyards.",
        "createdAt": "2018-09-22T03:18:28.000Z",
        "updatedAt": "2018-09-22T03:18:28.000Z"
    },
    {
        "id": 71,
        "name": "MySQL Table Red",
        "price": 9,
        "category": "Wine",
        "imageUrl": "/images/wine/mysqltablered.png",
        "description": "Scopazzi Winery brings together impossible-to-detect halibut elements and a nutty sauerkraut flavor in their 2001 Table Red.",
        "createdAt": "2018-09-22T03:18:28.000Z",
        "updatedAt": "2018-09-22T03:18:28.000Z"
    },
    {
        "id": 21,
        "name": "Hack Reactor Pale Ale",
        "price": 8.5,
        "category": "Beer",
        "imageUrl": "/images/beer/hackreactorpaleale.png",
        "description": "Pours a magnificent chestnut with a nine-inch head. Excellent lacing. Lovely boozy nose, accompanied by hops and lilac. Intense yeasty taste, with just a hint of split pea soup and grapefruit. Thick and chewy mouthfeel and slightly dry finish.",
        "createdAt": "2018-09-22T03:18:28.000Z",
        "updatedAt": "2018-09-22T03:18:28.000Z"
    }
]

const fetchStats = (orderDetails, menuItems) => {
//   console.log(orderDetails)
  var order, item;
  for(var i = 0; i < orderDetails.length; i++) {
    order = orderDetails[i];
    for (var j = 0; j < menuItems.length; j++) {
      item = menuItems[j];
      if(order.MenuItemId === item.id) {
        order.menuName = item.name;
        order.itemCategory = item.category;
      }
    }
  }
  return orderDetails;
}

console.log(fetchStats(example, menus))

exports.fetchStats = fetchStats;