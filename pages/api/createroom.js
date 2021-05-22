import { getSession } from "next-auth/client";



export default (req,res)=>{
    const session = getSession({req});
    res.send(session);

}