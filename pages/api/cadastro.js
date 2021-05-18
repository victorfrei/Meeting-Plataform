
import mongoose from 'mongoose';

const Cat = mongoose.model('Room', { name: String });




export default (req,resp)=>{
   mongoose.connect('mongodb+srv://atividade:HretPecMszT0ZpPc@skap.fpqyg.mongodb.net/SkapMeetings?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true });
    
   const room = new Cat({name:'teste'});
   room.save();

    setTimeout(() => {
        resp.json({msg: "Hello World!!"});
    }, 4000);
   
}