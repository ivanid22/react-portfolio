# react-portfolio

A React implementation of my personal portfolio website. It works with the Mailgun API out of the box. If you want to use the messaging form, you'll have to get a Mailgun account, register a domain and get an API key. Also, you will have to set up a few environment variables, as detail in a section below.

## Live version

- [Live version](https://ivand.me)
  
## Running the app locally
You can always run the app through the live version linked on a previous section. But if you'd like to run it locally, follow the instructions below:

### Getting the files
First, you need to have the files on your computer. You can get them by either cloning this repository, or downloading its contents directly

To clone the repository, go on the project's Github page, click on "Clone or download", copy the contents of the text box, and then run git clone "repo" on the command line, where "repo" is the text you just copied.
If you want to download it directly instead, go on the project's Github page, click on "Clone or download", and then on "Download ZIP". After this, you need to extract the contents of the zip file on your computer.

### Installing dependencies
Now you need to open a terminal and navigate to the project's directory. Once there, run the command `npm install`. This is going to fetch and install all the dependencies for the app.

### Environment variables
These are the environment variables used to configure the messaging system:

- REACT_APP_BASE_MAIL_URL=https://api.mailgun.net/v3
- REACT_APP_MAIL_API_DOMAIN=(your registered Mailgun domain)
- REACT_APP_MAIL_API_KEY=(your Mailgun API key)
- REACT_APP_MAIL_RECIPIENT=(The email address that will be the recipient of the messages)

You can either initialize those environment variables manually by using the `export` command in your command-line, for example:

- `export REACT_APP_API_URL=https://financialmodelingprep.com/api/v3`

Or you can create a `.env.development.local` file in the base folder of the application, with a line for each variable, like this:

REACT_APP_BASE_MAIL_URL=https://api.mailgun.net/v3
REACT_APP_MAIL_API_DOMAIN=(your registered Mailgun domain)

### Running the app
Once that's done, run the command `npm start`. That should open a new browser window with the app. If the browser does not open, do it manually, paste this on the url box: localhost:3000, and press enter.

## Built With
  - create-react-app
  - React

## Author

👤 **Ivan Diaz**

  - Github: [@ivanid22](https://github.com/ivanid22)
  - Twitter: [@ivanid22](https://twitter.com/ivanid22)
  - Linkedin: [Ivan Diaz](www.linkedin.com/in/ivanid22)


## 🤝 Contributing

  - Contributions, issues and feature requests are welcome!

  - Feel free to check the [issues page](./issues).

## Show your support

  - Give a ⭐️ if you like this project!
