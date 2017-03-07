const composeHelpData = () => {
	let data = {
		response_type: 'in_channel',
		attachments: [
		    {
		      title: 'Features',
		      color: '#2FA44F',
		      text: 'Botivator provides motivation when you need it in the form of quotes or videos.',
		      mrkdwn_in: ['text']
		    },
		    {
		      title: 'Quotes',
		      color: '#E3E4E6',
		      text: "My creators have chosen quotes from a wide range of inspiring people. \nType `/botivator quote` and I'll share a quote.",
		      mrkdwn_in: ['text']
		    },
		    {
		      title: 'Videos',
		      color: '#E3E4E6',
		      text: "Who doesn't love a great video? If you select `/botivator video`, I'll provide a motivational video.",
		      mrkdwn_in: ['text']
		    }
		]
	};
	return data;
}

module.exports = composeHelpData;