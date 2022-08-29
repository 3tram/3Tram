const freeTram = "3tram-v1"
const assets = [
  "/",
  "/index.html",
  "/index.css",
  "/index.js",
  "/res/images/adult.png",
  "/res/images/group.png",
  "/res/images/netgo_white.png",
  "/res/images/qr_code.png",
  "/res/images/student.png",
  "/res/images/tram.png",
  "/res/images/under19.png",
  "/res/images/icons/favicon.ico",
  "/res/fonts/AzoSans-Black.woff",
  "/res/fonts/AzoSans-Black.woff2",
  "/res/fonts/AzoSans-BlackItalic.woff",
  "/res/fonts/AzoSans-BlackItalic.woff2",
  "/res/fonts/AzoSans-Bold.woff",
  "/res/fonts/AzoSans-Bold.woff2",
  "/res/fonts/AzoSans-BoldItalic.woff",
  "/res/fonts/AzoSans-BoldItalic.woff2",
  "/res/fonts/AzoSans-Italic.woff",
  "/res/fonts/AzoSans-Italic.woff2",
  "/res/fonts/AzoSans-Light.woff",
  "/res/fonts/AzoSans-Light.woff2",
  "/res/fonts/AzoSans-LightItalic.woff",
  "/res/fonts/AzoSans-LightItalic.woff2",
  "/res/fonts/AzoSans-Medium.woff",
  "/res/fonts/AzoSans-Medium.woff2",
  "/res/fonts/AzoSans-MediumItalic.woff",
  "/res/fonts/AzoSans-MediumItalic.woff2",
  "/res/fonts/AzoSans-Regular.woff",
  "/res/fonts/AzoSans-Regular.woff2",
  "/res/fonts/AzoSans-Thin.woff",
  "/res/fonts/AzoSans-Thin.woff2",
  "/res/fonts/AzoSans-ThinItalic.woff",
  "/res/fonts/AzoSans-ThinItalic.woff2",
  "/res/fonts/FontAwesome5BrandsRegular.woff",
  "/res/fonts/FontAwesome5BrandsRegular.woff2",
  "/res/fonts/FontAwesome5ProLight.woff",
  "/res/fonts/FontAwesome5ProLight.woff2",
  "/res/fonts/FontAwesome5ProRegular.woff",
  "/res/fonts/FontAwesome5ProRegular.woff2",
  "/res/fonts/FontAwesome5ProSolid.woff",
  "/res/fonts/FontAwesome5ProSolid.woff2",
  "/res/fonts/RobotoMono-Bold.woff",
  "/res/fonts/RobotoMono-Bold.woff2",
  "/res/fonts/RobotoMono-BoldItalic.woff",
  "/res/fonts/RobotoMono-BoldItalic.woff2",
  "/res/fonts/RobotoMono-ExtraLight.woff",
  "/res/fonts/RobotoMono-ExtraLight.woff2",
  "/res/fonts/RobotoMono-ExtraLightItalic.woff",
  "/res/fonts/RobotoMono-ExtraLightItalic.woff2",
  "/res/fonts/RobotoMono-Italic.woff",
  "/res/fonts/RobotoMono-Italic.woff2",
  "/res/fonts/RobotoMono-Light.woff",
  "/res/fonts/RobotoMono-Light.woff2",
  "/res/fonts/RobotoMono-LightItalic.woff",
  "/res/fonts/RobotoMono-LightItalic.woff2",
  "/res/fonts/RobotoMono-Medium.woff",
  "/res/fonts/RobotoMono-Medium.woff2",
  "/res/fonts/RobotoMono-MediumItalic.woff",
  "/res/fonts/RobotoMono-MediumItalic.woff2",
  "/res/fonts/RobotoMono-Regular.woff",
  "/res/fonts/RobotoMono-Regular.woff2",
  "/res/fonts/RobotoMono-SemiBold.woff",
  "/res/fonts/RobotoMono-SemiBold.woff2",
  "/res/fonts/RobotoMono-SemiBoldItalic.woff",
  "/res/fonts/RobotoMono-SemiBoldItalic.woff2",
  "/res/fonts/RobotoMono-Thin.woff",
  "/res/fonts/RobotoMono-Thin.woff2",
  "/res/fonts/RobotoMono-ThinItalic.woff",
  "/res/fonts/RobotoMono-ThinItalic.woff2"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(freeTram).then(cache => {
      cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})