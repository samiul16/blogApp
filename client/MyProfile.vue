<template>
<div>

    <div class="main-section" style="height: 100vh;width:99.3vw;background-color:rgba(0,0,0,0.8);">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 "style="width:50%;border-right:1px solid white;" >

              <div class="picture-holder" style="height: 200px;width: 200px;border:1px solid white;margin:120px 0px 0px 100px;background-color: #f1f1f1;padding:20px; ">

                    <i class="fa fa-user-plus" style="font-size:40px; color:rgba(0,0,0,0.3)"></i>
                    <p style="font-size:20px; color:rgba(0,0,0,0.3)">add image</p>

              </div>

            </div>

            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 "         style="margin-top: 100px;" >

                <div class="row">
                    <input type="text" v-model="user_name"      placeholder="Enter your name"     style="width:60%;margin:20px; border:none;">
                </div>
                <div class="row">
                    <input type="text" v-model="user_email"     placeholder="Enter your email"    style="width:60%;margin:20px;border:none;">
                </div>
                <div class="row">
                    <input type="text" v-model="user_interest"  placeholder="Area of Interest"   style="width:60%;margin:20px;border:none;">
                </div>
                <div class="row">
                    <input type="text" v-model="user_bio"       placeholder="Add Bio here"       style="width:60%;margin:20px;border:none;height:80px">
                </div>
                <div class="row">
                    <button             v-on:click="save"                                  style="width:100px; padding:10px;margin:10px 0px 0px 520px;border-radius:30px">Save</button>
                </div>


            </div>
        </div>
    </div>




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





</div>



</template>





<script>

    import { Notes } from '../lib/collectioni.js';
    import { Meteor } from 'meteor/meteor';


    export default{
    meteor:{

    notes() {
        return Notes.find({}).fetch();
    }

    },


        data(){
            return{
                user_name:'',
                user_email:'',
                user_interest:'',
                user_bio:''

            }


        },
    methods:{
        save(){
            var details={
                user_name:this.user_name,
                user_email:this.user_email,
                user_interest:this.user_interest,
                user_bio:this.user_bio

            }

                Meteor.call('save-user-server',details)

                console.log(this.user_name,this.user_email,this.user_interest)

        }
    }

    }




</script>




<style></style>