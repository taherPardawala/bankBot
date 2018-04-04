module.exports = {
    getStartedSetup: '{"text":"GET_STARTED"}',
    getStarted: 'GET_STARTED',
    getMobileNumber:'getMobileNumber',
    show_atms:'show_atms',
    show_banks:'show_banks',
    set_appointment:'set_appointment',
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
    },
    getStartedCarousel: {
            "type": "template",
            "payload": {
              "template_type": "generic",
              "elements": [
                  {
                    "title": "Search For ATMs",
                    "image_url": "https://github.com/taherPardawala/bankBot/raw/master/carousel.jpg",
                    "buttons": [
                      {
                        "type": "postback",
                        "title": "ATMs Near You.",
                        "payload": '{"text":"show_atms"}' //added payload string formatting
                      }
                    ]
                  },
                  {
                    "title": "Search for Banks",
                    "image_url": "https://github.com/taherPardawala/bankBot/raw/master/carousel.jpg",
                    "buttons": [
                      {
                        "type": "postback",
                        "title": "Banks Near You.",
                        "payload": '{"text":"show_banks"}'
                      }
                    ]
                  },
                  {
                    "title": "Set an Appointment",
                    "image_url": "https://github.com/taherPardawala/bankBot/raw/master/carousel.jpg",
                    "buttons": [
                      {
                        "type": "postback",
                        "title": "Set Appointment",
                        "payload": '{"text":"set_appointment"}'
                      }
                    ]
                  }
              ]
            }
    }
    
}