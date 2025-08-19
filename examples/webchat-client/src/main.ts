import { getClient } from "@botpress/webchat";

const clientId = "07657133-e358-45ea-b49e-f1eed1f6c698";

const rootElement = document.getElementById("root")!

type State = {
	conversationId?: string,
	latestEvent?: Record<string, any>,
	messagesOutgoing: any[],
	messagesIncoming: any[],
}

const state: State = {
	latestEvent: undefined,
	conversationId: undefined,
	messagesOutgoing: [],
	messagesIncoming: [],
}

setInterval(() => {
	rootElement.innerText = JSON.stringify(state, null, 2)
}, 1000)

const main = async () => {
	const client = getClient({ clientId });

	client.on("conversation", (conversation) => {
		state.conversationId = conversation;
	});

	client.on("customEvent", (event) => {
		state.latestEvent = event;
	});

	client.on("messageSent", (message) => {
		state.messagesOutgoing.push(message)
	});

	client.on("message", (message) => {
		state.messagesIncoming.push(message)
	});

	await client.connect();

	await client.sendMessage("Hello, Botpress!");
};

main();
