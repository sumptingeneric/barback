var example = [
    {
        "quantity": 5,
        "subtotal": 112.5,
        "createdAt": "2018-09-22T06:35:49.000Z",
        "updatedAt": "2018-09-22T06:35:49.000Z",
        "OrderId": 301,
        "MenuItemId": 51
    },
    {
        "quantity": 5,
        "subtotal": 125,
        "createdAt": "2018-09-22T06:06:03.000Z",
        "updatedAt": "2018-09-22T06:06:03.000Z",
        "OrderId": 181,
        "MenuItemId": 91
    },
    {
        "quantity": 4,
        "subtotal": 84,
        "createdAt": "2018-09-22T06:40:32.000Z",
        "updatedAt": "2018-09-22T06:40:32.000Z",
        "OrderId": 331,
        "MenuItemId": 21
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
        "subtotal": 35.52,
        "createdAt": "2018-09-22T06:06:12.000Z",
        "updatedAt": "2018-09-22T06:06:12.000Z",
        "OrderId": 191,
        "MenuItemId": 1
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
    {
        "quantity": 1,
        "subtotal": 11.85,
        "createdAt": "2018-09-22T06:28:13.000Z",
        "updatedAt": "2018-09-22T06:28:13.000Z",
        "OrderId": 291,
        "MenuItemId": 11
    },
]

const fetchStats = (orderDetails, menuItems) => {
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

exports.fetchStats = fetchStats;