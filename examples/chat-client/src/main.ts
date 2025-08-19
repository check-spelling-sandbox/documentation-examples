
import { Client } from "@botpress/chat";

const webhookId = "32961965-c379-4530-ab96-1dff05cdf5dc";

const main = async () => {
	const client = new Client({ apiUrl: `https://chat.botpress.cloud/${webhookId}` })

	const { user, key } = await client.createUser({})
	console.log(`User ID: ${user.id}`)

	const { conversation } = await client.createConversation({ 'x-user-key': key })
	console.log(`Conversation ID: ${conversation.id}`)

	const { message: incomingMessage } = await client.createMessage({ payload: { type: 'text', text: "Hello, Botpress!" }, "x-user-key": key, conversationId: conversation.id })
	console.log(`Incoming Message ID: ${incomingMessage.id}`)

	if (incomingMessage.payload.type === 'text') {
		console.log(`Incoming: ${incomingMessage.payload.text}`)
	}
};

main();
