'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e30e00463d4b69a4c4897bb0189ab7c1",
".git/config": "c2b6bcf813f801eaa386c8d21fb08418",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8364a09287c2a39b0363436d5bda6f23",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "2d36a85b1ff8daeb7dde92d02a4670af",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04027de755ad6330a73a9b51e8fa8aba",
".git/logs/refs/heads/main": "04027de755ad6330a73a9b51e8fa8aba",
".git/logs/refs/remotes/origin/HEAD": "125af6aefc55d6c50d03fe46d9c4983f",
".git/logs/refs/remotes/origin/main": "08d7c98ab46333d66480208a481d247d",
".git/objects/02/61c2b453fb2ed424f4101591a8cb5d4f803b41": "c4398804a6d62346634b140496e42f02",
".git/objects/05/be89478291828fbddb16fd2c4eb697e650d4fe": "f312006ecd1e1c8264687aa3da0fe55b",
".git/objects/07/4919e036f43bb16741b8cd9eb6f6d3627253e2": "9d02d9badeaca8163737bab15416aa02",
".git/objects/07/9dc1ad378b8c49608c73b73138d5e9104e9606": "414e6fe230b574eadb4216b5d8b30b57",
".git/objects/0a/15d5548173a3b2cf72f82421840b0cb583fbf7": "4ebb5623a5476258be38c5583e9c7a03",
".git/objects/0a/b2fc80ab19fdbc71669d557903d107633e807c": "fb7aaeff7aceddecbb9193e8dfc6235b",
".git/objects/14/6a279e808fed368bdb1da2353ef9b80c39742a": "08c30adf866843fb8151fdf5323649f2",
".git/objects/19/e8c4d0cd798893e236cd3b56ba0f481226bb75": "15a33e95b1f8466c58ea05a11a72bc48",
".git/objects/1d/9676bdf1bd69f10fa4b2e4f7a05f5b47675822": "f3ffde8ae6bdf4e691a01c0bf3185816",
".git/objects/1f/b712b29b1aca7446d905feb92f0c2946ab301a": "51db5a3391b70581b44715990b2bfd31",
".git/objects/24/3c62a7551182b8f1902cddcdac8fbd71953814": "392de42f3df6e852c3563f29f681a8e8",
".git/objects/2a/7eb9160b20fd1aec5a74c866985c66a60fd33c": "69ac4cd3c1d7afd27601b63a3a67773c",
".git/objects/2c/18420d74a23818189f506f344385b7890f6957": "9c50efcf0c391d8d3a449ee655881cc4",
".git/objects/2e/add52bbc406bd2ed2c0ca982d91d1dea685b8b": "2cfdb7ba45b9990b7a9901dc6b9e9c6e",
".git/objects/30/a9b1f033cb10d2de863711b5afcc9d77bbe6e7": "3109c8e7cf63e2a695be8dd57ccac224",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/c86d914519ae1259740c39b60066979a47cf09": "3da81aaf2fa5a9f5001f93d80c491a98",
".git/objects/35/89f3419a7ab2e0dcd47079543b6ce76be71736": "74f93a1312353c76f047172acfe5e209",
".git/objects/37/2121b98ae68687c395dc65d84c6bb5b57f6a0c": "845c10b4d51f584186a0fde2a2030943",
".git/objects/3f/1fa2fc1e3a6a81b1d3f0c26ff9500689471f9f": "fa60b5be1265c0b93f332f9602583fd4",
".git/objects/41/54ce2c1b1945a3e806aa51f2f43eb148bfb091": "c61baf93ead52ac3e9126891280cd230",
".git/objects/42/bb2a84f3c19e2fda9488554fcde79f832646da": "c5645c09c1ba3760492083caa31c5826",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/c63111269aed4042174f9a78b714edf7728cb7": "6d7de0fa11b573f3667ed25c93638c88",
".git/objects/50/8044f698b7f332c02eb53e6865d391f2c68df0": "3b28a00634480636228042ff91993fc5",
".git/objects/58/e87707214763c3f33a7a984a851f61ce92c2fd": "0b8837c25f5d9364f94f5ff6db7139fc",
".git/objects/5a/03758a8ba4425b0764a8659fccdd336327cfd4": "d1e34e817612244830ec981679425ec7",
".git/objects/5c/6e726493f52b2e030ddec205b493b24066259d": "51b596529587b9e436e2a7c1e976de61",
".git/objects/61/81f4dd39048f05ad726669e7b490d9419b69ee": "6dde38243aab5cc0957a54cd31579ce9",
".git/objects/62/70ba8ed41fa0d573743c047589369744172944": "fb414ccdf310603854c4693b93ca51f1",
".git/objects/67/e2dd9410d693dcf19e978b5f79948972e5422c": "57f5ac164ced58006c1af10f07706821",
".git/objects/68/093bf84fedba4749c629a8a486ea0c4c808db8": "5d56d746ccd6c91c849e0d49f0e3d0d1",
".git/objects/6a/852e01c5c46e475a3a4e817b9727ed4b8d3fa5": "aa265ea3a36fea6b999a9184704c3790",
".git/objects/6c/497cd768ea1c2436d3f1adbc6ad60ed7a36313": "afd5aa9db5666156c912a430731e719e",
".git/objects/6c/b2d6db0cfd995d5e49d31cf5f1a5032b64819f": "4aaaca2e24f449086fbd72d670292095",
".git/objects/71/97e4d26ee446793454e6e9c8bff99f0848fc6e": "c4e162941b621d9a14eb067254bca2cd",
".git/objects/75/024d6b9c4d6ec497c918d8c13eb2ff23ceed6b": "56732b447c8e20bd15f05772d6f41aee",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8d61143b00d16ae35c961e1657426475f2d4b1": "4cc4d2b7dd11c9c1ae4725ee8a011ae9",
".git/objects/7e/bed4b529bf40fc6a278c14b74809673cfe1b0d": "d0d4e0ab044cdbc4e57a7d83bee23cb4",
".git/objects/83/6e5c701c0cac519e6b55e4819d519cd4eb2c00": "0039be27ee407a2e8c7c9d75e3c6b76b",
".git/objects/86/055c09486aec6707f815f9a594d9c478fd9127": "27403aaae16e639cc4b8fab5176566e0",
".git/objects/86/299017de937cc66c1423820f2414c9d48b1053": "9f5bc2dc420ce085ccac66b3e796c298",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e985e3626b927852f25789b72cef09cad5ffcd": "a59af6d9b2e704765cc60f3aef640bbc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/252b8c8d60f305f6baa7e3246008495b03cea8": "8f4b93822e893b5f7f2f81ca7017bd05",
".git/objects/90/45c554deb7901baf34ed038677df6126414d8b": "9e57e2e7d1f29cae1ddc0da478b467e2",
".git/objects/91/6c39e2796a16d6995f1b00b94d89224f561a6f": "2254ace086a05625fb4e048f34df3cda",
".git/objects/92/5ada17dfbc5337a6b05210222f4f32993d5380": "a6024db25662060f9a3da00d27907a0a",
".git/objects/93/2f051118c0302cb7693b81bf18b960cd9f3314": "92dcbc8945c2f2aa8d7826d038cb9ff4",
".git/objects/94/d8945a72f36cfc3b5960d2b8c16a99233e55f3": "27b60eac4d404e87951c48ff8626b59a",
".git/objects/95/df4e358245ea26c136c4a1f912c8acf790eab4": "603f925eb86a612a933cf5c6df6ba979",
".git/objects/96/b3429e5734b88873660794660e2855321898fc": "970350a3c226891136087d333630bc2c",
".git/objects/99/34766f03f88fd57b76c6af48d3bb2c9d8c01ca": "ccba4fcd3ad7f13670b44d132a49ae85",
".git/objects/9c/37f440b64f5f465d2e9c61b30c276a9d75de39": "d19fbe047c7ef7945506e1ce3ff080d5",
".git/objects/9c/71601cc4e12c25f6efb9f7709f39d29b53b4d5": "1ce4210f6ff955ab12fef899785a709e",
".git/objects/9e/4dc58d90f58214766b56836460d83fcda7b761": "19c07bb4bb53c35e168b0f04879888a5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a9cfd6d3be707a8aa83c2a172c84a1c84e403a": "e0c80239fa1413ba09bb5ad952205db4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/742c159f52f0869a3b7d7be6fb553961b8346b": "5c54685901cff6ee973919f673bc3fed",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/692a6134f8b845adde1ca669486181db6d1c77": "3008f5bb5dafc5dd77807d5aba21a61d",
".git/objects/b1/ab30d71b3578a26ec9aad7d203fb368ae97fc5": "d8be03804f4880b044c2c87b57b3374d",
".git/objects/b1/d0af8a219fa3b258ca975f2c4399cf2d7e7f29": "eb0bba9439b6cb561c341d727398937b",
".git/objects/b6/98618a4fd69935b8f791d798e1663427a2be3c": "b3ad3201dd2495616fa0d5cdec1894e7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d1c95a9b4d5360cb99a95ae8ccc85fefc178e4": "3f4edd03f558ef7a503ed80c4bdc55e2",
".git/objects/bb/f25f92162b260a740a9cd2fe1da4d728e20df4": "d479660caf19a0ea94a2b18ebe712f9c",
".git/objects/c2/8e9a96e4e8802954295f9ed2376ea164aab7f7": "631695a023fa81dd7d67d964c325d7c7",
".git/objects/cd/266b38956703a22b388e3f37211ded3bd350bf": "76e185147b354ff4d95e2c1f9d98acfe",
".git/objects/d0/5b9b9b9349cc8bc2c60de82193d0d965f6460c": "484021e67bd7f478b752361a57e1eb84",
".git/objects/d0/f3eee791f8870886b50bf04c503274e5824867": "c2a2f51c54823be364afc1ad872b02e9",
".git/objects/d1/5b6b700d94154923c8bf933972a5b2a9d8a4af": "5797e1ba560465e1f6dbed74608e9fc3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/055a895a54c86388046274a5777da010da166d": "1b5f432355ad4ec3488bcc703603cdb9",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d8/ac16b01b3f00db0f847c5e6e35d34ce9e54e85": "cf192e1cfef1a590ea77510e04193000",
".git/objects/dd/3c545136a260e4e3ded233c7fab67f47ce719d": "ab87d3e75d773e867ae0997ee7f68e1b",
".git/objects/e0/7874f1023f81dd7e92b25a68a6daca2128be8f": "d62dc8291e5fdb210f6f681cd3e5f6da",
".git/objects/e2/9b5245c6d4bf1c7d99b4a291a41030a04e51b6": "035aba4a72dc4e3ab2ed5f319cc66088",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/d975e6802d8e5ae040fc631dedf6aa950333a9": "8812a7e80107a81949ff2b04e8df691c",
".git/objects/f9/98e462d108568875ac9de5b78056e140986f50": "9e05f9abb74b818b88db60aef1af8117",
".git/objects/fd/79119e4c67cbaf94575a1f45dbd528b488855d": "277f2a9a00b8414e82bba789cecb1905",
".git/objects/fe/b07f1b5a5cbce05d5fde91374f092e0f62386c": "d7f63abb51e55db7d5341bfd399e45a7",
".git/packed-refs": "6eeafd3a47acf2cd9be877604acb3f46",
".git/refs/heads/main": "64a24202543d20e8faed2fd1c5e5f2b4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "64a24202543d20e8faed2fd1c5e5f2b4",
"app.js": "497efda1f14de499f919679cb82698e1",
"assets/AssetManifest.json": "3e297c5a7c71958e2880b82dc8a07a9c",
"assets/assets/language.svg": "ee6c683afb176615ca222671816294f0",
"assets/assets/medal.svg": "f6102c934df80cae15e561c29ac93eef",
"assets/assets/megaphone.png": "5f9131dd1daa7d65d41c8bb48c99d13b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b0179d569df13540cd0bfc9971ed61b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a6d4955f5fe2110570c9054cdf4ee66c",
"/": "a6d4955f5fe2110570c9054cdf4ee66c",
"main.dart.js": "89d87a9f72be4bdb51f87035c3bbdaa9",
"manifest.json": "81e57284291a764d70766f1ff30f6013",
"package.json": "8317d980a116edce37b4b47fe508ddb4",
"version.json": "0528540ef71f03a14c2500bd218f4f52"
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
