import { signOut } from "next-auth/client";
import { useRouter } from "next/router"
import { useEffect } from "react";



export default function logout(){
    const router = useRouter();
    useEffect(()=>{
        signOut();
        setTimeout(() => {
            router.replace("/login");
        }, 2000);
        
    })

    return <div></div>
}