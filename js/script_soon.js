document.querySelector('.prov-cont').addEventListener('click', function (e) {
    if (e.target.closest('.imgs__contenedor, a')) return;
    const track = this.querySelector('.sect-prov');
    const isPaused = track.style.animationPlayState === 'paused';
    track.style.animationPlayState = isPaused ? 'running' : 'paused';
});