// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {

    //use storage API to set a peristent variable accessible to all components of this extension
  chrome.storage.sync.set({secure: false, blockPercentage: 0.85}, function() {  //TODO do we even need the secure tracking bool?
    console.log("Simple Security Screen is loaded.");
  });


  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{


        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {/*hostEquals: 'developer.chrome.com'*/ schemes:['http', 'https']},
        })
        ],

            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });



});
