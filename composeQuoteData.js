const composeQuoteData = (document) => {
	let data = {
		response_type: 'in_channel',
		attachments:[
		    {
		    	"title": "Motivation",
			 "image_url": document.image_url
		    }
		]
	};
	return data;
}

module.exports = composeQuoteData;