module.exports = {
    getStartedSetup: '{"text":"GET_STARTED"}',
    getStarted: 'GET_STARTED',
    getMobileNumber:'getMobileNumber',
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
        "text": "",
        "quick_replies": [
            {
                "content_type": "location"
            }
        ]
    },
    askConfirmAppointment: {
        "text": "Do you want to confirm your appointment request?",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "Yes",
                "payload": '{"text":"yes"}'
            },
            {
                "content_type": "text",
                "title": "Cancel",
                "payload": '{"text":"cancel"}'
            }
        ]
    },
    locationsCarousel: {
            "type": "template",
            "payload": {
              "template_type": "generic",
              "elements": []
            }
    }
}