<template >
   <div v-if="meteorUser">


       <div class="row center-xs center-sm center-md center-lg" style="margin-top:30px; margin-bottom:30px;">
           <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

               <router-link to="/"> <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png"/></router-link>

           </div>
           <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">




           </div>
           <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
               <i class="fa fa-user" style="font-size: 40px;margin-right: 10px; color:#15aabf;"></i>
               <blaze-template template="loginButtons" ></blaze-template>
           </div>

       </div>



      <!-- <div class="row">
           <div class="col-xs-12
                col-sm-12
                col-md-12
                col-lg-12">


               <div   class="top">

                   <i class="fa fa-user" style="font-size: 40px;margin-right: 10px; color:#15aabf;"></i>

                   <blaze-template template="loginButtons" ></blaze-template>

                   <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png"/>

               </div>




           </div>
       </div>-->


    <!--<div id="show-blogs">
        <h1>All Blog Articles</h1>
        <button v-on:click="show">show blog</button>
        <div v-for="blog in blogs" :key="blog.id" class="single-blog">
            <h3>{{blog.name}} </h3>
            <h2>{{ blog.title.toUpperCase() }}</h2>
            <article>{{ blog.text }}</article>
           <div style="margin: 10px">
                                        <a> <i class="fa fa-thumbs-up" style="font-size: 20px" v-if="!blog.disable" v-on:click="updateLike(blog._id)"></i>
                                            <i class="fa fa-thumbs-up" style="font-size: 20px; color: #111111" v-else ></i></a>  {{  blog.like}}
                                        <a> <i class="fa fa-thumbs-down" style="font-size: 20px;margin-left: 10px" v-if="blog.disable"  v-on:click="updateDislike(blog._id)"></i>
                                            <i class="fa fa-thumbs-down" style="font-size: 20px; color: #111111" v-else ></i></a>
           </div>


        </div>
    </div>-->

    <div  class="row center-xs center-sm center-md center-lg" >

            <h1 style="font-family: 'Baloo Tamma', cursive;">SEE ALL POST<hr></h1>

    </div>

       <div  class="row start-xs start-sm start-md start-lg" >

           <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

           </div>
           <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <input type="text" placeholder="Search Blog by title" v-model="search " style="width:98%;border:1px solid #111111"/>
           </div>
           <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
               <button style="margin-top:5px;margin-left:10px;border:none; "><i class="fa fa-search" style="font-size:25px;"></i></button>

           </div>

       </div>

<div v-if="filteredBlogs.length>=1">

    <div class="card" style="margin: 30px 4px 12px 30px;" v-for="blog in filteredBlogs" >
        <div class="row">
            <div class="col-xs-12
                col-sm-12
                col-md-3
                col-lg-3">


                <div class="" style="width: 18rem;margin-top: 20px;">
                    <img class="card-img-top" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style="width:100%;" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{blog.name}}</h5>
                        <p class="card-text">Developer 16 Meteor</p>
                        <router-link to="/Profile">Go to Profile</router-link>
                    </div>
                </div>











            </div>



            <div class="col-xs-12
                col-sm-12
                col-md-6
                col-lg-6">
                <div v-for="" :key="blog.id" class="single-blog">

                    <h3>{{blog.name}} </h3>
                    <h2 style="font-family: 'Yanone Kaffeesatz', sans-serif;margin-top:60px;font-size: 50px">{{ blog.title }}</h2>
                    <hr>
                    <article style="font-family: 'Cinzel', serif;">{{ blog.text }}</article>
                    <div style="margin:30px 10px 10px 10px">
                        <a> <i class="fa fa-thumbs-up" style="font-size: 20px"  v-on:click="likeButton(blog._id)"></i>
                          <!--  <i class="fa fa-thumbs-up" style="font-size: 20px; color: #111111"  ></i>-->

                        </a>  {{  blog.like}}

                        <!-- <a> <i class="fa fa-thumbs-down" style="font-size: 20px;margin-left: 10px" v-if="blog.disable"  v-on:click="updateDislike(blog._id)"></i>
                            <i class="fa fa-thumbs-down" style="font-size: 20px; color: #111111" v-else ></i></a>-->
                    </div>
                    <div>
                        <input v-bind:id="blog._id"  type="text" placeholder="make a comment " v-model="comment" @keypress.enter="makeComment(blog._id)" style="max-width:95%; border:1px solid #111111;margin-top: 10px; ">
                        <div  v-for="comment in comments">
                            <div v-if="blog._id==comment.blog" style="border:1px solid white;border-radius:25px;width:90%; background-color: white;margin:12px 5px 8px 35px">
                                <div style="color:rgba(0,0,255,0.7);margin-top:10px;">
                                    <div class="row start-xs start-sm start-md start-lg" style="margin:10px;">
                                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                                            {{comment.user+' ' }}
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-9 col-lg-9" style="color:#111111">
                                            {{comment.text }}
                                        </div>
                                    </div>









                                </div>


                            </div>
                        </div>

                        <!-- <fieldset>
                            <legend>
                                {{address}}
                            </legend>
                            <div v-for="cmnt in  comments">
                                {{cmnt}}

                            </div>


                        </fieldset>-->
                    </div>

                </div>

            </div>



            <div class="col-xs-12
                col-sm-12
                col-md-3
                col-lg-3">

                <div class="row">
                    <div class="
                       col-xs-12
                    col-sm-12
                    col-md-12
                    col-lg-12 single-blog" style="font-family: 'Cinzel', serif;">
                        Resource: Udemy ,Github , StackOverflow  ,Meteor

                    </div>


                </div>
                <div class="row">
                    <div class="col-xs-12
                    col-sm-12
                    col-md-12
                    col-lg-12 single-blog" style="font-family: 'Cinzel', serif;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    </div>


                </div>

                <div class="row">
                    <div class="col-xs-12
                    col-sm-12
                    col-md-12
                    col-lg-12 single-blog" style="font-family: 'Cinzel', serif;">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    </div>


                </div>





            </div>


    </div>


    </div>

      <!-- <div v-for="comment in comments">
           <p>{{comment.text}}</p>
           <p>{{comment.user}}</p>
       </div>-->
    </div>

