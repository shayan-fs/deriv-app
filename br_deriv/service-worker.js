/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/br_deriv/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_deriv/css/AccountSignupModal.css","f55f3017605cb374780d77450ae04c64"],["/br_deriv/css/app.css","88ba20946852806feb9149839a5c364c"],["/br_deriv/css/default~open_position~1833eefb.css","adc8a3a573f158087b2caf97eab36a88"],["/br_deriv/css/digits.css","f488bfe4eb0be9aa002b24bea9a1c61d"],["/br_deriv/css/modals.css","c9159ade4e55483cff9c6d4e83db8cda"],["/br_deriv/css/notification-messages.css","41e4d27d2ad8e62320fbf17f2726492f"],["/br_deriv/css/reports.css","1bce5ab895ec5b5b74df10dc5ea3faa3"],["/br_deriv/css/screen-small.css","52a6a0f9b3651e78e35b701f51c37e5c"],["/br_deriv/css/smartcharts.css","642f653882facad64e89d1a5bec36335"],["/br_deriv/css/work-in-progress.css","977ad77642b06567da8f18cc2ff715e4"],["/br_deriv/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_deriv/index.html","f700d115c615b682ba1e60f9a358a9aa"],["/br_deriv/js/0.24d6dfff026aac7c53c6.js","3508a10b898544a56b2dffad3da23615"],["/br_deriv/js/1.24d6dfff026aac7c53c6.js","e75627a38c0dc517032061dcf9a2bf9b"],["/br_deriv/js/10.24d6dfff026aac7c53c6.js","73cd8342edd288b3f2386b6491853efa"],["/br_deriv/js/11.24d6dfff026aac7c53c6.js","0387dc1237ea8bc51e6c73f47aa9af7d"],["/br_deriv/js/12.24d6dfff026aac7c53c6.js","774afb712ec17ed9cd351417b4c2c459"],["/br_deriv/js/13.24d6dfff026aac7c53c6.js","d2d66458ca752c910f30a06f71fd2fff"],["/br_deriv/js/14.24d6dfff026aac7c53c6.js","fc47408e122a6f63f9d07b7705360cdc"],["/br_deriv/js/15.24d6dfff026aac7c53c6.js","102f98930df3b89b63f1f3e74ca32c77"],["/br_deriv/js/16.24d6dfff026aac7c53c6.js","f0420530f20b2c060376d753d438c675"],["/br_deriv/js/17.24d6dfff026aac7c53c6.js","22f1cbe67fcdc91138d1ec77aac14640"],["/br_deriv/js/18.24d6dfff026aac7c53c6.js","7fe8cdd267c5e418b04d92265d3ae4f3"],["/br_deriv/js/19.24d6dfff026aac7c53c6.js","ff2df9fad85c674e3c813ef7a2699660"],["/br_deriv/js/2.24d6dfff026aac7c53c6.js","ad5bead1cd483dd347a29d39bdcea5fc"],["/br_deriv/js/20.24d6dfff026aac7c53c6.js","ca5277c5f07305dd705ec5c70b8bb4e0"],["/br_deriv/js/21.24d6dfff026aac7c53c6.js","90e2abd21b88e141c905ba8c743487ec"],["/br_deriv/js/22.24d6dfff026aac7c53c6.js","df39a46e7dbe631e4f4b25c85620c3af"],["/br_deriv/js/23.24d6dfff026aac7c53c6.js","e012d4c82dd4412d821184c45037af6c"],["/br_deriv/js/24.24d6dfff026aac7c53c6.js","333a4327a99ee045fd67b842155130a0"],["/br_deriv/js/25.24d6dfff026aac7c53c6.js","77d346857483faaba26662ec9a6e3a35"],["/br_deriv/js/26.24d6dfff026aac7c53c6.js","9808b6955e93e139156b0d606dc34833"],["/br_deriv/js/27.24d6dfff026aac7c53c6.js","4fdfbc8ab4997391e1cceedb8670b996"],["/br_deriv/js/28.24d6dfff026aac7c53c6.js","59420360b1b226575cd2885a64822d66"],["/br_deriv/js/29.24d6dfff026aac7c53c6.js","94fc189f78701086d9034fc40bcb3251"],["/br_deriv/js/3.24d6dfff026aac7c53c6.js","84e41cc504d04e2a4fbe5c959955dd6f"],["/br_deriv/js/30.24d6dfff026aac7c53c6.js","7b33534499ca00ec3cd273a03fecbb76"],["/br_deriv/js/31.24d6dfff026aac7c53c6.js","e2463e214f445afce5d2d0691ec768d8"],["/br_deriv/js/32.24d6dfff026aac7c53c6.js","4fee4f370ba064317c9cc76904fa7486"],["/br_deriv/js/33.24d6dfff026aac7c53c6.js","d8d208f29daf638399af239b5afc03a9"],["/br_deriv/js/34.24d6dfff026aac7c53c6.js","6005e7e5909a59c4e28b76db615fa087"],["/br_deriv/js/35.24d6dfff026aac7c53c6.js","158ae1c6f3e2aa9a534af0c3cf479827"],["/br_deriv/js/36.24d6dfff026aac7c53c6.js","d183c88c91c3bd29b94941cc6d5055b4"],["/br_deriv/js/37.24d6dfff026aac7c53c6.js","7058b691e8271c8d2e3eb9fba49a70f3"],["/br_deriv/js/38.24d6dfff026aac7c53c6.js","c1fc9e7fd7a71b069ed143630814e872"],["/br_deriv/js/39.24d6dfff026aac7c53c6.js","0784a8f2e77c530f0f724d0a2152183f"],["/br_deriv/js/4.24d6dfff026aac7c53c6.js","f8e0e558adbefd5de76902e0019712c0"],["/br_deriv/js/40.24d6dfff026aac7c53c6.js","92f9b8d7557d0948ad6d1dc1061cdc0d"],["/br_deriv/js/404.24d6dfff026aac7c53c6.js","b1a9106c73a0770c12a7eace7bb0170b"],["/br_deriv/js/41.24d6dfff026aac7c53c6.js","1b401fb463ff81bec5a6f7abcaf48cab"],["/br_deriv/js/42.24d6dfff026aac7c53c6.js","47179f3d51dce5e22d7c9ae7efb5475c"],["/br_deriv/js/43.24d6dfff026aac7c53c6.js","91224fb6623e1d7b5cfa2061a89471bc"],["/br_deriv/js/44.24d6dfff026aac7c53c6.js","7049374169c84ca208c797b16679a362"],["/br_deriv/js/45.24d6dfff026aac7c53c6.js","3e11dd8d61af3b66f7e7f29d9b028194"],["/br_deriv/js/46.24d6dfff026aac7c53c6.js","a282ae59d7c11fcc0127a8bb4796b835"],["/br_deriv/js/47.24d6dfff026aac7c53c6.js","fbbad2f4f73f93195b54e4b0f87eabec"],["/br_deriv/js/48.24d6dfff026aac7c53c6.js","a5735d64828e02ff5becc77414fee0c4"],["/br_deriv/js/49.24d6dfff026aac7c53c6.js","fba2db14a41e3a85890323eac6efff40"],["/br_deriv/js/5.24d6dfff026aac7c53c6.js","1d82dfd2bf87f780ad451b8bcc4927e7"],["/br_deriv/js/50.24d6dfff026aac7c53c6.js","bb0a1aa4a893c86a8689ce2721ea4323"],["/br_deriv/js/51.24d6dfff026aac7c53c6.js","31efdf378fec772fd1993c3c5196b998"],["/br_deriv/js/52.24d6dfff026aac7c53c6.js","ca641884d35c502f2991b3249737d9f7"],["/br_deriv/js/53.24d6dfff026aac7c53c6.js","a9f5aed3de7257efdb47e37fa2db0bef"],["/br_deriv/js/54.24d6dfff026aac7c53c6.js","0834edff651013346a318d539f8df7b4"],["/br_deriv/js/55.24d6dfff026aac7c53c6.js","a1eb0de60accad9fc0682ea698f4a154"],["/br_deriv/js/56.24d6dfff026aac7c53c6.js","4ba2becfb4f08c497b73e74152278c10"],["/br_deriv/js/57.24d6dfff026aac7c53c6.js","d6e875d070cf2a62de164f78c6d0db6e"],["/br_deriv/js/58.24d6dfff026aac7c53c6.js","aa7e62a8a3eeb914a1a4de6ec13fde4b"],["/br_deriv/js/59.24d6dfff026aac7c53c6.js","4a2bc5f89e774125d2e7f39cc401f850"],["/br_deriv/js/6.24d6dfff026aac7c53c6.js","64efcab02a3b22732921964b41854e0d"],["/br_deriv/js/60.24d6dfff026aac7c53c6.js","e70b959c78a01ac88bb47c638bebc4e4"],["/br_deriv/js/61.24d6dfff026aac7c53c6.js","31fc5bd910a67742ddb52570b5e46f9d"],["/br_deriv/js/62.24d6dfff026aac7c53c6.js","bf906e1584fb43ce4d2db19bb5936078"],["/br_deriv/js/63.24d6dfff026aac7c53c6.js","6dc09b045341dadd14c8fe3cc9235b43"],["/br_deriv/js/64.24d6dfff026aac7c53c6.js","5c658485252bf2b63a45e28646a781cd"],["/br_deriv/js/65.24d6dfff026aac7c53c6.js","acf70ee6adc077f8a09371873f0055c7"],["/br_deriv/js/66.24d6dfff026aac7c53c6.js","603da0501049f5cfdbc084cbe8dd2b65"],["/br_deriv/js/67.24d6dfff026aac7c53c6.js","bc40f0f556269ceea437536da136ed44"],["/br_deriv/js/68.24d6dfff026aac7c53c6.js","c98be89f025201002478f88bd63b625d"],["/br_deriv/js/69.24d6dfff026aac7c53c6.js","46e80f1b9afb0b92fbf2a476ea493783"],["/br_deriv/js/7.24d6dfff026aac7c53c6.js","475d437012df9a1ea35d71f42e57e400"],["/br_deriv/js/70.24d6dfff026aac7c53c6.js","9b24d2072ed0a2e24a0be5ec37532bda"],["/br_deriv/js/71.24d6dfff026aac7c53c6.js","2ad7240568c35a6eb995f92930a25b68"],["/br_deriv/js/8.24d6dfff026aac7c53c6.js","b2f563072c925a65aa61dca2c7980e5f"],["/br_deriv/js/9.24d6dfff026aac7c53c6.js","5f32d25e401a7e7a5b7418c0fd2ec63e"],["/br_deriv/js/AccountSignupModal.24d6dfff026aac7c53c6.js","231eae8b369c36fa96756bb967298cbe"],["/br_deriv/js/account-info.24d6dfff026aac7c53c6.js","057f13920875e7012bab1d78da4104fa"],["/br_deriv/js/contract.24d6dfff026aac7c53c6.js","8d0567463b5654e86ffacace2cfad016"],["/br_deriv/js/default~open_position~1833eefb.24d6dfff026aac7c53c6.js","fefe4f44ec9234d80bd3d08818fe6648"],["/br_deriv/js/digits.24d6dfff026aac7c53c6.js","d970039549f77e7a5c1d0a202f42d4a3"],["/br_deriv/js/info-box.24d6dfff026aac7c53c6.js","880b0fbf648a6f3957fd687bab7c1090"],["/br_deriv/js/modals.24d6dfff026aac7c53c6.js","0b6296074b9ba53c21135c8e69bcea56"],["/br_deriv/js/notification-messages.24d6dfff026aac7c53c6.js","3cfb48eb90a1185519198ccfb478e298"],["/br_deriv/js/open_positions.24d6dfff026aac7c53c6.js","ccf8a4db2d6f39f648369386b694e2a5"],["/br_deriv/js/profit_table.24d6dfff026aac7c53c6.js","91abd86a1c7428c954d82bac9ccd63d4"],["/br_deriv/js/push-notification.24d6dfff026aac7c53c6.js","54d447e83e572ffe285d7f507afc13eb"],["/br_deriv/js/reports.24d6dfff026aac7c53c6.js","1aac9de9ed38c7ef2877180b399ec681"],["/br_deriv/js/screen-small.24d6dfff026aac7c53c6.js","59c183bab5c3c4405315aec85c0c6a29"],["/br_deriv/js/settings-chart.24d6dfff026aac7c53c6.js","8d66b267fae5baabe5e5050084f1ed54"],["/br_deriv/js/settings-language.24d6dfff026aac7c53c6.js","6b5bd52976e1e8c9d71690c279cba0dc"],["/br_deriv/js/settings-theme.24d6dfff026aac7c53c6.js","5b94fa56be343e9e87d39c0d8a0ed6c4"],["/br_deriv/js/smart_chart.24d6dfff026aac7c53c6.js","b0650f9ff32fe49411a755f5bdfd409e"],["/br_deriv/js/smartcharts/chartiq-1bc597.smartcharts.js","5b8745e14e4ba2dbf9dce796b69f27b2"],["/br_deriv/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_deriv/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/br_deriv/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_deriv/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_deriv/js/smartcharts/es-po-9f965b.smartcharts.js","cad3ec523aa2676ff28d5fd9562293a1"],["/br_deriv/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/br_deriv/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_deriv/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_deriv/js/smartcharts/html2canvas-a979bf.smartcharts.js","b4a971996facd8b3fb56255d9db5968f"],["/br_deriv/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/br_deriv/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_deriv/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/br_deriv/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_deriv/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_deriv/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/br_deriv/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_deriv/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/br_deriv/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_deriv/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/br_deriv/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/br_deriv/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_deriv/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_deriv/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_deriv/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/br_deriv/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/br_deriv/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_deriv/js/smartcharts/vi-po-47a1c7.smartcharts.js","7c2e37e4dbded9406787b7702a469871"],["/br_deriv/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_deriv/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_deriv/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/br_deriv/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_deriv/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/br_deriv/js/statement.24d6dfff026aac7c53c6.js","d748a2edbb0f58bd9a632f4076f47cec"],["/br_deriv/js/toggle-menu-drawer.24d6dfff026aac7c53c6.js","4e5565bb13ce47369ec14f9be60b5440"],["/br_deriv/js/two-month-picker.24d6dfff026aac7c53c6.js","2e91daaf0ee32499e41bdf42e9b02106"],["/br_deriv/js/vendors~AccountSignupModal.24d6dfff026aac7c53c6.js","6cea5cc4357fd739d24b72c58b2c65ad"],["/br_deriv/js/vendors~digits~info-b~897959f6.24d6dfff026aac7c53c6.js","46b15bf292db5de0f1d34d8f63458cfd"],["/br_deriv/js/vendors~open_position~7c650be5.24d6dfff026aac7c53c6.js","96370a09a14169069e4993fc9b50456a"],["/br_deriv/js/work-in-progress.24d6dfff026aac7c53c6.js","eebcccc144a033e1177a1e90a4574ff9"],["/br_deriv/manifest.json","c7269fdffa4cea781392582db97a20bb"],["/br_deriv/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_deriv/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_deriv/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_deriv/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_deriv/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_deriv/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_deriv/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_deriv/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_deriv/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_deriv/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_deriv/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_deriv/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_deriv/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_deriv/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_deriv/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_deriv/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_deriv/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_deriv/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_deriv/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_deriv/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_deriv/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_deriv/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_deriv/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_deriv/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_deriv/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_deriv/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/br_deriv/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







