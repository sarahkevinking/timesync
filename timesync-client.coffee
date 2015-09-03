Timesync = new Meteor.Collection('timesync');

Timesync.time = ->
  Timesync.find().fetch()[0].time
