import mongoose from 'mongoose';

const historyContentSchema = new mongoose.Schema({
  legacyTitle: {
    type: String,
    required: true,
    trim: true,
  },
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
  milestones: [
    {
      year: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],

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
  impactStats: [
    {
      value: {
        type: String,
        required: true,
        trim: true,
      },
      label: {
        type: String,
        required: true,
        trim: true,
      },
    },
  ],

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