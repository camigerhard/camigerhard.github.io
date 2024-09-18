
// Cargar el modelo
const loader = new GLB loader();
loader.load('colegio3D.glb', function (glb) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// Posicionar la cámara
camera.position.z = 5;

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();