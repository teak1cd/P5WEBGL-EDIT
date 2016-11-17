var levelJSON = {
  "textures":[],
  "objects":[]
};
function removeOBJ(n){
  levelJSON.objects.splice(n,1);
  document.getElementById("objects").removeChild(document.getElementsByClassName("object")[n]);
}

function editOBJ(n){
  console.log("WIP");
}

function addObject(){
  console.log("addobj");
  var tempOBJ = {};
  tempOBJ.type = document.getElementsByTagName("input")[0].value;
  if(tempOBJ.type==="")return;
  tempOBJ.inputs = [];
  tempOBJ.inputs[0] = parseFloat(document.getElementsByTagName("input")[1].value);
  tempOBJ.inputs[1] = parseFloat(document.getElementsByTagName("input")[2].value);
  tempOBJ.inputs[2] = parseFloat(document.getElementsByTagName("input")[3].value);
  tempOBJ.inputs[3] = parseFloat(document.getElementsByTagName("input")[4].value);
  tempOBJ.inputs[4] = parseFloat(document.getElementsByTagName("input")[5].value);
  tempOBJ.inputs[5] = parseFloat(document.getElementsByTagName("input")[6].value);
  tempOBJ.inputs[6] = 0;
  if(tempOBJ.type==="Line")tempOBJ.inputs[6] = document.getElementsByTagName("input")[7].value;
  levelJSON.objects.push(tempOBJ);
  var frame = document.getElementById("iframe").contentWindow;
  frame.engine.objects = frame.level.getData(levelJSON)[0];
  frame.engine.textures = frame.level.getData(levelJSON)[1];
  frame.engine.useExternalLevel = true;
  frame.externalData = levelJSON;
  rebuildLevelData();
  document.getElementById("objects").innerHTML+='<span class="object" style="width:100%;height:10px;background-color:rgb(200,200,200);"><span class="object_name">%name%</span><button class="removeObj" onClick="removeOBJ(%n%);">X</button><button class="editObj" onClick="editOBJ(%n%);">Edit</button></span>'.replace(/%name%/gm,tempOBJ.type).replace(/%n%/gm,levelJSON.objects.length-1);
}
function addTexture(){
  var ts = document.getElementById("textureSelector");
  var imgsrc = document.getElementById("textureURL").value;
  ts.innerHTML+='<button onClick="texture('+ts.innerHTML.split("onClick").length-1+');"><img src="'+imgsrc+'" width=100 height=100 ></img></button>';
  levelJSON.textures.push();
}
function texture(n){
alert(n);
}

function rebuildLevelData(){
document.getElementsByTagName("textarea")[0].value = JSON.stringify(levelJSON);
return levelJSON;
};

function restartSimulation(){
  var frame = document.getElementById("iframe").contentWindow
  frame.setup();
}
