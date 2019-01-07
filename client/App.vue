<template>
    <div>

    <div class="row center-xs center-sm center-md center-lg" style="margin-top:30px; margin-bottom:30px;">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <router-link to="/"> <img src="https://d1zx4fn8ox8446.cloudfront.net/filemanager.rboxfile/904e4fe570fe4bddad719c289b082432/weblogo-regfire-solutions-transperent.png"/></router-link>


        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">




        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <i class="fa fa-user" style="font-size: 40px;margin-right: 10px; color:#15aabf;"></i>
            <blaze-template template="loginButtons"  ></blaze-template>
        </div>

    </div>







        <div v-if="meteorUser" class="hero-image">
            <div class="hero-text">
                <h1 style="font-size:50px;"> REGFIRE COMMUNITY</h1>
                <h3></h3>
                <router-link to="/post"> <button  style="background: none; padding:25px;color:#f1f1f1;font-size:20px;border:2px solid #f1f1f1; ">View All Post</button></router-link>
                <router-link to="/profile"> <button  style="background: none; padding:25px;color:#f1f1f1;font-size:20px;border:2px solid #f1f1f1; ">View  Profiles</button></router-link>
            </div>
        </div>






        <div class="row center-xs center-md center-lg center-sm">






            <div class="col-xs-12
                col-sm-12
                col-md-12
                col-lg-12">
                <div class="mid-section" style="text-align: center;width: 72%;padding:220px;background-color: #f1f1f1;font-family: 'PT Serif', serif;">

                    <div v-if="meteorUser" class="row center-xs center-sm center-md center-lg" style="margin-top:30px; margin-bottom:30px;">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

                            <i class="fa fa-book-open" style="font-size:45px"></i>

                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

                            <i class="fa fa-laptop" style="font-size:45px"></i>


                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

                            <i class="fa fa-cloud-upload-alt" style="font-size:45px"></i>
                        </div>

                    </div>
                    <div v-else class="row center-xs center-sm center-md center-lg" style="margin-top:30px; margin-bottom:30px;"><i class="fa fa-user-plus" style="font-size:30px"></i></div>

                    <h4 v-if="meteorUser">Sharing knowledge increases the productivity of your team. You can work faster and smarter, as you get easier access to the internal resources and expertise within your organization. Projects don't get delayed, people swimmingly get the information they need in order to do their jobs and your business fills the bill.</h4>
                    <h1 v-else style="font-family: 'Orbitron', sans-serif;color:rgba(255,0,0,1.8)">Please Sign in To Add or See Post</h1>
                </div>


            </div>
        </div>


        <div class="row center-xs center-md center-lg center-sm">
            <div class="col-xs-12
                col-sm-12
                col-md-12
                col-lg-12">
                <div v-if="meteorUser" class="row activity" style="font-family: 'PT Serif', serif;">
                    <div v-for="dt in data" class="column">
                        <div  class="card">
                            <i class="fa fa-pen-fancy" style="color:#15aabf;font-size: 20px;"></i>
                            <h3 style="color:#15aabf;">Recent Activity</h3>
                            <br>
                            <h4 style="color:#008080">{{dt.name}}</h4><p> Added a new post</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>




        <div v-if="meteorUser" class="row activity" style="font-family: 'PT Serif', serif;">
            <div v-for="dt in data" class="column">
                <div  class="card">
                    <i class="fa fa-pen-fancy" style="color:#15aabf;font-size: 20px;"></i>
                    <h3 style="color:#15aabf;">Recent Activity</h3>
                    <br>
                    <h4 style="color:#008080">{{dt.name}}</h4><p> Added a new post</p>

                </div>
            </div>


        </div>












        <div v-if="meteorUser" id="add-blog">



           <!-- <form class="add-form">

                <label>Add a Title Here</label>
                <input v-model.lazy="title"
                       type="text"
                       value="title"
                       placeholder="add title"/>


                <label>Add your content </label>

                <textarea v-model.lazy.trim="content"
                          placeholder="">

                </textarea>

            </form> -->


            <div style=" margin-bottom:100px;">
                <button v-on:click="showModal" style="margin-left:600px;background: none;padding:25px; color:#111111;">Add a Post</button>
                 <button v-on:click="updatesection" style="background: none;padding:25px;color:#111111;">Update post</button>
            </div>








            <!--  <div id="preview">
                  <div class="preview-header">
                      <h1>Preview  blog</h1>
                  </div>


                  <p>Blog title: {{title}} </p>

                  <p>Blog content:</p>
                  <p>{{ content }}</p>

              </div>
              <div class="button-save-show">
                  <div class="save-btn">
                      <a href="" v-on:click="post">Save Post</a>
                  </div>




                      <button class="show-button" v-on:click="show">Show Post</button>

              </div>-->
        </div>

        <div v-else style="text-align: center;font-family: 'Coda', cursive; padding: 30px;">
          <!--  <h1 style="font-family: 'Orbitron', sans-serif;color:rgba(255,0,0,0.8)">Please Sign in To Add or See Post</h1>-->
            <p>The regFire Developer Forums are a great place to post questions and share comments with fellow developers and regFire engineers. Discuss a variety of development topics, from getting started to working with the latest beta software.</p>

        </div>


            <br/>
            <br/>


      <div class="update-section" v-if="updateSec" style="transition: 0.8s;margin:0px;padding: 0px;border:none">




            <ul style="">
                <li v-for="dt in data">
                    {{dt.name}}

                    <h2>{{dt.title}}</h2>
                    <br>
                    {{dt.text}}
                    <div class="button-container">
                        <a v-on:click="dlt(dt._id)">Delete</a>
                        <button v-on:click="dlt(dt._id)">Delete</button>
                        <button v-on:click="showTextarea">Update</button>
                        <button v-if="makeUpdate" v-on:click="update(dt._id)">Update Now</button>
                    </div>




                </li>
                <textarea v-if="makeUpdate"

                          v-model="newContent" style="margin: 30px 30px 30px 60px; border: 1px solid black;width:50%"></textarea>



                <li v-for="note in notes" style="border:none">
                    {{note.name}}

                    <h2>{{note.title}}</h2>
                    <br>
                    {{note.text}}
                    <div class="button-container">
                        <a v-on:click="dlt(note._id)">Delete</a>
                        <button v-on:click="dlt(note._id)">Delete</button>
                        <button v-on:click="showTextarea">Update</button>
                        <button v-if="makeUpdate" v-on:click="update(note._id)">Update Now</button>
                    </div>




                </li>




            </ul>
        </div>


        <modal name="third"

               :height="400">


            <div class="update-section" v-if="updateSec" style="transition: 0.8s;margin:0px;padding: 0px;border:none">




                <ul style="">
                    <li v-for="dt in data">
                        {{dt.name}}

                        <h2>{{dt.title}}</h2>
                        <br>
                        {{dt.text}}
                        <div class="button-container">
                            <a v-on:click="dlt(dt._id)">Delete</a>
                            <button v-on:click="dlt(dt._id)">Delete</button>
                            <button v-on:click="showTextarea">Update</button>
                            <button v-if="makeUpdate" v-on:click="update(dt._id)">Update Now</button>
                        </div>




                    </li>
                    <textarea v-if="makeUpdate"

                              v-model="newContent" style="margin: 30px 30px 30px 60px; border: 1px solid black;width:50%"></textarea>



                    <li v-for="note in notes" style="border:none">
                        {{note.name}}

                        <h2>{{note.title}}</h2>
                        <br>
                        {{note.text}}
                        <div class="button-container">
                            <a v-on:click="dlt(note._id)">Delete</a>
                            <button v-on:click="dlt(note._id)">Delete</button>
                            <button v-on:click="showTextarea">Update</button>
                            <button v-if="makeUpdate" v-on:click="update(note._id)">Update Now</button>
                        </div>




                    </li>




                </ul>
            </div>










            <div>
                <div  class="row center-sm center-xs center-lg center-md" style="margin-top:20px">




                </div>
                <div class="row center-sm center-xs center-lg center-md">



                </div>
                <div class="row center-sm center-xs center-lg center-md">

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <!--  <i class="fa fa-edit"> </i> -->
                        <textarea
                                  v-model.lazy.trim="newContent"
                                  name="subject"
                                  placeholder="Write something.." style="height:100px;width:400px;margin:10px;border:3px solid #eee;border-radius: 10px"></textarea>
                    </div>

                </div>



                <div class="row center-sm center-xs center-lg center-md ">

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <input type="submit" value="Submit" style="background-color: #111111" v-on:click="update(note._id)">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <input type="submit" value="delete" style="background-color: #111111" v-on:click="dlt(note._id)">
                    </div>


                </div>

            </div>
        </modal>

















        <modal name="second"

               :height="400">

            <div v-if="!submitted">
                <div  class="row center-sm center-xs center-lg center-md" style="margin-top:20px">


                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <i class="fa fa-user"></i>  <input type="text"
                               v-model.lazy="name"
                                name="firstname" placeholder=" Your name.." style="width:400px;margin:10px;border:3px solid #eee;border-radius: 10px">
                    </div>

                </div>
                <div class="row center-sm center-xs center-lg center-md">

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <i class="fa fa-pen"></i>  <input v-model.lazy="title"
                               type="text"
                               value="title"
                               placeholder="add title" style="width:400px;margin:10px;border:3px solid #eee;border-radius: 10px"/>
                    </div>

                </div>
                <div class="row center-sm center-xs center-lg center-md">

                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <!--  <i class="fa fa-edit"> </i> -->
                        <textarea id="subject"
                                  v-model.lazy.trim="content"
                                  name="subject"
                                  placeholder="Write something.." style="height:100px;width:400px;margin:10px;border:3px solid #eee;border-radius: 10px"></textarea>
                    </div>

                </div>



                <div class="row center-sm center-xs center-lg center-md ">

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                         <input type="submit" value="Submit" style="background-color: #111111" v-on:click="post">
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <span>private</span><input type="checkbox" name="private" value="private" v-on:change="makePrivate" >
                    </div>

                </div>

            </div>

            <div v-else>

                 <div class="row center-xs center-sm center-md center-lg">

                 </div>
                 <div class="row center-xs center-sm center-md center-lg" style="margin-top: 80px;color:rgba(0,0,255,0.5)">

                 </div>
                 <div class="row center-xs center-sm center-md center-lg" style="margin-top: 15px;color:rgba(0,0,0,0.5)">
                     <h3>Thank You For Your Post </h3>
                 </div>

                <div class="row center-xs center-sm center-md center-lg">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">

                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <button v-on:click="hideModal" style="color:#f1f1f1;background-color: #111111;padding:20px;border:none;border-radius: 10px;margin-right:100px;">Close</button>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">

                    </div>
                </div>

            </div>



        </modal>











            <div v-if="meteorUser" class="row center-xs center-sm center-md center-lg" >
                <h1 style="font-family: 'Baloo Tamma', cursive;"> Community Members<hr> </h1>
            </div>
            <div v-if="meteorUser" class="row center-xs center-sm center-md center-lg" style="margin-left: 90px" >

            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 carousel-style" >
                <h3 style="font-family: 'Baloo Tamma', cursive;color:#1bb9bb;"> Unite <hr> </h3>

                <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false"style="height: 600px;width:600px;">

                    <slide class="" style="">
                        <div class="card-img">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Avatar" style="width:100%;filter: grayscale(100%)">

                        </div>
                    </slide>

                    <slide>
                        <div class="card-img">
                            <img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Avatar" style="width:100%;">



                        </div>
                    </slide>

                    <slide>
                        <div class="card-img">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Avatar" style="width:100%">

                        </div>
                    </slide>
                </carousel>




            </div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 carousel-style">
                <h3 style="font-family: 'Baloo Tamma', cursive;color:rgba(0, 0, 255,0.7);"> Gain<hr> </h3>
                <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false"style="height: 600px;width:600px;">
                <slide >
                    <div class="card-img">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Avatar" style="width:100%;">

                    </div>
                </slide>
                <slide>
                    <div class="card-img">
                        <img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Avatar" style="width:100%">



                    </div>
                </slide>
            </carousel></div>
            <div class="col-xs-12 col-sm-12 col-lg-4 col-md-4 carousel-style ">
                <h3 style="font-family: 'Baloo Tamma', cursive;"> Gain<hr> </h3>
                <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false"style="height: 600px;width:600px;">
                    <slide>
                        <div class="card-img">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Avatar" style="width:100%;filter: grayscale(50%)">

                        </div>
                    </slide>
                    <slide>
                        <div class="card-img">
                            <img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Avatar" style="width:100%">



                        </div>
                    </slide>
                </carousel>


            </div>

        </div>



        <div class="footer-section" style="height: 300px; background-color:#111111;color:#f1f1f1;font-family: 'Poiret One', cursive;font-size:25px;width:105%">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="padding:20px;text-align: center;border-right: 1px solid #f1f1f1; ">
                   <h4>Contact<hr style="width:50%"></h4>
                    <ul style="padding:0;margin:0">
                        <li style="padding:0;margin:0;border:none" >Lorem</li>
                        <li  style="padding:0;margin:0;border:none">Lorem</li>
                        <li style="padding:0;margin:0;border:none;">Lorem</li>
                        <li style="padding:0;margin:0;border:none">Lorem</li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="padding:20px;text-align: center; border-right: 1px solid #f1f1f1;">
                    <h4>About Us<hr style="width:50%"></h4>
                    <ul style="padding:0;margin:0">
                        <li style="padding:0;margin:0;border:none" >Lorem</li>
                        <li  style="padding:0;margin:0;border:none">Lorem</li>
                        <li style="padding:0;margin:0;border:none;">Lorem</li>
                        <li style="padding:0;margin:0;border:none">Lorem</li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="padding:20px;text-align: center;">
                    <h4>Credit<hr style="width:50%"></h4>
                    <ul style="padding:0;margin:0">
                        <li style="padding:0;margin:0;border:none" >Lorem</li>
                        <li  style="padding:0;margin:0;border:none">Lorem</li>
                        <li style="padding:0;margin:0;border:none;">Lorem</li>
                        <li style="padding:0;margin:0;border:none">Lorem</li>
                    </ul>
                </div>
            </div>
        </div>



 <!-- <add-todo v-if="meteorUser"></add-todo>-->




    </div>


