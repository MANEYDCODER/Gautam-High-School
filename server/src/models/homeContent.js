import mongoose from 'mongoose';
const homeContentSchema = new mongoose.Schema({
headerTitle: String,
headerDescription: String,
Submit: String,
name: {
    type: String,
    required: true,
    default: "Gautam High School",
    trim: true,
},

coreValues: [],
footerTitle: String,
footerDescription: String,
schoolStats:[],
whyChooseUsTitle: String,
whyChooseUsDescription: String,
whyChooseUs: [],
readyToBeginTitle: String,
readyToBeginDescription: String,


});

const HomeContent = mongoose.model('HomeContent',homeContentSchema);

export default HomeContent;