//var console = {};
console.log = function() {};


window.console = console;

window.scdl_client_id = "12gUJC0hH2ct1EGOcYXQIzRFU91c72Ea";
window.scdl_last_url = "";
window.scdl_counter_1 = 0;
window.scdl_currentlydl = 0;
window.scdl_loadingelem;
window.scdl_adolf = 0;
window.scdl_lastpage = "";

scdl_elemets_that_have = [];

// window.scdl_client_id = getSCDLid();
console.log("scdl_started");


function setup_scdl() {
  putinloaderelement();
  getSCDLid();
//putinadolf();
//put  in .listenNetworkSidebar as last element
}

var interval1Id = setInterval(function() {
  var amountofsharebtns = document.querySelectorAll('.sc-button-share').length;
  //console.log(amountofsharebtns);
  if (amountofsharebtns != window.scdl_counter_1 && amountofsharebtns > 0 || window.scdl_last_url != document.URL) {
    insert_button();
    listen_scdl();
    window.scdl_counter_1 = amountofsharebtns;
  }
  updateloaderelement();
  //console.log("UUUUUUUUUUUUUUUUUUUUUUUU");
  if (window.scdl_last_url != document.URL) {
    window.scdl_adolf = 0;
    putinadolf();
  }
  window.scdl_last_url = document.URL;
}, 1000);


function putinadolf() {
  if (window.scdl_adolf == 0) {
    var mnfgtjy = document.getElementsByClassName('listenNetworkSidebar')[0];
    if (typeof mnfgtjy !== "undefined") {
      var ifrm = document.createElement("iframe");

      //use location.pathname NOTE
      var sdf2 = document.URL.split("/");
      if (sdf2.length = 5) {
        ifrm.setAttribute("src", "https://mrvv.net/beta/scdl_adolfs/?artist=" + sdf2[3]);
      } else {
        ifrm.setAttribute("src", "https://mrvv.net/beta/scdl_adolfs/");
      }

      ifrm.style.width = "100%";
      ifrm.style.height = "500px";
      ifrm.frameBorder = "0";
      ifrm.id = "scdl_adolf1";
      document.body.appendChild(ifrm);

      mnfgtjy.appendChild(ifrm);
      window.scdl_adolf = 1;
    }
  }
}


function insert_button() {

  //var scdl_html_button = '<a class="scdl_btn_start sc-button sc-button-medium sc-button-responsive" tabindex="0" title="Download">&nbsp;&nbsp;&nbsp;&nbsp;SCDL</a>';


  var a_scdl = document.createElement('a');
  var linkText = document.createTextNode(" . . SCDL");
  a_scdl.appendChild(linkText);
  a_scdl.title = "Download";
  //a_scdl.href = "#";
  a_scdl.className = "scdl_btn_start sc-button sc-button-small sc-button-responsive";


  var elems = document.getElementsByTagName('*'),
    i;
  for (i in elems) {

    //asdfas

    // console.log(elems[i]);
    try {
      if (elems[i] !== 'undefined' && elems[i].className !== 'undefined' && elems[i].className.indexOf("sc-button-group") > -1) {
        var gotitnot = true;
        for (io = 0; io < scdl_elemets_that_have.length; ++io) {
          if (scdl_elemets_that_have[io].isSameNode(elems[i].parentNode)) {
            gotitnot = false;
          }
        //console.log("oihwedelighlishdgflikhsdlikghlkishdglkhsdlkghlskdgh");
        }
        if (gotitnot) {
          console.log(elems[i].className)
          var kiddies = elems[i].childNodes;
          console.log(elems[i].childNodes);
          console.log(elems[i].childNodes[1].className);

          for (yts = 0; yts < kiddies.length; ++yts) {
            console.log(kiddies[yts].className);
            if (kiddies[yts].className && kiddies[yts].className.indexOf("scdl_btn_start") < 0) {
              var clone_a = a_scdl.cloneNode(true);
              clone_a.addEventListener("click", function() {
                actual_listener_event(this);
              }, true);
              elems[i].appendChild(clone_a);
              yts = kiddies.length;
              scdl_elemets_that_have.push(elems[i].parentNode);
            } else {
              console.log("do frocking nothing");
            }
          }
        }
      }
    } catch (e) {}

  }



}

