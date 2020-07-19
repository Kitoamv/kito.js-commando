const FriendlyError = require('./friendly');

/**
 * Has a descriptive message for a command not having proper format
 * @extends {FriendlyError}
 */
class CommandFormatError extends FriendlyError {
	/**
	 * @param {CommandMessage} msg - The command message the error is for
	 */
	constructor(msg) {
		super(
			`Uso de comando inválido. o \`${msg.command.name}\` O formato aceito do comando é: ${msg.usage(
				msg.command.format,
				msg.guild ? undefined : null,
				msg.guild ? undefined : null
			)}. Use ${msg.anyUsage(
				`help ${msg.command.name}`,
				msg.guild ? undefined : null,
				msg.guild ? undefined : null
			)} Para maiores informações.`
		);
		this.name = 'CommandFormatError';
	}
}

module.exports = CommandFormatError;
