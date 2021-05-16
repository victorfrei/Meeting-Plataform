
import mongoose from 'mongoose';

// const Cat = mongoose.model('Cat', { name: String });




export default (req,resp)=>{
    
    mongoose.connect('mongodb://atividade:HretPecMszT0ZpPc@skap-shard-00-00.fpqyg.mongodb.net:27017,skap-shard-00-01.fpqyg.mongodb.net:27017,skap-shard-00-02.fpqyg.mongodb.net:27017/admins?replicaSet=atlas-q8kj7n-shard-0&ssl=true&authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true});
    

   resp.json({msg: "Hello World!!"});
}