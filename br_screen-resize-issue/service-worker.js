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

var precacheConfig = [["/br_screen-resize-issue/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_screen-resize-issue/css/1.css","7ceb42172807b6de45b5e0f323907d9e"],["/br_screen-resize-issue/css/AccountSignupModal.css","f926bcd65846deab947e99ef6960ed96"],["/br_screen-resize-issue/css/account.css","8e20c4d1fd9454a38415792479cf189f"],["/br_screen-resize-issue/css/app.css","da1dde720abd9b2b395c7916b173860e"],["/br_screen-resize-issue/css/modals.css","d4cb86a2ef190c06a9355877ce9e9101"],["/br_screen-resize-issue/css/mt5.css","579cfbf212dc38162f388106c8e8eb59"],["/br_screen-resize-issue/css/notification-messages.css","1cf180aeaba0b301fa4beae7bb4175cc"],["/br_screen-resize-issue/css/reports.css","aad9a72dba759598e6ddcadf4927fed7"],["/br_screen-resize-issue/css/screen-small.css","48349e492b14246d49fe01c7d0edcd66"],["/br_screen-resize-issue/css/settings-chart.css","8dc3c2e4a5b9dea544bfa92417331506"],["/br_screen-resize-issue/css/smartcharts.css","71c75577d60f63aa73865fa2c9d199df"],["/br_screen-resize-issue/css/work-in-progress.css","976803d02f65dcd8b4dbcdabfb278a5e"],["/br_screen-resize-issue/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_screen-resize-issue/index.html","b7ccfbc9defd962786a5a9989fe1b580"],["/br_screen-resize-issue/js/0.16b50083ad193fe1266b.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_screen-resize-issue/js/1.16b50083ad193fe1266b.js","7175e403586f3af01c6891b5633de958"],["/br_screen-resize-issue/js/10.16b50083ad193fe1266b.js","c5198e433881b262f2601e226f097682"],["/br_screen-resize-issue/js/11.16b50083ad193fe1266b.js","58b9f41004779bad07908ae22c92571b"],["/br_screen-resize-issue/js/12.16b50083ad193fe1266b.js","405e986ed9c2a33245a6db1ffa6a79f0"],["/br_screen-resize-issue/js/13.16b50083ad193fe1266b.js","c0a9df882380b3dab58c8565277f1005"],["/br_screen-resize-issue/js/14.16b50083ad193fe1266b.js","37468cd85338f22b09c2b5737fb70a45"],["/br_screen-resize-issue/js/15.16b50083ad193fe1266b.js","5882e6d8aaf6cb8ef15cfc13e14d36ac"],["/br_screen-resize-issue/js/16.16b50083ad193fe1266b.js","9e120c0ec1f8dc5791d5c7f598d13751"],["/br_screen-resize-issue/js/17.16b50083ad193fe1266b.js","362dcfc884c2a666a34e499340b3a2c3"],["/br_screen-resize-issue/js/18.16b50083ad193fe1266b.js","069c2943a288e9d862419d3d60496bbd"],["/br_screen-resize-issue/js/19.16b50083ad193fe1266b.js","58eae6dbc7ec9dc85e48fdf02eddb217"],["/br_screen-resize-issue/js/2.16b50083ad193fe1266b.js","95edd3e96d8c71ce2b220c1ecd9a5072"],["/br_screen-resize-issue/js/20.16b50083ad193fe1266b.js","fa9fd3bced6c2eda39e3fb4547d639b2"],["/br_screen-resize-issue/js/21.16b50083ad193fe1266b.js","b9400cd35424434c033039617d6b5a85"],["/br_screen-resize-issue/js/22.16b50083ad193fe1266b.js","3f9dc8a42e57d185081821c6a702cd60"],["/br_screen-resize-issue/js/23.16b50083ad193fe1266b.js","a1d5df2883cf4cd99da0c965f2f52afa"],["/br_screen-resize-issue/js/24.16b50083ad193fe1266b.js","20780f690489510f7322451c8d232319"],["/br_screen-resize-issue/js/25.16b50083ad193fe1266b.js","0674dc963dd0b461e1306c00e0bbe865"],["/br_screen-resize-issue/js/26.16b50083ad193fe1266b.js","8b69507df39b1633966c9b8a049e9a90"],["/br_screen-resize-issue/js/27.16b50083ad193fe1266b.js","99569555aae9bc62bceb134f2a057c0f"],["/br_screen-resize-issue/js/28.16b50083ad193fe1266b.js","b974e2b754e2d0b1311454bd293bf717"],["/br_screen-resize-issue/js/29.16b50083ad193fe1266b.js","11d4382ac3801e438490201cf1aada4b"],["/br_screen-resize-issue/js/3.16b50083ad193fe1266b.js","91bb92da3488db58f6967dbf17b13d47"],["/br_screen-resize-issue/js/30.16b50083ad193fe1266b.js","bf2b3b2d942763ffeb14d26462ea44bb"],["/br_screen-resize-issue/js/31.16b50083ad193fe1266b.js","3b1e76dae063e705c5308d71d77ed8f0"],["/br_screen-resize-issue/js/32.16b50083ad193fe1266b.js","a81f4c8147d35ed0b45cc003f948483e"],["/br_screen-resize-issue/js/33.16b50083ad193fe1266b.js","460e81628c40a19539de1ec2e30247bd"],["/br_screen-resize-issue/js/34.16b50083ad193fe1266b.js","310b026eb906a95de5ebf6afdc642a11"],["/br_screen-resize-issue/js/35.16b50083ad193fe1266b.js","3a046cb369f1655b2e72d8e8a239f38a"],["/br_screen-resize-issue/js/36.16b50083ad193fe1266b.js","6bec0d9a0d585d77f90afc0d832cb8fe"],["/br_screen-resize-issue/js/37.16b50083ad193fe1266b.js","58523572dfb92c43c4e5fa26f3a1bc2d"],["/br_screen-resize-issue/js/38.16b50083ad193fe1266b.js","947c0dc72f1850c3223611cc170570a7"],["/br_screen-resize-issue/js/39.16b50083ad193fe1266b.js","8a26bfe729acc73083bfa98352b9f181"],["/br_screen-resize-issue/js/4.16b50083ad193fe1266b.js","85f7551c3dad7a1cc08e446af2cca72c"],["/br_screen-resize-issue/js/40.16b50083ad193fe1266b.js","efb7f55f0580aa69e4eb9f50d7f174bf"],["/br_screen-resize-issue/js/404.16b50083ad193fe1266b.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_screen-resize-issue/js/41.16b50083ad193fe1266b.js","0e09cb2ea0266786d501574d943d65cc"],["/br_screen-resize-issue/js/42.16b50083ad193fe1266b.js","a67aa9455677dfdad1e62b7aa72b3369"],["/br_screen-resize-issue/js/43.16b50083ad193fe1266b.js","25bbbc7290368d50828b7cb150e9f889"],["/br_screen-resize-issue/js/44.16b50083ad193fe1266b.js","414873c05dcc1b298833ff201607b12a"],["/br_screen-resize-issue/js/45.16b50083ad193fe1266b.js","abe56afa4ac7f187bf5c807ff4278ab0"],["/br_screen-resize-issue/js/46.16b50083ad193fe1266b.js","69d929462ee059255b5c2ef7ce54bf27"],["/br_screen-resize-issue/js/47.16b50083ad193fe1266b.js","a2d15200a395d1c5481265831a543fe7"],["/br_screen-resize-issue/js/48.16b50083ad193fe1266b.js","928a71018b745c83092c2bf24e9f46a7"],["/br_screen-resize-issue/js/49.16b50083ad193fe1266b.js","ce5a6ab2812b30a09620c1538b030ffd"],["/br_screen-resize-issue/js/5.16b50083ad193fe1266b.js","9ffb19bb0f090524ad6747cc7dbd268e"],["/br_screen-resize-issue/js/50.16b50083ad193fe1266b.js","7eeb78cfde724c429e93e71d060219aa"],["/br_screen-resize-issue/js/51.16b50083ad193fe1266b.js","15538bea6d5e8d5a7b59426fa2a23a6b"],["/br_screen-resize-issue/js/52.16b50083ad193fe1266b.js","f213759a76d5a00a0f4ac9ef78607b37"],["/br_screen-resize-issue/js/53.16b50083ad193fe1266b.js","f9e1210cb5d94325e013e663e9c2c3b4"],["/br_screen-resize-issue/js/54.16b50083ad193fe1266b.js","e61366324be9fbc4016acf4cc5f7fb6e"],["/br_screen-resize-issue/js/55.16b50083ad193fe1266b.js","0111defe76bf8ebc0dd72b8d2a1c6ae4"],["/br_screen-resize-issue/js/56.16b50083ad193fe1266b.js","808200bc1c17c1395f4235b20a40dc27"],["/br_screen-resize-issue/js/57.16b50083ad193fe1266b.js","0627b6051d5cb5823ed080c54ab4e17b"],["/br_screen-resize-issue/js/58.16b50083ad193fe1266b.js","61ec495a4c2292189f40b6c8990d5829"],["/br_screen-resize-issue/js/59.16b50083ad193fe1266b.js","6896d0e246dd06002cf8a597a7cb52e0"],["/br_screen-resize-issue/js/6.16b50083ad193fe1266b.js","18eb55ee65ae019f6d503c0a81266973"],["/br_screen-resize-issue/js/60.16b50083ad193fe1266b.js","415e7ed3e1f8b02ea51e3d767ab24830"],["/br_screen-resize-issue/js/61.16b50083ad193fe1266b.js","c54cbef10b5e4dc0257f3cbde6cd9916"],["/br_screen-resize-issue/js/62.16b50083ad193fe1266b.js","fe2c2bb0dff131f76fb3a646d6288914"],["/br_screen-resize-issue/js/63.16b50083ad193fe1266b.js","a33ba2429e943bcce6c140e05dfbda25"],["/br_screen-resize-issue/js/64.16b50083ad193fe1266b.js","9733dc8cae9ca4e259e3aaf21323abf1"],["/br_screen-resize-issue/js/65.16b50083ad193fe1266b.js","e12e2f3fdc548539e0ba6d23f5d077f9"],["/br_screen-resize-issue/js/66.16b50083ad193fe1266b.js","e41471a0673cf73ac8a245cba1beab08"],["/br_screen-resize-issue/js/67.16b50083ad193fe1266b.js","b2c18f0df3eccfc25f023ba0594d5767"],["/br_screen-resize-issue/js/68.16b50083ad193fe1266b.js","6f247dffbadfc52d21713ecc1e7db2c1"],["/br_screen-resize-issue/js/69.16b50083ad193fe1266b.js","27d2e8a929dc33b7072d19bf580a5e62"],["/br_screen-resize-issue/js/7.16b50083ad193fe1266b.js","44ad42496ee4e631d190e47ae9a06ec9"],["/br_screen-resize-issue/js/70.16b50083ad193fe1266b.js","95ec281b09d8ee04df9164cc26365eef"],["/br_screen-resize-issue/js/71.16b50083ad193fe1266b.js","cb608f55d86900ab850788c520651f87"],["/br_screen-resize-issue/js/72.16b50083ad193fe1266b.js","6af40f9289d974fd415ff2fd3a1a2f7a"],["/br_screen-resize-issue/js/73.16b50083ad193fe1266b.js","8459adf64ce3151528e4985a3798633e"],["/br_screen-resize-issue/js/74.16b50083ad193fe1266b.js","21d97ecf046680d9bd50a1cce968f7f7"],["/br_screen-resize-issue/js/75.16b50083ad193fe1266b.js","8cce778086e9ac0610d7060fcb82038b"],["/br_screen-resize-issue/js/76.16b50083ad193fe1266b.js","01fd5cf4decab8515d968e5e4f807685"],["/br_screen-resize-issue/js/77.16b50083ad193fe1266b.js","39971d6e317b5a4487b1c9e7f954bebc"],["/br_screen-resize-issue/js/78.16b50083ad193fe1266b.js","117c66d0e2e18ccb9791dd85f6211857"],["/br_screen-resize-issue/js/79.16b50083ad193fe1266b.js","d1a67133d3f2afd71de9f111f3333586"],["/br_screen-resize-issue/js/8.16b50083ad193fe1266b.js","7cf75cc8a2086c64b9ac065e87c4c2fd"],["/br_screen-resize-issue/js/80.16b50083ad193fe1266b.js","b4f8a4d40d78cb02e1932d88096d9b10"],["/br_screen-resize-issue/js/81.16b50083ad193fe1266b.js","44f8f51673f490221f6ba3691d656b5e"],["/br_screen-resize-issue/js/82.16b50083ad193fe1266b.js","9a4a605664a6058bcbdeee9c3428a6d7"],["/br_screen-resize-issue/js/83.16b50083ad193fe1266b.js","02a98f8970495655ba2494010668f335"],["/br_screen-resize-issue/js/84.16b50083ad193fe1266b.js","4a2126988cf7c8606b49926842e9b88a"],["/br_screen-resize-issue/js/85.16b50083ad193fe1266b.js","6a7047689cd56fe190249830a7baa5c2"],["/br_screen-resize-issue/js/86.16b50083ad193fe1266b.js","1952b78e9dadd91d2ebd8995915c54b6"],["/br_screen-resize-issue/js/87.16b50083ad193fe1266b.js","d827dd177989b4717932d5b59b012495"],["/br_screen-resize-issue/js/88.16b50083ad193fe1266b.js","ff52cbbda5fd209ba1b0b904ed2616d2"],["/br_screen-resize-issue/js/89.16b50083ad193fe1266b.js","45d1d66db040db5483d52c8b44329262"],["/br_screen-resize-issue/js/9.16b50083ad193fe1266b.js","af5fcbbbc7a87df286289358c855a2bb"],["/br_screen-resize-issue/js/90.16b50083ad193fe1266b.js","f19d2bb0b898e289bf3053fab18f7824"],["/br_screen-resize-issue/js/91.16b50083ad193fe1266b.js","593340891d739ac5b8d9d9fd20baee54"],["/br_screen-resize-issue/js/92.16b50083ad193fe1266b.js","2c30a1b87f36fb7653fca6cfda5e56e2"],["/br_screen-resize-issue/js/AccountSignupModal.16b50083ad193fe1266b.js","337a9c630550779f0a249e503242e8f3"],["/br_screen-resize-issue/js/ResetPasswordModal.16b50083ad193fe1266b.js","5da75701563593d1ff86d951c2f2a8dc"],["/br_screen-resize-issue/js/account-info.16b50083ad193fe1266b.js","bb672f064b4efcd5c9006ee726d0a57b"],["/br_screen-resize-issue/js/account.16b50083ad193fe1266b.js","f27730d4d69ab94b8be3b6bd9a8bf72c"],["/br_screen-resize-issue/js/contract.16b50083ad193fe1266b.js","c5d02653943ef0b49edb269c0d9659ac"],["/br_screen-resize-issue/js/modals.16b50083ad193fe1266b.js","58ab0b18d328fbbe344b9062a78e25d2"],["/br_screen-resize-issue/js/mt5.16b50083ad193fe1266b.js","9237cb8cc0cc9959bdce4bdb3888f3c1"],["/br_screen-resize-issue/js/notification-messages.16b50083ad193fe1266b.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/br_screen-resize-issue/js/push-notification.16b50083ad193fe1266b.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_screen-resize-issue/js/reports.16b50083ad193fe1266b.js","1ac922eaad2bb1fc6d8320eba3bfe35d"],["/br_screen-resize-issue/js/screen-small.16b50083ad193fe1266b.js","664bbb2d0aef4cff89948ba049e0fea6"],["/br_screen-resize-issue/js/settings-chart.16b50083ad193fe1266b.js","679f14444e1076bad158db57a432a653"],["/br_screen-resize-issue/js/settings-language.16b50083ad193fe1266b.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_screen-resize-issue/js/settings-theme.16b50083ad193fe1266b.js","420614688fb778ae8320fe9d295b21cf"],["/br_screen-resize-issue/js/smartcharts/chartiq-1bc597.smartcharts.js","5b8745e14e4ba2dbf9dce796b69f27b2"],["/br_screen-resize-issue/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/br_screen-resize-issue/js/smartcharts/chartiq-6ff25f.smartcharts.js","bcbb5334dd6617aacf010a8b320e6b40"],["/br_screen-resize-issue/js/smartcharts/chartiq-90a46b.smartcharts.js","650c5835c338ad0dcb58a16e57e6bc36"],["/br_screen-resize-issue/js/smartcharts/chartiq-c2ad75.smartcharts.js","fec89816817d5859a9acef9fc5cb1909"],["/br_screen-resize-issue/js/smartcharts/chartiq-e5cf1a.smartcharts.js","c01cb86c77d43092e5f6c74149ec50cb"],["/br_screen-resize-issue/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/br_screen-resize-issue/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/br_screen-resize-issue/js/smartcharts/es-po-9f965b.smartcharts.js","cad3ec523aa2676ff28d5fd9562293a1"],["/br_screen-resize-issue/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/br_screen-resize-issue/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/br_screen-resize-issue/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/br_screen-resize-issue/js/smartcharts/html2canvas-a979bf.smartcharts.js","b4a971996facd8b3fb56255d9db5968f"],["/br_screen-resize-issue/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/br_screen-resize-issue/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/br_screen-resize-issue/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/br_screen-resize-issue/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/br_screen-resize-issue/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/br_screen-resize-issue/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/br_screen-resize-issue/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/br_screen-resize-issue/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/br_screen-resize-issue/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/br_screen-resize-issue/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/br_screen-resize-issue/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/br_screen-resize-issue/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/br_screen-resize-issue/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/br_screen-resize-issue/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_screen-resize-issue/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/br_screen-resize-issue/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/br_screen-resize-issue/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/br_screen-resize-issue/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/br_screen-resize-issue/js/smartcharts/vi-po-47a1c7.smartcharts.js","7c2e37e4dbded9406787b7702a469871"],["/br_screen-resize-issue/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/br_screen-resize-issue/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/br_screen-resize-issue/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/br_screen-resize-issue/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/br_screen-resize-issue/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/br_screen-resize-issue/js/toggle-menu-drawer.16b50083ad193fe1266b.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_screen-resize-issue/js/two-month-picker.16b50083ad193fe1266b.js","7ffcebff91118e847097df8afcb893b7"],["/br_screen-resize-issue/js/work-in-progress.16b50083ad193fe1266b.js","e4206c2e258b35597fec2b01850ef48e"],["/br_screen-resize-issue/manifest.json","f7223fce31ae95a45395cd8d0dbb5847"],["/br_screen-resize-issue/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_screen-resize-issue/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_screen-resize-issue/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_screen-resize-issue/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_screen-resize-issue/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_screen-resize-issue/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_screen-resize-issue/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_screen-resize-issue/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_screen-resize-issue/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/br_screen-resize-issue/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/br_screen-resize-issue/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/br_screen-resize-issue/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/br_screen-resize-issue/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/br_screen-resize-issue/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/br_screen-resize-issue/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/br_screen-resize-issue/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/br_screen-resize-issue/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_screen-resize-issue/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_screen-resize-issue/';
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







