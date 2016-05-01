const Api = {

  githubBaseUrl: 'https://api.github.com',

  getBio(username) {
    username = username.toLowerCase().trim();
    return this.retr(`users/${username}`);
  },

  getRepos(username) {
    username = username.toLowerCase().trim();
    return this.retr(`users/${username}/repos`);
  },

  retr(endpoint) {
    return fetch(`${this.githubBaseUrl}/${endpoint}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export default Api;
