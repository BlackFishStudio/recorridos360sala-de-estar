// Created with Motiva Layama v1.22 LITE https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "SALA DE ESTAR0000", a: "INITIAL_CAMERA", p: new BABYLON.Vector3(-427.722, 160, -7.50994), l: new BABYLON.Vector3(-427.722, 160, -6.50994)});
   layamaCameras.push({n: "SALA DE ESTAR0001", a: "INITIAL_CAMERA001", p: new BABYLON.Vector3(-492.779, 160, 214.283), l: new BABYLON.Vector3(-493.685, 160, 214.706)});
   layamaCameras.push({n: "SALA DE ESTAR0002", a: "INITIAL_CAMERA002", p: new BABYLON.Vector3(-442.596, 160, 487.799), l: new BABYLON.Vector3(-442.769, 160, 488.783)});
   layamaCameras.push({n: "SALA DE ESTAR0003", a: "INITIAL_CAMERA003", p: new BABYLON.Vector3(-656.04, 160, 396.912), l: new BABYLON.Vector3(-656.04, 160, 397.912)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1500");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: true, defRot: 1, altMove: true, altRot: 2};
}

