let protooPort = 4443

const hostname = 'localhost' // window.location.hostname

function getProtooUrl({ roomId, peerId, forceH264, forceVP9 }) {
  let url = `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`

  if (forceH264) url = `${url}&forceH264=true`
  else if (forceVP9) url = `${url}&forceVP9=true`

  return url
}

export {
  hostname,
  getProtooUrl
}
