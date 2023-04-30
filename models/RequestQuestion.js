import {model , models , Schema} from 'mongoose'


const requestQuestionSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    des : {
        type : String,
        required : true
    },
    createdAt : {
        type :Date ,
        default : () => Date.now(),
        Immutable : true
    },
    response : {
        type : Boolean,
        default : () => false
    },
    updatedAt :{
        type : Date,
        default : () => Date.now()

    }
})


const RQuestion = models.RQuestion || model("RQuestion" , requestQuestionSchema)


export default RQuestion;