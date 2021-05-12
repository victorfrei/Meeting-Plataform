
import mongoose from 'mongoose';

const Cat = mongoose.model('Cat', { name: String });




export default (req,resp)=>{
    mongoose.connect('mongodb+srv://atividade:SAxfmiFG2JekTDbA@skap.fpqyg.mongodb.net/Skap?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

    

    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'))
    .catch((err)=>console.log(err))

   resp.json({msg: "Hello World!!"});
}