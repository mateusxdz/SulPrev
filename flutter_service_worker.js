'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "03a6ecc1dbc74cfaacfeb8b1f09b8998",
".git/config": "3cac2ed858681a494d91eebee4bf8f9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "22e0215a4e31e7141865094be760839a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0093c42d3697240ace06a82a3de6a7be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81bcaa22911c1f007b1a59c06e753d38",
".git/logs/refs/heads/main": "81bcaa22911c1f007b1a59c06e753d38",
".git/logs/refs/remotes/origin/HEAD": "74e7c28611318441027b54ffe83ffcc9",
".git/logs/refs/remotes/origin/main": "a1c3dfcc1afa578c88bb30153a7a0503",
".git/objects/00/17ee5a817f055527c287c744971fba6fe6aff5": "82ccb0d69584e383eac85a7a34fff86e",
".git/objects/04/20376fed92556cf0544e907cc494a4cd065c67": "ecfe04e7948b0632d6adfa6dbfed39f4",
".git/objects/18/389c8f3e53757be798b5ee38af2d50e183bdcd": "8d2210588f436eca909341f73f44c0da",
".git/objects/2b/b6d9ca660f81e502a54d45153d1367c5af7248": "c3af8d5526a0cae2926c7b59b15f4a5e",
".git/objects/3a/cd26599831ae62937846de79037290a9832805": "a4ec30fb02fd50b64aeccbf32e0d89e7",
".git/objects/4f/ceca00ca330a5583d8fec77f2500641026c675": "212cb3ecc1d7e591d62f282c10fbefec",
".git/objects/51/2ba0097a2c629abaae3a345f08f69dc6f74906": "198aeec5d3f8526175a7d55e1a8f0437",
".git/objects/58/d5fc7cfa64bf26cc9df478057dafcb49a3640e": "4ff282a73ef1fc2e9370e31ac411498f",
".git/objects/62/42625cbc6f88339a8de9747e8925fd8455a9b5": "bfea2edb2a5e7946808e94ab82d47862",
".git/objects/66/db3624e6204692c2c578f75d63d3c138d5f4b8": "9bcda69423202fe63934b8ee2f927dbd",
".git/objects/7e/07987c7b373150c30a294b80d09f7c709ee0a3": "94743584d1ba01c6b75ede031aba8388",
".git/objects/8a/6fe8586b236a737460ff850016199fb163c202": "09e502aac23672b4df40cd389a901904",
".git/objects/95/8a32b55e06348570ea8a9c6fc48c7140a82897": "ffd77560d1d061c674636aa1896c3cfe",
".git/objects/c3/b2492b756c432735e394ab95ae4451fcc0f108": "c14ed984a01c9896fc7ff894ebb02f25",
".git/objects/d0/3aee3f8a97a29a1cf6ee6f5a561ea9a0d6e197": "427c7f1ce28e4ce3add871470d424532",
".git/objects/e4/e1e6eb66c38e16b60a359e1cb890a91d44a47f": "858b8ed0e2639043a31c0f377fd21c74",
".git/objects/ec/b7a2a9b05d0a12bb46693ae9e2820cc3d64e20": "75afa97a92fe210067ccdd1576ccf433",
".git/objects/pack/pack-084d937d22cb05315fb16e8c62d2c6403e7c9208.idx": "fe9202583d4674ba0e0501182b5dcfa5",
".git/objects/pack/pack-084d937d22cb05315fb16e8c62d2c6403e7c9208.pack": "fdc9f697b508b1cba042dea6580dd612",
".git/objects/pack/pack-084d937d22cb05315fb16e8c62d2c6403e7c9208.rev": "77f1b3d8d99cd87d8a334f12aff86315",
".git/packed-refs": "afc4dd1cd7fa71c572b6f6c81ffc11c2",
".git/refs/heads/main": "c80f6f823fe668acaf08133afc03cbca",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c80f6f823fe668acaf08133afc03cbca",
".git/sourcetreeconfig.json": "828426052e7ee96f7511c9267fc829d9",
"assets/AssetManifest.bin": "6a3b2b2312480616b9393c13e3608053",
"assets/AssetManifest.bin.json": "d38236549f3899703e25ba7646a484e0",
"assets/AssetManifest.json": "c7d983bc6c4fc6b3f2ba503cf2cffc4d",
"assets/assets/logo.png": "d7e6468ad8f189dd2f304d323d606461",
"assets/assets/logo1.png": "e612d7dc5aff7470699e97f2061fdb4b",
"assets/assets/logo2.png": "23fef19ca018801821536642a2fd344a",
"assets/assets/logo3.png": "cc90ea9a3ae1c4c957616b18345370a5",
"assets/assets/logo4.png": "af5d13ddab9fe8f36fa857b93acce53f",
"assets/assets/logo5.png": "5b42c58396ae13a1835eb50356aee26c",
"assets/assets/logo6.png": "5d8d67334277dfcfe5efb1d3f59e5c3a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "be65b81660e1ed0816a4d772571fd359",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "d9252a0c6a6498261f19267314e95a47",
"canvaskit/canvaskit.js.symbols": "7e9893036c3fa7843429f59531f3b942",
"canvaskit/canvaskit.wasm": "5ddabdaf5ff10d64d4f06fbd522f4ff1",
"canvaskit/chromium/canvaskit.js": "417c635e514296a337033bbd95ba8332",
"canvaskit/chromium/canvaskit.js.symbols": "a1fea26b10a418991dc0fdd670d0a105",
"canvaskit/chromium/canvaskit.wasm": "4bed638ac5457a6ee18834aeaab3deb0",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "bd0e768fef31e76b4c56f7caa4efdd90",
"canvaskit/skwasm.wasm": "f65759a23ad54e185d6a3f17817b16ca",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "327a3060925e525407f4f2747a4712d6",
"canvaskit/skwasm_st.wasm": "809674c831d83f7f9c71d9dd93771403",
"config.json": "cf23d68c589ce7e92cefaf4d9f587b34",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1ae8323e6dedd1081cc6ac778301cb29",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aab433e8ecbea060baea3a45f75fabd9",
"/": "aab433e8ecbea060baea3a45f75fabd9",
"main.dart.js": "73de51874a70430b867f4faa4bf061c8",
"manifest.json": "dca19022c6304bddb35c7d15e8f210a3",
"version.json": "c82726bdfd2e376d9dc6920098cf004d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
