const { oneLine } = require('common-tags');
const Command = require('../base');

module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			group: 'util',
			memberName: 'ping',
			description: 'Verifica o ping do bot no servidor Discord.',
			throttling: {
				usages: 5,
				duration: 10
			}
		});
	}

	async run(msg) {
		if(!msg.editable) {
			const pingMsg = await msg.reply('Pinging...');
			return pingMsg.edit(oneLine`
				${msg.channel.type !== 'dm' ? `${msg.author},` : ''}
				Pong! A mensagem de ida e volta levou ${pingMsg.createdTimestamp - msg.createdTimestamp}ms.
				${this.client.ping ? `O ping de pulsação é ${Math.round(this.client.ping)}ms.` : ''}
			`);
		} else {
			await msg.edit('Pinging...');
			return msg.edit(oneLine`
				Pong! A mensagem de ida e volta levou ${msg.editedTimestamp - msg.createdTimestamp}ms.
				${this.client.ping ? `O ping de pulsação é ${Math.round(this.client.ping)}ms.` : ''}
			`);
		}
	}
};
