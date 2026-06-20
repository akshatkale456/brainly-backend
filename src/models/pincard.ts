import mongoose from 'mongoose'
const Schema = mongoose.Schema
pincard = new Schema
 {
  cardId: {type :String; }          // The unique ID for this specific card
  roomId: {type :tring;}           // The room this card belongs to
  createdBy:{ string;}        // The User ID of the person who made it
  content:{ string;}          // The text/data on the card
  coordinates: {            // X/Y coordinates for the UI
    x: number;
    y: number;
  };