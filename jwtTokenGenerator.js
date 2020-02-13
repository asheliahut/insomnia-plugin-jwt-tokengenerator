const axios = require('axios')

module.exports.templateTags = [{
  name: 'jwttoken',
  displayName: 'JWT Token',
  description: 'Generate a JWT token',
  args: [
    {
      displayName: 'url',
      description: 'url',
      type: 'string',
    },
    {
      displayName: '_email',
      description: '_email',
      type: 'string',
    },
    {
      displayName: '_password',
      description: '_password',
      type: 'string',
    },
  ],
  async run (context, url, _email, _password) {
    const data = {
      'email': _email,
      'password': _password,
    }
    const res = await axios.post(url, JSON.stringify(data));

    return res.data.data.token;
  }
}]
