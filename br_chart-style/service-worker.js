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

var precacheConfig = [["/br_chart-style/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_chart-style/css/AccountSignupModal.css","2ebecc149bf826e1d1ee0d059c0f739b"],["/br_chart-style/css/app.css","c0e6bb3f20ec2d913f7a1892c2a23176"],["/br_chart-style/css/default~open_position~1833eefb.css","68f0f941424072a8839005fae754ea56"],["/br_chart-style/css/digits.css","8e0c3639dc5d97daf805bd355f6bd61f"],["/br_chart-style/css/modals.css","36ac27218506985cdfe4fff51007b959"],["/br_chart-style/css/notification-messages.css","3a4c941d74380bc59f328d97d3d5a29f"],["/br_chart-style/css/reports.css","dec2ce4997d7a792e672d40a818d6361"],["/br_chart-style/css/screen-small.css","6ef029a4ce7a534a440630f047658efb"],["/br_chart-style/css/settings-chart.css","1d923915f7edff10ce7ff315282a9567"],["/br_chart-style/css/smartcharts.css","aaf874935a6291aadb1f53ab883d3772"],["/br_chart-style/css/work-in-progress.css","d50fe922cdf426bafc8e8f12c106e137"],["/br_chart-style/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_chart-style/index.html","23bea56fd1ea17885f785cbe642fbd7d"],["/br_chart-style/js/0.da175556e4703ba3ad61.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_chart-style/js/1.da175556e4703ba3ad61.js","d5b227514040f9243fd1bd65d8f4d25e"],["/br_chart-style/js/10.da175556e4703ba3ad61.js","54a459cc2c159748a3058ad8d1f0bb56"],["/br_chart-style/js/11.da175556e4703ba3ad61.js","ac18460f3dc609f0767faf9c63919817"],["/br_chart-style/js/12.da175556e4703ba3ad61.js","e5dced7cb9bddac48ec90a2c8be36292"],["/br_chart-style/js/13.da175556e4703ba3ad61.js","c7cd2b7e82ab43863fc2e1e5d05b330e"],["/br_chart-style/js/14.da175556e4703ba3ad61.js","fc4c930d83e93dc5dd64e7e288efd1cc"],["/br_chart-style/js/15.da175556e4703ba3ad61.js","89d436a2e156b44d258d6fc9a12f1512"],["/br_chart-style/js/16.da175556e4703ba3ad61.js","f722fc7c8f66e35c8f83e698393368fc"],["/br_chart-style/js/17.da175556e4703ba3ad61.js","b3e2675d8382a4aef932568bf2515562"],["/br_chart-style/js/18.da175556e4703ba3ad61.js","5385b8c32372bb61b19041a6e694f757"],["/br_chart-style/js/19.da175556e4703ba3ad61.js","984499c59b14d0cb976a7847aeb6cd7b"],["/br_chart-style/js/2.da175556e4703ba3ad61.js","d6729726c1d4fbfdfd85b12620e52515"],["/br_chart-style/js/20.da175556e4703ba3ad61.js","480b636963d993212400bc9dbc9ad331"],["/br_chart-style/js/21.da175556e4703ba3ad61.js","d5fbd7dcfe12074ddbc56f4b276488ba"],["/br_chart-style/js/22.da175556e4703ba3ad61.js","2b4541d406c97ecfda3cd64530086dea"],["/br_chart-style/js/23.da175556e4703ba3ad61.js","a3afc9fb59468f08bf9200e1aaee6b49"],["/br_chart-style/js/24.da175556e4703ba3ad61.js","dcc79dde6277fa18578dac9a72c078aa"],["/br_chart-style/js/25.da175556e4703ba3ad61.js","086882fdf77fdb69393f3d6e6c228c7d"],["/br_chart-style/js/26.da175556e4703ba3ad61.js","19ab53981cad1bd606e08479bee2a597"],["/br_chart-style/js/27.da175556e4703ba3ad61.js","a2d5f4edadf628913662f311cbfc4a93"],["/br_chart-style/js/28.da175556e4703ba3ad61.js","4f98e13e962950e875125219c070ce89"],["/br_chart-style/js/29.da175556e4703ba3ad61.js","879fe5ad8c318eddaf6bc4d6586b8052"],["/br_chart-style/js/3.da175556e4703ba3ad61.js","e46b170f7047561d1c538c38480fa04e"],["/br_chart-style/js/30.da175556e4703ba3ad61.js","cbc71da2d545fd84a64f77ee7bc99113"],["/br_chart-style/js/31.da175556e4703ba3ad61.js","c34142d165055a67444cfb3fb92c50c5"],["/br_chart-style/js/32.da175556e4703ba3ad61.js","eb677656d6cb95657c27154b0a82c78d"],["/br_chart-style/js/33.da175556e4703ba3ad61.js","95740970e50f3bb60eb7140a6d76d2b5"],["/br_chart-style/js/34.da175556e4703ba3ad61.js","2e934d89dee8f0d74d198945b3aecfb9"],["/br_chart-style/js/35.da175556e4703ba3ad61.js","127fadbcc0723415cbd54ae3991e119f"],["/br_chart-style/js/36.da175556e4703ba3ad61.js","e5650d3836ca87707ce4208e5e60e45c"],["/br_chart-style/js/37.da175556e4703ba3ad61.js","f19e6d433c9012f3739951a95ce4f56c"],["/br_chart-style/js/38.da175556e4703ba3ad61.js","6007e7a7b5584508c304950ff9fff598"],["/br_chart-style/js/39.da175556e4703ba3ad61.js","cec7178924b84f5ae1726f1347b1bbc3"],["/br_chart-style/js/4.da175556e4703ba3ad61.js","98d11c18123dadd3fa0da60d4a1d8e4d"],["/br_chart-style/js/40.da175556e4703ba3ad61.js","b47c45a8b88f455667c1bca63c736280"],["/br_chart-style/js/404.da175556e4703ba3ad61.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_chart-style/js/41.da175556e4703ba3ad61.js","aecf3cf22ca3d3689f0b639193257dcd"],["/br_chart-style/js/42.da175556e4703ba3ad61.js","f89a4806497db871eff0093d461b0416"],["/br_chart-style/js/43.da175556e4703ba3ad61.js","4032533b01f651c255f26eaeb46a065b"],["/br_chart-style/js/44.da175556e4703ba3ad61.js","fdbf9e6bc33e9c292783982a61af152a"],["/br_chart-style/js/45.da175556e4703ba3ad61.js","d9dded6affcfed7f4e6b8f4d7bdaa343"],["/br_chart-style/js/46.da175556e4703ba3ad61.js","b2092b991e5e5c44d60d671900b3aa3e"],["/br_chart-style/js/47.da175556e4703ba3ad61.js","6625880f0ad1ba6ef8f4ded2a699c5c4"],["/br_chart-style/js/48.da175556e4703ba3ad61.js","4f57e2259157b02676cca1982a626269"],["/br_chart-style/js/49.da175556e4703ba3ad61.js","6542b35d4c21aac226994b611930bb39"],["/br_chart-style/js/5.da175556e4703ba3ad61.js","e19694b05c322ab4c4072b087d6c8208"],["/br_chart-style/js/50.da175556e4703ba3ad61.js","ca518180bafce941baac53d85c36b10a"],["/br_chart-style/js/51.da175556e4703ba3ad61.js","67e5f0683828447885c9d135b8f9cb84"],["/br_chart-style/js/52.da175556e4703ba3ad61.js","3c54a95cdea68d2850ff1188fd09a45b"],["/br_chart-style/js/53.da175556e4703ba3ad61.js","528cb98fc984bb66d921d9c60fcdc486"],["/br_chart-style/js/54.da175556e4703ba3ad61.js","e66d575f4ab891f17948a3877681b50e"],["/br_chart-style/js/55.da175556e4703ba3ad61.js","9d7e23431ef82fa6505e8b7b24e05803"],["/br_chart-style/js/56.da175556e4703ba3ad61.js","414da20cfc2953951d88f788c7794b5b"],["/br_chart-style/js/57.da175556e4703ba3ad61.js","008dede4f645104b58bf741763fb8aea"],["/br_chart-style/js/58.da175556e4703ba3ad61.js","0488582af3aaa334f17f367a027e9324"],["/br_chart-style/js/59.da175556e4703ba3ad61.js","334277b2fdde55e7eef5a4a69033adab"],["/br_chart-style/js/6.da175556e4703ba3ad61.js","038eba775e0b0344ccbab8bb33da274d"],["/br_chart-style/js/60.da175556e4703ba3ad61.js","dec20508f4b2b90b6730e846cdb05116"],["/br_chart-style/js/61.da175556e4703ba3ad61.js","1f1e3cf65b070b7a4b76696da525fd78"],["/br_chart-style/js/62.da175556e4703ba3ad61.js","27282c15f69c7b886617c13a3dda7f54"],["/br_chart-style/js/63.da175556e4703ba3ad61.js","64e45487fb8a656f9295aaab196a4b95"],["/br_chart-style/js/64.da175556e4703ba3ad61.js","68e78bc85b42cab6a3f7ee87be884e3a"],["/br_chart-style/js/65.da175556e4703ba3ad61.js","5294d27473f963cde45216f59f066362"],["/br_chart-style/js/66.da175556e4703ba3ad61.js","137c17f5990c73a6736fe26c7785fca9"],["/br_chart-style/js/67.da175556e4703ba3ad61.js","f01fccc7895771110e3e47ce56c5e3db"],["/br_chart-style/js/68.da175556e4703ba3ad61.js","6a8e6806ba17b1f152f9df8b886a1140"],["/br_chart-style/js/69.da175556e4703ba3ad61.js","f2bac35717b7909631451bcd2b12b0d3"],["/br_chart-style/js/7.da175556e4703ba3ad61.js","91d7697c8f31c23ebeab95d30ad084ea"],["/br_chart-style/js/70.da175556e4703ba3ad61.js","05b0469d203596fe18a94d1b9b3e8066"],["/br_chart-style/js/71.da175556e4703ba3ad61.js","c6dab1114ef612fb61fd5e915b6460ec"],["/br_chart-style/js/72.da175556e4703ba3ad61.js","acc84ce6a8b9dfdc50f276b2caed38ed"],["/br_chart-style/js/73.da175556e4703ba3ad61.js","44b239c4482485ed42e94d3a3b8e19f9"],["/br_chart-style/js/74.da175556e4703ba3ad61.js","ac2c2966445724b0d1a5486aeddef7c7"],["/br_chart-style/js/75.da175556e4703ba3ad61.js","85b31ba1abcac39d051f9d46cbb3c662"],["/br_chart-style/js/76.da175556e4703ba3ad61.js","8b42a73bbcf685b04c4e908ff2baf454"],["/br_chart-style/js/77.da175556e4703ba3ad61.js","4f64cdbb1148b0a3a7a08c5036b4403d"],["/br_chart-style/js/8.da175556e4703ba3ad61.js","55abb3ef084764a7cf2685de8f3c9522"],["/br_chart-style/js/9.da175556e4703ba3ad61.js","c2e1df36b41e5f885f9825b057ba6b5e"],["/br_chart-style/js/AccountSignupModal.da175556e4703ba3ad61.js","186c23e77576b8d58814e19bc32b626a"],["/br_chart-style/js/account-info.da175556e4703ba3ad61.js","3838205d370f6fa50dc4f6c7607487f1"],["/br_chart-style/js/contract.da175556e4703ba3ad61.js","9ff03b1b2f439465fdb1b6f9c7a9df62"],["/br_chart-style/js/default~open_position~1833eefb.da175556e4703ba3ad61.js","98d94451d56cc4f675b20e048545bf2f"],["/br_chart-style/js/digits.da175556e4703ba3ad61.js","dbd1917187e3152d063de6a54e5d458d"],["/br_chart-style/js/info-box.da175556e4703ba3ad61.js","d875b810eca8d18514f47976f1f3cb25"],["/br_chart-style/js/modals.da175556e4703ba3ad61.js","65f44f4098a26dc3ca3809c084668721"],["/br_chart-style/js/notification-messages.da175556e4703ba3ad61.js","a8b6ea43a36f912ae42fc2a82e1d0119"],["/br_chart-style/js/open_positions.da175556e4703ba3ad61.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_chart-style/js/profit_table.da175556e4703ba3ad61.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/br_chart-style/js/push-notification.da175556e4703ba3ad61.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_chart-style/js/reports.da175556e4703ba3ad61.js","49dcf3c41f44a19fe056776a1e966f27"],["/br_chart-style/js/screen-small.da175556e4703ba3ad61.js","664bbb2d0aef4cff89948ba049e0fea6"],["/br_chart-style/js/settings-chart.da175556e4703ba3ad61.js","95c5d23ea0a7f16828f0be387210a206"],["/br_chart-style/js/settings-language.da175556e4703ba3ad61.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_chart-style/js/settings-theme.da175556e4703ba3ad61.js","dc396d0e6e847f4cecb6a04ab51955b0"],["/br_chart-style/js/smart_chart.da175556e4703ba3ad61.js","0bd151447fb09ea7ea7570c5835f6351"],["/br_chart-style/js/smartcharts/chartiq-1bc597.smartcharts.js","5b8745e14e4ba2dbf9dce796b69f27b2"],["/br_chart-style/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_chart-style/js/smartcharts/de-po-0c1385.smartcharts.js","5a1e3cfccfb638c33c2f5d66faca3eeb"],["/br_chart-style/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_chart-style/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_chart-style/js/smartcharts/es-po-9f965b.smartcharts.js","cad3ec523aa2676ff28d5fd9562293a1"],["/br_chart-style/js/smartcharts/fr-po-32dce3.smartcharts.js","23e4180e68f49df1797131801cee12bc"],["/br_chart-style/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_chart-style/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_chart-style/js/smartcharts/html2canvas-a979bf.smartcharts.js","b4a971996facd8b3fb56255d9db5968f"],["/br_chart-style/js/smartcharts/id-po-684adf.smartcharts.js","f93136258ba3abe61664cafb7e109193"],["/br_chart-style/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_chart-style/js/smartcharts/it-po-6fb521.smartcharts.js","7bcd6576fdba2d63bf7ce1f387c71797"],["/br_chart-style/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_chart-style/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_chart-style/js/smartcharts/nl-po-dbc059.smartcharts.js","5f0bbcbda9c2655ecb1033afbc324cd6"],["/br_chart-style/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_chart-style/js/smartcharts/pl-po-ddb25d.smartcharts.js","9c1ec02f795276ab3c106a52e99af8cc"],["/br_chart-style/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_chart-style/js/smartcharts/pt-po-94d77b.smartcharts.js","a5c20ad9ea460a09a0f5615d3c1b162f"],["/br_chart-style/js/smartcharts/ru-po-afea21.smartcharts.js","29869f8a0d1329b458944e3fcc6cd54a"],["/br_chart-style/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_chart-style/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_chart-style/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_chart-style/js/smartcharts/th-po-f9221a.smartcharts.js","8a546ad5e35758d391a1b394c959a8d7"],["/br_chart-style/js/smartcharts/vendors~resize-observer-polyfill-358f59.smartcharts.js","7cc03f6cea9d826c6829915288d857c5"],["/br_chart-style/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_chart-style/js/smartcharts/vi-po-47a1c7.smartcharts.js","7c2e37e4dbded9406787b7702a469871"],["/br_chart-style/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_chart-style/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_chart-style/js/smartcharts/zh_cn-po-e6a513.smartcharts.js","962ee83946ae9e5ec1069aa9baa56dfd"],["/br_chart-style/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_chart-style/js/smartcharts/zh_tw-po-48b237.smartcharts.js","2c4a29f445e75eb7892e1fbcf592e915"],["/br_chart-style/js/statement.da175556e4703ba3ad61.js","9a8f9ce973af0c135b292708a3f209dd"],["/br_chart-style/js/toggle-menu-drawer.da175556e4703ba3ad61.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_chart-style/js/two-month-picker.da175556e4703ba3ad61.js","7ffcebff91118e847097df8afcb893b7"],["/br_chart-style/js/vendors~AccountSignupModal.da175556e4703ba3ad61.js","6f04d3ae3230e8e84e5b53fe29a32186"],["/br_chart-style/js/vendors~digits~info-b~897959f6.da175556e4703ba3ad61.js","46b15bf292db5de0f1d34d8f63458cfd"],["/br_chart-style/js/vendors~open_position~7c650be5.da175556e4703ba3ad61.js","96370a09a14169069e4993fc9b50456a"],["/br_chart-style/js/work-in-progress.da175556e4703ba3ad61.js","e4206c2e258b35597fec2b01850ef48e"],["/br_chart-style/manifest.json","37b3a78262f69d07c64e770696719663"],["/br_chart-style/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_chart-style/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_chart-style/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_chart-style/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_chart-style/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_chart-style/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_chart-style/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_chart-style/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_chart-style/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_chart-style/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_chart-style/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_chart-style/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_chart-style/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_chart-style/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_chart-style/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_chart-style/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_chart-style/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_chart-style/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_chart-style/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_chart-style/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_chart-style/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_chart-style/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_chart-style/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_chart-style/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_chart-style/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_chart-style/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_chart-style/';
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







