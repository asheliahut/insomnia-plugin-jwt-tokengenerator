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
      displayName: 'email',
      description: 'email',
      type: 'string',
    },
    {
      displayName: '_password',
      description: '_password',
      type: 'string',
    },
  ],
  async run (context, url, email, _password) {
    const data = {
      'email': email,
      'password': _password,
    }
    let token = ''
    await axios.post(url, data)
      .then((response) => {
        token = response.data.token
        return token
    })

    return token

  }
}]
