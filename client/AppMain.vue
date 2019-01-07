<template>


    <transition  enter-active-class="animated slideInRight" >
        <router-view></router-view>

    </transition>




   <!-- <router-view></router-view>-->
</template>
<script>
    import addBlog from './components/addBlog.vue';
    import App from './App.vue'
    import Profile from './profiles.vue'
    import MyProfile from './MyProfile.vue'
    import VueRouter from 'vue-router';
    Vue.use(VueRouter)


    const router =new VueRouter({
        routes:[{path:'/',component:App},
            {path:'/post',component:addBlog},
            {path:'/profile',component:Profile},
            {path:'/myprofile',component:MyProfile},
            ]

    })



    export default {

        router:router,


    }
</script>
<style>

    /*.fade-enter-active, .fade-leave-active {
        transition: all .8s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
        transform: translateX(-100%);
    }*/

</style>