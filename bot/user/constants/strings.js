module.exports = {
    getStartedSetup: '{"text":"GET_STARTED"}',
    getStarted: 'GET_STARTED',
    persistentMenu: [
        { //persistent menu
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [
                {
                    "title": "Chat Options",
                    "type": "nested",
                    "call_to_actions": [
                        {
                            "title": "Start Over",
                            "type": "postback",
                            "payload": '{"text":"start_over"}'
                        }
                    ]
                },
              {
               "title": "Profile Options",
                    "type": "nested",
                    "call_to_actions": [
                        
                    ]
                }
            ]
        },
        {
            "locale": "zh_CN",
            "composer_input_disabled": false
        }
    ],
    askLocationAttachment: {
        "text": "asdasdadsasd",
        "quick_replies": [
            {
                "content_type": "location"
            }
        ]
    }
}