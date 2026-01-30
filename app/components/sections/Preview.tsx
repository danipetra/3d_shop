'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/Addons.js';

const Preview = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const mount = mountRef.current;
    if(!mount) return;

    const loader = new GLTFLoader();

    const scene = new THREE.Scene();
    const containerWidth = mount.clientWidth;
    const sceneWidth = containerWidth < 1536 ? containerWidth : 1536;
    const sceneHeight = window.innerWidth <= window.innerHeight ? window.innerWidth : window.innerHeight;

    scene.rotation.x = 3;

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(sceneWidth, sceneHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    mount.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, sceneWidth / sceneHeight, 0.1);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLightTop = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightTop.position.set(5, 10, 7.5);
    scene.add(directionalLightTop);
    const directionalLightLeft = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightLeft.position.set(-10, 5, 0);
    scene.add(directionalLightLeft);
    const directionalLightRight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLightRight.position.set(10, 5, 0);
    scene.add(directionalLightRight);

    loader.load('/assets/keyboard.glb', (gltf) =>{
      const model = gltf.scene;
      model.scale.set(1,1,1);
      model.position.set(0,0,-2);
      scene.add(model);
    })

    camera.position.z = 5;

    // const geometry = new THREE.BoxGeometry(1,1,1);
    // const material = new THREE.MeshBasicMaterial({color: 0xff00});

    // for(let i=0; i<10; i++){

    //   const cube = new THREE.Mesh({geometry, material});
    //   cube.position.set(
    //     (Math.random() - 0.5) * 10,
    //     (Math.random() - 0.5) * 10,
    //     (Math.random() - 0.5) * 10
    //   );
    //   scene.add(cube);
    // }

    renderer.setAnimationLoop(animate);

    function animate(){
      // scene.traverse((object) => {
      //   if(object instanceof THREE.Mesh){  
      //     object.rotation.x += 0.01;
      //     object.rotation.y += 0.01;
      //   }
      // });
      
      renderer.render(scene,camera);
    }
  })

  return (
    <div ref={mountRef} className='w-full h-[400px] md:h-[800px] pt-8 md:pt-0'/> //Attaching the scene to this div
  )
}

export default Preview
