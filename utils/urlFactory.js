let protooPort = 4443

export function getProtooUrl({ roomId, peerId, forceH264, forceVP9 }) {
  const hostname = 'localhost' // window.location.hostname
  console.log(roomId)
  let url = `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`

  if (forceH264) url = `${url}&forceH264=true`
  else if (forceVP9) url = `${url}&forceVP9=true`

  return url
}
