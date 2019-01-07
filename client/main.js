import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

//import Vue from 'vue';
import App from './App.vue';
import AppMain from './AppMain.vue';
import './main.html';

import addBlog from './components/addBlog.vue';
import { Notes } from '../lib/collectioni.js'

Meteor.startup(() => {


    Meteor.subscribe('task')
    Meteor.subscribe('comment')
    Meteor.subscribe('user')


    new Vue({
        el: '#app',

        ...AppMain,
    });
});




Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },

});

Template.body.events({
    'submit .add-form '(){
        var target=event.target;
        var text =target.text.value;
        console.log('hello');
    }
});