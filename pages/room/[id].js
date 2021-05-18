
import { useRouter } from 'next/router'



export default function room(){
const router = useRouter();
const {id} = router.query; 

console.log("A sala é: "+id);

return <div></div>



}