/**
 * Shows a native notification
 *
 * @param {string} title
 * @param {NotificationOptions} options
 */
export async function notification(title, options = {}) {
	const permission = await Notification.requestPermission();
	if (permission === "granted") {
		new Notification(title, options);
	}
}
