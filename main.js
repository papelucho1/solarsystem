import * as THREE from 'https://cdn.skypack.dev/three';
import { OrbitControls } from 'https://cdn.skypack.dev/three@v0.134.0-dfARp6tVCbGvQehLfkdx/examples/jsm/controls/OrbitControls.js';
import Planet from '/planet.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

/* */
const renderer = new THREE.WebGLRenderer({antialias: true,});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();


/* se crea un objeto
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);


const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry, material );

scene.add(line);

*/
/*Sun*/
const sunGeometry = new THREE.SphereGeometry(8);
const SunTexture = new THREE.TextureLoader().load("sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({map: SunTexture});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

const solarSystem = new THREE.Group;
solarSystem.add(sunMesh);
scene.add(solarSystem);

/*Mercurio*/
const mercury = new Planet(2,35 ,"mercury.jpg");
const mercuryMesh = mercury.getMesh();
let mercurySytem = new THREE.Group();
mercurySytem.add(mercuryMesh);


/* Venus*/
const venus = new Planet(3,67 , "venus.jpg");
const venusMesh = venus.getMesh();
let venusSystem = new THREE.Group();
venusSystem.add(venusMesh);
/*Tierra*/
const earth = new Planet(4,93 , "earth.jpg");
const earthMesh = earth.getMesh();
let earthSystem = new THREE.Group();
earthSystem.add(earthMesh);
/*Marte*/
const mars = new Planet(5,142 , "mars.jpg");
const marsMesh = mars.getMesh();
let marsSystem = new THREE.Group();
marsSystem.add(marsMesh);
/*júpiter*/
const jupiter = new Planet(6,484 , "jupiter.jpg");
const jupiterMesh = jupiter.getMesh();
let jupiterSystem = new THREE.Group();
jupiterSystem.add(jupiterMesh);
/*saturno*/
/*urano */
/*Neptuno */



solarSystem.add(mercurySytem, venusSystem,earthSystem, marsSystem, jupiterSystem);




camera.position.z = 128;
const EARTH_YEAR = 2 * Math.PI * (1/60) * (1/60);
function animate() {
	/*rotaciones*/
	sunMesh.rotation.y += 0.001;
	mercurySytem.rotation.y +=  EARTH_YEAR * 4 ;
	venusSystem.rotation.y +=  EARTH_YEAR * 1.6 ;
	earthSystem.rotation.y += EARTH_YEAR;
	marsSystem.rotation.y += EARTH_YEAR * 0.5;

	
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
	controls.update();

}
animate();
/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 128;

const animate = function () {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
};

animate();
*/
//console.log(LOADER)

/*
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

const animate = function () {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
	};

animate();
*/