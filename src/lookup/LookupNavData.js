import lookupDataNav from './lookupdata/LookupDataNav.js'
import measureGroupNav from './measuregroup/MeasureGroupNav'
import itemCategoryNav from './itemcategory/ItemCategoryNav'
import itemNav from './item/ItemNav'
import currencyNav from './currency/CurrencyNav.js'



const lookupNavData = {
  routes: [
    ...lookupDataNav.routes,
    ...measureGroupNav.routes,
    ...itemCategoryNav.routes,
    ...itemNav.routes,
    ...currencyNav.routes,

  ],
  nav: {
    id: "Lookup",
    title: "Lookup",
    icon: "mdi-view-dashbord",
    children: [
      lookupDataNav.menu,
      measureGroupNav.menu,
      itemCategoryNav.menu,
      itemNav.menu,
      currencyNav.menu,


    ],
  },
  menus: [
    lookupDataNav.menu,
    measureGroupNav.menu,
    itemCategoryNav.menu,
    itemNav.menu,
    currencyNav.menu,


  ],
}
export default lookupNavData;
