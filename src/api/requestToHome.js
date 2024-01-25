import axios from "./axios"
const log_url1 = "/users/courses"
const log_url2 = "/lecturer/infos"
const log_url3 = "student/infos"

module.exports.fetchStudents = async() =>{
    axios.get(log_url3).then(res =>{
        console.log(res.data.message.length)
    }).catch(err =>{
        console.log(err)
    })
}

module.exports.fetchTeachers = async() =>{
    try{

        const response = await axios.get(log_url2,{
            headers: {'Content-Type': "application/json"},
            withCredentials: true
        })
        
        if(response.status === 200){
            return response?.data.message
        }
        
    }catch(err){
        console.log(err)
    }
}

module.exports.fetchCourses = async() =>{
    try{

        const response = await axios.get(log_url1,{
            headers: {'Content-Type': "application/json"},
            withCredentials: true
        })
        
        if(response.status === 200){
            return response?.data.message
        }
        
    }catch(err){
        console.log(err)
    }
}

