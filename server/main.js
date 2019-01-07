import { Meteor } from 'meteor/meteor';
import { Notes } from '../lib/collectioni.js'
import {Comments} from "../lib/collectioni";
import {Users} from "../lib/collectioni";

Meteor.startup(() => {
  // code to run on server at startup

    Meteor.publish('task',function(){
        return Notes.find({
            $or:[{check:{$ne:true}}]
        });
    });
    Meteor.publish('comment',function(){
        return Comments.find({

        });


    });

    Meteor.publish('user',function(){
        return Users.find({

        });


    });





    Meteor.methods({
        'post-server'(details){
            Notes.insert({
                name:details.name,
                title:details.title,
                text:details.text,
                like:details.like,
                disable:details.disable,
                check:details.check,




                createdAt:new Date()
            })
        },


        'show-server'(){

            // return Notes.Notes.find({}).fetch();

        },

        'updateLike-server'(id){
            Notes.update(id,{$inc:{like:1}})
            Notes.update(id,{$set:{disable:true}})

        },
        'updateDislike-server'(id){
            Notes.update(id,{$inc:{like:-1}})
            Notes.update(id,{$set:{disable:false}})
        },

        'dlt-server'(id){
            Notes.remove(id);
        },
        'update-server'(content){
            Notes.update(content.id,{$set:{text: 'updated '+ ' '+content.newContent}})
        },

        'makeComment-server'(details){
            Comments.insert({
                text:details.text,
                user:details.user,
                blog:details.blog_id,

                createdAt:new Date()
            })

        },
        'save-user-server'(details){
            Users.insert({
                user_name:details.user_name,
                user_email:details.user_email,
                user_interest:details.user_interest,
                user_bio:details.user_bio

                }

            )
        }





    })


});
