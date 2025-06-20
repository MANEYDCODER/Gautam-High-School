import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  grade: {
    type: String,
    enumValues: [
      'Nursery', 'LKG', 'UKG',
      'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
      'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
    ]
  },
  parentGuardianName: String,
  phoneNumber: String,
  address: String,
  isApproved: {type: Boolean, default: false}
});

const User = mongoose.model('User', userSchema);
export default User;