<div v-else>
<div class="row center-xs center-sm center-md center-lg">
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
        <infinite-loading spinner="bubbles"></infinite-loading>
        <h2 style="color: rgba(255,0,0,0.7)">No Matched Found !!</h2>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

    </div>
</div>


</div>
   </div>






</template>

<script>
    import {Vue} from 'meteor/akryum:vue';
    import { Notes } from '/lib/collectioni.js';
    import { Comments } from '/lib/collectioni.js';
    import VueMeteorTracker from 'vue-meteor-tracker'
    import { Meteor } from 'meteor/meteor';


    import InfiniteLoading from 'vue-infinite-loading';

    Vue.use(VueMeteorTracker)




    export default {


        meteor:{

            blogs(){




               return Notes.find({}).fetch();

            },

            meteorUser(){
                return Meteor.user()
            },

            comments(){
                return Comments.find({

                }).fetch()
            }
            // userId:Meteor.user().emails[0].address


        },
        data () {
            return {
                //blogs: [],
                count:0,
               // liked:true,
                comment:'',
                address: "",
                search:'',
                liked:true,
                liked_once:false



            }
        },

        components: {
            'infinite-loading': InfiniteLoading,
        },

        computed:{
        filteredBlogs(){


            return  this.blogs.filter((blog)=>{
                   // console.log(blog.title.match(this.search)==null)
                    return blog.title.match(this.search)
                }


            )
        }
    },



        methods: {
            show(){
                //this.blogs = Notes.find({}).fetch();
                console.log(this.data);
                console.log(Meteor.user())

            },


            likeButton(id){

                 if(this.liked  ){

                     this.updateLike(id);
                     this.liked=false

                 }
                else {
                    this.updateDislike(id)
                        this.liked=true

                }


            },

            updateLike(id){

                Meteor.call('updateLike-server',id)

                //Notes.update(id,{$inc:{like:1}})
                    //Notes.update(id,{$set:{disable:true}})
                    console.log('liked')

            },
            updateDislike(id){
                Meteor.call('updateDislike-server',id)
                //Notes.update(id,{$inc:{like:-1}})
               // Notes.update(id,{$set:{disable:false}})
            },

            makeComment(blog_id){

                this.address = Meteor.user().emails[0].address;
                console.log(this.address)

                var details ={
                    text:this.comment,
                    user:this.address,
                    blog_id:blog_id
                }
                Meteor.call('makeComment-server',details)
                this.comment=''
                console.log(this.comment)

                //this.address = Meteor.user().emails[0].address;
                console.log(event.target.id)
                //console.log(Notes.find({}).fetch())
                console.log(this.filteredBlogs.length)


            },



        },


        created() {
            //this.blogs = Notes.find({}).fetch();
            console.log(this.blogs);
            console.log(Meteor.user())




        },


    }
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0px auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    .card {
        /*box-shadow: 4px 4px 8px 3px rgba(0, 0, 0, 0.2);*/
        padding: 16px;
      box-shadow: none;
        background-color: white;
    }

    .card:hover{
        box-shadow: 0px 5px 5px grey;
        transition: 0.8s;
    }
</style>