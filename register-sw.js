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
butInstall.addEventListener('click', () => {
	console.log('👍', 'butInstall-clicked');
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();
	promptEvent.userChoice.then((result) => {
		console.log('👍', 'userChoice', result);
		window.deferredPrompt = null;
		divInstall.classList.toggle('hidden', true);
	});
});