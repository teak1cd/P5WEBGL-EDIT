var levelJSON = {
  "textures":[],
  "objects":[]
};
function removeOBJ(n){
  console.log("remove:"+n);
}

function editOBJ(n){
  console.log("WIP");
}

function addObject(){
  console.log("addobj");
  var tempOBJ = {};
  tempOBJ.type = document.getElementsByTagName("input")[0].value;
  tempOBJ.inputs = [];
  tempOBJ.inputs[0] = document.getElementsByTagName("input")[1].value;
  tempOBJ.inputs[1] = document.getElementsByTagName("input")[2].value;
  tempOBJ.inputs[2] = document.getElementsByTagName("input")[3].value;
  tempOBJ.inputs[3] = document.getElementsByTagName("input")[4].value;
  tempOBJ.inputs[4] = document.getElementsByTagName("input")[5].value;
  tempOBJ.inputs[5] = document.getElementsByTagName("input")[6].value;
  tempOBJ.inputs[6] = 0;
  if(tempOBJ.type==="Line")tempOBJ.inputs[6] = document.getElementsByTagName("input")[7].value;
  levelJSON.objects.push(tempOBJ);
  var frame = document.getElementByTagName("iframe")[0].contentWindow;
  frame.engine.objects = frame.level.getData(levelJSON)[0];
  frame.engine.textures = frame.level.getData(levelJSON)[1];
}
