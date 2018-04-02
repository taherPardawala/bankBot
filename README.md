# bankBot
virtual bank assistant
Documentation for BankBot

•	Installations: (see online tutorials for the following)
    o	node (https://nodejs.org/en/) (Preferrably install latest 9.10.1)
    o	npm (auto installed when installed node)
    o	git (See tutorial)

•	Clone the git repository from github (requirements git)
    o	Steps (to clone and view the files)
        ♣	git clone https://github.com/taherPardawala/bankBot.git
        ♣	cd bankbot
        ♣	ls  // To see a list of all the folders
        ♣	cd bot  // To enter bot code dir
        ♣	cd admin  // To enter website code folder
        ♣	cd server  // To view the backend code folder
        ♣	cd frontend  // to view the front end code folder

•	Install all the dependencies (requirements node and npm)
    o	For Bot (initialization)
        ♣	Enter the bot folder from the terminal
        ♣	cd path/to/the/bankBot/folder
        ♣	Enter the bot folder
        ♣	cd bot
        ♣	and run the following instruction
        ♣	npm i
    o	For Admin server (initialization)
        ♣	Enter the bot folder from the terminal
        ♣	cd path/to/the/bankBot/folder
        ♣	Enter the bot folder
        ♣	cd admin
        ♣	and run the following instruction
        ♣	npm i
    o	For Front end (initialization)
        ♣	Enter the bot folder from the terminal
        ♣	cd path/to/the/bankBot/folder
        ♣	Enter the bot folder
        ♣	cd admin/front-end
        ♣	and run the following instruction
        ♣	npm i
    o	For Visualizing the Database (Aldready hosted no need to run or initialize)
        ♣	Visit https://mlab.com/login/
        ♣	Login credentials username: bank-bot password: 5656.keynotes 
        ♣	Click on ds133077/bank-bot
        ♣	There you can see collections like accounts(contains login credentials of each bank and user), banks collection which contains data collected by banks such as appointments, careers added, new account applications
        ♣	fs.files and fs.chunks collections are NOT TO BE DELETED OR MUTATED AT ALL because all these collections handle the FileSystem for the image upload feature integrated.

•	To run the front end locally do the following
    o	Run the server first 
        ♣	Enter the admin folder i.e bankBot/admin
        ♣	Run the following command
        ♣	npm run server
        ♣	The above command will run the app.js file which will call the server file from the server folder and initialize all the api end points for the bankBot website
    o	Run frontend now in development environment
        ♣	Enter the front-end folder i.e bankBot/admin/front-end
        ♣	Run the following command
        ♣	npm run dev
        ♣	The above command will create a local server on the respective machine and host the the website on a local server the link to the server is localhost:8080/
    o	Build frontend for production
        ♣	Enter the front-end folder i.e bankBot/admin/front-end
        ♣	Run the following command
        ♣	npm run build
        ♣	The above command will build all static files and one "index.html" in the directory bankBot/admin/front-end/dist

Files and working
•	Front end file structure
    o	All the main front end files are in the components folder
    o	Path for the components file is 
    o	front-end/src/components
    o	The user folder has user related files
    o	The admin folder has admin related files
    o	All the files outside are more or less common for both
		
