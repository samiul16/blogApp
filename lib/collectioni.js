import { Mongo } from 'meteor/mongo'

export const Notes=new Mongo.Collection('notes');

export const  Todos= new Mongo.Collection('todos');

export const Comments = new Mongo.Collection('commment')

export const Users =new Mongo.Collection('user')


if(Meteor.isServer){


}