function listen_scdl() {
  console.log("scdl_adds listener");
}

function actual_listener_event(diese) {


  var rgrgrgrg = diese.closest(".streamContext");
  //console.log(rgrgrgrg);
  if (rgrgrgrg == null) {
    rgrgrgrg = diese.closest(".chartTrack");
  }
  if (rgrgrgrg == null) {
    rgrgrgrg = diese.closest(".trackItem");
  }

  if (rgrgrgrg != null) {
    var rgrgrgrg23 = rgrgrgrg.querySelectorAll("a");
    console.log(rgrgrgrg23);

    var lgth = 0;
    var rgrgrgrg2;

    for (var i = 0; i < rgrgrgrg23.length; i++) {
      console.log(rgrgrgrg23[i].href);
      //if its the longest link around the item AAAANNDD a soundcloud link

      if (rgrgrgrg23[i].href.length > lgth && isLinkelem(rgrgrgrg23[i].className) && rgrgrgrg23[i].href.indexOf("/stream") == -1 && rgrgrgrg23[i].href.indexOf("/comments") == -1) {
        var lgth = rgrgrgrg23[i].href.length;
        rgrgrgrg2 = rgrgrgrg23[i];
      }
    }

    console.log(rgrgrgrg2.href);
    var url4scdl = rgrgrgrg2.href;
  }


  if (typeof url4scdl === "undefined") {
    url4scdl = document.URL;
  } else {
    if (url4scdl.indexOf("soundcloud.com") !== -1) {
      url4scdl = url4scdl;
    } else {
      url4scdl = 'https://soundcloud.com' + url4scdl;
    }

  }

  console.log("DL " + url4scdl);

  currentlydl(1);
  sendformscdlfinal(url4scdl);
  resolveTRACK(url4scdl)

}

function isLinkelem(clss) {
  if (clss.indexOf("playableTile__mainHeading") !== -1 ||
    clss.indexOf("soundTitle__title") !== -1 ||
    clss.indexOf("trackItem__trackTitle") !== -1
  ) {
    return true;
  } else {
    return false;
  }
}

function findUpTag(el, tag) {
  while (el.parentNode) {
    el = el.parentNode;
    if (el.tagName === tag)
      return el;
  }
  return null;
}

function sendformscdlfinal(dllinksc) {
  //document.getElementById("formerdumdum").submit();
  try {
    var delimiter = '?'

    var tokens = dllinksc.split(delimiter),
      dllinksc = tokens[0] + "?" + tokens[1];


    console.log("asdfasdfadhttps://mrvv.net/scdl/scdlSC.php?url=" + dllinksc);

    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
        // var data = JSON.parse(anHttpRequest.responseText);
        // console.log(anHttpRequest.responseText);
        //do nothing
      }
    }

    anHttpRequest.open("GET", "https://mrvv.net/scdl/scdlSC.php?url=" + dllinksc, true);
    anHttpRequest.send(null);
  } catch (e) {
    //
  }


}

function OpenInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function updateloaderelement() {
  if (window.scdl_currentlydl < 1) {
    window.scdl_loadingelem = 'hidden';
  } else {
    window.scdl_loadingelem = 'visible';
  }
}

