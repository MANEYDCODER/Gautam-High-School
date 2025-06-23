import mongoose from 'mongoose';
const homeContentSchema = new mongoose.Schema({
headerTitle: String,
headerDescription: String,
name: {
    type: String,
    required: true,
    default: "Gautam High School",
    trim: true,
},

motto:{
    type: String,
    required: true,
    trim: true,
},

footerTitle: String,
footerDescription: String,
schoolStats:[],
whyChooseUsTitle: String,
whyChooseUsDescription: String,
whyChooseUs: [],

});

const HomeContent = mongoose.model('HomeContent',homeContentSchema);

export default HomeContent;