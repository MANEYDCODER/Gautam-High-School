import { Router } from "express"
import HomeContent from "../models/homeContent.js"
const homeContentRouter = Router()

homeContentRouter.post('/home-contents', async (req, res) => {
const data = await HomeContent.create(req.body)
if(data) res.json({ message: "Home content created successfully",data})
else res.status(400).json({message:"Failed to create home content"})
  })



  homeContentRouter.get('/home-contents', async (req, res) => {
    const data = await HomeContent.find()
    return res.send(data)
  })


  homeContentRouter.put('/home-contents', async (req, res) => {
    const home = await HomeContent.findOne()
    await HomeContent.findByIdAndUpdate(home._id,req.body)
    return res.send("Home content edited")
  })
export default homeContentRouter