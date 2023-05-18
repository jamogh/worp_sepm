// Get HTML elements
const channelForm = document.getElementById("channel-form");
const channelList = document.querySelector("#channel-list ul");

// Create an empty array to store channels
let channels = [];

// Handle form submit
channelForm.addEventListener("submit", (e) => {
	// Prevent page reload
	e.preventDefault();

	// Get form values
	const channelName = document.getElementById("channel-name").value;
	const channelIcon = document.getElementById("channel-icon").value;
	const channelBg = document.getElementById("channel-bg").value;

	// Create channel object
	const channel = {
		name: channelName,
		icon: channelIcon,
		background: channelBg,
	};

	// Add channel to channels array
	channels.push(channel);

	// Clear form
	channelForm.reset();

	// Update channel list
	updateChannelList();
});

// Update channel list function
function updateChannelList() {
	// Clear current channel list
	channelList.innerHTML = "";

	// Loop through channels and add to channel list
	channels.forEach((channel) => {
		const li = document.createElement("li");
		const img = document.createElement("img");
		const div = document.createElement("div");

		img.src = channel.icon;
		img.alt = `${channel.name} icon`;
		img.width = 50;
		img.height = 50;

		div.textContent = channel.name;
		div.style.backgroundColor = channel.background;

		li.appendChild(img);
		li.appendChild(div);

		channelList.appendChild(li);
	});
}
