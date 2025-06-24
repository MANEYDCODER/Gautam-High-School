import { Router } from "express"
import HistoryContent from "../models/historyContent.js"
const historyContentRouter = Router()

historyContentRouter.post('/history-contents', async (req, res) => {
const data = await HistoryContent.create(req.body)
if(data) res.json({ message: "History content created successfully",data})
else res.status(400).json({message:"Failed to create history content"})
  })



  historyContentRouter.get('/history-contents', async (req, res) => {
    const data = await HistoryContent.find()
    return res.send(data)
  })
export default historyContentRouter