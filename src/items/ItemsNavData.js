import measureGroupNav from './measuregroup/MeasureGroupNav'
import itemCategoryNav from './itemcategory/ItemCategoryNav'
import itemNav from './item/ItemNav'
const itemsNavData = {
    routes: [
        measureGroupNav.route,
        itemCategoryNav.route,
        itemNav.route,
    ],
    nav: {
        id: "items",
        name: "Items",
        icon: "mdi-view-dashbord",
        children: [
            measureGroupNav.menu,
            itemCategoryNav.menu,
            itemNav.menu
          
        ],
    }
}

export default itemsNavData