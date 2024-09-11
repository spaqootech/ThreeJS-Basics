import * as THREE from 'three'
import {OrbitControls} from 'jsm/controls/OrbitControls.js'

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer()
renderer.setSize(w,h)
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov , aspect , near , far);
camera.position.z = 2;
const scene = new THREE.Scene();

const controls = new OrbitControls(camera , renderer.domElement)

const geo = new THREE.IcosahedronGeometry(1.0,2)
const mat = new THREE.MeshStandardMaterial({color:'white',flatShading:true})
const mesh = new THREE.Mesh(geo , mat)
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({color:'white',wireframe:true})
const wireMesh = new THREE.Mesh(geo , wireMat)
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight('white','black')
scene.add(hemiLight)

function animate(t=0){
    requestAnimationFrame(animate)
    mesh.rotation.x = t* 0.0001;
    mesh.clone = t* 0.0001;
    renderer.render(scene , camera)
}
animate()