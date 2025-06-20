import Api from "../../api/AxiosConfig.ts";


const getUser = async ()=>{
    try {
        const responde = await Api.get("/api/user/");
        console.log(responde)
        return responde
    } catch (error) {
        
    }
}

const getUsers = async ()=>{
    try {
        const responde = await Api.get("/api/user/");
        console.log(responde)
        return responde
    } catch (error) {
        
    }
}

const createUser = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

const updateUser = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

const updatePassword = async ()=>{
    try {
        
    } catch (error) {
        
    }
}

const deleteUser = async ()=>{
    try {
        
    } catch (error) {
        
    }
}


export {
    getUser,
    getUsers,
    createUser,
    updateUser,
    updatePassword,
    deleteUser
}