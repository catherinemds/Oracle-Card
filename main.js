let camera, scene, renderer, cube;

function init() {
	//Init scene
	scene = new THREE.Scene();
	// scene.background = new THREE.Color( transparent );

	//Init camera (PerspectiveCamera)
	camera = new THREE.PerspectiveCamera(
		50,
		400 / 400,
		0.1,
		1000
	);

	//Init renderer
	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setClearColor(0xffffff, 0);

	//Set size (whole window)
	renderer.setSize(400, 400);

	// Render to canvas element
	document.getElementById("moon").appendChild(renderer.domElement);

	const geometry = new THREE.SphereGeometry(
		3,
		32,
		32,
		0,
		Math.PI * 2,
		0,
		Math.PI * 2
	);

	// Create material with color

	// const texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg");
	const texture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/catherinemds/Moon-rotation/master/luna.jpg");
	const material = new THREE.MeshBasicMaterial({map: texture});

	cube = new THREE.Mesh(geometry, material);

	scene.add(cube);

	// Position camera
	camera.position.z = 10;
}

// Draw the scene every time the screen is refreshed
function render() {
	requestAnimationFrame(render);

	//Rotate the sphere
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = 400 / 400;

	// After making changes to aspect
	camera.updateProjectionMatrix();

	// Reset size
	renderer.setSize(400, 400);
}

window.addEventListener("resize", onWindowResize, false);

init();
render();
