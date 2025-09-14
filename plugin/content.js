const script = document.createElement("script");
script.textContent = `
	(function waitAndOverride() {
		if (typeof Proxmox !== 'undefined' && Proxmox.Utils && Proxmox.Utils.checked_command) {
			Proxmox.Utils.checked_command = function(orig_cmd) {
				orig_cmd();
				console.log('[Proxmox PVE No Subscription Suppressor] Subscription? Never heard of it.');
			};
			console.log('[Proxmox PVE No Subscription Suppressor] Subscription warnings politely ignored.');
		} else {
		    console.log('[Proxmox PVE No Subscription Suppressor] Waiting...');
			setTimeout(waitAndOverride, 200);
		}
	})();
`;
(document.head || document.documentElement).appendChild(script);
script.remove();
