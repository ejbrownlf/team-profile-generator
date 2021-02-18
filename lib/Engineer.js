class Engineer {
    //created an html element that links to the github account based on user input
    getGithub(ex, answer) {
        ex.github = `Github: <a href="http://github.com/${answer}" target="_blank">${answer}</a>`;
    }

    //sets role to engineer
    getRole(ex) {
        ex.role = 'Engineer';
    };
}

module.exports = Engineer;