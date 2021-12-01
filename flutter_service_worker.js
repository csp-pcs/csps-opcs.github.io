'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c3e29d713b2e928a5abd404370efa5d4",
"index.html": "02cb9a68d9ee461e87685df01bccc703",
"/": "02cb9a68d9ee461e87685df01bccc703",
"main.dart.js": "6170b8f26d0c278579bb2dd05f872070",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"package.json": "8317d980a116edce37b4b47fe508ddb4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "61038a0e00fc44fa357db2d9b433e3ea",
".git/config": "5e8b9607a1835ae095c3e3c4c97a6efd",
".git/objects/92/5ada17dfbc5337a6b05210222f4f32993d5380": "a6024db25662060f9a3da00d27907a0a",
".git/objects/50/8044f698b7f332c02eb53e6865d391f2c68df0": "3b28a00634480636228042ff91993fc5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/89f3419a7ab2e0dcd47079543b6ce76be71736": "74f93a1312353c76f047172acfe5e209",
".git/objects/67/e2dd9410d693dcf19e978b5f79948972e5422c": "57f5ac164ced58006c1af10f07706821",
".git/objects/93/2f051118c0302cb7693b81bf18b960cd9f3314": "92dcbc8945c2f2aa8d7826d038cb9ff4",
".git/objects/d7/055a895a54c86388046274a5777da010da166d": "1b5f432355ad4ec3488bcc703603cdb9",
".git/objects/d0/f3eee791f8870886b50bf04c503274e5824867": "c2a2f51c54823be364afc1ad872b02e9",
".git/objects/d1/5b6b700d94154923c8bf933972a5b2a9d8a4af": "5797e1ba560465e1f6dbed74608e9fc3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/ac16b01b3f00db0f847c5e6e35d34ce9e54e85": "cf192e1cfef1a590ea77510e04193000",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/9b5245c6d4bf1c7d99b4a291a41030a04e51b6": "035aba4a72dc4e3ab2ed5f319cc66088",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/79119e4c67cbaf94575a1f45dbd528b488855d": "277f2a9a00b8414e82bba789cecb1905",
".git/objects/fe/b07f1b5a5cbce05d5fde91374f092e0f62386c": "d7f63abb51e55db7d5341bfd399e45a7",
".git/objects/1f/b712b29b1aca7446d905feb92f0c2946ab301a": "51db5a3391b70581b44715990b2bfd31",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/024d6b9c4d6ec497c918d8c13eb2ff23ceed6b": "56732b447c8e20bd15f05772d6f41aee",
".git/objects/2a/7eb9160b20fd1aec5a74c866985c66a60fd33c": "69ac4cd3c1d7afd27601b63a3a67773c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/4919e036f43bb16741b8cd9eb6f6d3627253e2": "9d02d9badeaca8163737bab15416aa02",
".git/objects/96/b3429e5734b88873660794660e2855321898fc": "970350a3c226891136087d333630bc2c",
".git/objects/30/a9b1f033cb10d2de863711b5afcc9d77bbe6e7": "3109c8e7cf63e2a695be8dd57ccac224",
".git/objects/37/2121b98ae68687c395dc65d84c6bb5b57f6a0c": "845c10b4d51f584186a0fde2a2030943",
".git/objects/99/34766f03f88fd57b76c6af48d3bb2c9d8c01ca": "ccba4fcd3ad7f13670b44d132a49ae85",
".git/objects/90/45c554deb7901baf34ed038677df6126414d8b": "9e57e2e7d1f29cae1ddc0da478b467e2",
".git/objects/b6/98618a4fd69935b8f791d798e1663427a2be3c": "b3ad3201dd2495616fa0d5cdec1894e7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/692a6134f8b845adde1ca669486181db6d1c77": "3008f5bb5dafc5dd77807d5aba21a61d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f9/98e462d108568875ac9de5b78056e140986f50": "9e05f9abb74b818b88db60aef1af8117",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/18420d74a23818189f506f344385b7890f6957": "9c50efcf0c391d8d3a449ee655881cc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/c63111269aed4042174f9a78b714edf7728cb7": "6d7de0fa11b573f3667ed25c93638c88",
".git/objects/24/3c62a7551182b8f1902cddcdac8fbd71953814": "392de42f3df6e852c3563f29f681a8e8",
".git/objects/1d/9676bdf1bd69f10fa4b2e4f7a05f5b47675822": "f3ffde8ae6bdf4e691a01c0bf3185816",
".git/objects/71/97e4d26ee446793454e6e9c8bff99f0848fc6e": "c4e162941b621d9a14eb067254bca2cd",
".git/objects/2e/add52bbc406bd2ed2c0ca982d91d1dea685b8b": "2cfdb7ba45b9990b7a9901dc6b9e9c6e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b73622f67e629b283809499e0ad13b8f",
".git/logs/refs/heads/master": "b73622f67e629b283809499e0ad13b8f",
".git/logs/refs/remotes/origin/master": "a28346f84c89992f68ae1a1e3dddc180",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "2021667fe03626696d2bd08a028cb84c",
".git/refs/remotes/origin/master": "2021667fe03626696d2bd08a028cb84c",
".git/index": "04235cf0786587dd909aa4d63dfa4532",
".git/COMMIT_EDITMSG": "cab8d3763963db219132c8f3fdaee327",
"assets/AssetManifest.json": "79b316080ac9edd95fbd55763989a636",
"assets/NOTICES": "6dec2b1d3729c742fbc9c5b0a8084a87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/language.svg": "ee6c683afb176615ca222671816294f0",
"assets/assets/medal.svg": "f6102c934df80cae15e561c29ac93eef",
"app.js": "497efda1f14de499f919679cb82698e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
