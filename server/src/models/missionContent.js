import mongoose from 'mongoose';

const missionContentSchema = new mongoose.Schema({
  mainMissionTitle: {
    type: String,
    required: true,
    trim: true,
  },
  mainMissionDescription: {
    type: String,
    required: true,
    trim: true,
  },

  coreMissionTitle: {
    type: String,
    required: true,
    trim: true,
  },
  coreMissionDescription: {
    type: String,
    required: true,
    trim: true,
  },

  coreValuesTitle: {
    type: String,
    required: true,
    trim: true,
  },
  missionPageCoreValues: [],

  visionTitle: {
    type: String,
    required: true,
    trim: true,
  },
  visionDescription: {
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
    default: "Back To Home",
    trim: true,
  },
});

const MissionContent = mongoose.model('MissionContent', missionContentSchema);

export default MissionContent;