import React from 'react'
import * as BABYLON from '@babylonjs/core'
import '@babylonjs/loaders/glTF';
import {Inspector} from '@babylonjs/inspector'
import { auto } from '@popperjs/core';

const initBabylon = () => {
  const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
  if (!canvas) {
    console.error("Canvas not found!");
    return;
  }

const engine = new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    alpha: true
});
  const scene = createScene(engine);

canvas.style.backgroundColor = "transparent";

loadModelWithAssetManager(scene).then(() => {
    engine.runRenderLoop(() => scene.render());
  }).catch(console.error);

  window.addEventListener('resize', () => engine.resize());

  	const bgMusic= new BABYLON.Sound('sound', '/src/assets/sound/cow.mp3', scene, null, {
		loop:true,
		autoplay: true,
	});

};

const createScene = (engine: BABYLON.Engine) => {
  const scene = new BABYLON.Scene(engine);
  
	// scene.createDefaultCameraOrLight(true, false, true);
	scene.createDefaultLight();
	scene.clearColor = new BABYLON.Color4(0, 0, 0, 0); // Fully transparent
	//const camera= new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0,5, -10), scene);
	const camera=new BABYLON.ArcRotateCamera('camera', 0, 0, 3,  new BABYLON.Vector3(0, 0, 0), scene);
	camera.attachControl(true);
	camera.inputs.addMouseWheel();
	camera.setTarget(BABYLON.Vector3.Zero());
	camera.setPosition(new BABYLON.Vector3(0,0,-20));
	camera.lowerBetaLimit=Math.PI/4;
	camera.upperBetaLimit=Math.PI/2;
	camera.lowerRadiusLimit= 5;
	const box= BABYLON.MeshBuilder.CreateBox("box", {
		size: 0.3,
		width:2,
		height:0.5,
		faceColors:[
			new BABYLON.Color4(1,0,0,1),
			new BABYLON.Color4(1,1,0)
		]
	});


	const testmaterial= new BABYLON.StandardMaterial('material');
  box.material=testmaterial;
  testmaterial.diffuseColor=new BABYLON.Color3(0,1,0);
	testmaterial.ambientColor=new BABYLON.Color3(0,1,1);
	scene.ambientColor=new BABYLON.Color3(0,1,0.5);
	testmaterial.diffuseTexture= new BABYLON.Texture("/src/assets/images/header.png");


	const util= new BABYLON.UtilityLayerRenderer(scene);
	const gizmo= new BABYLON.PositionGizmo(util);
	gizmo.attachedMesh=box;
	// const ground= BABYLON.MeshBuilder.CreateGround("ground", {
	// 	height:10,
	// 	width: 10
	// });
	// const sphere= BABYLON.MeshBuilder.CreateSphere("sphere", {
	// 	segments: 5
	// }, scene);

	// const light= new BABYLON.PointLight(
	// 	'light',
	// 	new BABYLON.Vector3(0,4,0),
	// 	scene
	// );
	// const lightgiz=new BABYLON.LightGizmo(util);
	// lightgiz.light=light;
	// light.intensity=50;

	scene.fogMode=BABYLON.Scene.FOGMODE_LINEAR;
	scene.fogStart=10;
	scene.fogEnd=60;

	scene.onPointerDown= function castRay() {
		const hit=scene.pick(scene.pointerX, scene.pointerY);
		if(hit.pickedMesh && hit.pickedMesh.name==='box')
		{
				const clickm= new BABYLON.StandardMaterial('material');
  				hit.pickedMesh.material=clickm;
  				clickm.diffuseColor=new BABYLON.Color3(0,1,0);
		}
	}


	scene.registerBeforeRender(function() {
		box.rotation.x+=0.01;
		box.rotation.y+=0.02;
		box.rotation.z+=0.03;
	})

  return scene;
};

const loadModelWithAssetManager = async (scene: BABYLON.Scene) => {
  const assetsManager = new BABYLON.AssetsManager(scene);
  

  const modelTask = assetsManager.addMeshTask(
    "loadModelTask",
    "",
    "",
    "src/assets/3d/blendersona_animation.glb"
  );


  modelTask.onSuccess = (task) => {
    console.log("Model loaded:", task.loadedMeshes);

    task.loadedMeshes[0].position.y = 0;
  };
  
  modelTask.onError = (task, message) => {
    console.error("Loading error:", message);
  };


  await assetsManager.loadAsync();
};

if (document.readyState === 'complete') {
  initBabylon();
} else {
  window.addEventListener('DOMContentLoaded', initBabylon);
}

