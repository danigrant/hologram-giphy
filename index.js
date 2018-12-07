let serverLocation = 'https://giphy.dani.town'

void async function main() {
  await getSticker()

}()

async function getSticker() {
  let res = await window.fetch(`${serverLocation}/sticker`)
  let json = await res.json()
  displaySticker(json)
}

async function displaySticker(stickerObj) {
  console.log('here');
  document.getElementById('sticker-north').innerHTML = `<img class="sticker" src="${stickerObj.gifUrl}" />`
  document.getElementById('sticker-east').innerHTML = `<img class="sticker" src="${stickerObj.gifUrl}" />`
  document.getElementById('sticker-west').innerHTML = `<img class="sticker" src="${stickerObj.gifUrl}" />`
  document.getElementById('sticker-south').innerHTML = `<img class="sticker" src="${stickerObj.gifUrl}" />`

}

// // reload page on tap
// document.body.onclick = (e) => {
//   location.reload()
// }
