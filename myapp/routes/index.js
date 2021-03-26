var express = require('express');
var router = express.Router();
const Axios = require('axios');

router.get('/', function (req, res, next){
  res.send('Home page');
}),

router.post('/demo1', async function(req, res, next) { 
    const status = 200;
     if (status === 200) {
      await Axios.post(
        'https://hooks.slack.com/services/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',
        {
          text: `
            Webhook success 👍
          `,
          mrkdwn: true,
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
