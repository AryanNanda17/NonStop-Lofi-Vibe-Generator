import mongoose from "mongoose";

const FeedbackSchema = mongoose.Schema({
   email: {
    type: String, 
    required: true,
    unique: true
   },
   response:{
    type: String,
    required: true
   }
})

const Feedback = mongoose.model('Feedback', FeedbackSchema);
export default Feedback;