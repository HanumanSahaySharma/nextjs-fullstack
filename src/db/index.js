const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

export const connectionUri = "mongodb+srv://"+username+":"+password+"@nextmongo.shkywow.mongodb.net/productdb?retryWrites=true&w=majority";