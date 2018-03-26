
        // middleware for the code this is the policy being called form the middleware file
        module.exports.policies= [Services.middleware.myMiddleWare];
        
        module.exports.routes = {
            'GET /getSomething': async (req,res) => {},
            'POST /postSomething': async (req,res) => {}
        }
    