const validateSiteComment = (data) => {
    const error = {}
    const {name , email , message} = data;


    if(!name.trim()){
        error.name ="نام الزامی میباشد"
    }else{
        delete error.name
    }

    if(!email.trim()){
        error.email ="ایمیل الزامی میباشد"
    }else{
        delete error.email
    }

    if(!message.trim()){
        error.message ="دیدگاه الزامی میباشد"
    }else{
        delete error.message
    }
    

    return {errors : error , lengthError: Object.keys(error).length}
}


export default validateSiteComment;