import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
export const sendMessage = async(req, res)=>{
    try {
        const {message} = req.body
        const {id:receiverId} = req.params  
        const senderId = req.user._id  //currently logged in user 
        // console.log("params ","receiverId-",receiverId, " senderId-",senderId, " message-", message)

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        })

        if(!conversation){
            const conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        // socket io funtionality will go here

        await conversation.save()
        await newMessage.save()

        // running queries in parallel for optimization using Promise.all
        // await Promise.all([conversation.save(), newMessage.save()])

        res.status(200).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}