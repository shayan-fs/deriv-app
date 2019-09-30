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

var precacheConfig = [["/br_handling-load-error/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_handling-load-error/css/1.css","7ceb42172807b6de45b5e0f323907d9e"],["/br_handling-load-error/css/AccountSignupModal.css","f926bcd65846deab947e99ef6960ed96"],["/br_handling-load-error/css/account.css","e1b51eb6d0ce8c4eebc0bd50214a998f"],["/br_handling-load-error/css/app.css","2098b931519e1081c76b4e8942936068"],["/br_handling-load-error/css/modals.css","d4cb86a2ef190c06a9355877ce9e9101"],["/br_handling-load-error/css/mt5.css","579cfbf212dc38162f388106c8e8eb59"],["/br_handling-load-error/css/notification-messages.css","1cf180aeaba0b301fa4beae7bb4175cc"],["/br_handling-load-error/css/reports.css","aad9a72dba759598e6ddcadf4927fed7"],["/br_handling-load-error/css/screen-small.css","48349e492b14246d49fe01c7d0edcd66"],["/br_handling-load-error/css/settings-chart.css","8dc3c2e4a5b9dea544bfa92417331506"],["/br_handling-load-error/css/smartcharts.css","a129d2d8498fa145308b9c26f7ac332b"],["/br_handling-load-error/css/work-in-progress.css","976803d02f65dcd8b4dbcdabfb278a5e"],["/br_handling-load-error/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_handling-load-error/index.html","c3b215a9c653e9a275158b9d026b5b46"],["/br_handling-load-error/js/0.a7e10449b472debb6b86.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_handling-load-error/js/1.a7e10449b472debb6b86.js","a0e5c534acc469477c8611a02a30fe42"],["/br_handling-load-error/js/10.a7e10449b472debb6b86.js","1db6378a552a848983b707acbeb15c3e"],["/br_handling-load-error/js/11.a7e10449b472debb6b86.js","34b8ecc85e72903b356316a0135448e3"],["/br_handling-load-error/js/12.a7e10449b472debb6b86.js","e14b2940b09f518286356db69143a5fd"],["/br_handling-load-error/js/13.a7e10449b472debb6b86.js","ee11319729e7345ccfe74f8d6abd1ffb"],["/br_handling-load-error/js/14.a7e10449b472debb6b86.js","e37ed2f4f01c18136bd7bef185951a31"],["/br_handling-load-error/js/15.a7e10449b472debb6b86.js","7aeb89ae1a7c645ce4ce0eeb297c8c0b"],["/br_handling-load-error/js/16.a7e10449b472debb6b86.js","7df81347ab10bb77e057cd2db6b2e8d4"],["/br_handling-load-error/js/17.a7e10449b472debb6b86.js","2a3fd98d13c11ca30874844bd48c3e77"],["/br_handling-load-error/js/18.a7e10449b472debb6b86.js","1bc3a19d1c2717e6f7404dfa6ee0c526"],["/br_handling-load-error/js/19.a7e10449b472debb6b86.js","a913ca591c258e40308e051af96d55fa"],["/br_handling-load-error/js/2.a7e10449b472debb6b86.js","62fcf4d7e9a88106dc4a266414895e7a"],["/br_handling-load-error/js/20.a7e10449b472debb6b86.js","f47e69fc070e93b79dfaabdc66df12c2"],["/br_handling-load-error/js/21.a7e10449b472debb6b86.js","d79729359ea422162af0d979a047effd"],["/br_handling-load-error/js/22.a7e10449b472debb6b86.js","de0a90adfeddfe8707b52258877af7c5"],["/br_handling-load-error/js/23.a7e10449b472debb6b86.js","067284fce2b22b8bcdf59f25523453de"],["/br_handling-load-error/js/24.a7e10449b472debb6b86.js","44705dfcda1a825a2e44377f03ea9569"],["/br_handling-load-error/js/25.a7e10449b472debb6b86.js","44b93d0b0c68e00157b1ea54ab5ffc11"],["/br_handling-load-error/js/26.a7e10449b472debb6b86.js","ac5d76c849593c98fb6a2b912bb3e14a"],["/br_handling-load-error/js/27.a7e10449b472debb6b86.js","8ac50a24759ea4b794df36ad0f117b7a"],["/br_handling-load-error/js/28.a7e10449b472debb6b86.js","e91a0a255e7f516c1812182a8de09afb"],["/br_handling-load-error/js/29.a7e10449b472debb6b86.js","199eb2b3fc8b518860e5e3c1755081db"],["/br_handling-load-error/js/3.a7e10449b472debb6b86.js","91bb92da3488db58f6967dbf17b13d47"],["/br_handling-load-error/js/30.a7e10449b472debb6b86.js","e3bae2551d95a1721e236904a358b082"],["/br_handling-load-error/js/31.a7e10449b472debb6b86.js","642cf8d278025eab3ce168d18071b0cf"],["/br_handling-load-error/js/32.a7e10449b472debb6b86.js","18fdb22c7597d89d138efb36e2d116b7"],["/br_handling-load-error/js/33.a7e10449b472debb6b86.js","4e963fdce3b68ee8711b34fe5f2c0a83"],["/br_handling-load-error/js/34.a7e10449b472debb6b86.js","861df5115fcd8ef9e7e8825261f3aa20"],["/br_handling-load-error/js/35.a7e10449b472debb6b86.js","5f307da4a1d5144a7a5042ba62e7cd12"],["/br_handling-load-error/js/36.a7e10449b472debb6b86.js","73bab6da3f814fbf812b848103fa6e59"],["/br_handling-load-error/js/37.a7e10449b472debb6b86.js","86b9c6eab19d5eea2054483636dbc32c"],["/br_handling-load-error/js/38.a7e10449b472debb6b86.js","3ba6a2860850e65fd2e9075fa828fd01"],["/br_handling-load-error/js/39.a7e10449b472debb6b86.js","d9d4744e66500eb2e9870567a72622a4"],["/br_handling-load-error/js/4.a7e10449b472debb6b86.js","358ce4c72947126a17ab1c53af08e1e7"],["/br_handling-load-error/js/40.a7e10449b472debb6b86.js","f46479785470f086658e90059e5db9cd"],["/br_handling-load-error/js/404.a7e10449b472debb6b86.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_handling-load-error/js/41.a7e10449b472debb6b86.js","bbb787cc3eb7c42ecea826eddee6e5b1"],["/br_handling-load-error/js/42.a7e10449b472debb6b86.js","995071a2f86d66a764cee3b13b03dfef"],["/br_handling-load-error/js/43.a7e10449b472debb6b86.js","93e2b225b33298d99e94d7ecaf2de2df"],["/br_handling-load-error/js/44.a7e10449b472debb6b86.js","b08ed60a8e3b4f8fe7520cd5fa36903b"],["/br_handling-load-error/js/45.a7e10449b472debb6b86.js","24c2227bf6ecf7a6179c266ced3477ae"],["/br_handling-load-error/js/46.a7e10449b472debb6b86.js","36fbfe6815e53aec1b5bbf2985b49a12"],["/br_handling-load-error/js/47.a7e10449b472debb6b86.js","001f8b71fb6a277afec7b450e5f0fe89"],["/br_handling-load-error/js/48.a7e10449b472debb6b86.js","c21d33f811b7bed86585a5a57c718369"],["/br_handling-load-error/js/49.a7e10449b472debb6b86.js","f90de404a64b140e79f5257c58dad37f"],["/br_handling-load-error/js/5.a7e10449b472debb6b86.js","9d5fa6014d84aec8dfb7a67eedbec0b9"],["/br_handling-load-error/js/50.a7e10449b472debb6b86.js","e09261183ab46f1f5e06d1f69d73ac08"],["/br_handling-load-error/js/51.a7e10449b472debb6b86.js","97fa0c79b0827c7342fc2c82be608b11"],["/br_handling-load-error/js/52.a7e10449b472debb6b86.js","28ad2a9269b9a026d779b79dd6877be6"],["/br_handling-load-error/js/53.a7e10449b472debb6b86.js","748669a1206fd0e5fc5cf230993d9c0b"],["/br_handling-load-error/js/54.a7e10449b472debb6b86.js","d79e93982738849bcca907ceeabc3aad"],["/br_handling-load-error/js/55.a7e10449b472debb6b86.js","0c9bfd42cca6c1b99323b12fa8ec1e46"],["/br_handling-load-error/js/56.a7e10449b472debb6b86.js","ffaad3b3683f6e7d593616a6789df3f0"],["/br_handling-load-error/js/57.a7e10449b472debb6b86.js","f8ab9a811345f606a41bbc461bfe6ada"],["/br_handling-load-error/js/58.a7e10449b472debb6b86.js","eed00e9741f0ae50696d0a15682c755a"],["/br_handling-load-error/js/59.a7e10449b472debb6b86.js","0dbbd61484481e2a3ae78e95230b40d9"],["/br_handling-load-error/js/6.a7e10449b472debb6b86.js","26d31aeb9fd216e329976319a7aad745"],["/br_handling-load-error/js/60.a7e10449b472debb6b86.js","35a6f389cefb9a6f7e71fc10a96746ee"],["/br_handling-load-error/js/61.a7e10449b472debb6b86.js","a8effbb824ed1658eebac92453a7e42a"],["/br_handling-load-error/js/62.a7e10449b472debb6b86.js","ea86ee863e9b4a5d842a3e870fc39e9e"],["/br_handling-load-error/js/63.a7e10449b472debb6b86.js","53fab78c029f903b0eb211d87f2f58c3"],["/br_handling-load-error/js/64.a7e10449b472debb6b86.js","5d3fda5a6697432afa96585bcac8ed76"],["/br_handling-load-error/js/65.a7e10449b472debb6b86.js","4c0908abae46e6f021daef5f5d622e8a"],["/br_handling-load-error/js/66.a7e10449b472debb6b86.js","69e5281e51c0da9363e1ace3260cc4a9"],["/br_handling-load-error/js/67.a7e10449b472debb6b86.js","61b3a42237551dff51e40150bbfd173c"],["/br_handling-load-error/js/68.a7e10449b472debb6b86.js","69a4cf55e8e144cbeb7851ba9516642f"],["/br_handling-load-error/js/69.a7e10449b472debb6b86.js","6fafb2b4ad5d247f6499bb25f1f6557c"],["/br_handling-load-error/js/7.a7e10449b472debb6b86.js","0ac781a8835a16fb00738e8a3213a92a"],["/br_handling-load-error/js/70.a7e10449b472debb6b86.js","ccc9f022a01715925f5b7087514f63df"],["/br_handling-load-error/js/71.a7e10449b472debb6b86.js","ebae86f5a73cfa602cace47bafb81f51"],["/br_handling-load-error/js/72.a7e10449b472debb6b86.js","b9260e43ad2902ad53322f0542fcaabb"],["/br_handling-load-error/js/73.a7e10449b472debb6b86.js","78a1d3e2a7e785b89841b3384f7c7c3a"],["/br_handling-load-error/js/74.a7e10449b472debb6b86.js","b89031c9fc4a3f5c34cdd5537eb563c3"],["/br_handling-load-error/js/75.a7e10449b472debb6b86.js","31e9c1ef38edf7d009bd6a306a5ed634"],["/br_handling-load-error/js/76.a7e10449b472debb6b86.js","055262e734408a8c24372be75f4f9391"],["/br_handling-load-error/js/77.a7e10449b472debb6b86.js","ba796fda1855d61fc7dd218088e91bbb"],["/br_handling-load-error/js/78.a7e10449b472debb6b86.js","33f4ad8775bc80d6c5fcca65a60df483"],["/br_handling-load-error/js/79.a7e10449b472debb6b86.js","70585de76ab5c4da67aa264e286d501c"],["/br_handling-load-error/js/8.a7e10449b472debb6b86.js","f6629aa5aee4c6e6653a4216d7269888"],["/br_handling-load-error/js/80.a7e10449b472debb6b86.js","dc0fbb45fbf07df19c1bfdc073547761"],["/br_handling-load-error/js/81.a7e10449b472debb6b86.js","5e9750547b98fb68e52c6223460182d1"],["/br_handling-load-error/js/82.a7e10449b472debb6b86.js","b4beb2316056e655784d83e0a50c0df4"],["/br_handling-load-error/js/83.a7e10449b472debb6b86.js","bf285872371c565882ae9f4cee47b217"],["/br_handling-load-error/js/84.a7e10449b472debb6b86.js","64492f4d3b0e7cbf76985441ccc2dc46"],["/br_handling-load-error/js/85.a7e10449b472debb6b86.js","cb0025b3e8d6ba2ca8829eefc508b757"],["/br_handling-load-error/js/86.a7e10449b472debb6b86.js","98e91ea6c0674a452955cacd84a6eaf8"],["/br_handling-load-error/js/87.a7e10449b472debb6b86.js","a79bd94d22bc7eeb339ef092754d5666"],["/br_handling-load-error/js/88.a7e10449b472debb6b86.js","b033a7729314ea2cfa83648cf43e79ce"],["/br_handling-load-error/js/89.a7e10449b472debb6b86.js","4c3ac5463da3739906c686e84d052892"],["/br_handling-load-error/js/9.a7e10449b472debb6b86.js","f10b4b659dc06cd0621b404f277946f0"],["/br_handling-load-error/js/90.a7e10449b472debb6b86.js","495cbf6fd15cb56829ecb4d581131d92"],["/br_handling-load-error/js/91.a7e10449b472debb6b86.js","30aa98cf83a1cf6a022a3ad875c1f799"],["/br_handling-load-error/js/AccountSignupModal.a7e10449b472debb6b86.js","337a9c630550779f0a249e503242e8f3"],["/br_handling-load-error/js/ResetPasswordModal.a7e10449b472debb6b86.js","5da75701563593d1ff86d951c2f2a8dc"],["/br_handling-load-error/js/account-info.a7e10449b472debb6b86.js","ece76f6c7f0f6d700a44e67bcfec5fb7"],["/br_handling-load-error/js/account.a7e10449b472debb6b86.js","8676c3bf784bbd58d289a1d6f1b19185"],["/br_handling-load-error/js/contract.a7e10449b472debb6b86.js","c5d02653943ef0b49edb269c0d9659ac"],["/br_handling-load-error/js/modals.a7e10449b472debb6b86.js","4a4b3d7f02adc386807ad94d8f7b4f08"],["/br_handling-load-error/js/mt5.a7e10449b472debb6b86.js","bcd9deb8d4b889ee9cdd8ab3c0c0f794"],["/br_handling-load-error/js/notification-messages.a7e10449b472debb6b86.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/br_handling-load-error/js/push-notification.a7e10449b472debb6b86.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_handling-load-error/js/reports.a7e10449b472debb6b86.js","1ac922eaad2bb1fc6d8320eba3bfe35d"],["/br_handling-load-error/js/screen-small.a7e10449b472debb6b86.js","664bbb2d0aef4cff89948ba049e0fea6"],["/br_handling-load-error/js/settings-chart.a7e10449b472debb6b86.js","68e2fa420ff5368e7ffdedbc9f2f6b71"],["/br_handling-load-error/js/settings-language.a7e10449b472debb6b86.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_handling-load-error/js/settings-theme.a7e10449b472debb6b86.js","420614688fb778ae8320fe9d295b21cf"],["/br_handling-load-error/js/smartcharts/chartiq-1bc597.smartcharts.js","5b8745e14e4ba2dbf9dce796b69f27b2"],["/br_handling-load-error/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/br_handling-load-error/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/br_handling-load-error/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/br_handling-load-error/js/smartcharts/es-po-9f965b.smartcharts.js","cad3ec523aa2676ff28d5fd9562293a1"],["/br_handling-load-error/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/br_handling-load-error/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/br_handling-load-error/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/br_handling-load-error/js/smartcharts/html2canvas-a979bf.smartcharts.js","b4a971996facd8b3fb56255d9db5968f"],["/br_handling-load-error/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/br_handling-load-error/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/br_handling-load-error/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/br_handling-load-error/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/br_handling-load-error/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/br_handling-load-error/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/br_handling-load-error/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/br_handling-load-error/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/br_handling-load-error/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/br_handling-load-error/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/br_handling-load-error/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/br_handling-load-error/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/br_handling-load-error/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/br_handling-load-error/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_handling-load-error/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/br_handling-load-error/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/br_handling-load-error/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/br_handling-load-error/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/br_handling-load-error/js/smartcharts/vi-po-47a1c7.smartcharts.js","7c2e37e4dbded9406787b7702a469871"],["/br_handling-load-error/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/br_handling-load-error/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/br_handling-load-error/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/br_handling-load-error/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/br_handling-load-error/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/br_handling-load-error/js/toggle-menu-drawer.a7e10449b472debb6b86.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_handling-load-error/js/two-month-picker.a7e10449b472debb6b86.js","7ffcebff91118e847097df8afcb893b7"],["/br_handling-load-error/js/work-in-progress.a7e10449b472debb6b86.js","e4206c2e258b35597fec2b01850ef48e"],["/br_handling-load-error/manifest.json","a9f462f42ee5839eadfdfcef9ab7d4b3"],["/br_handling-load-error/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_handling-load-error/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_handling-load-error/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_handling-load-error/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_handling-load-error/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_handling-load-error/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_handling-load-error/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_handling-load-error/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_handling-load-error/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_handling-load-error/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_handling-load-error/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_handling-load-error/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_handling-load-error/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_handling-load-error/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_handling-load-error/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_handling-load-error/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_handling-load-error/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_handling-load-error/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_handling-load-error/';
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







