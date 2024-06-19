import httmMethods from '../../utils/HttpMethods'
import itemCategoryNav from './ItemCategoryNav';
export default {
    namespaced: true,
    state() {
      return {
        mini: [],
        miniLoading: false,
        expensableItemCategories: [],
        expensableItemCategoriesLoading: false,
      }
    },

    actions: {
        getMini(context) {
            if (context.mini) { return }
            context.state.miniLoading = true;
            httmMethods.get(`${itemCategoryNav.menu.path}/mini`)
                .then(response => {
                    context.state.mini = response.data;
                    context.state.miniLoading = false;
                }).catch(e => {
                    context.state.mini = [];
                    console.log(e);
                    context.state.miniLoading = false;
                })

        },

        getExpensableItemCategories(context) {

            var criteria = [
                {

                    key: 'expensable',
                    operation: 'EQUAL',
                    value: "true",
                    value2: "",

                }
            ]

            context.state.expensableItemCategoriesLoading = true;
            httmMethods.post(`${itemCategoryNav.menu.path}/list`, criteria)
                .then(response => {
                    context.state.expensableItemCategories = response.data;
                    context.state.expensableItemCategoriesLoading = false;
                    console.log("Item Categories: ", response.data);
                }).catch(e => {
                    context.state.expensableItemCategories = [];
                    console.log("Error getting List data ", e);
                    context.state.expensableItemCategoriesLoading = false;
                })

        },
    }
}
