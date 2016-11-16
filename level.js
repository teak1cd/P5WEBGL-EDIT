function level(){
  this.getData = function(data){
    var output = [[],[]];
    for(var i = 0;i<data.objects.length;i++){
      if(typeof window[data.objects[i].type] !== "undefined"){
        output[0].push( new window[data.objects[i].type](data.objects[i].inputs));
        if(typeof data.objects[i].promote!== "undefined"){
           window[data.objects[i].promote]=i;
        }
      }else{
        console.log("error: "+data.objects[i].type);
      }
    }
    output[1] = data.textures;
    return output;
  }
}
function getObjectFromPromote(ind){
  return engine.objects[ind];
}