</template>

<script>

    import { Accounts } from 'meteor/accounts-base';
    import { Notes } from '../lib/collectioni.js';
    import { Meteor } from 'meteor/meteor';

    import addBlog from './components/addBlog.vue';

    //import {Vue} from 'meteor/akryum:vue';


    import Vue from 'vue';
    import VueCarousel from 'vue-carousel';
    import VueSlide from 'vue-carousel';

    Vue.use(VueCarousel);
    Vue.use(VueSlide);


    import VModal from 'vue-js-modal';




    Vue.use(VModal , { dynamic: true })

    import VueMeteorTracker from 'vue-meteor-tracker'
    Vue.use(VueMeteorTracker)





    // Imports





    export default {

        meteor: {
            meteorUser() {
                return Meteor.user()
            },
           notes(){
                return Notes.find({}).fetch();
           },


        },




        components:{
            'add-todo':addBlog,
            VueCarousel,
            VueSlide,


        },
        template: '#modal-template',


        data() {
            return {



                    name:'',
                    title: '',
                    content: '',
                    data: [],
                     like:0,
                check:false,

                submitted:false,




                show_author: 'true',

                makeUpdate: false,
                newContent:'',
                authors: ['john doe', 'john doe'],


                updateSec:false


            }
        },
        methods: {
            post () {

               var  details ={

                    name:this.name,
                   title:this.title,
                   text:this.content,
                   like:0,
                   disable:false,
                   check:this.check,





                }

                Meteor.call('post-server',details)

                console.log('hi');

               this.submitted=true


               // this.hideModal ()
               /* Notes.insert({
                    name:this.name,
                    title:this.title,
                    text:this.content,
                    like:0,
                    disable:false,

                    createdAt:new Date()
                })*/


            },
            show(){

              //  Meteor.call('show-server')


                /* console.log(Notes.findOne({}).fetch())
                this.data = Notes.find({}).fetch();
                console.log(this.data);
                console.log(Meteor.user())
                console.log(this.name) */

            },
            dlt(id){

                Meteor.call('dlt-server',id)

                console.log(this.data._id);
                alert('one item deleted')
                //Notes.remove(id);
            },
            update(id){
                var content={
                    id:id,
                    newContent:this.newContent
                }
                    Meteor.call('update-server',content)
               // Notes.update(id,{$set:{text: 'updated '+ ' '+this.newContent}})
                this.newContent=''

            },
            showTextarea(){
                this.makeUpdate= true

            },

            showModal () {
                this.$modal.show('second');
            },
            hideModal () {
                this.$modal.hide('second');
                this.submitted=false
            },

            showModalUpdate () {
                this.$modal.show('third');
            },
            hideModalUpdate () {
                this.$modal.hide('third');
               // this.submitted=false
            },

            welcome(){
                alert('welcome')
            },
            updatesection(){
                this.updateSec=true
            },
            makePrivate(){
                this.check=true
                console.log(this.check)
            }






        },
      created(){

                this.$modal.show('myModal');


        }



    }










