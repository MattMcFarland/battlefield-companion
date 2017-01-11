# Battlefield Companion

This is a node-js super simple wrapper for the battlefield companion API.
Designed to make it easy to obtain stats from battlefield companion.

## Installation

This module requires `node-js` and `python` to be installed inorder to work properly.
I tried very hard to use node only for getting the authentication tokens, but it appears
pythons Sessions.request library is just easier to use.  Since node-js requires python
anyway, I don't really see this as an issue.

```
npm install battlefield-companion
```

## Usage

```javascript
const BFC = require('battlefield-companion');
const email = YOUR_EA_EMAIL_ADDRESS;
const password = YOUR_EA_PASSWORD;

BFC(email, password, (err, bfApi) => {
  // Now you are logged in, so you can use the bfApi object to perform requests
  const personaId = YOUR_PERSONA_ID;

  bfApi.getCareerForOwnedGamesByPersonaId(personaId, (error, result) => {
    if (!error) {
      // your battlefield stats will be in JSON format here.
      console.log(result);
    }
  });
});
```

## Advanced Usage
Since EA has not released all of the methods via public, I cant share what they are!
However, you have all of them at your disposal (should you know any)

```javascript
BFC(email, password, (err, bfApi) => {
  bfApi.get({
    method: 'Stats.getCareerForOwnedGamesByPersonaId',
    params: {
      personaId: YOUR_PERSONA_ID
    }
  }, (err, result) => {
    if (err) {
      throw new Error(err);
    }
    console.log(result);
  })
});
```
