const Api = {

  githubBaseUrl: 'https://api.github.com',

  getBio(username) {
    if (typeof username === 'undefined' || username === null) {
      return Promise.reject({
        message: 'User not found'
      });
    }

    username = username.toLowerCase().trim();
    if (username.length === 0) {
      return Promise.reject({
        message: 'User not found'
      });
    }

    return this.retr(`users/${username}`);
  },

  getRepos(username) {
    username = username.toLowerCase().trim();
    return this.retr(`users/${username}/repos`);
  },

  retr(endpoint) {
    return fetch(`${this.githubBaseUrl}/${endpoint}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject({
          message: response.status === 404 ?
            'User not found' :
            'Could not communicate with Github',
          response
        });
      });
  }
};

export default Api;
