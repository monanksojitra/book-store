import { toast } from "react-toastify";

const info =(message)=>{
    toast.info(`${message}`)
}
const success =(message)=>{
    toast.success(`${message}`)
}
const warn =(message)=>{
    toast.warn(`${message}`)
}
const error =(message)=>{
    toast.error(`${message}`)
}
export default {info, success , warn , error}