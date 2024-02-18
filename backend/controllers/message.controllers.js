export const sendMessage = async(req, res)=>{
    try {
        const {message} = req.body
        const {id} = req.params
        console.log("params ",id, message)
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}