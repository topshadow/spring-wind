import * as mongoose from 'mongoose';
mongoose.connect('mongodb://topshadow:shadow2016@ds023664.mlab.com:23664/topshadow',(err,doc)=>{
    if(err){throw err}
    console.log(doc);
});