import { createSlice } from '@reduxjs/toolkit'
const initialState ={
  email: '',
  token : '',
  isLoggedIn: false,
  location: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logoutUser: state => {
      return initialState
    },
    addLoginDetails: (state, action) => {
      return {
        ...state,
        email:  action.payload.user?.email,
        token: action.payload?.token,
        isLoggedIn:  action.payload?.isLoggedIn,
        _id:  action.payload?.user._id,
        location: action.payload?.user.location,
      }
    },
  }
})
export const { logoutUser, addLoginDetails} = userSlice.actions

export default userSlice.reducer