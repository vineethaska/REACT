var push = require('web-push');

let vapidKeys = {
    publicKey: 'BLYYSc-swZ3Lw3kAJB2IMIDtVXlz3fYZR8c-n35dDTrasKHIIVWczY2iR6YZ7fy4FBNyo_D2-OAPvqWUFzDiGcs',
    privateKey: '8THTb_CJTRRmeTAG3OTd2vOwh_EsiSvV9fKRB33Rq3g'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.publicKey.privateKey)

  let sub= {}
  push.setVapidDetails(sub, 'test messege')