function putinloaderelement() {
  if (typeof window.scdl_loadingelem === "undefined") {

    //var scdl_html_button = '<div id="loadingscdl"><a id="loadingscdlinner" class=" sc-button sc-button-cta sc-button-medium" href="#">SCDL currently downloading nothin</a></div>';

    var loadingscdl_e = document.createElement('div');
    loadingscdl_e.id = "loadingscdl";
    var loadingscdlinner_e = document.createElement('a');
    loadingscdlinner_e.id = "loadingscdlinner";

    var adsfadf = document.createTextNode("SCDL currently downloading nothin");
    loadingscdlinner_e.appendChild(adsfadf);
    //a_scdl.title = "Download";
    loadingscdlinner_e.href = "#";
    loadingscdlinner_e.className = " sc-button sc-button-cta sc-button-medium";
    loadingscdl_e.appendChild(loadingscdlinner_e);
    window.scdl_loadingelem = loadingscdl_e;

    insertAfter(loadingscdl_e, document.getElementById('content'));

  }
  var ifejo8938y2s = document.getElementById("getalltracksscdl");
  console.log(ifejo8938y2s);
  if (typeof ifejo8938y2s == "undefined" || ifejo8938y2s == null) {

    //var scdl_html_button = '<div id="loadingscdl"><a id="loadingscdlinner" class=" sc-button sc-button-cta sc-button-medium" href="#">SCDL currently downloading nothin</a></div>';

    var getallbtn = document.createElement('div');
    getallbtn.id = "getalltracksscdl";
    var getallbtn_i = document.createElement('a');
    getallbtn_i.id = "getallllinner";

    var adsfadf = document.createTextNode("GET ALL TRACKS");
    getallbtn_i.appendChild(adsfadf);
    //a_scdl.title = "Download";
    getallbtn_i.href = "#";
    getallbtn_i.addEventListener("click", function() {
      getAllT();
    }, true);
    getallbtn_i.title = "download all visible tracks 1 at a time";

    getallbtn_i.className = " sc-button sc-button-cta sc-button-medium";
    getallbtn.appendChild(getallbtn_i);
    getallbtn.style = "right:0px!important;"
    //window.scdl_loadingelem = loadingscdl_e;

    insertAfter(getallbtn, document.getElementById('content'));

  }
}
var doner = [];
var doltr = [];
function getAllT() {

  var allll = [];
  allll = Array.prototype.concat.apply(allll, document.getElementsByClassName("playableTile__mainHeading"));
  allll = Array.prototype.concat.apply(allll, document.getElementsByClassName("soundTitle__title"));
  allll = Array.prototype.concat.apply(allll, document.getElementsByClassName("trackItem__trackTitle"));
  doltr = allll.filter(function(val, ind) {
    return allll.indexOf(val) == ind;
  });

  console.log("doltr" + doltr.length);
  for (i = 0; i < doltr.length; i++) {
    var lilili = doltr[i].href;
    //console.log(lilili);
    if (doner.indexOf(lilili) == -1 && window.scdl_currentlydl < 1) {
      doner.push(lilili);
      url4scdl = lilili;
      currentlydl(1);
      sendformscdlfinal(url4scdl);
      resolveTRACK(url4scdl)
    }
  }

  if (doner.length < doltr.length) {
    setTimeout(function() {
      getAllT();
    }, 1000);
  }

}

function isTypedArray(obj) {
  return !!obj && obj.byteLength !== undefined;
}

function currentlydl(scdloperator) {
  window.scdl_currentlydl = window.scdl_currentlydl + scdloperator;
  var ijhfieh = 'SCDL currently downloading ' + window.scdl_currentlydl;
  document.getElementById("loadingscdlinner").textContent = ijhfieh;
//return
}

function getSCDLid() {

  var screlms = document.getElementsByTagName("script");
  //console.log(screlms);
  for (i = 0; i < screlms.length; i++) {
    var ij238u4 = screlms[i].src;
    if (ij238u4.indexOf("assets/app") !== -1) {
      console.log(screlms[i]);

      var resolve_this_url = screlms[i].src;
      console.log(resolve_this_url);
      var xhr = new XMLHttpRequest();
      xhr.open('GET', resolve_this_url, true);
      xhr.responseType = 'text';
      xhr.onload = function() {
        //console.log(xhr.response);
        var jf8f089 = xhr.response.match(new RegExp(',client_id:"(.*)",env:"production"'));
        for (ii = 0; ii < jf8f089.length; ii++) {
          if (jf8f089[ii].length == 32) {
            window.scdl_client_id = jf8f089[ii];
          }
        //console.log(jf8f089[ii].length);
        }

      };
      xhr.send();
    }

  }

}



function debug_requests(debug) {
  var resolve_this_url = "https://mrvv.net/scdl/debug.php?debug=" + debug;
  console.log(resolve_this_url);
  var xhrQQ = new XMLHttpRequest();
  xhrQQ.open('GET', resolve_this_url, true);
  xhrQQ.responseType = 'text';
  xhrQQ.onload = function() {
    console.log("debug: " + xhrQQ.response);
  };
  xhrQQ.send();
}


