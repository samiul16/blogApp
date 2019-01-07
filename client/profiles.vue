<template>
    <div>
    <div class="main-section" style="width:99.3vw;background-color:rgba(0,0,0,0.8);z-index:-1">


        <div class="row center-xs center-sm center-md center-lg">
            <h2 style="color:#f1f1f1; margin-top: 30px;font-family: 'Audiowide', cursive;">Profiles<hr style="color:#f1f1f1"></h2>
        </div>
</div>
<div>
    <div class="" v-if="users.length==0">
        <infinite-loading direction="bottom" spinner="bubbles">

        </infinite-loading>
    </div>



        <div v-else v-for="user in users" class="row center-xs center-sm center-md center-lg">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 "style="width:50%" >
                <img src="https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  style="width:60%; margin-top:20%;z-index:2;border-radius:50% "/>
                <div class="row center-xs center-sm center-md center-lg" style="color:#f1f1f1">
                    <h2 style="font-family: 'Saira Extra Condensed', sans-serif;color:#111111">{{user.user_name}}</h2>
                </div>
                <div class="row center-xs center-sm center-md center-lg" style="    color:#f1f1f1">
                    <h3 style="font-family: 'Saira Extra Condensed', sans-serif;color:#111111">{{'Contact me to ' +user.user_email}}</h3>
                </div>
                <div class="row center-xs center-sm center-md center-lg" style="color:#111111;padding:0px 100px 0px 100px;">
                    <h3 style="font-family: 'Saira Extra Condensed', sans-serif;color:#111111">{{user.user_bio}} </h3>
                </div>
                <div class="row center-xs center-sm center-md center-lg" style="color:#f1f1f1">
                    <h3 style="font-family: 'Saira Extra Condensed', sans-serif; color:#111111">{{'Interested in ' +user.user_interest}} </h3>
                </div>

                <hr style="width:80%">
            </div>


        </div>


</div>

    </div>
</template>





<script>
    import {Users} from "../lib/collectioni";

    import InfiniteLoading from 'vue-infinite-loading';

    export default{


        data(){
            return{
                users:[]

            }

        },

        meteor:{
           user_info(){



                   return this.users= Users.find({}).fetch();




            }
        },




        components: {
            'infinite-loading': InfiniteLoading,
        },



        methods:{


        },
        created() {





        }




    }


</script>




<style></style>