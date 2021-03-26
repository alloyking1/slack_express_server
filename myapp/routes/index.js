var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
 
axiosCookieJarSupport(axios);

router.get('/', function (req, res, next){
  res.send('Home page');
}),

router.post('/demo1', function (req, res) { 
  const cookieJar = new tough.CookieJar();
  const status = 200;
    if (status === 200) {
    axios.post(
      'https://hooks.slack.com/services/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',
      {
        text: `
          Webhook success 👍
          check your git repo for any new issue
        `,
        mrkdwn: true,
        jar: cookieJar,
        withCredentials: true,
      }
    );
  }  res.status(status).json({
    response_message: {
      message: `Hi${
        req.query.name ? ` ${req.query.name}` : ''
      } 👋 ~ This is where I would have my response or error message`,
      code: status,
    },
  });
  
});

module.exports = router;