// window.trackdatajson = null;
function resolveTRACK(passedvarcit) {


  passedvarcit2 = passedvarcit.replace('#', '');
  var resolve_this_url = 'https://api.soundcloud.com/resolve.json?url=' + passedvarcit2 + '&client_id=' + window.scdl_client_id;
  console.log(resolve_this_url);
  var xhr00 = new XMLHttpRequest();
  xhr00.open('GET', resolve_this_url, true);
  xhr00.responseType = 'json';
  xhr00.onload = function() {
    if (xhr00.response.kind == "track") {
      console.log(xhr00.response.stream_url);
      // window.trackdatajson = xhr00.response;
      resolveSTREAM(xhr00.response.stream_url, xhr00.response);
    } else {
      currentlydl(-1);
    }

  };
  xhr00.onerror = function() {
    debug_requests(resolve_this_url + '///' + xhr.statusText);
  };
  xhr00.send();


}

function resolveSTREAM(passedvarcit, trackdatajson) {

  var resolve_this_url = passedvarcit + 's' + '?client_id=' + window.scdl_client_id;
  console.log(resolve_this_url);
  var xhr000 = new XMLHttpRequest();
  xhr000.open('GET', resolve_this_url, true);
  xhr000.responseType = 'json';
  xhr000.onload = function() {
    console.log(xhr000.response.http_mp3_128_url);
    tagndl(xhr000.response.http_mp3_128_url, trackdatajson);
  };
  xhr000.onerror = function() {
    debug_requests(resolve_this_url + '///' + xhr.statusText);
  };
  xhr000.send();

}

function tagndl(uuurrrrr, trackdatajson) {
  // var trackdatajson = null;

  xhr = new XMLHttpRequest();
  xhr.open('GET', uuurrrrr, true);
  xhr.responseType = 'arraybuffer';
  xhr.onerror = function() {
    debug_requests(uuurrrrr + '///' + xhr.statusText);
  };
  xhr.onload = function() {
    console.log("loaded mp3");
    if (xhr.status === 200) {
      arrayBuffer = xhr.response;

      if (trackdatajson.artwork_url) {
        var ghi2iu7f3 = trackdatajson.artwork_url.replace("large", "t500x500");
      } else {
        var ghi2iu7f3 = trackdatajson.user.avatar_url.replace("large", "t500x500");
      }

      xhr2 = new XMLHttpRequest();

      xhr2.open('GET', ghi2iu7f3, true);
      xhr2.responseType = 'arraybuffer';
      xhr2.onerror = function() {
        debug_requests(ghi2iu7f3 + '///' + xhr.statusText);
      };
      xhr2.onload = function() {
        console.log("loaded jpg");
        coverArrayBuffer = xhr2.response;

        if (isTypedArray(arrayBuffer)) {
          writer = new ID3Writer(arrayBuffer);
          writer.setFrame('TIT2', trackdatajson.title)
            .setFrame('TPE1', [trackdatajson.user.username])
            .setFrame('TALB', trackdatajson.title)
            .setFrame('TYER', trackdatajson.release_year)
            .setFrame('TCON', [trackdatajson.genre])
            .setFrame('TBPM', trackdatajson.bpm)
            .setFrame('WPAY', trackdatajson.permalink_url)

          if (isTypedArray(coverArrayBuffer)) {
            writer.setFrame('APIC', {
              type: 3,
              data: coverArrayBuffer,
              description: 'cover'
            });
          }
          writer.addTag();


          blob = writer.getBlob();


          saveAs(blob, trackdatajson.title + '.mp3');
          currentlydl(-1);
          writer.revokeURL();
        }


      }
      xhr2.send();


    } else {
      // handle error
      console.error(xhr.statusText + ' (' + xhr.status + ')');
    }
  };

  xhr.send();
}


function insertAfter(newNode, referenceNode) {
  if (typeof newNode !== "undefined" && typeof referenceNode !== "undefined" && referenceNode != null) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
}


setup_scdl();
