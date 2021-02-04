window.addEventListener("load", () => {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("service-worker.js");
	}
});
window.addEventListener('beforeinstallprompt', (event) => {
	console.log('👍', 'beforeinstallprompt', event);
	window.deferredPrompt = event;
	divInstall.classList.toggle('hidden', false);
});