import Vue from 'vue'
import VueRouter from "vue-router";
import Main from "../views/Main";
import Login from "../views/Login";
import UserList from "../Views/user/List";
import UserProfile from "../Views/user/profile";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

export default new VueRouter({
  //history没有#
  mode:'history',
  routes:[
    {
      path:'/login',
      component:Login,

    },
    {
      path:'/main',
      component:Main,
      props:true,
      children:[
        {
          path:'/user/profile/:id',
          name:'UserProfile',
          component:UserProfile,
          props:true
        },
        {
          path:'/user/list',
          component:UserList
        },
        {
          path:'/goHome',
          redirect:'/main'
        }
      ]
    },
    {
      path:'*',
      component:NotFound
    }
  ]
});