</script>

<style>
    body{
        margin: 0;
        font-family: 'Nunito SemiBold';
        width:95.5vw;


    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* width: 600px;*/
        max-width: 100%;
        /*height: 00px;*/
        max-height: 100%;

    }
    .modal-class{
     height:800px;
    }





    .carousel-style  li{
        border:none;


    }
    .carousel-style img{
        margin-left: 30px;
    }

    .hero-image {
        background-image: url("https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");

        background-color: #cccccc;
        opacity:0.9;
        height: 450px;
        width:98.6vw;
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
       /* animation-name:header-anim ;
        animation-duration: 3s;*/
       /* clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 100%, 0 0);*/

    }

    .hero-text {
        text-align: center;
        text-shadow: 2px 0 black;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        /*font-family: 'Krona One', sans-serif;*/

        font-family: 'Audiowide', cursive;
        color: #f1f1f1;
       /* animation-name:header-anim ;*/
        animation-duration: 5s;



    }

    .hero-image button{
        background: none;
    }
    .hero-image button:hover{
        transform:scale(1.2);
        transition: 0.5s;
    }



    @keyframes header-anim {
    0%{

        opacity: 0;
        /*transform: translateY(-4rem) scale(.8);*/
    }


    100%{

        opacity: 1;
        /*transform: none;*/
    }
    }




    /*form css*/

    input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
    }

    label {
        padding: 12px 12px 12px 0;
        display: inline-block;
    }

    input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
    }

    input[type=submit]:hover {
        background-color: #45a049;
    }

    .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    .col-25 {
        float: left;
        width: 25%;
        margin-top: 6px;
    }

    .col-75 {
        float: left;
        width: 75%;
        margin-top: 6px;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .col-25, .col-75, input[type=submit] {
            width: 100%;
            margin-top: 0;
        }
    }





    .card-img {
        height:400px;
        width:300px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    /* On mouse-over, add a deeper shadow */
    .card-img:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    /* Add some padding inside the card container */
    .container {
        height:200px;
        width:200px;
        padding: 2px 16px;
    }












    .column {
        float: left;
        width: 25%;
        padding: 0 10px;
    }

    /* Remove extra left and right margins, due to padding */
    .row {margin: 0 -5px;}

    /* Clear floats after the columns */
    /*.row:after {
        content: "";
        display: table;
        clear: both;
    }*/

    /* Responsive columns */
    @media screen and (max-width: 600px) {
        .column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
        }
    }

    /* Style the counter cards */
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        text-align: center;
        background-color: white;
    }

    .card:hover{
        box-shadow: 0px 5px 5px grey;
        transition: 0.8s;
    }
