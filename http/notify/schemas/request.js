const body = {
    type: 'object',
    required: ['message'],
	properties: {
		title: { type: 'string' },
		subtitle: { type: 'string' },
		message: { type: 'string' },
		category: { type: 'string' },
		urgency: { type: 'string' },
		hint: { type: 'string' },
		open: { type: 'string' },
		wait: { type: 'boolean' },
		timeout: { type: 'number' },
		closeLabel: { type: 'string' },
		actions: {
			oneOf: [{ type: 'array', items: { type: 'string' } }, { type: 'string' }],
		},
		dropdownLabel: { type: 'string' },
		reply: { type: 'boolean' },
		sound: { type: 'boolean' },
	},
	additionalProperties: false,
};

const request = { body }

module.exports = request;