'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2465466b3196ae56aadf4c39e66a767",
".git/config": "3cac2ed858681a494d91eebee4bf8f9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "7531af71420ef068bf987d5d7a277e29",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "452079df6265c4e2dff034f93e1ecaee",
".git/logs/refs/heads/main": "452079df6265c4e2dff034f93e1ecaee",
".git/logs/refs/remotes/origin/main": "75c19d1fda735292d60a9abca6b22316",
".git/objects/03/8d46890ec6fb7c7b44585b3ac9cfd571e80d18": "ca09d1e4229859399cf56515768e10f4",
".git/objects/04/d4ef78237cf88b4b30d5f0e28b75eea7073827": "663d67e3c28c2f14ac3d47af1466c650",
".git/objects/05/adb347614ac448998070548eb7d88ce8470a35": "448c53c1e0dc7ca44e91eac7f602e7c5",
".git/objects/0a/50dbef4f108bc83341e52371859862d816c586": "9cfee9ebcb637ac883852fc37cd06eb2",
".git/objects/13/35367e91a0d7554b913cd5de55de01d6f50f03": "226890b9cb7ff497ce6838beec8574e6",
".git/objects/1e/d9196028a370460099d6734d7d7b10e26b1647": "6009104953125c412d43474d8e2f7ee6",
".git/objects/1f/b7fb7056b72106c6d282f8715c0d0d4debc623": "addf208abe6ba8a81bcd617598658016",
".git/objects/20/d8aa8d7ea355f1df0ddce27be902e50b2ec9c6": "9d0d6c8753a1b68253a0cda8a42814c5",
".git/objects/21/4b04fafb74003462564574b8f5ae44fbd10923": "fbff9068b684cb3f24fc41c99173de23",
".git/objects/2c/0cad0870ee0ccfa37498436cab88e6c5346957": "d0b13aaaa38c285127c37f83cbea7156",
".git/objects/2e/5147a8e2755a8a8b07d59dbdc3b4880b666d9a": "929b9b186f479d13a9bc93288d64cd30",
".git/objects/39/21d7f1a4b8f3974e5ae2b1c0015ed2674930f3": "5bdfccd36c2a0b53328af0ae3c201c67",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/7ffca0c433e773cadbdf49a3bbae26f3c53ae0": "1f640ff2d0476fd1dad9719bf6b50681",
".git/objects/51/2b741baa3e0d694c3f7673e97487ea9bf86f58": "c3eb546c6bcdf7919f58589c5a2956b9",
".git/objects/54/70cedee0a4c07549f82f97abc58cfbc3f222e2": "f97c5737cd9dc337bf99427be9d6f85c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/62/92be4f4be47c852fe1d67e507732d12924e0ff": "2a6d6efd9c0cc26bc451569ad907a028",
".git/objects/85/8772b80bcc076e8f302d5309eef1dab4a7998d": "e0a015b56ed1c9ad29e1affecc622c05",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/9832774c7e5805b30d30f1e27215358d0e0c27": "c36344834cbe61b26b9bc578939c41b1",
".git/objects/99/972a39b1ef2938e9747eda0a2d4b6c4dd84dd1": "292cca149bf2d86377dfb23c3186b14b",
".git/objects/9f/33c4871736aed54a4be73ef853163b7b4a9d01": "5ca44d29cc777ca4c224707b6032b12f",
".git/objects/9f/48a39f2ac750d16dcdf74356490caa760a9b57": "5cd2bfe2c511bf98b4098309c2e92486",
".git/objects/a0/5bb63aa690fbd30a57c8a7934630945e42bd40": "8980fe6a2af769f823b79966caec0f01",
".git/objects/a1/8c6c696b18fcf3377482c387069cafa31e6430": "5214d54adeda624d11a945bf80994675",
".git/objects/a2/c4dd7445218d01711a0aa912ff7c74da2d3e7e": "e3bd908e2660b6e9b3cd18456a010224",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/a2f66e3e7b989584d93d650ff6803096a58877": "78c5ea3410f87d8243c956c4864329b0",
".git/objects/b1/884e8c5b78c5f450db5ab2b7ffeb7420dc6c0d": "32524412d63e47816dc4bde1ccdb60d5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/3daa97fbebf48f6a751e799ddf76f081563f49": "f05a4a027e270b3d5be09ab34700affa",
".git/objects/de/c484e91c78b7c8d5abc0f89e25ea84f9f8bd24": "3f186dcb03e6bd34df6935acc427b4e5",
".git/objects/e1/61bd80a691afc7df02af507e5c523c90267c46": "76759eaf3e42265076c636b660708816",
".git/objects/e2/49245dbb76d0a69411623aec0698e275b1efd7": "4e2a7b0fac688483a7818ff10cad6241",
".git/objects/ea/34ed1a0088fe43a9806ba984693c20fad0c9e0": "29ee34db5e19b1dd66ce1a192c0e636d",
".git/objects/ea/4d20707e65dd811139129866aabe9109e09907": "06c0886136c9907f8aa04c4000d1bf18",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/58a819c8b4b7b45dc4ceebb273194e8b713fb4": "7090679316e9db2c78af58e32e245380",
".git/objects/ee/14a6d0b16906ca8313161f343e68b77dc615ac": "fbcf302aedcac70f23012358431c3304",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/a1c7554f7666d21836999ff225ede5b9845693": "2e35db6426fa73801859044cc9a9d2f5",
".git/refs/heads/main": "9bb21f568fd1619db0276c153f94aa39",
".git/refs/remotes/origin/main": "9bb21f568fd1619db0276c153f94aa39",
".git/sourcetreeconfig.json": "1445cedeebf6a2431a81e5bdc897c4ef",
"assets/AssetManifest.bin": "6450d83950dea83b944110619b6b3e38",
"assets/AssetManifest.bin.json": "024e45d12dc4e26979e45a232324f48a",
"assets/AssetManifest.json": "f106c584d4f31ed901d323fea318cf74",
"assets/assets/config.json": "c802777314d89fc54ca4cf858856e8d6",
"assets/assets/logo.png": "d7e6468ad8f189dd2f304d323d606461",
"assets/assets/logo1.png": "e612d7dc5aff7470699e97f2061fdb4b",
"assets/assets/logo2.png": "23fef19ca018801821536642a2fd344a",
"assets/assets/logo3.png": "cc90ea9a3ae1c4c957616b18345370a5",
"assets/assets/logo4.png": "af5d13ddab9fe8f36fa857b93acce53f",
"assets/assets/logo5.png": "5b42c58396ae13a1835eb50356aee26c",
"assets/assets/logo6.png": "5d8d67334277dfcfe5efb1d3f59e5c3a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "c1614e32cf1516866cbdc80525c59ea6",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c7de6d29b0e3256da62145553eb2a310",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "565337dcef17656ccb64e018c19d49ab",
"/": "565337dcef17656ccb64e018c19d49ab",
"main.dart.js": "21e66c3f62d065ab92f93974381f3828",
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
