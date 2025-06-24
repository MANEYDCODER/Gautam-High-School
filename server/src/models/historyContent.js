import mongoose from 'mongoose';

const historyContentSchema = new mongoose.Schema({

  title: String,
  legacyTitle: {
    type: String,
    required: true,
    trim: true,
  },
  legacySubTitle:String,
  legacyDescription: {
    type: String,
    required: true,
    trim: true,
  },

  journeyTitle: {
    type: String,
    required: true,
    trim: true,
  },
  journeyDescription: {
    type: String,
    required: true,
    trim: true,
  },
  milestones: [],

  impactTitle: {
    type: String,
    required: true,
    trim: true,
  },
  impactDescription: {
    type: String,
    required: true,
    trim: true,
  },
  impactStats: [],

  callToActionTitle: {
    type: String,
    required: true,
    trim: true,
  },
  callToActionDescription: {
    type: String,
    required: true,
    trim: true,
  },
  joinLegacyButtonText: {
    type: String,
    default: "Join Our Legacy",
    trim: true,
  },
  backToHomeButtonText: {
    type: String,
    default: "Back to Home",
    trim: true,
  },
});

const HistoryContent = mongoose.model('HistoryContent', historyContentSchema);

export default HistoryContent;