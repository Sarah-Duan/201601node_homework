var users=require('./users.js');

message=function(word,user,id){
    if(!word || !user)
    throw new Error('Parameters Cannot Be Empty');

    users.users.forEach(function(user){
        if(id==undefined)
        user.scoket.send({name:user.name,id:user.id,word:word,type:'word'});
        else if(user.id==id)
        user.scoket.send({name:user.name,id:user.id,word:word,type:'word'})
    })
}

online=function(){
    users.users.forEach(function(user){
        user.scoket.send({success:true,users:getUsers(),type:'setName'});
    })
}

//用户发送消息通知
module.exports.message=message;
//用户上线通知
module.exports.online=online;