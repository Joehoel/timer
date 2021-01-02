export async function notification(title: string, options: NotificationOptions = {}) {
	const permission = await Notification.requestPermission();
	if (permission === "granted") {
		new Notification(title, options);
	}
}
