
import mongoose from 'mongoose';
import { getSession } from 'next-auth/client';

const Room = mongoose.model('Room',
 { 
    name: String,
    participantes:Object,
    owner:Object,
    visitantes:Object,
    notificationall:Boolean,
    ausentes:Number,
    
});




export default (req,resp)=>{
    const session = getSession({req});

    if(session){
   mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true , useUnifiedTopology: true });
    
   const room = new Room({name:'teste',owner:session.user.name});
   room.save();

    setTimeout(() => {
        resp.json({msg: "Hello World!!"});
    }, 4000);
}else{
    resp.json({msg: "Denied" });
}
   
}