.top{
    display:flex;
    margin-left: -8px;
    width: 97vw;

}

.top img {
    display: inline-block;
    float: right;
    margin-left: auto;

}



    .activity{
        padding: 25px;
    }


    .button-save-show{
        display: inline;
    }
    form{
        color:#0086B3;
    }
    input[type='text']{
        border:2px solid #69d2e7;
    }
    textarea{
        border:2px solid #69d2e7;
    }
    .save-btn{
        height:30px;
        width:100px;
        background: #69d2e7;
        color: #69d2e7;
        margin-bottom:30px;
        margin-left: 200px;
        padding: 5px;
        text-align: center;
    }
    .show-button{
        height:30px;
        width:100px;
        background: #69d2e7;
        color: #ffffff;
        margin-bottom: 20px;
        margin-bottom:30px;
        margin-left: 200px;
        padding: 5px;
        text-align: center;
    }
    .save-btn a{
        text-decoration: none;
        color: #ffffff;
    }
    .save-btn:hover{
        transform: scale(1.2);
        transition: all 0.5s;
    }
    #preview{
        margin:200px;
        padding:30px;
        border:2px solid #69d2e7;
    }
    .preview-header{
        text-align: center;
    }





    ul{
        padding:0;
        margin:0;
    }
    li{
        padding:15px;
        margin:10px  0 10px 0px;
        border: 2px solid #69d2e7;
        list-style: none;
        text-align: center;
    }
    .button-container{
        margin:20px 20px 20px -35px;
    }
    button{
        margin-left:50px ;
        /*color:#69d2e7;*/
    }
    .top{
        height: auto;
        width:100%;
        padding:30px;

        border-bottom: 3px solid #eee;
    }
    .add-form{
        margin-top: 40px;
    }
    #add-blog{
        margin-top: 30px;

    }
    #header img{
        max-width:100%;
        height:90vh;

    }

</style>