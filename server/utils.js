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
// console.log(fetchStats(example, menus))
exports.fetchStats = fetchStats;