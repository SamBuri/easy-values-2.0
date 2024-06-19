import Test  from "./Test.vue"
const testNav = {

    route: {
        path: '/test',
        name: 'test',
        component: Test,
        meta: { auth: true }
},

menu:  { id: "interview.test", title: "Test",  route: "test", to: {name:"test"} },
}

export default testNav
