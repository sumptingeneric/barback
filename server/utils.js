const exampleData = [
  {
      "drinkQuality": 2,
      "customerServices": 2,
      "Order": {
          "id": 1,
          "status": "complete",
          "MenuItems": [
              {
                  "name": "Hailey's Commit",
                  "category": "Cocktails",
                  "OrderDetails": {
                      "quantity": 1,
                      "subtotal": 25,
                      "total": 25,
                      "createdAt": "2018-09-23T17:42:24.000Z",
                      "updatedAt": "2018-09-23T17:42:24.000Z",
                      "BartenderId": null,
                      "CustomerId": null,
                      "OrderId": 1,
                      "MenuItemId": 2
                  }
              }
          ]
      }
  },
  {
      "drinkQuality": 3,
      "customerServices": 3,
      "Order": {
          "id": 2,
          "status": "complete",
          "MenuItems": [
              {
                  "name": "Hailey's Commit",
                  "category": "Cocktails",
                  "OrderDetails": {
                      "quantity": 1,
                      "subtotal": 25,
                      "total": 11,
                      "createdAt": "2018-09-23T17:43:30.000Z",
                      "updatedAt": "2018-09-23T17:43:30.000Z",
                      "BartenderId": null,
                      "CustomerId": null,
                      "OrderId": 2,
                      "MenuItemId": 2
                  }
              },
              {
                  "name": "Rockin' Robin",
                  "category": "Cocktails",
                  "OrderDetails": {
                      "quantity": 1,
                      "subtotal": 11.84,
                      "total": 11,
                      "createdAt": "2018-09-23T17:43:30.000Z",
                      "updatedAt": "2018-09-23T17:43:30.000Z",
                      "BartenderId": null,
                      "CustomerId": null,
                      "OrderId": 2,
                      "MenuItemId": 3
                  }
              },
              {
                  "name": "Git Workflow Merlot",
                  "category": "Wine",
                  "OrderDetails": {
                      "quantity": 1,
                      "subtotal": 11,
                      "total": 11,
                      "createdAt": "2018-09-23T17:43:30.000Z",
                      "updatedAt": "2018-09-23T17:43:30.000Z",
                      "BartenderId": null,
                      "CustomerId": null,
                      "OrderId": 2,
                      "MenuItemId": 7
                  }
              }
          ]
      }
  }
]

const parseData = (data) => {
  var results = [];
  for (var i = 0; i < data.length; i++) {
    var order = data[i];
    if (order['Order'] && order['Order']['status'] === 'complete') {
      var menuItems = order['Order']['MenuItems'];
      if (menuItems) {        
        for (var j = 0; j < menuItems.length; j++) {
          var item = menuItems[j];
          if (item['OrderDetails']) {
            var menuDetails = {};
            menuDetails['name'] = item['name'];
            menuDetails['category'] = item['category'];
            menuDetails['quantity'] = item['OrderDetails']['quantity'];
            menuDetails['drinkQuality'] = order['drinkQuality'];
            menuDetails['customerServices'] = order['customerServices'];
            results.push(menuDetails);
          }
        }
      }
    }
  }
  return results;
}

var menuItems = parseData(exampleData);
// console.log(menuItems);

var combineItems = (arr) => {
  var testNames = {};
  arr.map((item) => {
    var itemName = item['name'];
    if (testNames[itemName]) {
      testNames[itemName].quantity += testNames[itemName].quantity;
      testNames[itemName].drinkQuality += testNames[itemName].drinkQuality;
      testNames[itemName].customerServices += testNames[itemName].customerServices;
      item.duplicate = true;
    } else {
      testNames[itemName] = item;
    }
  })
  return testNames;
}

var mergedList = combineItems(menuItems);
console.log(mergedList);