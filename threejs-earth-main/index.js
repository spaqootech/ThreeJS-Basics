import * as THREE from 'three'
import {OrbitControls} from 'jsm/controls/OrbitControls.js'
import getStarfield from './src/getStarfield.js'
const h = window.innerHeight;
const w= window.innerWidth;
const renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setSize(w,h)
document.body.appendChild(renderer.domElement)

const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov , aspect , near , far)
camera.position.z =2;
const controls = new OrbitControls(camera , renderer.domElement)

const scene = new THREE.Scene()
const loader = new THREE.TextureLoader();
const geo = new THREE.IcosahedronGeometry(1,20);
const mat = new THREE.MeshStandardMaterial({map:loader.load('./textures/00_earthmap1k.jpg')})
const mesh = new THREE.Mesh(geo , mat)
scene.add(mesh)

const ozonMat = new THREE.MeshStandardMaterial({
    map:loader.load('./textures/03_earthlights1k.jpg'),blending:THREE.AdditiveBlending})
const ozonMesh = new THREE.Mesh(geo , ozonMat)
scene.add(ozonMesh)

const stars = getStarfield({numStars: 2000});
scene.add(stars);

const hemiLight = new THREE.HemisphereLight('black','white')
scene.add(hemiLight)

function animate(t = 10){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    mesh.rotation.y = t * 0.0001;
    ozonMesh.rotation.y = t * 0.0001;
}
animate()