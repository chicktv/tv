//debug console: function parse_msg( text )
$('#chatpagearea').off('click').on('click', '.emo-select-channel', function () {
});

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
$("#chatbadage").remove();
$("#icon-set-twitchList").html('');
$("#icon-set-localskicon").html('');
$(document).off('click', ".sk_icon");
$('#messages').off('click', ".click_reply");
$('.emo-select-channel').off("click");
$('#chat_viewlist').off('click', '.chat_user_id');
$("#chatbadage").remove();
$("#messages").html('');

if (typeof socket != 'undefined') {
	socket.close();
}
if (typeof sockete != 'undefined') {
	sockete.close();
}
$('#msginput').attr('placeholder', '傳送訊息到' + twitch);
twitchicon = {};
recon = 0;
stopcon = 0;
recone = 0;
stopcone = 0;
login_displayname = '';
login_username = '';
chat_host = '';
reconnectstate = '';
reconnectstatee = '';
gskli = [];
seventv='';

if (typeof client !== 'undefined') {
	clientRE.disconnect();
	client.disconnect();
	console.log('vvvvvvvvvvv');
}


function gosocket() {
	recon = 2;
	var tk = getCookie('acgt');
	var acgu = getCookie('acgu');
	var sktkb = getCookie('sktkb');
	socket.send("PART #" + twitch + " \r\n");
	if (tk && invalidnick != 'true') {
		socket.send('JOIN #' + twitch + ' ' + acgu + ' ' + tk + ' ' + live_id + ' acgsk nonhistory \r\n');
	} else {
		socket.send('JOIN #' + twitch + ' undefined undefined ' + live_id + ' undefined nonhistory \r\n');
	}
	if (invalidnick == 'true') {
		//$( "#messages > .chatline" ).remove();
	}
	counter = setInterval(timer, 1000);
	firstreconstate = '';
}
var logshow = 'f';
function gosockete() {
	console.log('SEND SERVER JOIN INFOR (wth History)' + recone);
	recone = 2;
	var tk = getCookie('acgt');
	var acgu = getCookie('acgu');
	var sktkb = getCookie('sktkb');
	if (tk && invalidnick != 'true') {
		sockete.send('JOIN #' + twitch + ' ' + acgu + ' ' + tk + ' ' + live_id + ' acgsk history \r\n');
	} else {
		sockete.send('JOIN #' + twitch + ' undefined undefined ' + live_id + ' undefined history \r\n');
	}
	if (invalidnick == 'true') {
		//$( "#messages > .chatline" ).remove();
	}
	countere = setInterval(timere, 1000);
	secondreconstate = '';
}
if (getQueryVariable("viewercolor")) {
	var viewercolor = getQueryVariable("viewercolor");
}
if (getQueryVariable("slide")) {
	var slide = getQueryVariable("slide");
}
if (getQueryVariable("nicospeed")) {
	var nicospeed = getQueryVariable("nicospeed");
}
if (getQueryVariable("nicochat")) {
	var nicochat = getQueryVariable("nicochat");
}
if (getQueryVariable("nicoline")) {
	var nicoline = getQueryVariable("nicoline");
}
if (getQueryVariable("nicoimg")) {
	var nicoimg = getQueryVariable("nicoimg");
}
if (getQueryVariable("showid")) {
	var showid = getQueryVariable("showid");
}
if (getQueryVariable("channel")) {
	var twitch = getQueryVariable("channel");
}
if (getQueryVariable("twitch_id")) {
	var twitch_id = getQueryVariable("twitch_id");
}
if (getQueryVariable("ignore_user")) {
	var ignore_user = getQueryVariable("ignore_user") + ',';
}
if (getQueryVariable("prepend")) {
	var prepend = getQueryVariable("prepend");
}
if (getQueryVariable("viewcount")) {
	var viewcount = getQueryVariable("viewcount");
}
if (getQueryVariable("vcfont_size")) {
	var vcfont_size = getQueryVariable("vcfont_size");
} else {
	var vcfont_size = '';
}
if (getQueryVariable("font_family")) {
	var font_family = getQueryVariable("font_family");
} else {
	var font_family = '';
}
if (getQueryVariable("vc_ttvview")) {
	var vc_ttvview = getQueryVariable("vc_ttvview");
}
if (getQueryVariable("vc_uploadtime")) {
	var vc_uploadtime = getQueryVariable("vc_uploadtime");
}
if (getQueryVariable("vc_localtime")) {
	var vc_localtime = getQueryVariable("vc_localtime");
}
if (getQueryVariable("vc_ytview")) {
	var vc_ytview = getQueryVariable("vc_ytview");
}
if (getQueryVariable("vc_date")) {
	var vc_date = getQueryVariable("vc_date");
}
if (getQueryVariable("vc_dateform")) {
	var vc_dateform = getQueryVariable("vc_dateform");
}
if (getQueryVariable("vc_timeform")) {
	var vc_timeform = getQueryVariable("vc_timeform");
}
if (getQueryVariable("style")) {
	var style = getQueryVariable("style");
}
if (getQueryVariable("youtube_videoid")) {
	var youtube_videoid = getQueryVariable("youtube_videoid");
}
if (getQueryVariable("youtube_chatid")) {
	var youtube_chatid = getQueryVariable("youtube_chatid");
}
if (getQueryVariable("themename")) {
	var themename = getQueryVariable("themename");
}
if (getQueryVariable("font_size")) {
	var fontsize = getQueryVariable("font_size");
}
if (getQueryVariable("time_stamp")) {
	var time_stamp = getQueryVariable("time_stamp");
}
if (getQueryVariable("fade")) {
	var fade = getQueryVariable("fade");
}
if (getQueryVariable("imgtag")) {
	var imgtag = getQueryVariable("imgtag");
}
if (getQueryVariable("line")) {
	var countline = getQueryVariable("line");
}
if (getQueryVariable("bttv")) {
	var bttv = getQueryVariable("bttv");
}
if (getQueryVariable("ffz")) {
	var ffz = getQueryVariable("ffz");
}
if (getQueryVariable("7tv")) {
	var seventv = getQueryVariable("7tv");
}
if (set_number == '0') {
	$("#messages").css('overflow-y', 'auto');
}
//style
if (style) {
	if ($('#current-skchat').length == '0') {
		var number = Math.floor((Math.random() * 1000) + 1);
		$.getJSON("https://live.sk-knower.com/dashboard2/function/check_skchat_style.php?code=" + style, function (style) {
			$('head').append('<style type="text/css" id="current-skchat">' + style[0].css + '</style>');
		});
	}
}
//time_stamp
if (time_stamp != 'on') {
	$('head').append('<style type="text/css">.timestamp{display: none !important;}</style>');
}
//ignore_user
$.getJSON("https://sk-knower.com/function/sql_cfm_twitchchatblocklist.php?name="+acgu+"&sktkb="+sktkb, function (data) {
	if (data.twitch === null) { ignore_user = ','; } else { ignore_user = data.twitch; }
});
if (!ignore_user || ignore_user === null) {
	ignore_user = ',';
}
//fontfamily
if (font_family != 'default') {
	$('body').css('font-family', font_family);
}
//name_shadow
if (name_shadow == 'black') {
	$('head').append('<style type="text/css">span.from.nick {text-shadow: #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px; !important;}</style>');
}
if (name_shadow == 'white') {
	$('head').append('<style type="text/css">span.from.nick {text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; !important;}</style>');
}
//text_shadow
if (text_shadow == 'black') {
	$('head').append('<style type="text/css">.skClass{text-shadow: #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px; !important;}</style>');
}
if (text_shadow == 'white') {
	$('head').append('<style type="text/css">.skClass{text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; !important;}</style>');
}
//VCfontSize
if ($.isNumeric(fontsize)) {
	$('body').css('font-size', fontsize + 'px');
	//hide: console.log(fontsize);
}
//fontSize
if ($.isNumeric(vcfont_size)) {
	$('#top-box').css('font-size', vcfont_size + 'px');
	//hide: console.log(vcfont_size);
}
//connect
if (youtube_videoid && twitch) {
	var connectto = twitch + '頻道和Youtube聊天室';
} else if (youtube_videoid && !twitch) {
	var connectto = 'Youtube聊天室';
} else {
	var connectto = twitch + '頻道';
}



function updateClock() {
	d = new Date();
	if (vc_timeform == '24') {
		var currentHours = d.getHours();
		var currentMinutes = d.getMinutes();
		var currentSeconds = d.getSeconds();
		currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
		currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
		currentHours = (currentHours < 10 ? "0" : "") + currentHours;
		currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
	} else {
		var currentHours = d.getHours();
		var currentMinutes = d.getMinutes();
		var currentSeconds = d.getSeconds();
		currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
		currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
		var timeOfDay = (currentHours < 12) ? "AM" : "PM";
		currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
		currentHours = (currentHours == 0) ? 12 : currentHours;
		currentHours = (currentHours < 10 ? "0" : "") + currentHours;
		currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
	}
	$("#clock").html(currentTimeString);
	if (vc_dateform == 'dd/mm') {
		$("#todate").html(d.getDate() + "/" + (d.getMonth() + 1));
	} else if (vc_dateform == 'mm/dd/yyyy') {
		$("#todate").html((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear());
	} else if (vc_dateform == 'mm/dd') {
		$("#todate").html((d.getMonth() + 1) + "/" + d.getDate());
	} else if (vc_dateform == 'mm月dd日yyyy年') {
		$("#todate").html((d.getMonth() + 1) + "月" + d.getDate() + "日" + d.getFullYear() + "年");
	} else if (vc_dateform == 'mm月dd日') {
		$("#todate").html((d.getMonth() + 1) + "月" + d.getDate() + "日");
	} else if (vc_dateform == 'yyyy/mm/dd') {
		$("#todate").html(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate());
	} else {
		$("#todate").html(d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
	}
}
function secondsTimeSpanToHMSS(s) {
	var s = s / 1000;
	var h = Math.floor(s / 3600);
	s -= h * 3600;
	var m = Math.floor(s / 60);
	s -= m * 60;
	return h + ":" + (m < 10 ? '0' + m : m) + "";
}
function stripHTML(dirtyString) {
	var container = document.createElement('div');
	var text = document.createTextNode(dirtyString);
	container.appendChild(text);
	return container.innerHTML; // innerHTML will be a xss safe string
}
function clearhtml(html) {
	let tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || "";
}
function fn60sec() {
	if (twitch) {
		$.getJSON("//sk-knower.com/twitch_api/livestate.php?id=" + live_id + "&username=" + live_login + "&n" + number, function (c) {
			var stream = c.stream.data[0];
			var viewer_count = stream.viewer_count;
			var started_at = stream.started_at;
			if (stream != null) {
				var d1 = started_at;
				var d = new Date();
				var n = d.toUTCString();
				var z = new Date(n) - new Date(d1);
				var go = secondsTimeSpanToHMSS(z);
				$("#person").html(viewer_count);
				$("#timer").html(go);
			} else {
				$("#person").html('-');
				$("#timer").html('-');
			}
		});
	}
}

$(window).resize(function () {
	$('#top-box').css('height', $(window).innerHeight() + 'px');
	if ($("#chatview").length) {
		var overall = $(window).innerHeight();
		var viewcountheight = $("#chatview").height();
		var setheight = overall - viewcountheight;
		$('#messages').css('max-height', setheight + 'px');
	}
	scroller();
});


function scroller(image) {
	if (set_number == '0') {
		var scrollstate = chatscrollHeight - $("#messages-contain").height() - chatscrollTop;
		if ($('#chat_down').css('display') == 'none') {
			skchatscroll.scroll(999999999999999);
		}
		if (scrollstate <= 250) {
			if (prepend == 'true' && nicochat != 'on' || prepend == 'on' && nicochat != 'on') {
				skchatscroll.scroll(0);
			} else {
				skchatscroll.scroll(999999999999999);
			}
		}
	} else {
		if (prepend == 'true' && nicochat != 'on' || prepend == 'on' && nicochat != 'on') {
			skchatscroll.scroll(0);
		} else {
			skchatscroll.scroll(999999999999999);
		}
	}
	setTimeout(function () {
		var scrollstate = chatscrollHeight - $("#messages-contain").height() - chatscrollTop;
		if ($('#chat_down').css('display') == 'none') {
			skchatscroll.scroll(999999999999999);
		}
		if (scrollstate <= 99) {
			if (prepend == 'true' && nicochat != 'on' || prepend == 'on' && nicochat != 'on') {
				skchatscroll.scroll(0);
			} else {
				skchatscroll.scroll(999999999999999);
			}
		}
	}, 10);

	if (image == 'img') {
		setTimeout(function () {
			var scrollstate = chatscrollHeight - $("#messages-contain").height() - chatscrollTop;
			if ($('#chat_down').css('display') == 'none') {
			}
			if (scrollstate <= 250) {
				if (prepend == 'true' && nicochat != 'on' || prepend == 'on' && nicochat != 'on') {
					skchatscroll.scroll(0);
				} else {
					skchatscroll.scroll(999999999999999);
				}
			}
		}, 1000);
	}
	if (image == 'fixed') {
		setTimeout(function () {
			skchatscroll.scroll(999999999999999);
		}, 1000);
	}
	if (image == '340') {
		setTimeout(function () {
			var scrollstate = chatscrollHeight - $("#messages-contain").height() - chatscrollTop;
			if ($('#chat_down').css('display') == 'none') {
			}
			if (scrollstate <= 340) {
				if (prepend == 'true' && nicochat != 'on' || prepend == 'on' && nicochat != 'on') {
					skchatscroll.scroll(0);
				} else {
					skchatscroll.scroll(999999999999999);
				}
			}
		}, 1000);
	}
}

function delete_line() {
	var numchat = $("#messages > .chatline").length;
	var scrollstate = chatscrollHeight - $("#messages-contain").height() - chatscrollTop;
	if (scrollstate <= 300) {
		if (numchat > countline) {
			activedelete=true;
			for (let i = 0; i < 20; i++) {
				$('#messages').find('.chatline').first().remove();
			}
			var numchat = $("#messages > .chatline").length;
			if (numchat > countline) { delete_line() };
		}
	}
}

if (prepend == 'true' || prepend == 'on') {
	if (nicochat == 'on') { $('<div style="flex-grow: 1;"></div>').insertAfter('#messages'); } else {
		$('#top-box').prepend('<div style="flex-grow: 1;"></div>');
	}
}

$('#top-box').css('height', $(window).innerHeight() + 'px');
if ($("#chatview").length) {
	var overall = $(window).innerHeight();
	var viewcountheight = $("#chatview").height();
	var setheight = overall - viewcountheight;
	$('#messages').css('max-height', setheight + 'px');
}


String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}


$.ajax({
	url: "https://sk-knower.com/twitch_api/qin_token2.php",
	type: "GET",
	success: function (token) {
		$.ajax({
			url: "https://api.twitch.tv/helix/bits/cheermotes?broadcaster_id=" + twitch_id,
			type: "GET",
			beforeSend: function (xhr) { xhr.setRequestHeader('Client-ID', 'qin0np1e02qpn72t5xo76b7p5qgpkeb'); xhr.setRequestHeader('Authorization', 'Bearer ' + token); },
			success: function (data) {
				pageload(data);
				$.ajax({
					url: "https://api.twitch.tv/helix/chat/emotes?broadcaster_id=" + live_id,
					type: "GET",
					beforeSend: function (xhr) { xhr.setRequestHeader('Client-ID', 'qin0np1e02qpn72t5xo76b7p5qgpkeb'); xhr.setRequestHeader('Authorization', 'Bearer ' + token); },
					success: function (data) {
						$("#icon-set-twitchList").append("<span id='icon-set-twitchList-title' style='font-size: 12px;width: 100%;padding: 0px 10px;display:none;'>本台 Follower</span><div id='icon-set-twitchList-thischannelfree' style='order:0;flex-wrap: wrap;align-items: center;justify-content: center;display:none;'></div>");
						$("#icon-set-twitchList").append("<div id='icon-set-twitchList-thischannelsub' style='order:1;flex-wrap: wrap;align-items: center;justify-content: center;display:none;'><span style='font-size: 12px;width: 100%;padding: 0px 10px;'>本台 Subscriber</span></div>");
						$.each(data.data, function (key, icon) {
							var code = icon.name;
							if (code) {
								var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" class="skicon" src="https://static-cdn.jtvnw.net/emoticons/v2/' + icon.id + '/default/dark/1.0"></br>' + code + '</div>';
								if (icon.emote_type == 'follower') {
									$("#icon-set-twitchList-title").css('display', 'block');
									$("#icon-set-twitchList-thischannelfree").css('display', 'flex');
									$("#icon-set-twitchList-thischannelfree").append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;order:" + icon.id + ";' data-original-title='" + pimg + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='https://static-cdn.jtvnw.net/emoticons/v2/" + icon.id + "/default/dark/1.0'></div>");
								} else {
									$("#icon-set-twitchList-thischannelsub").css('display', 'none');
									$("#icon-set-twitchList-thischannelsub").append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;order:" + icon.id + ";' data-original-title='" + pimg + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='https://static-cdn.jtvnw.net/emoticons/v2/" + icon.id + "/default/dark/1.0'></div>");
								}
							}
						})

					}
				});
			}
		});
	}
});

function pageload(data) {
	bitsiconset = data;
}


function getseventv() {
	if (seventv) {
	$.getJSON("https://7tv.io/v3/users/twitch/"+twitch_id, function(seventvicon) {
		asseventvvar(seventvicon.emote_set.emotes);
	})
	.fail(function(jqxhr, textStatus, error) {
		if (jqxhr.status == 404) {
		} else {
		}
	});
	}
}
	
function asseventvvar(data){
	seventvicon = data;
	if (typeof seventvicon !== 'undefined') {
		$("#emo-page").append("<div id='icon-set-seventv' class='icon-set' style='display:none;'></div>");
		$("#icon-set-seventv").append("<div id='icon-set-seventv-seventvicon' style='order:0;display: flex;flex-wrap: wrap;align-items: center;justify-content: center;'><span style='font-size: 12px;width: 100%;padding: 0px 10px;'>7TV自訂</span></div>");
		$.each(seventvicon, function (key, icon) {
			var code = icon.name;
			var url = icon.data.host.url;
			var static_name = "2x.webp";
			var imgurl = url+"/"+static_name;
			if (code) {
				var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" class="skicon" src="' + imgurl + '"></br>' + code + '</div>';
				$("#icon-set-seventv-seventvicon").append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;' data-original-title='" + code + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='" + imgurl + "'></div>");
			}
		});
	}
}


function getffz() {
	if (ffz) {
		$.getJSON("https://api.frankerfacez.com/v1/room/" + twitch, function(ffzicon) {
			var channelid=ffzicon.room.set;
			asvar(ffzicon.sets[channelid]);
		})
		.fail(function(jqxhr, textStatus, error) {
			if (jqxhr.status == 404) {
			} else {
			}
		});
	}
}
function asvar(data) {
	ffzicon = data;
	if (typeof ffzicon !== 'undefined') {
		$("#emo-page").append("<div id='icon-set-FFZ' class='icon-set' style='display:none;'></div>");
		$("#icon-set-FFZ").append("<div id='icon-set-FFZ-ffzicon' style='order:0;display: flex;flex-wrap: wrap;align-items: center;justify-content: center;'><span style='font-size: 12px;width: 100%;padding: 0px 10px;'>FFZ自訂</span></div>");
		$.each(ffzicon.emoticons, function (key, icon) {
			var code = icon.name;
			if (code) {
				var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" class="skicon" src="' + icon.urls[1] + '"></br>' + code + '</div>';
				$("#icon-set-FFZ-ffzicon").append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;order:" + icon.id + ";' data-original-title='" + pimg + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='" + icon.urls[1] + "'></div>");
			}
		});
	}
	//hide: console.log(ffzicon);
}

function getbttv() {
	if (bttv) {
		$("#icon-set-BTTV").remove();
		$.getJSON("https://api.betterttv.net/3/cached/users/twitch/" + twitch_id, function (bttvicontwo) {
			asbttvvartwo(bttvicontwo);
		});
		$.getJSON("https://api.betterttv.net/3/cached/emotes/global", function (bttvicon) {
			asbttvvar(bttvicon);
		});
	}
}
function asbttvvar(data) {
	bttvicon = data;
	if (typeof bttvicon !== 'undefined') {
		$("#emo-page").append("<div id='icon-set-BTTV' class='icon-set' style='display:none;'></div>");
		$("#icon-set-BTTV").append("<div id='icon-set-BTTV-bttvicon' style='order:0;display: flex;flex-wrap: wrap;align-items: center;justify-content: center;'><span style='font-size: 12px;width: 100%;padding: 0px 10px;'>BetterTTV預設</span></div>");
		$.each(bttvicon, function (key, icon) {
			var code = icon.code;
			if (code) {
				var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" class="skicon" src="//cdn.betterttv.net/emote/' + icon.id + '/1x.' + icon.imageType + '"></br>' + code + '</div>';
				$("#icon-set-BTTV-bttvicon").append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;order:" + icon.id + ";' data-original-title='" + pimg + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='//cdn.betterttv.net/emote/" + icon.id + "/1x." + icon.imageType + "'></div>");
			}
		});
	}
	//console.log(bttvicon);
}
function asbttvvartwo(data) {
	bttvicontwo = data;
	if (typeof bttvicontwo !== 'undefined') {
		$("#icon-set-BTTV").append("<div id='icon-set-BTTV-bttvicontwo' style='order:0;display: flex;flex-wrap: wrap;align-items: center;justify-content: center;'><span style='font-size: 12px;width: 100%;padding: 0px 10px;'>BetterTTV自訂</span></div>");
		$.each(bttvicontwo.channelEmotes, function (key, icon) {
			var code = icon.code;
			if (code) {
				var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" class="skicon" src="//cdn.betterttv.net/emote/' + icon.id + '/1x.' + icon.imageType + '"></br>' + code + '</div>';
				$("#icon-set-BTTV-bttvicontwo").append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;order:" + icon.id + ";' data-original-title='" + pimg + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='//cdn.betterttv.net/emote/" + icon.id + "/1x." + icon.imageType + "'></div>");
			}
		});
		$.each(bttvicontwo.sharedEmotes, function (key, icon) {
			var code = icon.code;
			if (code) {
				var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" class="skicon" src="//cdn.betterttv.net/emote/' + icon.id + '/1x.' + icon.imageType + '"></br>' + code + '</div>';
				$("#icon-set-BTTV-bttvicontwo").append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;order:" + icon.id + ";' data-original-title='" + pimg + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='//cdn.betterttv.net/emote/" + icon.id + "/1x." + icon.imageType + "'></div>");
			}
		});
		console.log(bttvicontwo);
	}
}

var subgoal = getQueryVariable("subgoal");
if (viewcount == 'true' || viewcount == 'on') {
	if (prepend == 'true' || prepend == 'on') {
		$('#top-box').append("<div class='chatline server chatview' id='chatview' style='margin-top: 0px;min-height: 25px;'><div id='v'><span id='ttvview' style='padding-right: 10px;'><img src='//live.sk-knower.com/flag/ttv2.png?' style='height: 1.1em;padding-right: 5px;vertical-align: -2px;'><span id='person'>-</span></span><span id='ytview' style='padding-right: 10px;'><img src='//live.sk-knower.com/flag/youtube.png' style='height: 1.1em;padding-right: 5px;vertical-align: -2px;'><span id='ytperson'>-</span></span><span id='uploadtime' style='padding-right: 10px;'><i class='material-icons' style='vertical-align: bottom;'>timer</i> <span id='timer'>-</span></span><span id='localtime' style='padding-right: 10px;white-space: nowrap;'><i class='material-icons' style='vertical-align: bottom;'>access_time</i> <span id='clock'>-</span></span><span id='vcdate' style='padding-right: 10px;white-space:nowrap;'><i class='material-icons' style='vertical-align: bottom;'>today</i> <span id='todate'>-</span></span></div><div id='s'></div></div>");
	} else {
		$('#top-box').prepend("<div class='chatline server chatview' id='chatview' style='margin-top: 0px;min-height: 25px;'><div id='v'><span id='ttvview' style='padding-right: 10px;'><img src='//live.sk-knower.com/flag/ttv2.png?' style='height: 1.1em;padding-right: 5px;vertical-align: -2px;'><span id='person'>-</span></span><span id='ytview' style='padding-right: 10px;'><img src='//live.sk-knower.com/flag/youtube.png' style='height: 1.1em;padding-right: 5px;vertical-align: -2px;'><span id='ytperson'>-</span></span><span id='uploadtime' style='padding-right: 10px;'><i class='material-icons' style='vertical-align: bottom;'>timer</i> <span id='timer'>-</span></span><span id='localtime' style='padding-right: 10px;white-space: nowrap;'><i class='material-icons' style='vertical-align: bottom;'>access_time</i> <span id='clock'>-</span></span><span id='vcdate' style='padding-right: 10px;white-space:nowrap;'><i class='material-icons' style='vertical-align: bottom;'>today</i> <span id='todate'>-</span></span></div><div id='s'></div></div>");
	}
	if (vc_ttvview != 'on') { $('#ttvview').remove(); }
	if (vc_ytview != 'on') { $('#ytview').remove(); }
	if (vc_uploadtime != 'on') { $('#uploadtime').remove(); }
	if (vc_localtime != 'on') { $('#localtime').remove(); }
	if (vc_date != 'on') { $('#vcdate').remove(); }
	fn60sec();
	setInterval(fn60sec, 60 * 1000);
	updateClock();
	setInterval('updateClock()', 1000);
	var overall = $(window).innerHeight();
	var viewcountheight = $("#chatview").height();
	var setheight = overall - viewcountheight;
	$('#messages').css('max-height', setheight + 'px');
}
settime = getQueryVariable("time");
if ($.isNumeric(countline)) {
	if (countline == false) { var countline = '30'; } else { countline--; }
} else { var countline = '30'; }
if ($.isNumeric(fade)) {
	if (fade == false) { var fade = 'none'; } else { var fade = fade * 1000; }
} else { var fade = 'none'; }
/*
//hide: console.log(fade);
*/
//////////////////////////////////////////////

function getLang() {
	if (navigator.languages != undefined)
		return navigator.languages[0];
	return navigator.language;
}

$("#emo-page").html('<div id="icon-set-twitchList" class="icon-set" style="display:none;"></div><div id="icon-set-localskicon" class="icon-set" style="display: none;"></div><div id="icon-set-tenor" class="icon-set" style="display: none;"><div style="display: flex;width: 100%;cursor: pointer;"><div id="tenor-search-clear" style="display:none;"><i class="material-icons" style="padding: 11px;">arrow_back</i></div><input id="tenor-search" autocomplete="off" type="text" size="10" style="flex-grow: 1;" placeholder="搜尋 Tenor GIF"></div><div id="tenor_categories" class="tenortags-pages"></div><div id="tenor_searchresult" class="tenortags-pages" style="display:none;"></div></div>');

$('#tenor-search-clear').click(function () {
	$("#tenor_categories").show();
	$("#tenor_searchresult").hide();
	$("#tenor-search-clear").hide();
	$("#tenor-search").val('');
});

$('#tenor-search').on('input', function () {
	var inputValue = $(this).val();
	if (inputValue == '') {
		$("#tenor_categories").show();
		$("#tenor_searchresult").hide();
		$("#tenor-search-clear").hide();
	} else {
		$("#tenor_searchresult").html('');
		$("#tenor_searchresult").show();
		$("#tenor_categories").hide();
		$("#tenor-search-clear").show();
		$.getJSON("https://tenor.googleapis.com/v2/search?q=" + inputValue + "&key=AIzaSyCBQWLA4y1W2aTTdn39WFhQpvzadcXxrOM&locale=" + getLang(), function (data) {
			$.each(data.results, function (index, imagelist) {
				var image = imagelist.media_formats.gif.url;
				$("#tenor_searchresult").append("<div style='width: 45%;height: 90px;' class='skchaticon sk_icon' alt='[s] " + image + " [e]'><img style='max-width: 100%;max-height: 100%;' class='skicon lazyload' data-src='" + image + "'></div>");
			});
		});
	}
});

$("#tenor_categories").html('');
$.getJSON("https://tenor.googleapis.com/v2/categories?key=AIzaSyCBQWLA4y1W2aTTdn39WFhQpvzadcXxrOM&locale=" + getLang(), function (data) {
	$.each(data.tags, function (index, tags) {
		$("#tenor_categories").append('<div class="skchaticon tenortags" data-id="' + tags.searchterm + '" style="background-image: url(' + tags.image + ');"><div class="tenortags_searchterm">' + tags.searchterm + '</div></div>');
	});
});


$('body').on('click', '.tenortags', function (e) {
	var inputValue = $(this).data('id');
	$("#tenor-search").val(inputValue);
	$("#tenor_searchresult").show();
	$("#tenor_categories").hide();
	$("#tenor_searchresult").html('');
	$("#tenor-search-clear").show();
	$.getJSON("https://tenor.googleapis.com/v2/search?q=" + inputValue + "&key=AIzaSyCBQWLA4y1W2aTTdn39WFhQpvzadcXxrOM&locale=" + getLang(), function (data) {
		$.each(data.results, function (index, imagelist) {
			var image = imagelist.media_formats.gif.url;
			$("#tenor_searchresult").append("<div style='width: 45%;height: 90px;' class='skchaticon sk_icon' alt='[s] " + image + " [e]'><img style='max-width: 100%;max-height: 100%;' class='skicon lazyload' data-src='" + image + "'></div>");
		});
	});
});


$.getJSON("https://sk-knower.com/sklive_api/read/skchat_set.php?showset=public", function (setarray) {
	$("#emo-select").html('<div class="emo-select-channel" style="background-image: url(https://live.sk-knower.com/flag/ttv.png);" data-id="icon-set-twitchList"></div><div class="emo-select-channel" data-id="icon-set-localskicon">本台</div><div class="emo-select-channel" data-id="icon-set-tenor">GIF</div>');
	var set = setarray.set;
	$.each(set, function (index, list) {
		if (list.image != '') {
			if (list.name == "sk9fish") {
				$("#emo-select").append('<div class="emo-select-channel icon-set-' + list.name + ' emo-selected" style="background-image: url(' + list.image + ');" data-id="icon-set-' + list.name + '"></div>');
				$("#emo-page").append("<div id='icon-set-" + list.name + "' class='icon-set'></div>");
			} else {
				$("#emo-select").append('<div class="emo-select-channel icon-set-' + list.name + '" style="background-image: url(' + list.image + ');" data-id="icon-set-' + list.name + '"></div>');
				$("#emo-page").append("<div id='icon-set-" + list.name + "' class='icon-set' style='display:none;'></div>");
			}
		} else {
			$("#emo-select").append('<div class="emo-select-channel icon-set-' + list.name + '" data-id="icon-set-' + list.name + '">' + list.dis + '</div>');
			$("#emo-page").append('<div id="icon-set-' + list.name + '" class="icon-set" style="display:none;"></div>');
		}
		if (list.about != '') {
			if (list.action != '') {
				var setaction = '<a href="' + list.url + '" target="_blank"><div class="aboutsetaction">' + list.action + '</div></a>';
			}
			$("#icon-set-" + list.name).append('<div class="aboutset"><div style="width: 100%;padding: 1px 10px;">' + list.about + '</div>' + setaction + '</div>');
		}
		loadset(list.name)
		if (index === (set.length - 1)) {
			$("#emo-select").append('<div class="emo-select-channel icon-set-BTTV" data-id="icon-set-BTTV">BTTV</div>');
			$("#emo-page").append("<div id='icon-set-BTTV' class='icon-set' style='display:none;'></div>");
			getbttv();
			$("#emo-select").append('<div class="emo-select-channel icon-set-FFZ" data-id="icon-set-FFZ">FFZ</div>');
			$("#emo-page").append("<div id='icon-set-FFZ' class='icon-set' style='display:none;'></div>");
			getffz();
			$("#emo-select").append('<div class="emo-select-channel icon-set-seventv" data-id="icon-set-seventv">7TV</div>');
			$("#emo-page").append("<div id='icon-set-seventv' class='icon-set' style='display:none;'></div>");
			getseventv();
			if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
				skchatemoscroll = $("#emo-page").overlayScrollbars({
					scrollbars: { autoHide: "move", },
				}).overlayScrollbars();
			}
		}
	});
});

emoloop = [];
function loadset(iconset) {
	$.getJSON("https://sk-knower.com/sklive_api/read/skchat_icon.php?set=" + iconset, function (iconarray) {
		emoloop.push(iconarray[iconset]);
		$.each(iconarray[iconset], function (index, list) {
			if (list.id != '') {
				var dis = list.dis;
				var alt = list.alt;
				var src = list.src;
				if (dis == '') {
					var dis = list.alt;
				}
				if (src) {
					if (dis) { var dis = dis; } else { var dis = alt; }
					var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" src="' + src + '"></br>' + dis + '</div>';
					$("#icon-set-" + iconset).append("<div class='skchaticon sk_icon' data-toggle='tooltip' alt='" + alt + "' data-original-title='" + pimg + "'><img class='skicon lazyload' data-src='" + src + "'></div>");
				} else {
					$("#icon-set-" + iconset).append("<div class='skchaticon sk_icon sk_emoticon' alt='" + alt + "'>" + dis + "</div>");
				}
				if (!isMobile) {
					$('.skchaticon').tooltip({ trigger: 'hover', html: 'true', placement: 'top' });
				}
			}
		});
	});
}



function updateiconon(name, tmitime) {
	$.getJSON("https://sk-knower.com/twitch_api/user/login.php?login=" + name, function (data) {
		var profile_img = data.data[0].profile_image_url;
		$("." + name + tmitime).attr("src", profile_img);
		twitchicon[name] = profile_img;
	});
}

function showMsg(msg, channel, user, submsg, msgid, tmitime, specialclass, skhistory, firstmsg) {
	if (skhistory && $(".loadinghistory").is(":visible")) {
		skhistory = 'true';
	} else {
		skhistory = 'false';
	}
	if (tmitime) {
		if (tmitime != '' && $("." + tmitime).length != 0) {
			return false;
		}
		timedata = tmitime;
		tmitime = "replythis " + tmitime + "";
	} else {
		tmitime = '';
		timedata = '';
	}
	if (submsg != 'submsg') {
		containerclass = 'container';
	} else {
		containerclass = '';
	}
	if (user != null) {
		var user = user.replace(/\+/g, '_');
	}

	if (firstmsg == 1) {
		var firstmsgclass = 'firstmsgclass';
		var firstmsgdis = '<span class="skClass" style="background: #3986e7;padding: 0px 5px;font-size: 13px;color: #e6e6e6;">首次留言</span>';
	} else {
		var firstmsgclass = '';
		var firstmsgdis = '';
	}

	if (style == 'monhun' && user != 'null') {
		var usericon = twitchicon[user];
		if (usericon == null) {
			var usericon = '//acg.sk-knower.com/user/profile_icon/sundayla123.png?257655098';
			var usericonbox = '<span class="skClass_usericon"><img class="profile-icon ' + user + tmitime + '" src="' + usericon + '"></span>';
			updateiconon(user, tmitime);
		} else {
			var usericon = twitchicon[user];
			var usericonbox = '<span class="skClass_usericon"><img class="profile-icon" src="' + usericon + '"></span>';
			//hide: console.log(usericonbox);
		}
	} else {
		var usericonbox = '';
	}

	var channelid = channel.replace(/^#/, '');
	if (channelid == user) { var usert = ''; } else { var usert = 'normaluser'; }
	if (typeof user == 'undefined') { var user = ''; }

	delete_line();

	var number = Math.floor((Math.random() * 10000) + 1);
	if (prepend == 'true' && nicochat != 'on' || prepend == 'on' && nicochat != 'on') {
		$("#messages").prepend('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + msgid + ' ' + specialclass + '" data-time="' + timedata + '" style="right:100%;position: relative;">' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>").ready(function () {
		});
	} else {
		if (nicochat == 'true' || nicochat == 'on') {
			if (!$("#line0").find('.chatline').length) {
				x = 0;
				lastlinein = 0;
			} else if (lastlinein == lastline) {
				x = 0;
				lastlinein = 0;
			} else {
				x = x + 1;
				lastlinein = x;
			}
			$("#line" + x).append('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + msgid + ' ' + specialclass + '" data-time="' + timedata + '" style="left:100%;position: absolute;white-space:nowrap;">' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>")
		} else {
			if (slide == 'right' || slide == 'right2left') {
				if (skhistory != 'true') {
					$("#messages").append('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + msgid + ' ' + specialclass + '" data-time="' + timedata + '" style="left:100%;position: relative;">' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>").ready(function () { });
				} else {
					$(".loadinghistory").parent("span").parent("div").before('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + specialclass + '" data-time="' + timedata + '" style="left:100%;position: relative;">' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>").ready(function () { });
				}
			} else if (slide == 'none') {
				//here
				if (skhistory != 'true') {
					$("#messages").append('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + msgid + ' ' + specialclass + ' ' + firstmsgclass + '" data-time="' + timedata + '" style="right:0%;position: relative;">' + firstmsgdis + '' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>").ready(function () { });
				} else {
					$(".loadinghistory").parent("span").parent("div").before('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + specialclass + ' ' + firstmsgclass + '" data-time="' + timedata + '" style="right:0%;position: relative;">' + firstmsgdis + '' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>").ready(function () { });
				}
			} else {
				if (skhistory != 'true') {
					$("#messages").append('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + msgid + ' ' + specialclass + '" data-time="' + timedata + '" style="right:100%;position: relative;">' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>").ready(function () { });
				} else {
					$(".loadinghistory").parent("span").parent("div").before('<div class="chatline ' + channelid + ' ' + user + ' ' + usert + ' chat' + number + user + ' ' + tmitime + ' ' + msgid + ' ' + specialclass + '" data-time="' + timedata + '" style="right:100%;position: relative;">' + usericonbox + '<span class="' + containerclass + '">' + msg + "</span></div>").ready(function () { });
				}
			}
		}
		if (specialclass == 'successconnect') {
			if (firstloadchatjs == 'true') {
				
			} else {
				
			}
		}
	}

	if (fade == 'none') { } else { var numbername = number + user; fadeout(numbername); }
	setspeed = 200;
	if (nicochat == 'true' || nicochat == 'on') {
		setspeed = parseInt(nicospeed);
		var setwidth = $('.chat' + number + user).width() + 999;
		var chatposition = '-' + setwidth + 'px';
	} else { var chatposition = '0%'; }
	if (slide == 'right' || slide == 'right2left') {
		$('.chat' + number + user).animate({ "left": chatposition }, { duration: setspeed, easing: "linear", complete: function () { if (nicochat == 'true' || nicochat == 'on') { $('.chat' + number + user).remove(); } } });
	} else {
		$('.chat' + number + user).animate({ "right": chatposition }, { duration: setspeed, easing: "linear", complete: function () { if (nicochat == 'true' || nicochat == 'on') { $('.chat' + number + user).remove(); } } });
	}


	//$(".chat"+number+user+" > .container > .skClass_top >.skClass > img").load(function() {
	//scroller();
	//});
	//$(".chat"+number+user+" > .container > .skClass_top >.skClass > .skimg >img").load(function() {
	//	scroller();
	//});
	if ($(".chat" + number + user + " > .container > .skClass_top >.skClass > .skimg >img")) {
		scroller('img');
	}
	$(".chat" + number + user + " > .container > .skClass_top >.skClass > .skimg >img").on("load", function () {
		console.log('1');
		scroller();
	});

	scroller();
	$('.timestamp').tooltip({ trigger: 'hover', html: 'true', placement: 'top' });
}

///////////////////////////////////


function skiconloop(message) {
	myArray = message.split(" ");
	for (var i = 0; i < myArray.length; i++) {
		var clearmessage = clearhtml(myArray[i]);
		var urls = clearmessage.match(/(https?:\/\/(?:www\.|(?!www))[-a-zA-Z0-9@:%._\+~#=]+[-a-zA-Z0-9@:%._\+~#=][^.]\.[^[\s]{1,}|www[^.]\.[^.-a-zA-Z0-9@:%._\+~#=]+[-a-zA-Z0-9@:%._\+~#=][^.]\.[^[\s]{2,}|https?:\/\/(?:www[^.]\.[^.]|(?!www))([-a-zA-Z0-9@:%._\+~#=][^.]|[-a-zA-Z0-9@:%._\+~#=])\.[^[\s]{2,}|www[^.]\.[^.-a-zA-Z0-9@:%._\+~#=]\.[^\s]{2,})|(([a-zA-Z0-9]+:\/\/)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?(([a-zA-Z0-9.-][^.]|[a-zA-Z0-9.-])\.[A-Za-z]{2,})(:[0-9]+)?(\/.*)?)/img);
		if (urls != null) {
			if (myArray[i] == urls[0]) {
				if (!urls[0].match("http")) {
					var link = "https://" + urls[0];
				} else {
					var link = urls[0];
				}
				var res = urls[0].match("/clip/(.*)");
				var ress = urls[0].match("/clips.twitch.tv/(.*)");
				var resa = urls[0].match(/twitch/g);
				if (res && resa) {
					dataset = urls[0].replace(urls[0], '<a href="' + link + '" target="_blank">' + urls[0] + '</a>[clip]' + res[1] + '[clips]');
				} else if (ress) {
					dataset = urls[0].replace(urls[0], '<a href="' + link + '" target="_blank">' + urls[0] + '</a>[clip]' + ress[1] + '[clips]');
				} else {
					dataset = urls[0].replace(urls[0], '<a href="' + link + '" target="_blank">' + urls[0] + '</a>');
				}
				myArray[i] = dataset;
			}
		}
	}

	$.each(myArray, function (ix, eachsplit) {
		if (eachsplit.length > 1) {
			$.each(emoloop, function (i, item) {
				$.each(item, function (i, item) {
					if (item.height != 0) {
						var aregex = new RegExp("^" + item.code + "$", "gi");
						if (eachsplit.match(aregex)) {
							myArray[ix] = "<img class='skicon' src='" + item.src + "' height='" + item.height + "' alt='" + item.alt + "'></img>";
						}
					}
				});
			});
		}
	});

	$.each(myArray, function (ix, eachsplit) {
		if (eachsplit.length > 1)
			$.each(uicon, function (i, item) {
				var aregex = new RegExp("^" + item.alt + "$", "gi");
				if (eachsplit.match(aregex)) {
					myArray[ix] = "<img class='skicon' src='" + item.src + "' height='" + item.height + "' alt='" + item.alt + "'></img>";
				};
			});
	});

	message = myArray.join(" ");
	//console.log(message);


	return message;
}

function fadeout(number) { setTimeout(function () { $('.chat' + number).fadeOut(); }, fade); }
var urlsetting = getQueryVariable("url");

debugmode = '';
function parse_msg(text) {
	text = stripHTML(text);
	if (text == 'after history') { scroller(); }
	if (text == 'twitch_fail') {
		// REQUEST USER REFRESH TWITCH TOKEN
		$('#rechat-login').show();
		$('#chat-form').hide();
	}
	var data = text.split(" ", 5);
	if (data[3] == '#yt') {
		var msgg = text.split("PRIVMSG #yt :")[1];
		var msgfrom = 'youtube';
	} else {
		var msgg = text.split("PRIVMSG #" + twitch + " :")[1];
		var msgfrom = 'twitch';
	}
	/* 	//hide: console.log(data[2]);  //hide: console.log(data[4]); */
	if (data[1] == 'CLEARCHAT' || data[2] == 'CLEARCHAT' || data[3] == 'CLEARCHAT') {
		banreason = ''; banduration = '';
		if (data[4] == undefined) { banuser = ''; } else { banuser = data[4].replace(/:/g, ''); }
		if (data[0].match("ban-reason=(.*?);")) { banreason = data[0].match("ban-reason=(.*?);")[1]; }
		if (data[0].match("ban-duration=(.*?);")) { banduration = data[0].match("ban-duration=(.*?);")[1]; }
		if (data[0].match("ban-duration=(.*?);")) { banduration = data[0].match("ban-duration=(.*?);")[1]; }
		return {
			'valid': 0,
			'clearnchat': "yes",
			'banreason': banreason,
			'banduration': banduration,
			'banuser': banuser
		}
	}
	if (data[2] == 'CLEARMSG') {
		if (data[0].match("target-msg-id=(.*?);")) { deletedmsg = data[0].match("target-msg-id=(.*?);")[1]; }
		return {
			'valid': 0,
			'clearnchat': "yes",
			'deletedmsg': deletedmsg
		}
	}
	if (data[2] == 'NOTICE') {
		var datasp = text.split(" ", 5);
		var msgg = text.split("NOTICE #" + twitch + " :")[1];
		if (msgg == 'Exited host mode.') {
			chat_host = false;
			hosttarget = '';
			mainupdate(live_id);
		}
		return {
			'valid': 0,
			'systemmessage': 'yes',
			'message': msgg
		}
	}
	if (data[1] == 'HOSTTARGET') {
		var datasp = text.split(" ", 4);
		hosttarget = datasp[3].replace(/:/g, '');
		if (hosttarget != '-') {
			chat_host = 'true';
			$("#hosting").html("<a href='//sk-knower.com/twitch/" + hosttarget + "' style='' onclick='changechannel(&#39;" + hosttarget + "&#39;);return false;'><div style='display: flex;'><div><i class='material-icons' style='font-size: 18px;'>arrow_forward</i></div><span style='margin-left: 6px;'>前往轉播頻道:</span><span id='nextchannelname' style='background: #2a60e6;padding: 0px 9px;margin: 0px 10px;text-transform: capitalize;'>" + hosttarget + "</span></div></a>");
			$('#hosting').css('display', 'block');
			mainupdate(live_id);
		} else {
			chat_host = 'false';
			$('#hosting').css('display', 'none');
		}
		return {
			'valid': 0,
			'hostfunction': 'yes',
			'message': datasp[3].replace(/:/g, '')
		}
	}
	if (data[3] == ':Invalid') {
		invalidnick = 'true';
		//$('#rechat-login').show();
		//$('#chat-form').hide();
	}
	if (data[1] == 'history') {
		if (reconnectstatee != 'true') {
			if (firstloadchatjs == 'true') {
				showMsg("", 'server', '', '', '', '', 'successconnect', 'true');
				firstloadchatjs = 'false';
			} else {
				showMsg('', 'server', '', '', '', '', 'successconnect', 'true');
			}
			$(".loadinghistory").hide();
			$('#msginput').prop("disabled", false);
			scroller();
			skchatscroll.scroll(999999999999999);
			reconnectstatee = 'true';
		}
		return true;
	}
	if (data[2] == 'PRIVMSG' || data[2] == 'USERNOTICE') {
		if (data[2] == 'USERNOTICE') {
			usernotice = text.split("USERNOTICE #" + twitch + " :")[1];
			var msgg = text.split("USERNOTICE #" + twitch + " :")[1];
		}
		if (typeof (msgg) == "undefined") {
			msgg = '';
		}
		var color = data[0].match("color=(.*?);");
		if (color) { var color = color[1]; } else { var color = '#FF0000'; }
		var firstmsg = data[0].match("first-msg=(.*?);");
		if (firstmsg) { var firstmsg = firstmsg[1]; } else { var firstmsg = '0'; }
		var chatstyle = '';
		if (data[4] == ':ACTION') {
			var chatstyle = 'color:' + color;
			var message = msgg.replace(/ACTION /, '').replace(//g, '').replace(/[\n\r]/g, '');
		} else {
			if (data[3] == '#yt') {
				var message = msgg;
				////hide: console.log(message);
			} else {
				var message = msgg;
				var message = msgg.replace(/[\n\r]/g, '').replace(//g, '');
			}
		}
		timea = data[0].match("tmi-sent-ts=(.*?);");
		var tmisentts = data[0].match("tmi-sent-ts=(.*?);");
		if (settime == '12') {
			if (timea[1] != '') {
				date = new Date(parseInt(timea[1]));
			} else {
				date = new Date();
			}
			var timestamp = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
		} else {
			if (timea[1] != '') {
				date = new Date(parseInt(timea[1]));
			} else {
				date = new Date();
			}
			var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
			var hour = date.getHours();
			var hour = ((hour + 11) % 12 + 1);
			var timestamp = hour + ":" + minutes;
		}

		var orgname = data[1].match("@(.*).tmi.twitch.tv");
		if (data[2] == 'USERNOTICE') {
			var orgname = data[0].match("login=(.*?);");
		}
		var historical = data[0].match("historical=(.*?);");
		var displayname = data[0].match("name=(.*?);");
		var usertype = data[0].match("type=(.*)");
		var usertype = usertype[1];
		if (displayname) {
			if (displayname[1] == '') {
				displayname = data[1].match("@(.*).tmi.twitch.tv");
			}


			var elem = document.createElement('textarea');
			elem.innerHTML = message;
			var message = elem.value.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

			var emotes = data[0].match("emotes=(.*?);");
			var emotes = emotes[1].split("/");
			if (emotes[0] != '') {
				//console.log(emotes[0]);
				var skcode = '';
				for (var i = 0; i < emotes.length; i++) {
					var emoraw = emotes[i].split(":");
					var emopositionrange = emoraw[1].split(",");
					var emopositionrange12 = emopositionrange[0].split("-");
					var emono1 = emopositionrange12[0];
					var emono2 = emopositionrange12[1];
					emono2++;
					message = message.replace(/&lt;3/g, '<3').replace(/&gt;\(/g, '>(');
					emogcode = message.substring(emono1, emono2);
					var skcode = emogcode + '&' + emoraw[0] + ',' + skcode;
				}
				var skcode = skcode.split(",");
				for (var i = 0; i < skcode.length; i++) {
					if (skcode[i] == '') { } else {
						var skbcode = skcode[i].split("&");
						skbc = skbcode[0].replace(')', '\\)').replace('(', '\\(').replace('|', '\\|').replace('/', '\\/');
						var aregex = new RegExp('(\\s|^)' + skbc + '(\\b|$)', "g");
						message = message.replace(aregex, ' <img title="' + skbc + '" class="emoticon ttv-emo-' + skbcode[1] + '" src="//static-cdn.jtvnw.net/emoticons/v2/' + skbcode[1] + '/default/dark/1.0"/>');
					}
				}
			}

		} else { displayname = data[1].match("@(.*).tmi.twitch.tv"); }
		var subscriber = data[0].match("subscriber=(.*?);");
		var subscriber = subscriber[1];
		var mod = data[0].match("mod=(.*?);");
		if (mod != null) { var mod = mod[1]; var mod = mod[0]; } else { var mod = '0'; }


		if (urlsetting == 'false') {
			urls = message.match(/\b(http|https)?(:\/\/)?(\S*)\.(\w{3,5}(\S*))\b/ig);
			if (urls != null) {
				for (var i = 0; i < urls.length; i++) {
					message = message.replace(urls[i], ' url delete ');
				}
			}
		}


		/* (?<=\s|^)@([^\s]*) */
		var loginname = message.match(/(\s|^)@([^\s]*)/ig);
		//console.log(message);
		if (loginname != null) {
			//console.log(loginname);
			$.each(loginname, function (key, value) {
				var loginname = value.replace(' ', '');
				if (loginname == "@" + login_displayname || loginname == "@" + login_username) {
					message = message.replace(loginname, '<span class="chat_mention_user">' + loginname + '</span>');
				} else if (loginname != "" && loginname != "@" && loginname.charAt(1) != '_') {
					//console.log(loginname.charAt(1));
					message = message.replace(loginname, '<span class="chat_mention_other">' + loginname + '</span>');
				}
			});
		}

		message = skiconloop(message);
		message = updateCounter(message);


		if (displayname[1] == 'Sundayla123' && message == '!listreload' && msgfrom == 'twitch') {
			Set1List = '';
			Set2List = '';
			Set3List = '';
			Set4List = '';
			Set5List = '';
			Set6List = '';
			Set7List = '';
			hkg1 = '';
			hkg1 = '';
			lomoreList = '';
			halloweenlomore = '';
			hiddenlist = '';
			eventlist = '';
			event2list = '';
			emoicon = '';
			//hide: console.log('載入');
			showMsg("success", 'server');
		}

		if (!historical) {
			if (displayname[1] == 'Sundayla123' && message == '!offimgtag' && msgfrom == 'twitch') {
				imgtag = 'false';
				showMsg("success", 'server');
			}
			if (displayname[1] == 'Sundayla123' && message == '!onimgtag' && msgfrom == 'twitch') {
				imgtag = '';
				showMsg("success", 'server');
			}
			if (displayname[1] == 'Sundayla123' && message == '!reload' && msgfrom == 'twitch') {
				//location.reload();
			}
			if (displayname[1] == 'SKLiveBOT' && message == '!setbg' && msgfrom == 'twitch') {
				load_chatbg();
			}
			if (displayname[1] == 'Sundayla123' && message == '!setbg' && msgfrom == 'twitch') {
				load_chatbg();
			}
			if (orgname[1].toLowerCase() == loginttv && msgfrom == 'twitch') {
				var orgmsg = msgg.replace(/[\n\r]/g, '').replace(//g, '');
				var div = document.createElement("div");
				div.innerHTML = orgmsg;
				orgmsg = div.textContent;
				var theclass = encodeURI(orgmsg.replace(/ /g, "")).length;
				//console.log('cover_pendingchat');
				if ($("." + theclass)[0]) {
					$('.' + theclass).data("time", tmisentts[1]);
					$('.' + theclass + '>.container>.skClass_top>.skClass').html(message);
					$("." + theclass + " > .container > .skClass_top >.skClass > img").on('load', function () {
						scroller('img');
					});
					$("." + theclass + " > .container > .skClass_top >.skClass > .skimg > img").on('load', function () {
						scroller('img');
					});
					$('.' + theclass).removeClass("chatline pendingchat frombroadcaster " + theclass).addClass("chatline frombroadcaster replythis " + tmisentts[1]).attr("time", tmisentts[1]);
					scroller();
					return false;
				}
			}
		}
		var receiver = data[3].replace(/^#/, '');
		if (receiver == orgname[1]) {
			var usertype = 'broadcaster';
		}
		var turbo = data[0].match("turbo=(.*?);");
		if (turbo == null) {
			var turbo = "0";
		} else {
			var turbo = turbo[1];
		}


		bitsmsg = data[0].match(";bits=(.*?);");
		if (bitsmsg != null) {
			//hide: console.log('havebits');
			for (var i = 0; i < bitsiconset.data.length; i++) {
				var iconvar = bitsiconset.data[i];
				var prefix = iconvar.prefix;
				var regex = new RegExp("\\b(" + prefix + "([0-9]+?))\\b", "gi");
				var firstmatch = message.match(regex);
				if (firstmatch) {
					for (var a = 0; a < firstmatch.length; a++) {
						var numberregex = new RegExp(prefix, "gi");
						var bitsnumber = firstmatch[a].replace(numberregex, '');
						if (bitsnumber >= 1 && bitsnumber <= 99) {
							var setid = '1';
						} else if (bitsnumber >= 100 && bitsnumber <= 999) {
							var setid = '100';
						} else if (bitsnumber >= 1000 && bitsnumber <= 4999) {
							var setid = '1000';
						} else if (bitsnumber >= 5000 && bitsnumber <= 9999) {
							var setid = '5000';
						} else if (bitsnumber >= 10000) {
							var setid = '10000';
						}
						if (bitsnumber) {
							for (var b = 0; b < iconvar.tiers.length; b++) {
								if (iconvar.tiers[b].id == setid) {
									var icon = iconvar.tiers[b].images.dark.animated[2];
									var bcolor = iconvar.tiers[b].color;
									break;
								}
							}
							message = message.replace(firstmatch[a], '<img class="emoticon ttv-cheer" style="height: 28px;padding: 0px 10px;" src="' + icon + '"><strong style="color:' + bcolor + ';">' + bitsnumber + '</strong> ');
						}
					}
				}
			}
		}

		bbinfo = data[0].match("badge-info=(.*?);");
		if (bbinfo) {
			var thefounder = bbinfo[0].match("founder/([0-9]+)");
			var subscriberm = bbinfo[0].match("subscriber/([0-9]+)");
		}
		if (thefounder) {
			founder = thefounder[1];
		} else {
			founder = 'none';
		}

		if (subscriberm) {
			subscribermonth = subscriberm[1];
		} else {
			subscribermonth = 'none';
		}

		var badgeslist_info = data[0].match("@badge-info=(.*?);");

		ppb = data[0].match(";badges=(.*?);");
		if (ppb) {
			var badgeslist = ppb[1].split(",");
			var subb = ppb[1].match("subscriber/([0-9]+)");
			var thepartner = ppb[1].match("partner/([0-9]+)");
			var thebitsleader = ppb[1].match("bits-leader/([0-9]+)");
			var thesubgiftleader = ppb[1].match("sub-gift-leader/([0-9]+)");
			var thegifter = ppb[1].match("sub-gifter/([0-9]+)");
			var thestaff = ppb[1].match("staff/([0-9]+)");
			var thevip = ppb[1].match("vip/([0-9]+)");
			var thebits = ppb[1].match("bits/([0-9]+)");
			var thepremium = ppb[1].match("premium/([0-9]+)");
			var thetrain = ppb[1].match("hype-train/([0-9]+)");
			var theowner = ppb[1].match("owner/([0-9]+)");
			var theverified = ppb[1].match("verified/([0-9]+)");
			var thesponsor = ppb[1].match("sponsor/([0-9]+)");
			var themoderator = ppb[1].match("ytmoderator/([0-9]+)");
			var theicon = ppb[1].match("icon/(.*?),");
		}

		if (subscriber[0] == '1') {
			if (subb) {
				var subnum = subb[1];
			} else {
				var subnum = 'none';
			}
		} else {
			var subnum = 'none';
		}


		if (thepartner) {
			partner = thepartner[1];
		} else {
			partner = 'none';
		}

		if (thebitsleader) {
			bitsleader = thebitsleader[1];
		} else {
			bitsleader = 'none';
		}


		if (thesubgiftleader) {
			subgiftleader = thesubgiftleader[1];
		} else {
			subgiftleader = 'none';
		}

		if (thegifter) {
			gifter = thegifter[1];
		} else {
			gifter = 'none';
		}

		if (thestaff) {
			staff = thestaff[1];
		} else {
			staff = 'none';
		}


		if (thevip) {
			vip = thevip[1];
		} else {
			vip = 'none';
		}


		if (thebits) {
			bits = thebits[1];
		} else {
			bits = 'none';
		}

		if (thepremium) {
			premium = thepremium[1];
		} else {
			premium = 'none';
		}


		if (thetrain) {
			hypetrain = thetrain[1];
		} else {
			hypetrain = 'none';
		}

		//youtube

		if (theowner) {
			owner = theowner[1];
		} else {
			owner = 'none';
		}

		if (theverified) {
			verified = theverified[1];
		} else {
			verified = 'none';
		}

		if (thesponsor) {
			sponsor = thesponsor[1];
		} else {
			sponsor = 'none';
		}

		if (themoderator) {
			moderator = themoderator[1];
		} else {
			moderator = 'none';
		}

		if (theicon) {
			icon = theicon[1];
		} else {
			icon = 'none';
		}
		highlighted = '';
		subtype = 'none';
		subprice = '';
		submonths = '';
		subcumulativemonths = '';
		recipient = '';
		recipientid = '';

		chatmsgid = data[0].match("msg-id=(.*?);");
		if (chatmsgid !== null && chatmsgid.length > 1) {
			chatmsgidcontent = chatmsgid[1];
			if (chatmsgidcontent == 'highlighted-message') {
				var highlighted = 'true';
			}
		}

		if (data[2] == 'USERNOTICE') {
			subtype = chatmsgid[1];
			if (subtype == 'resub' || subtype == 'subgift' || subtype == 'anonsubgift' || subtype == 'sub') {
				if (subtype == 'resub') {
					subshare = data[0].match("msg-param-should-share-streak=(.*?);");
					subshare = subshare[1];
					subcumulativeparam = data[0].match("msg-param-cumulative-months=(.*?);");
					subcumulativemonths = subcumulativeparam[1];
					if (subshare != 0) {
						subparam = data[0].match("msg-param-streak-months=(.*?);");
						submonths = subparam[1];
					}
				}
				if (subtype == 'subgift') {
					recipient = data[0].match("msg-param-recipient-display-name=(.*?);");
					recipient = recipient[1];
					recipientid = data[0].match("msg-param-recipient-user-name=(.*?);");
					recipientid = recipientid[1];
				} else if (subtype == 'anonsubgift') {
					recipient = data[0].match("msg-param-recipient-display-name=(.*?);");
					recipient = recipient[1];
					recipientid = data[0].match("msg-param-recipient-user-name=(.*?);");
					recipientid = recipientid[1];
				}
				subplan = data[0].match("msg-param-sub-plan=(.*?);");
				if (subplan[1] == 'Prime') {
					subprice = 'Prime';
				} else if (subplan[1] == '1000') {
					subprice = '$4.99';
				} else if (subplan[1] == '2000') {
					subprice = '$9.99';
				} else if (subplan[1] == '3000') {
					subprice = '$24.99';
				}
			} else if (subtype == 'unraid') {
				var raidmsg = data[0].match("system-msg=(.*?);");
				var raidmsgs = raidmsg[1].replace(/(\\s)/g, " ");
				showMsg("<span class='skClass afterhistory'><System>" + raidmsgs + "</span>", 'server');
				return { 'valid': 0 }
			} else {
				console.log(data[0]);
				var raidmsg = data[0].match("system-msg=(.*?);");
				var raidmsgs = raidmsg[1].replace(/(\\s)/g, " ");
				if (usernotice && typeof raidmsgs !== 'undefined') {
					showMsg("<span class='skClass afterhistory'>[System] " + raidmsgs + "" + usernotice + "</span>", 'server');
					return { 'raidmsg': 0 }
				} else {
					if (typeof raidmsgs !== 'undefined') {
						showMsg("<span class='skClass afterhistory'>[system]" + raidmsgs + "</span>", 'server');
						return { 'valid': 0 }
					}
				}
			}
		}

		skhistory = data[0].match("skhistory=1");
		if (skhistory) {
			var skhistory = 'true';
		} else {
			var skhistory = '';
		}

		var replymsgorg = data[0].match("reply-parent-msg-body=(.*?);");
		if (replymsgorg) {
			//console.log(replymsgorg);
			//console.log(replymsgorg[1].replace( /(\\s)/g, " " ));
			var replymsg = skiconloop(replymsgorg[1].replace(/(\\s)/g, " "));
		} else {
			var replymsg = '';
		}

		var msgid = data[0].match(";id=(.*?);");
		if (msgid) {
			var msgid = msgid[1];
		} else {
			var msgid = '';
		}

		var replynameorg = data[0].match("reply-parent-display-name=(.*?);");
		if (replynameorg) {
			var replyname = replynameorg[1];
		} else {
			var replyname = '';
		}
		return {
			'user': displayname[1],
			'valid': 1,
			'color': color,
			'orgname': orgname[1],
			'usertype': usertype,
			'emotes': emotes,
			'channel': data[2],
			'receiver': receiver,
			'chatstyle': chatstyle,
			'timestamp': timestamp,
			'turbo': turbo,
			'tmisentts': tmisentts[1],
			'subscriber': subscriber[0],
			'subscribernumber': subnum,
			'subscribermonth': subscribermonth,
			'message': message,
			'mod': mod,
			'partner': partner,
			'bitsleader': bitsleader,
			'subgiftleader': subgiftleader,
			'founder': founder,
			'gifter': gifter,
			'staff': staff,
			'vip': vip,
			'premium': premium,
			'hypetrain': hypetrain,
			'bits': bits,
			'owner': owner,
			'verified': verified,
			'sponsor': sponsor,
			'moderator': moderator,
			'icon': icon,
			'subtype': subtype,
			'subplan': subprice,
			'submonths': submonths,
			'subcumulativemonths': subcumulativemonths,
			'recipient': recipient,
			'recipientid': recipientid,
			'skhistory': skhistory,
			'replymsg': replymsg,
			'replyname': replyname,
			'badgeslist_info': badgeslist_info,
			'badgeslist': badgeslist,
			'highlighted': highlighted,
			'firstmsg': firstmsg,
			'msgid': msgid
		}
	} else {
		return { 'valid': 0 }
	}
}
$(window).resize(function () {
	$('#top-box').css('height', $(window).innerHeight() + 'px');
	if ($("#chatview").length) {
		var overall = $(window).innerHeight();
		var viewcountheight = $("#chatview").height();
		var setheight = overall - viewcountheight;
		$('#messages').css('max-height', setheight + 'px');
	}
	scroller();
});
firstreconstate = '';
secondreconstate = '';
startconnectchat('both');


clientRE = new tmi.Client({
	channels: [twitch]
});
clientRE.connect();
clientRE.on("raw_message", (messageCloned, message) => {
	var data = message.raw;
	var lines = data.split("\r\n");
	for (var i = 0; i < lines.length; i++) {
		messagein(lines[i]);
	}
});


var tk = getCookie('acgt');
var acgu = getCookie('acgu');
var sktkb = getCookie('sktkb');
var cid, ctk;
$.holdReady(true);
$.get("https://sk-knower.com/function/sql_cfm_twitchchattoken.php?name=" + acgu + "&sktkb=" + sktkb).done(function (data) {
	if (typeof client !== 'undefined') {
		client.disconnect();
	}
	funget(data);
});


$("#vview").html("觀眾");
var funget = function (param) {
	var parsed = JSON.parse(param);
	cid = parsed.twitch;
	ctk = parsed.token;
	var options = {
		options: {
			skipUpdatingEmotesets: true,
			skipMembership: false,
		},
		connection: {
			secure: true,
			reconnect: true
		},
		identity: {
			username: cid,
			password: ctk
		},
		channels: ["#" + twitch]
	};
	client = new tmi.client(options);
	client.connect()
		.catch((err) => {
			console.log(err);
			if (err == "Improperly formatted auth") {
				$('#rechat-login').show();
				$('#chat-form').hide();
			}
		});

	client.on("raw_message", (messageCloned, message) => {
		var data = message.raw;
		//debugmode='t';
		if (debugmode != '') {
			//console.log(data);
		}
		var lines = data.split("\r\n");
		for (var i = 0; i < lines.length; i++) {
			if (lines[i].match(/ NOTICE /g)) {
				messagein(lines[i]);
				if (data == ":tmi.twitch.tv NOTICE * :Login authentication failed") {
					showMsg('<span class="skClass afterhistory">聊天室重新登入中...</span>', 'server');
					setTimeout(function () {
						//$.get("https://sk-knower.com/function/sql_cfm_twitchchattoken.php?name="+acgu+"&sktkb="+sktkb).done(function(data) {
						//	funget(data); 	
						//});	
					}, 3000);
				}
			} else if (lines[i].match(/GLOBALUSERSTATE/g)) {
				if (GLOBALUSERSTATE == 'false') {
					var emotesets = lines[i].match("emote-sets=(.*);user-id");
					var login_displaynameB = lines[i].match("display-name=(.*);emote");
					login_displayname = login_displaynameB[1];
					var emotes = emotesets[1].split(",");
					for (var i = 0; i < emotes.length; i++) {
						//console.log(emotes[i]);
						getttviconset(emotes[i]);
					}
					GLOBALUSERSTATE = 'true';
				}
			} else if (lines[i].match(/PRIVMSG/g)) {
				messagein(lines[i]);
			}
		}
		if (message.command == "USERSTATE") {
			if (typeof message.tags.badges != "undefined") {
				var badges = message.tags.badges.split(",");
				var badge = "";
				$.each(badges, function (key, data) {
					var nameclass = data.replace('/', '');
					badge += '<span class="badge_' + nameclass + ' chatico">　</span>';
				});
				var firstnameclass = badges[0].replace('/', '');
				$("#chatform-icon").attr("data-original-title", '<span class="skClass_userinfo" style="font-size: 15px;">' + badge + '<span data-id="' + message.tags["display-name"] + '" class="from nick chat_user_id" style="color:' + message.tags.color + ';cursor:pointer;">' + message.tags["display-name"] + ':</span></span>');
				$("#chatform-icon").attr("class", "defaultbadage badge_" + firstnameclass);
				if (!isMobile) {
					$('#chatform-icon').tooltip({ trigger: 'hover', html: 'true', placement: 'top' });
				}
			} else {
				$("#chatform-icon").attr("data-original-title", '<span class="skClass_userinfo" style="font-size: 15px;"><span data-id="' + message.tags["display-name"] + '" class="from nick chat_user_id" style="color:' + message.tags.color + ';cursor:pointer;">' + message.tags["display-name"] + ':</span></span>');
				if (!isMobile) {
					$('#chatform-icon').tooltip({ trigger: 'hover', html: 'true', placement: 'top' });
				}
			}
		} else if (message.command == "JOIN") {
			$("#vview").append("<div id='vlist_" + message.prefix.split('!')[0] + "' class='viewlistname'><span data-id=" + message.prefix.split('!')[0] + " class='chat_user_id'>" + message.prefix.split('!')[0] + "</span></div>");
		} else if (message.command == "PART") {
			$("#vlist_" + message.prefix.split('!')[0]).remove();
		}

	});
	$.holdReady(false);
}


function startconnectchat(channel) {
	connectionOptions = {
		"force new connection": true,
		"timeout": 20000, //before connect_error and connect_timeout are emitted.
		"transports": ["websocket"]
	};
	window.onunload = function () {
		sockete.close();
		socket.close();
	}
	if (token != 'error') {
		//if(channel=='both' || channel=='first'){
		//socket = io('https://loginchat2.sk-knower.com', connectionOptions);
		//socket.on('connect', function() {
		//		if(firstreconstate==''&&reconnectstate==''){
		//		showMsg("<span class='skClass'>載入"+connectto+"</span>", 'server');
		//		showMsg("<span class='skClass loadinghistory'></span>", 'server');
		//showMsg("<span class='skClass loadinghistory'><div class='preloader-wrapper small active'><div class='spinner-layer spinner-blue-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>下載SKChat聊天紀錄</span>", 'server');
		//		gosocket();
		//		firstreconstate='loading';
		//		}
		//});
		//socket.on('reconnect', function() {
		//	console.log('MAIN - RECON');
		//	gosocket();
		//});
		//socket.on('reconnect_attempt', (attemptNumber) => {
		//	console.log("Tried"+attemptNumber+"connect error");
		//});
		//}

		// if(channel=='both' || channel=='second'){
		// sockete = io.connect('https://loginchat2.sk-knower.com');
		// sockete.on('connect', function() {
		// 		if(secondreconstate==''&&reconnectstatee==''){
		// 		//showMsg("<span class='skClass'>載入"+connectto+"</span>", 'server');
		// 		gosockete(); 
		// 		console.log('startconnectchat');
		// 		secondreconstate='loading';
		// 		}
		// });
		// sockete.on('reconnect', function() {
		// 	console.log('loginchatser - RECON');
		// 	gosockete();
		// });
		// sockete.io.on("error", (error) => {
		// 	console.log('loginchatser error - '+error);
		// 	gosockete();
		// });
		// sockete.on("error", (error) => {
		// 	console.log('loginchatser error2 - '+error);
		// 	gosockete();
		// });
		// }
	} else { showMsg("<span class='skClass'>[SKChat]聊天室Token錯誤,請在Dashboard再次複製</span>", 'server'); }
}


$(document).ready(function () {
	showMsg('<span class="skClass"><img src="https://sk-knower.com/img/logo/skl_d_ncc.png" style="height: 35px;">聊天室載入中...</span>', 'server');
	$('#top-box').css('height', $(window).innerHeight() + 'px');
	var thestyle = getQueryVariable("style");
	if (thestyle == 'feature') {
		$('body').addClass('featurebg');
		$('#top-box').css('height', '250px');
		$('<style>.chatline,.skClass  { color:#cbcbcb !important; }</style>').appendTo('body');
	}
	if (thestyle == 'fulldark') {
		$('body').css('background', 'rgb(35, 35, 35)');
	}
	if (thestyle == 'dark') {
		$('body').css('background', 'rgba(0,0,0,0.3)');
	}
	if (twitch) {
		$("#chatbadage").remove();
		$.get("//chat.sk-knower.com/badge_api.php?term=" + live_id).done(function (bad) {
			var $css = $('<style id="chatbadage"></style>');
			$css.attr('type', 'text/css');
			$css.html(bad);
			$("head").append($css);
		});
	}
});


GLOBALUSERSTATE = 'false';
last_ping = new Date();



/*socket.on('message', function (data) {
	//console.log("SENconsole.log("SEND OUT SOCKET"+data);
	
	  if(data=="Server closed connection. You are offline. Use /connect to connect."||data=='Error: This socket is closed.'||data=='Error: This socket has been ended by the other party'){
		//console.log('socket on ->'+data);
		gosocket();
	$("#successfollow").show();
	}
	var lines = data.split( "\r\n" );
	for ( var i = 0; i < lines.length; i++ )  {
		if ( lines[i].match( /^PING.*/ //) ) { 
/*	//hide: console.log(lines); 
		socket.send("PONG tmi.twitch.tv\r\n");
		last_ping = new Date();
	} else if ( lines[i] != ''  ) {
if(lines[i].match(/GLOBALUSERSTATE/g)){
	if(GLOBALUSERSTATE=='false'){
	var emotesets=lines[i].match("emote-sets=(.*);user-id");
	var login_displaynameB=lines[i].match("display-name=(.*);emote");
	login_displayname=login_displaynameB[1];
	var emotes=emotesets[1].split(",");
	for ( var i = 0; i < emotes.length; i++ )  {
		//console.log(emotes[i]);
		getttviconset(emotes[i]);
	}
	GLOBALUSERSTATE='true';
}
firstreconstate='';
}else if(lines[i].match(/ JOIN /g)){
	var join=lines[i].match("JOIN (.*)");
	if (join) {
	if(join[1]!="#"+twitch){
		//reconnect();
	}
	}
}else if(lines[i].match(/:You are in a maze of twisty passages, all alike./g)){
var login_usernameB=lines[i].split( " " );
login_username=login_usernameB[2];
}else if(lines[i].match(/ NOTICE /g)) {
messagein(lines[i]);
}
	}
}
});
*/

function reconnect() {
	if (recon <= 0) {
		//gosocket();
		recon = 1;
	} else {
		if (recon > 5) {
			recon = 1;
		} else {
			recon = recon + 1;
		}
	}
}
function timer() {
	recon = recon - 1;
	if (recon <= 0) {
		clearInterval(counter);
		recon = 0;
		return;
	}
}

socketclose = '';
buffermessage = '';
GLOBALUSERSTATEe = 'false';
last_pinge = new Date();
// sockete.on('message', function (data) {
// 	//console.log(data);
// 	 //console.log(data.split( "\r\n" ));
// 	 if(buffermessage!=''){
// 		buffermessage += data;
// 		data = buffermessage;
// 		buffermessage='';
// 		//console.log("####合成####");
// 		//console.log(data.split( "\r\n" ));
// 	 }
// 	var lines = data.split( "\r\n" );
// 	if(data.match(/skhistory/) || data.match(/after history/)){
// 		var readline= lines.length;
// 	}else{
// 	if(lines[lines.length-1]!=""){
// 		buffermessage+= lines[lines.length-1];
// 	}
// 		var readline= lines.length-1;
// 	}
// 	for ( var i = 0; i < readline; i++ )  {
// 		/*	//hide: console.log(lines); */
// 		if ( lines[i].match( /^PING.*/ ) ) {
// 	/*	//hide: console.log(lines); */
// 			sockete.send("PONG tmi.twitch.tv\r\n");
// 			last_ping = new Date();
// 		} else if ( lines[i] != ''  ) {
// if(lines[i].match(/^JOIN*/)){
// 		var join=lines[i].match("JOIN (.*)");
// 		if (join) {
// 		if(join[1]!="#"+twitch){
// 				//reconnecte(); console.log('socketE JOIN Error');
// 		}
// 	}
// }else if(lines[i].match(/ NOTICE /g)) {

// }else{
// 	if(lines[i]=="Server closed connection. You are offline. Use /connect to connect."||lines[i]=='Error: This socket has been ended by the other party'){
// 		console.log('socketE on ->'+lines[i]);
// 		sockete.disconnect();
// 		sockete.connect();
// 		//reconnectalert();
// 	$("#successfollow").show();
// 	}else if(lines[i]=='Error: This socket is closed'){
// 		socketclose++
// 		if(socketclose>3){
// 			gosockete();
// 			socketclose='';
// 		}
// 	}else{
// 	socketclose='';
// 	secondreconstate='';
// 	messagein(lines[i]);
// 	}
// }
// 		}
// 	}
// });

function reconnecte() {
	if (recone <= 0) {
		//gosockete();
		recone = 1;
	} else {
		if (recone > 5) {
			recone = 1;
		} else {
			recone = recone * 2;
		}
	}
}
function timere() {
	recone = recone - 1;
	if (recone <= 0) {
		clearInterval(countere);
		recone = 0;
		return;
	}
}

function getttviconset(id) {
	$.ajax({
		url: "https://sk-knower.com/twitch_api/qin_token2.php",
		type: "GET",
		success: function (token) {
			$.ajax({
				url: "https://api.twitch.tv/helix/chat/emotes/set?emote_set_id=" + id,
				type: "GET",
				beforeSend: function (xhr) { xhr.setRequestHeader('Client-ID', 'qin0np1e02qpn72t5xo76b7p5qgpkeb'); xhr.setRequestHeader('Authorization', 'Bearer ' + token); },
				success: function (e) {
					if (id == '0') {
						var obj = e.data;
						var listid = "9999999999";
					} else if (e.data[0]) {
						var obj = e.data;
						var listid = e.data[0].owner_id;
					}
					$("#icon-set-twitchList").append("<div id='icon-set-twitchList-" + listid + "' style='order:" + listid + ";display: flex;flex-wrap: wrap;align-items: center;justify-content: center;'></div>");
					$.each(obj, function (key, icon) {
						var code = icon.name;
						var code = code.replace('\\', "").replace('-', '').replace('?\\', '').replace('?(p|P)', 'p').replace('?(o|O)', 'o').replace('?[\\\/]', '/').replace('?', '').replace('\;\\', '').replace('\\;', '').replace('&lt;', '<').replace('[\\/]', '/').replace('[oO](_|.)[oO]', 'O_o').replace('&lt3', '<3').replace('>\\(', ' >(').replace(':[z|Z|\\|]', ':|').replace(':[\\\\/]', ':/');
						if (code) {
							var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" class="skicon" src="https://static-cdn.jtvnw.net/emoticons/v2/' + icon.id + '/default/dark/1.0"></br>' + code + '</div>';
							$("#icon-set-twitchList-" + listid).append("<div class='skchaticon sk_icon' alt='" + code + "' data-toggle='tooltip' style='width:30px;height:30px;order:" + icon.id + ";' data-original-title='" + pimg + "'><img class='skicon lazyload' style='max-width: 28px;max-height: 28px;' data-src='https://static-cdn.jtvnw.net/emoticons/v2/" + icon.id + "/default/dark/1.0'></div>");
						}
					})
					if (!isMobile) {
						$('.skchaticon').tooltip({ trigger: 'hover', html: 'true', placement: 'top' });
					}
				}
			});
		}
	});
}



function messagein(data) {
	var msg = parse_msg(data);
	if (msg.valid) {
		var datetime = new Date(parseInt(msg.tmisentts));
		var userid = msg.user.replace(/\+/g, ' ');
		var skhistory = msg.skhistory;
		var userorg = msg.orgname.replace(/\+/g, ' ');
		badges = '';
		$.each(msg.badgeslist, function (index, value) {
			if (value != '') {
				var iconnamec = value.split("/");
				var iconname = iconnamec[0];
				var value = value.replace(/\//g, "");
				if (value == 'founder0') {
					badges = badges + "<span title='" + msg.founder + "-Month Subscriber (Founder Badage)' class='chatico badge_founder0'>　</span>";
				} else if (value.match(/subscriber*/g)) {
					badges = badges + "<span title='" + msg.subscribermonth + "-Month Subscriber (#" + msg.subscribernumber + "-Month Badage)' class='chatico subscriber badge_subscriber" + msg.subscribernumber + "'>　</span>";
				} else {
					var badgeslist_info = msg.badgeslist_info;
					if (typeof badgeslist_info === 'object') {
					var info = badgeslist_info[1].match(iconname + "\/(.*),");
					if (info !== null) {
						if (typeof info[1] != "undefined") {
							var icon_dis = iconnamec + "," + info[1];
						} else {
							var icon_dis = iconnamec;
						}
					} else {
						var icon_dis = iconnamec;
					}
					badges = badges + "<span title='" + icon_dis + "' class='badge_" + value + " chatico'>　</span>";
					}
				}
			}
		});
		if (msg.usertype == '' || msg.usertype == 'mod' || msg.usertype == 'staff') { var susertype = ''; } else { var susertype = "<span title='" + msg.usertype + "' class='badge_" + msg.usertype + " chatico'>　</span>"; }
		if (msg.replymsg == '') { var replymsg = ''; } else { var replymsg = '<div class="replyscrollto" data-time="nodata" style="border-radius: 2px;font-size: 14px;padding: 0px 5px;border-left: 5px solid #e6d670;">回覆@' + msg.replyname + ': ' + updateCounter(msg.replymsg) + '</div>'; }
		if (showid == '' || showid == 'default') { if (userorg.toLowerCase() == userid.toLowerCase()) { var theuserid = userid; } else { var theuserid = userid + ' (' + userorg + ')'; } }
		if (msg.recipientid.toLowerCase() == msg.recipient.toLowerCase()) { var therecipient = msg.recipient; } else { var therecipient = msg.recipientid + ' (' + msg.recipient + ')'; }
		if (showid == 'nick' || msg.icon != 'none') { var theuserid = userid; }
		if (showid == 'username') { var theuserid = userorg; }
		if (msg.highlighted == 'true') { var highlighted = 'highlighted-msg'; } else { var highlighted = ''; }
		if (msg.firstmsg == '1') { var firstmsg = '1'; } else { var firstmsg = ''; }
		//console.log(highlighted);
		var nextusername = new RegExp(userorg.toLowerCase() + ',', 'g');
		if (msg.subtype == 'none') {
			if (ignore_user.match(nextusername)) {
				var fullhideblockeduser = localStorage.getItem("fullhideblockeduser");
				console.log('msgblock ' + nextusername);
				if (fullhideblockeduser != 'true') {
					showMsg('<div class="blockmsg" style="color: #757575;cursor: pointer;"><div style="display:none;"><span class="skClass_userinfo""><span class="timestamp" data-toggle="tooltip" data-original-title="' + datetime + '">' + msg.timestamp + '</span> ' + badges + '<span data-id="' + userorg + '" class="from nick chat_user_id" style="color:' + msg.color + ';cursor:pointer;">' + theuserid + ':</span></span> <span class="skClass_top"><span class="skClass ' + highlighted + '" style="' + msg.chatstyle + '">' + replymsg + msg.message + '</span><span class="skClassMore"><span data-chat="' + msg.tmisentts + '" class="skClassMoreBtn click_reply"><i class="material-icons" style="font-size: 17px;">reply</i></span><div style="display:none;" class="chat_option"><i class="material-icons click_reply" data-chat="' + msg.tmisentts + '" style="font-size: 17px;padding: 0px 5px;cursor: pointer;">reply</i><i class="material-icons click_save" data-chat="' + msg.tmisentts + '" style="font-size: 17px;padding: 0px 5px;cursor: pointer;display:none;">save_alt</i></div></span></span></div>Messge from blocked user</div>', msg.receiver, msg.orgname, 'normal', msg.msgid, msg.tmisentts, 'none', skhistory);
				}
			} else {
				showMsg('<span class="skClass_userinfo"><span class="timestamp" data-toggle="tooltip" data-original-title="' + datetime + '">' + msg.timestamp + '</span> ' + badges + '<span data-id="' + userorg + '" class="from nick chat_user_id" style="color:' + msg.color + ';cursor:pointer;">' + theuserid + ':</span></span> <span class="skClass_top"><span class="skClass ' + highlighted + '" style="' + msg.chatstyle + '">' + replymsg + msg.message + '</span><span class="skClassMore"><span data-chat="' + msg.tmisentts + '" class="skClassMoreBtn click_reply"><i class="material-icons" style="font-size: 17px;">reply</i></span><div style="display:none;" class="chat_option"><i class="material-icons click_reply" data-chat="' + msg.tmisentts + '" style="font-size: 17px;padding: 0px 5px;cursor: pointer;">reply</i><i class="material-icons click_save" data-chat="' + msg.tmisentts + '" style="font-size: 17px;padding: 0px 5px;cursor: pointer;display:none;">save_alt</i></div></span></span>', msg.receiver, msg.orgname, 'normal', msg.msgid, msg.tmisentts, 'none', skhistory, firstmsg);
			}
		} else {
			if (msg.subtype == 'resub') {
				if (msg.message != '') {
					var subwords = '<div class="submsg"><span class="skClass_userinfo"><span class="timestamp" data-toggle="tooltip" data-original-title="' + datetime + '">' + msg.timestamp + '</span> ' + badges + '<span class="from subnick" style="color:' + msg.color + '">' + theuserid + ':</span></span><sapn style="padding-left: 10px;">' + msg.message + '</sapn></div>';
				} else { var subwords = ''; }
				var totalmonth = '連續訂閱頻道' + msg.submonths + '個月了!';
				var currentmonth = '已累計訂閱' + msg.subcumulativemonths + '個月!';
				if (!msg.submonths) {
					var monthmsg = currentmonth;
				} else {
					if (msg.submonths == msg.subcumulativemonths) {
						var monthmsg = totalmonth;
					} else {
						var monthmsg = totalmonth + currentmonth;
					}
				}
				showMsg('<span><div class="subbox"><span style="padding: 5px;">訂閱</span><span class="subprice">' + msg.subplan + '</span><span class="subdis">' + theuserid + '' + monthmsg + '</span></div>' + subwords + '</span>', msg.receiver, msg.orgname, 'submsg', msg.msgid, msg.tmisentts, 'none', skhistory);
			} else if (msg.subtype == 'subgift') {
				if (msg.message != '') {
					var subwords = '<div class="submsg"><span class="skClass_userinfo"><span class="timestamp" data-toggle="tooltip" data-original-title="' + datetime + '">' + msg.timestamp + '</span> ' + badges + '<span class="from subnick" style="color:' + msg.color + '">' + theuserid + ':</span></span><sapn style="padding-left: 10px;">' + msg.message + '</sapn></div>';
				} else { var subwords = ''; }
				showMsg('<span><div class="subbox"><span style="padding: 5px;">' + theuserid + '已送出 <span class="subprice">' + msg.subplan + '</span> 訂閱 給' + therecipient + '</span><span class="subdis"></span></div>' + subwords + '</span>', msg.receiver, msg.orgname, 'submsg', msg.msgid, msg.tmisentts, 'none', skhistory);
			} else if (msg.subtype == 'anonsubgift') {
				if (msg.message != '') {
					var subwords = '<div class="submsg"><span class="skClass_userinfo"><span class="timestamp" data-toggle="tooltip" data-original-title="' + datetime + '">' + msg.timestamp + '</span> ' + badges + '<span class="from subnick" style="color:' + msg.color + '">' + theuserid + ':</span></span><sapn style="padding-left: 10px;">' + msg.message + '</sapn></div>';
				} else { var subwords = ''; }
				showMsg('<span><div class="subbox"><span style="padding: 5px;">[匿名者送出] <span class="subprice">' + msg.subplan + '</span> 訂閱 給' + therecipient + '</span><span class="subdis"></span></div>' + subwords + '</span>', msg.receiver, msg.orgname, 'submsg', msg.msgid, msg.tmisentts, 'none', skhistory);
			} else if (msg.subtype == 'sub') {
				showMsg('<span><div class="subbox"><span style="padding: 5px;">訂閱</span><span class="subprice">' + msg.subplan + '</span><span class="subdis">' + theuserid + '訂閱頻道了!</span></div></span>', msg.receiver, msg.orgname, 'submsg', msg.msgid, msg.tmisentts, 'none', skhistory);
			}
		}
		if (msg.message.match("!sklive_sundayla123")) {
			var timestamp = new Date().toString("hh:mm tt")
			showMsg("<span class='timestamp' data-toggle='tooltip' data-original-title='" + datetime + "'>" + timestamp + "</span> <span class='from nick' style='color:#1E90FF'>SKChat:</span> <span class='skClass_top'><span class='skClass'>SKLive作者:Sundayla123</span></span>", 'server');
		}

		if (msg.message.match("!sklive_list")) {
			showMsg("<span class='timestamp' data-toggle='tooltip' data-original-title='" + datetime + "'>" + timestamp + "</span> <span class='from nick' style='color:#1E90FF'>SKChat:</span> <span class='skClass_top'><span class='skClass'>中文直播就在SKLive https://live.sk-knower.com/</span></span>", 'server');
		}

		if (msg.message.match("!v")) {
			//showMsg("v2", 'server');
		}

	} else {
		if (msg.clearnchat == 'yes') {
			if (typeof msg.deletedmsg !== "undefined") {
				$("." + msg.deletedmsg).css({
					'filter': 'blur(5px)',
					'-webkit-filter': 'blur(5px)',
					'-moz-filter': 'blur(5px)',
					'-o-filter': 'blur(5px)',
					'-ms-filter': 'blur(5px)'
				});
				showMsg('<span class="skClass">[SKLive] 已清除了一個聊天對話</span>', 'channel');
			} else if (msg.banuser == '') {
				$("#messages > .chatline").remove();
				showMsg('<span class="skClass">[SKLive] 已清除聊天內容</span>', 'channel');
			} else {
				if (banreason != '') { banreason = ',原因:' + banreason; } else { banreason = ''; }
				if (banduration != '') { banduration = ',' + banduration + '秒'; } else { banduration = ''; }
				$("." + msg.banuser).css({
					'filter': 'blur(5px)',
					'-webkit-filter': 'blur(5px)',
					'-moz-filter': 'blur(5px)',
					'-o-filter': 'blur(5px)',
					'-ms-filter': 'blur(5px)'
				});
				showMsg('<span class="skClass">[SKLive] ' + msg.banuser + '已被禁言' + banreason + banduration + '</span>', 'channel');
			}
		}
		if (msg.systemmessage == 'yes' && typeof msg.message != 'undefined') {
			showMsg('<span class="skClass">[System]' + msg.message + '</span>', 'channel');
		}
		msg = data.split(' ');
		if (msg.length > 2 && msg[1] == 'JOIN') {
			if (msg[0].slice(1, msg[0].indexOf('!')) == $('#nick').val()) {
				switch_channel(msg[2]);
				$('#channel').append('<li onclick="switch_channel( $(this).text() );" id="'
					+ msg[2].replace(/^#/, '') + '">' + msg[2] + '</li>');
			}
			else {
			}

		} else if (msg.length > 2 && msg[1] == 'PART') {
		} else if (msg.length > 4 && msg[1] == '332') {
			showMsg(data.replace(/^:[^:]*:/, ''), userbann);
		} else if (msg.length > 4 && msg[1] == '353') {
			if (reconnectstate != 'true') {
				$.getJSON("https://record.sk-knower.com/api/chat_record/list.php?id=" + live_id, function (data) {
					if (data.length != 0) {
						$.each(data, function (key, msg) {
							var total = data.length - 1;
							messagein(msg);
							if (key == total) {
								if (firstloadchatjs == 'true') {
									showMsg("", 'server', '', '', '', '', 'successconnect', 'true');
									firstloadchatjs = 'false';
								} else {
									showMsg('', 'server', '', '', '', '', 'successconnect', 'true');
								}
								showMsg('<span class="skClass afterhistory">成功載入聊天室</span>', 'server');
								scroller('fixed');
								setTimeout(scroller('fixed'), 1000);
								if (firstloadchatjs == 'true') {
									
								} else {
									
								}
							}
						});
					} else {
						if (firstloadchatjs == 'true') {
							showMsg("", 'server', '', '', '', '', 'successconnect', 'true');
							firstloadchatjs = 'false';
						} else {
							showMsg('', 'server', '', '', '', '', 'successconnect', 'true');
						}
						showMsg('<span class="skClass afterhistory">成功載入聊天室</span>', 'server');
						if (firstloadchatjs == 'true') {
							
						} else {
							
						}
					}
				});
				reconnectstate = 'true';
			}
			last_ping = new Date();
		} else if (msg.length > 2 && msg[1] == 'MODE') {
			showMsg(data.replace(/^.* MODE /, 'Mode ') + ' by ' +
				msg[0].replace(/^:/, '').replace(/!.*$/, ''), msg[2]);
		} else {
		}
	}
}


function getParameterByName(name, url) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(url);
	if (results == null)
		return "";
	else
		return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function extractTagAndUrl(str) {
	const regex = /\[(s|y|start)\]\s+<a\s+href="([^"]+)"[^>]+>[^<]+<\/a>/i;
	const match = str.match(regex);
  
	if (match) {
	  const tag = match[1];
	  const url = match[2];
	  return { tag, url, match};
	} else {
	  return null;
	}
}

function updateCounter(message) {
	a = message;
	//console.log(message);
	aa = message;

	if (imgtag == 'false' || imgtag == '') { } else {
		if (a.match(/\[s]/g)) {
			var start = aa.indexOf('[s]');
			var end = aa.indexOf('e]');
			if (end > start && end >= 0 && start >= 0) {
				c = aa.substring(0, start);
			}
			var start = a.indexOf('[s]');
			var end = a.indexOf('e]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				//c = a.substring(0, start); // w/e before #start#
				var d = a.substring(end + 2)  // w/e after #end#
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[s]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent;
				var number = Math.floor((Math.random() * 1000) + 1);

				if (b.match(/youtu/g) && !b.match(/img/g) && !b.match(/jpg/g) && !b.match(/png/g) && !b.match(/gif/g)) {
					if (b.match(/watch?/g)) {
						var b = getParameterByName('v', b);
					} else {
						b = b.replace('https://www.', '').replace('https://', '').replace('youtu.be/', '').replace('youtube.com/embed/', '').replace('youtube.com/shorts/', '').replace('youtube.com/live/', '').replace('&feature=share', '');
					}
					var t = getParameterByName('t', b);
					var e = '<div><a data-fancybox style="text-decoration: none;" href="https://www.youtube.com/watch?v=' + b + '"><div style="padding: 5px;background: rgba(0, 0, 0, 0.45098039215686275);color: white;border-radius: 5px 5px 0px 0px;">Youtube <i class="material-icons" style="font-size: 20px;float: right;">open_in_new</i></div></a><iframe width="100%" height="150" src="https://www.youtube.com/embed/' + b + '?start=' + t + '" frameborder="0" allowfullscreen style="vertical-align: middle;"></iframe></div>';
				} else if (b.match(/twitter/g)||b.match(/https:\/\/x.com/g)) {
						b = b.replace('https://x.com', 'https://twitter.com');
						var e = '<blockquote class="twitter-tweet"><p lang="zh-tw" dir="ltr"><a href="'+b+'"></a></p></blockquote>';
						setTimeout(function() {
							$('body').append('<script async src="https://platform.twitter.com/widgets.js"></script>');
							scroller();
						}, 1000);
				} else if (b.match(/www.threads.com/g)) {
    $('body').append('<script async src="https://www.threads.com/embed.js"></script>');
    url = b.match(/@[\w.]+\/post\/[\w]+/);
    if (url && url[0]) {
        var e = '<iframe class="text-post-media threads-embed" id="text-post-embed-0" src="https://www.threads.com/' + url[0] + '/embed" allowtransparency="true" allowfullscreen="true" frameborder="0" height="100" data-text-app-payload-id="tp-initial" scrolling="no" style="background: #FFF;min-width:270px;padding:0;border:none;border-radius:12px;"></iframe>';
        setTimeout("scroller('700')", 2000);
    }
				} else if (b.match(/.webm$/g) || b.match(/.mp4$/g) || b.match(/.webm\?/g) || b.match(/.mp4\?/g)) {
					var number = Math.floor((Math.random() * 100000) + 1);
					var e = '<a class="skpopimg skimg" data-fancybox href="' + b + '" target="_blank"><video id="' + number + '" onclick="vodgif(' + number + ');" autoplay="true" loop="true" playsinline="true" muted="true" style="max-height: 200px;  max-width: 250px;" src="' + b + '"></video></a>';
				} else if (b.match(/steampowered/g) || b.match(/steamcommunity/g)) {
					var number = Math.floor((Math.random() * 100000) + 1);
					burl = b.match("app/([0-9]+)");
					if (burl) {
						var e = '<iframe id="' + number + '" width="100%" height="190px" src="https://store.steampowered.com/widget/' + burl[1] + '" frameborder="0" allowfullscreen></iframe><a href="steam://store/' + burl[1] + '" target="_blank"><div style="color: #d2efa9;text-shadow: 1px 1px 2px rgba( 0, 0, 0, 0.3 );text-align: center;padding: 0px 11px;line-height: 34px;border-radius: 2px;text-transform: unset;background: #75b022;">以Steam程式查看商店頁面</div></a>';
					} else {
						var e = b;
					}
				} else {
					var e = '<a class="skpopimg skimg" data-fancybox="gallery" href="' + b + '" target="_blank"><img id="' + number + '" alt="[s]' + b + '[e]" src="' + b + '" style="max-height: 150px;  max-width: 100%;vertical-align: middle;"/></a>';
				}
				a = c + e + d; // result
				$('#' + number).on('load', function () {
					console.log('#' + number);
					scroller();

				});
			}
		}

		if (a.match(/\[p]/g)) {
			var start = a.indexOf('[p]');
			var end = a.indexOf('i]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				var c = a.substring(0, start); // w/e before #start#
				var d = a.substring(end + 2)  // w/e after #end#
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[p]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent.replace('https://www.pixiv.net/member_illust.php?mode=medium&illust_id=', '').replace('https://www.pixiv.net/artworks/', '');
				if (d.match(/18+/g)) {
					var e = '<span class="mentioned"><a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank" style="color: #FFFFFF;background-color: #000;">18+ pixiv id=' + b + '</a></span>';
				} else {
					if (!d.match(/noshow/g)) {
						var number = Math.floor((Math.random() * 1000) + 1);
						var e = '<a class="skpopimg skimg" href="https://www.pixiv.net/member_illust.php?mode=medium&amp;illust_id=' + b + '" target="_blank"><img id="i' + number + '" alt="[p]' + b + '[i]" src="http://embed.pixiv.net/decorate.php?illust_id=' + b + '" style="max-height: 200px;  max-width: 250px;vertical-align: text-bottom;"></a>';
					} else { var e = '<span class="mentioning"><a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank">pixiv id=' + b + '</a></span>'; }
				}
				a = c + e + d; // result
				//var kids =$(skmessage).parent("li").children(".from");
				//var usernamedata=kids.text();
				//$('#sk_set11').html($('#sk_set11').html()+usernamedata+' : '+e+'<br>');
				$('#i' + number).on('load', function () {
					scroller();
				});
				//hide: console.log(e);
			}
		}


		if (a.match(/\[S]/g)) {
			var start = a.indexOf('[S]');
			var end = a.indexOf('E]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				var c = a.substring(0, start); // w/e before #start#
				var d = a.substring(end + 2)  // w/e after #end#
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[S]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent;
				var number = Math.floor((Math.random() * 1000) + 1);
				var e = '<a class="skpopimg skimg" data-fancybox="gallery" href="' + b + '" target="_blank"><img id="' + number + '" alt="[S]' + b + '[E]" src="' + b + '" style="max-height: 150px;  max-width: 100%;vertical-align: middle;"/></a>';
				a = c + e + d; // result
				$('#' + number).on('load', function () {
					scroller();

				});
				//hide: console.log(e);
			}
		}
		if (a.match(/\[start]/g)) {
			var start = a.indexOf('[start]');
			var end = a.indexOf('end]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				var c = a.substring(0, start); // w/e before #start#
				var d = a.substring(end + 4)  // w/e after #end#
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[start]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent;
				var number = Math.floor((Math.random() * 1000) + 1);
				var e = '<a class="skpopimg skimg" data-fancybox="gallery" href="' + b + '" target="_blank"><img id="' + number + '" alt="[start]' + b + '[end]" src="' + b + '" style="max-height: 150px;  max-width: 100%;vertical-align: middle;"/></a>';
				a = c + e + d; // result
				$('#' + number).on('load', function () {
					scroller();

				});
				//hide: console.log(e);
			}
		}
		if (a.match(/\[img]/g)) {
			var start = a.indexOf('[img]');
			var end = a.indexOf('/img]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				var c = a.substring(0, start); // w/e before #start#
				var d = a.substring(end + 5)  // w/e after #end#
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[img]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent;
				var number = Math.floor((Math.random() * 1000) + 1);
				var e = '<a class="skpopimg skimg" data-fancybox="gallery" href="' + b + '" target="_blank"><img id="' + number + '" alt="[img]' + b + '[/img]" src="' + b + '" style="max-height: 150px;  max-width: 100%;vertical-align: middle;"/></a>';
				a = c + e + d; // result
				$('#' + number).on('load', function () {
					scroller();

				});
				//hide: console.log(e);
			}
		}
		if (a.match(/\[IMG]/g)) {
			var start = a.indexOf('[IMG]');
			var end = a.indexOf('/IMG]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				var c = a.substring(0, start); // w/e before #start#
				var d = a.substring(end + 5)  // w/e after #end#
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[IMG]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent;
				var number = Math.floor((Math.random() * 1000) + 1);
				var e = '<a class="skpopimg skimg" data-fancybox="gallery" href="' + b + '" target="_blank"><img id="' + number + '" alt="[IMG]' + b + '[/IMG]" src="' + b + '" style="max-height: 150px;  max-width: 100%;vertical-align: middle;"/></a>';
				a = c + e + d; // result
				$('#' + number).on('load', function () {
					scroller();

				});
			}
		}

		if (a.match(/\[clip\]/g)) {
			var start = a.indexOf('[clip]');
			var end = a.indexOf('clips]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				var c = a.substring(0, start); // w/e before #start#
				var d = a.substring(end + 6)  // w/e after #end#
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[clip]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent;
				var number = Math.floor((Math.random() * 1000) + 1);
				var e = clipsdetails(b);
				a = c + e + d; // result
				$('#' + number).on('load', function () {
					scroller();

				});
			}
		}

		if (a.match(/\[y\]/g)) {
			var start = a.indexOf('[y]');
			var end = a.indexOf('t]');
			var eend = a.indexOf('[t]');
			if (end > start && end >= 0 && start >= 0) {
				var b = a.substring(start, end); // contents between #start# and #end#
				var c = a.substring(0, start); // w/e before #start#
				var d = a.substring(eend + 3).replace('[t]', '');  // w/e after #end#  https://www.youtube.com/embed/https://www.youtube.com/watch?time_continue=6&v=xxx?fs=0
				b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[y]', '').replace('[', '');
				var div = document.createElement("div");
				div.innerHTML = b;
				var b = div.textContent;
				if (b.match(/影片連結/g)) { } else {
					if (b.match(/facebook/g)) {
						console.log(b);
						var fbvideoid = b.match("videos/(.*?)");
						console.log(fbvideoid);
						if (fbvideoid) {
							var fbvideoid = fbvideoid[1];
							var e = '<div><div style="padding: 5px;background: rgba(0, 0, 0, 0.45098039215686275);color: white;border-radius: 5px 5px 0px 0px;">Facebook <i class="facebookclosevideo material-icons" data-fbid="' + fbvideoid + '" class="material-icons" style="cursor:pointer;font-size: 20px;float: right;" >close</i> <i class="material-icons" data-fancybox data-type="iframe" data-src="https://www.facebook.com/plugins/video.php?href=' + b + '&amp;show_text=0&amp;width=300&height=200" href="javascript:;" style="cursor:pointer;font-size: 20px;float: right;">open_in_new</i></div><div style="min-width: 250px;text-align: center;line-height: 200px;height: 200px;box-shadow: none;color: white;position: relative;overflow: hidden;background: black;cursor: pointer;" data-fbid="' + b + '" class="facebookvideo ' + fbvideoid + '"><div style="Background-image: url();position: absolute;color: white;z-index: 0;width: 100%;height: 100%;opacity: 0.5;background-size: contain;background-repeat: no-repeat;background-position: center;"></div><div>播放</div></div></div>';
						} else {
							var e = b;
						}
					} else if (b.match(/twitter/g)||b.match(/https:\/\/x.com/g)) {
						b = b.replace('https://x.com', 'https://twitter.com');
						var e = '<blockquote class="twitter-tweet"><p lang="zh-tw" dir="ltr"><a href="'+b+'"></a></p></blockquote>';
						setTimeout(function() {
							$('body').append('<script async src="https://platform.twitter.com/widgets.js"></script>');
							scroller();
						}, 1000);
					} else if (b.match(/www.threads.com/g)) {
    $('body').append('<script async src="https://www.threads.com/embed.js"></script>');
    url = b.match(/@[\w.]+\/post\/[\w]+/);
    if (url && url[0]) {
        var e = '<iframe class="text-post-media threads-embed" id="text-post-embed-0" src="https://www.threads.com/' + url[0] + '/embed" allowtransparency="true" allowfullscreen="true" frameborder="0" height="100" data-text-app-payload-id="tp-initial" scrolling="no" style="background: #FFF;min-width:270px;padding:0;border:none;border-radius:12px;"></iframe>';
        setTimeout("scroller('700')", 2000);
    }
					} else if (b.match(/.webm/g) || b.match(/.mp4/g)) {
						var number = Math.floor((Math.random() * 100000) + 1);
						var e = '<a class="skpopimg skimg" data-fancybox  href="' + b + '" target="_blank"><video id="' + number + '" autoplay="" loop="" playsinline="true" muted="" style="max-height: 200px;  max-width: 250px;" src="' + b + '"></video></a>';
					} else if (b.match(/img/g) || b.match(/jpg/g) || b.match(/png/g) || b.match(/gif/g) || b.match(/jpg/g)) {
						var e = '<a class="skpopimg skimg" data-fancybox="gallery" href="' + b + '" target="_blank"><img id="' + number + '" alt="[s]' + b + '[e]" src="' + b + '" style="max-height: 150px;  max-width: 100%;vertical-align: middle;"/></a>';
					} else {
						if (b.match(/watch?/g)) {
							var b = getParameterByName('v', b);
						} else {
							b = b.replace('https://www.', '').replace('https://', '').replace('youtu.be/', '').replace('youtube.com/embed/', '').replace('youtube.com/shorts/', '').replace('youtube.com/live/', '').replace('&feature=share', '');
						}
						var t = getParameterByName('t', b);
						var e = '<div><a data-fancybox style="text-decoration: none;" href="https://www.youtube.com/watch?v=' + b + '"><div style="padding: 5px;background: rgba(0, 0, 0, 0.45098039215686275);color: white;border-radius: 5px 5px 0px 0px;">Youtube <i class="material-icons" style="font-size: 20px;float: right;">open_in_new</i></div></a><iframe width="100%" height="150" src="https://www.youtube.com/embed/' + b + '?start=' + t + '" frameborder="0" allowfullscreen style="vertical-align: middle;"></iframe></div>';
					}
					a = c + e + d; // result
					scroller();
					//hide: console.log(e);
				}
			}
		}

		result = extractTagAndUrl(a);
		if (result) {

			var b = result.url;
			var number = Math.floor((Math.random() * 1000) + 1);

			if (b.match(/youtu/g) && !b.match(/img/g) && !b.match(/jpg/g) && !b.match(/png/g) && !b.match(/gif/g)) {
				if (b.match(/watch?/g)) {
					var b = getParameterByName('v', b);
				} else {
					b = b.replace('https://www.', '').replace('https://', '').replace('youtu.be/', '').replace('youtube.com/embed/', '').replace('youtube.com/shorts/', '').replace('youtube.com/live/', '').replace('&feature=share', '');
				}
				var t = getParameterByName('t', b);
				var e = '<div><a data-fancybox style="text-decoration: none;" href="https://www.youtube.com/watch?v=' + b + '"><div style="padding: 5px;background: rgba(0, 0, 0, 0.45098039215686275);color: white;border-radius: 5px 5px 0px 0px;">Youtube <i class="material-icons" style="font-size: 20px;float: right;">open_in_new</i></div></a><iframe width="100%" height="150" src="https://www.youtube.com/embed/' + b + '?start=' + t + '" frameborder="0" allowfullscreen style="vertical-align: middle;"></iframe></div>';
			} else if (b.match(/.webm$/g) || b.match(/.mp4$/g) || b.match(/.webm\?/g) || b.match(/.mp4\?/g)) {
				var number = Math.floor((Math.random() * 100000) + 1);
				var e = '<a class="skpopimg skimg" data-fancybox href="' + b + '" target="_blank"><video id="' + number + '" onclick="vodgif(' + number + ');" autoplay="true" loop="true" playsinline="true" muted="true" style="max-height: 200px;  max-width: 250px;" src="' + b + '"></video></a>';
			} else if (b.match(/steampowered/g) || b.match(/steamcommunity/g)) {
				var number = Math.floor((Math.random() * 100000) + 1);
				burl = b.match("app/([0-9]+)");
				if (burl) {
					var e = '<iframe id="' + number + '" width="100%" height="190px" src="https://store.steampowered.com/widget/' + burl[1] + '" frameborder="0" allowfullscreen></iframe><a href="steam://store/' + burl[1] + '" target="_blank"><div style="color: #d2efa9;text-shadow: 1px 1px 2px rgba( 0, 0, 0, 0.3 );text-align: center;padding: 0px 11px;line-height: 34px;border-radius: 2px;text-transform: unset;background: #75b022;">以Steam程式查看商店頁面</div></a>';
				} else {
					var e = b;
				}
			} else {
				var e = '<a class="skpopimg skimg" data-fancybox="gallery" href="' + b + '" target="_blank"><img id="' + number + '" alt="[s]' + b + '[e]" src="' + b + '" style="max-height: 150px;  max-width: 100%;vertical-align: middle;"/></a>';
			}
			a = a.replace(result.match[0], e);
			$('#' + number).on('load', function () {
				console.log('#' + number);
				scroller();

			});
		}

		//console.log(a);
		if (a.match('www.twitch.tv\/(.*)\" t')) {
			var userid = a.match("www.twitch.tv\/(.*)\" t");
			var theslash = userid[1].split("/").length - 1;
			//console.log(userid);
			if (theslash == 0 && userid != 'settings') {
				var userid = userid[1].split(" ");
				if (userid[0] != 'settings') {
					var b = "<a href='http://sk-knower.com/twitch/" + userid[0] + "' target='_blank'><button type='button' original-title='在SKLive上觀看" + userid[0] + "' class='sk_icon_bottom' style='position: inherit !important;display: inline !important;opacity: inherit !important;margin: 0PX;line-height: 20px;padding: 5px 0px 5px 5px;background: #0089ff;'><img src='https://acg.sk-knower.com/acgsk.png' height='20' width='20' style='display: inline-block;vertical-align: middle;'><span style='background-color: rgb(42, 96, 230);padding: 8px 5px 8px 5px;margin-left: 5px;'>在SKLive上觀看" + userid[0] + "</span></button></a>";
					a = a + "<br>" + b;
				}
			}
		}
	}


	//external user icon
	$.each(gskli, function (i, item) {
		var aregex = new RegExp(gskli[i].alt, "gi");
		if (a.match(aregex)) {
			var number = Math.floor((Math.random() * 1000) + 1);
			a = a.replace(aregex, "<img id='" + number + "' class='skicon' src='" + gskli[i].src + "' height='" + gskli[i].height + "' alt='" + gskli[i].altt + "' style='vertical-align: middle;'></img>");
			$('#' + number).on('load', function () {
				scroller();
			});
		};
	});
	if (a.match(/skl_/g)) {
		var set_id = a.match("skl_(.*?)_");
		$.when(doTheThing(set_id)).done(function (skli) {
			console.log(skli);
			if (typeof skli === "undefined") { } else {
				$.each(skli, function (i, item) {
					var alt = item.alt;
					var altt = alt.replace('sklive_', set_id[1] + "_");
					var altupdate = alt.replace('sklive_', "skl_" + set_id[1] + "_");
					gskli.push({
						alt: altupdate,
						height: item.height,
						src: item.src,
						altt: altt
					});
					var aregex = new RegExp(altupdate, "gi");
					if (a.match(aregex)) {
						var number = Math.floor((Math.random() * 1000) + 1);
						a = a.replace(aregex, "<img id='" + number + "' class='skicon' src='" + item.src + "' height='" + item.height + "' alt='" + altt + "' style='vertical-align: middle;'></img>");
						$('#' + number).on('load', function () {
							scroller();
						});
					};
				});
			}
		});
	}


	if (typeof ffzicon != 'undefined') {
		$.each(ffzicon.emoticons, function (i, item) {
			var aregex = new RegExp('(\\s|^)' + item.name + '(\\b|$)', "gi");
			//var aregex = new RegExp('(?<=\\s|^)'+item.name+'(?=\\s|$)',"gi");
			if (a.match(aregex)) {
				var number = Math.floor((Math.random() * 1000) + 1);
				a = a.replace(aregex, "<img id='" + number + "' class='skicon' src='//cdn.frankerfacez.com/emoticon/" + item.id + "/1' height='" + item.height + "' width='" + item.width + "' title='" + item.name + "' style='vertical-align: middle;'></img> ");
				$('#' + number).on('load', function () {
					scroller();
				});
			};
		});
	}

	if (typeof bttvicon != 'undefined') {
		$.each(bttvicon, function (i, item) {
			if (item.code != ":'(") {
				var aregex = new RegExp('(\\s|^)' + item.code + '(\\b|$)', "gi");
				//var aregex = new RegExp('(?<=\\s|^)'+item.code+'(?=\\s|$)',"gi");
				if (a.match(aregex)) {
					var number = Math.floor((Math.random() * 1000) + 1);
					a = a.replace(aregex, "<img id='" + number + "' class='skicon' src='//cdn.betterttv.net/emote/" + item.id + "/1x." + item.imageType + "' title='" + item.code + "' style='vertical-align: middle;'></img> ");
					$('#' + number).on('load', function () {
						scroller();
					});
				};
			}
		});
	}

	if (typeof bttvicontwo != 'undefined') {
		$.each(bttvicontwo.sharedEmotes, function (i, item) {
			if (item.code != ":'(") {
				var aregex = new RegExp('(\\s|^)' + item.code + '(\\b|$)', "gi");
				//var aregex = new RegExp('(?<=\\s|^)'+item.code+'(?=\\s|$)',"gi");
				if (a.match(aregex)) {
					var number = Math.floor((Math.random() * 1000) + 1);
					a = a.replace(aregex, "<img id='" + number + "' class='skicon' src='//cdn.betterttv.net/emote/" + item.id + "/1x." + item.imageType + "' title='" + item.code + "' style='vertical-align: middle;'></img> ");
					$('#' + number).on('load', function () {
						scroller();
					});
				};
			}
		});
		$.each(bttvicontwo.channelEmotes, function (i, item) {
			if (item.code != ":'(") {
				var aregex = new RegExp('(\\s|^)' + item.code + '(\\b|$)', "gi");
				//var aregex = new RegExp('(?<=\\s|^)'+item.code+'(?=\\s|$)',"gi");
				if (a.match(aregex)) {
					var number = Math.floor((Math.random() * 1000) + 1);
					a = a.replace(aregex, "<img id='" + number + "' class='skicon' src='//cdn.betterttv.net/emote/" + item.id + "/1x." + item.imageType + "' title='" + item.code + "' style='vertical-align: middle;'></img> ");
					$('#' + number).on('load', function () {
						scroller();
					});
				};
			}
		});
	}

	if (a.match(/\[r]/g)) {
		var start = a.indexOf('[r]');
		var end = a.indexOf('[m]');
		if (end > start && end >= 0 && start >= 0) {
			var b = a.substring(start, end); // contents between #start# and #end#
			var c = a.substring(0, start); // w/e before #start#
			var d = a.substring(end + 3)  // w/e after #end#
			b = b.replace(/[\r\n]/g, "").replace(/ /g, '').replace('[r]', '').replace('[', '');
			var div = document.createElement("div");
			div.innerHTML = b;
			var b = div.textContent;
			var b = b.split(",");
			if (b[1]) {
				var timestamp = $("." + b[1]).html();
				var number = Math.floor((Math.random() * 100000) + 1);
				var e = '<div id="' + number + '" data-time="' + b[1] + '" class="replyscrollto" style="border-radius: 2px;font-size: 14px;padding: 0px 5px;border-left: 5px solid #e6d670;">' + timestamp + '</div>';
				a = c + e + d; // result
				$('#' + number).on('load', function () {
					scroller();
				});
			}
			//hide: console.log(e);
		}
	}


	return a;
}

function doTheThing(set_id) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://live.sk-knower.com/lib/iconjsonp.php?channel=" + set_id[1],
			type: 'POST', dataType: 'json', async: false,
			success: function (data) {
				resolve(data)
			},
			error: function (error) {
				reject(error)
			},
		})

	})
}

function clipsdetails(slug) {
	clipsd = '';
	$.ajax({
		url: 'https://sk-knower.com/twitch_api/clip.php?slug=' + slug,
		async: false,
		dataType: 'json',
		success: function (json) {
			clipsd = '<a style="text-decoration: none;" href="' + json.data[0].url + '" target="_blank"><div style="display: flex;background: rgba(0, 0, 0, 0.5);padding: 5px;color:white;height: 55px;"><span><img alt="' + json.data[0].title + '" src="' + json.data[0].thumbnail_url + '" style="width:80px;height:45px;"></span><span style="padding: 0px 5px;display: flex;flex-direction: column;"><span style="overflow-x: hidden;height: 24px;font-size: 13px;">' + json.data[0].title + '</span><span style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 12px;">By: ' + json.data[0].creator_name + '</span></span></div></a>';
		}
	});
	return clipsd;
}

/*
time=setInterval(function(){
nowtime = new Date();
if(socket.connected==true){
//hide: console.log(socket.connected+last_ping);
howlongtime=nowtime-last_ping;
//hide: console.log(howlongtime);
socket.send("PONG tmi.twitch.tv\r\n");
if(howlongtime>350000){
if($(".chatline >.container>.skClass_top>.skClass").last().text()=='連線中斷2秒後重新載入..'){
	showMsg("<span class='skClass'>連線中斷2秒後重新載入..</span>", 'server');
}
setTimeout(function() {
		//reconnect();
$("#successfollow").show();
}, 3000 );
}
}else{
	if($(".chatline >.container>.skClass_top>.skClass").last().text()=='連線中斷2秒後重新載入..'){
		showMsg("<span class='skClass'>連線中斷2秒後重新載入..</span>", 'server');
	}
setTimeout(function() {
		//reconnect();
$("#successfollow").show();
}, 3000 );
//hide: console.log(socket.connected);
}
},60000);
*/

// timee=setInterval(function(){
// 	nowtimee = new Date();
// 	if(sockete.connected==true){
// 	//hide: console.log(socket.connected+last_ping);
// 	howlongtimee=nowtimee-last_ping;
// 	//hide: console.log(howlongtime);
// 	sockete.send("PONG tmi.twitch.tv\r\n");
// 	if(howlongtimee>350000){
// 		if($(".chatline >.container>.skClass_top>.skClass").last().text()=='連線中斷2秒後重新載入..'){
// 			showMsg("<span class='skClass'>連線中斷2秒後重新載入..</span>", 'server');
// 		}
// 	setTimeout(function() {
// 			//showMsg("<span class='skClass'>載入"+twitch+"頻道</span>", 'server');
// 			//reconnecte();console.log('PONG');
// 	$("#successfollow").show();
// 	}, 3000 );
// 	}
// 	}else{
// 		if($(".chatline >.container>.skClass_top>.skClass").last().text()=='連線中斷2秒後重新載入..'){
// 			showMsg("<span class='skClass'>連線中斷2秒後重新載入..</span>", 'server');
// 		}
// 	setTimeout(function() {
// 			//showMsg("<span class='skClass'>載入"+twitch+"頻道</span>", 'server');
// 			//reconnecte();console.log('sockete.connected==false');
// 	$("#successfollow").show();
// 	}, 3000 );
// 	//hide: console.log(socket.connected);
// 	}
// 	},60000);




function sendmsq() {
	var msg = $('#msginput').val();
	$('#msginput').val('');
	$("#postmsg").css('color', '');
	/* Check for commands. */
	msg = $.trim(msg).replace(/　/g, " ");
	if (msg != "") {
		var msg = msg.replace(/\r\n|\r|\n/g, " ");
		var vsp = msg.split(' ')[0];
		if (vsp == '/w') {
			var vtouser = msg.split(' ')[1];
			var msg = msg.split("/w " + vtouser + " ")[1];
			//socket.send("PRIVMSG #jtv :/w "+vtouser+" "+msg+"\r\n");
			client.whisper(vtouser, msg);
			//hide: console.log(msg);
			//hide: console.log(vtouser);
		} else {
			if ($('#goingtoreply').css('display') != 'none') {
				replayuser = $('#replyname').html();
				replaytime = $('#replytimestamp').html();
				replaycode = "[r]" + replayuser + "," + replaytime + "[m] "
				//socket.send("PRIVMSG #"+twitch+" :"+replaycode+msg+"\r\n");
				client.say(twitch, replaycode + msg);
				source = replaycode + msg;
				theclass = encodeURI(source.replace(/ /g, "")).length;
				$("#goingtoreply").hide();
				var timestamp = $("." + replaytime).html();
				var e = '<div data-time="' + replaytime + '" class="replyscrollto" style="border-radius: 2px;font-size: 14px;padding: 0px 5px;border-left: 5px solid #e6d670;">' + timestamp + '</div>';
			} else {
				/* No command. Send as message to current channel */
				//socket.send("PRIVMSG #"+twitch+" :"+msg+"\r\n");
				client.say(twitch, msg);
				source = msg;
				var theclass = encodeURI(source.replace(/ /g, "")).length;
				e = '';
			}
		}
		//console.log(theclass);
		msg = msg.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
		message = skiconloop(msg);
		message = updateCounter(message);
		var number = Math.floor((Math.random() * 10000) + 1);
		$("#messages").append('<div id="fromuser' + number + '" class="chatline pendingchat frombroadcaster ' + theclass + '" style="right: 0%; position: relative;"><span class="container"><span class="skClass_userinfo"><span data-id="sundayla123" class="from nick chat_user_id" style="color:#1E90FF;cursor:pointer;">' + loginttv + ':</span></span> <span class="skClass_top"><span class="skClass" style="">' + e + message + '</span><span class="skClassMore"><span class="skClassMoreBtn" style=""><i class="material-icons" style="font-size: 17px;">reply</i></span></span></span></span></div>'); scroller();
		$("#fromuser" + number + " > .container > .skClass_top >.skClass > img").on('load', function () {
			scroller();
		});
		$("#fromuser" + number + " > .container > .skClass_top >.skClass > .skimg > img").on('load', function () {
			scroller();
		});
		$('#msginput').val('');
		scroller();
	}
}


$('#msginput').on('keydown', function (e) {
	if (e.which == 13 && !e.shiftKey) {
		sendmsq();
		$('#msginput').val('')
		return false;
	}
});

$("#postmsg").click(function () {
	sendmsq();
});


jQuery.fn.extend({
	insertAtCaret: function (myValue) {
		return this.each(function (i) {
			if (document.selection) {
				//For browsers like Internet Explorer
				this.focus();
				sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
			}
			else if (this.selectionStart || this.selectionStart == '0') {
				//For browsers like Firefox and Webkit based
				var startPos = this.selectionStart;
				var endPos = this.selectionEnd;
				var scrollTop = this.scrollTop;
				this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
				this.focus();
				this.selectionStart = startPos + myValue.length;
				this.selectionEnd = startPos + myValue.length;
				this.scrollTop = scrollTop;
			} else {
				this.value += myValue;
				this.focus();
			}
		})
	}
});


function pastephoto() {
	var input = document.getElementById('msginput');
	var mousea = input.selectionStart + 4;
	var mouseb = input.selectionStart + 8;
	if (input.value == '[s] 圖片網址 [e]' || input.value == '[y] 影片連結 [t]' || input.value == '[p] P網id [i]') {
		input.value = '';
		$("#msginput").insertAtCaret('[s] 圖片網址 [e]');
		var startPos = this.selectionEnd;
		input.setSelectionRange(4, 8);
		$("#msginput").focus();
	} else {
		$("#msginput").insertAtCaret('[s] 圖片網址 [e]');
		input.setSelectionRange(mousea, mouseb);
		$("#msginput").focus();
	}
}

function pasteyt() {
	var input = document.getElementById('msginput');
	var mousea = input.selectionStart + 4;
	var mouseb = input.selectionStart + 8;
	if (input.value == '[s] 圖片網址 [e]' || input.value == '[y] 影片連結 [t]' || input.value == '[p] P網id [i]') {
		input.value = '';
		$("#msginput").insertAtCaret('[y] 影片連結 [t]');
		input.setSelectionRange(4, 8);
		$("#msginput").focus();
	} else {
		$("#msginput").insertAtCaret('[y] 影片連結 [t]');
		input.setSelectionRange(mousea, mouseb);
		$("#msginput").focus();
	}
}

function pastepid() {
	var input = document.getElementById('msginput');
	var mousea = input.selectionStart + 4;
	var mouseb = input.selectionStart + 8;
	if (input.value == '[s] 圖片網址 [e]' || input.value == '[y] 影片連結 [t]' || input.value == '[p] P網id [i]') {
		input.value = '';
		$("#msginput").insertAtCaret('[p] P網id [i]');
		input.setSelectionRange(4, 8);
		$("#msginput").focus();
	} else {
		$("#msginput").insertAtCaret('[p] P網id [i]');
		input.setSelectionRange(mousea, mouseb);
		$("#msginput").focus();
	}
}


$('#chat_down').click(function (e) {
	skchatscroll.scroll(999999999999999);
});

$('#scrolltoorgmsg').click(function (e) {
	//var $container = $("#messages-contain");
	var timestamp = orgmsgid;
	//var $scrollTo = $('.'+timestamp+':last');
	//$container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop(), scrollLeft: 0},300); 
	skchatscroll.scroll($('.' + timestamp + ':last'), 500, undefined, function () { });
	$('.' + timestamp + ':last').animate({ "left": "+=50px" }, "1000").animate({ "left": "-=50px" }, "1000");
	$("#checkorgmsg").hide();
});




function openskl() {
	var skset = document.getElementById("chaticon");
	skset.style.top = "88px";
	skset.style.right = "0px";
	skset.style.left = "inherit";
	if ($("#chaticon").hasClass("setflex")) {
		$("#chaticon").removeClass("setflex");
		$("#sk_click_icon").removeClass("sk_click_icon_active");
	} else {
		$("#chaticon").addClass("setflex");
		$("#sk_click_icon").addClass("sk_click_icon_active");
	}
}

function cancelreply() {
	$("#goingtoreply").hide();
}
function cancelcheckorgmsg() {
	$("#checkorgmsg").hide();
}



$('#chatpagearea').on('click', '.emo-select-channel', function () {
	var id = $(this).data("id");
	$(".icon-set").hide();
	$(".emo-select-channel").removeClass("emo-selected");
	if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
		skchatemoscroll.scroll(0);
	} else {
		$("#emo-page").scrollTop(0);
	}
	$("#" + id).show();
	$(this).addClass("emo-selected");
});

function insertAtCursor(myValue) {
	var myField = document.getElementById("msginput");
	//IE support
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
	}
	//MOZILLA and others
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = myField.value.substring(0, startPos)
			+ myValue
			+ myField.value.substring(endPos, myField.value.length);
	} else {
		myField.value += myValue;
	}
}

function geticon(tagname, targetdiv) {
	var tagname = window[tagname];
	for (var i = 0; i < tagname.length; i++) {
		var icon = tagname[i];
		if (icon.src) {
			if (icon.dis) { var dis = icon.dis; } else { var dis = icon.alt; }
			var pimg = '<div style="text-align: center;"><img style="max-height: 100px;" src="' + icon.src + '"></br>' + dis + '</div>';
			$("#icon-set-" + targetdiv).append("<div class='skchaticon sk_icon' data-toggle='tooltip' alt='" + icon.alt + "' data-original-title='" + pimg + "'><img class='skicon lazyload' data-src='" + icon.src + "'></div>");
			//$("#icon-set-"+truename).append("<img class='sk_icon sk_icon_show tooltip' src='"+icon.src+"' alt='"+icon.alt+"' original-title='"+icon.dis+"'>");
		} else {
			$("#icon-set-" + targetdiv).append('<div type="iconbotton" class="sk_icon sk_icon_bottom" style="width: 84px;text-align: center;float: left;white-space: nowrap;overflow: hidden;" title="' + icon.code + '" original-title="' + icon.code + '" alt="' + icon.code + '">' + icon.code + '</div>');
		}
		if (!isMobile) {
			$('.skchaticon').tooltip({ trigger: 'hover', html: 'true', placement: 'top' });
		}
	}
}

$.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel=" + twitch, function (icon) {
	if (typeof icon === "undefined") {
		$("#icon-set-localskicon").append('<div id="channeldata" style="font-size:12px;background: #505050;color:white;padding:4px;line-height: 15px;">你也可以為自己的頻道增加自訂GIF!<br>來SKLive Dashboard新增你的自訂貼圖吧!<div style="text-align: center;"><img src="https://images2.imgbox.com/96/c2/1h3xWzqS_o.jpg" height="110" style="left: 0px;"></div>如何新增本台自訂貼圖:<div style="margin-left:13px;    font-size: 12px;line-height: 15px;">1. 登入SKLive Dashboard <a href="https://live.sk-knower.com/dashboard/new/emoticon" target="_blank" style="color: #ffffff;">live.sk-knower.com/dashboard</a> <br>2. 連動你的Twitch帳號<br>3. 進入聊天室自訂表情, 照指示貼上你自備的圖片網址<br>4. F5你的Twitch聊天室就可以使用貼圖<br>你也可以製作本台專用的表情給觀眾使用!</div><div style="font-size: 12px;;">更多資料可以來SKLive <a href="https://discord.gg/XdvKzXe2K8" target="_blank" style="color: #2B60E6;text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;"> Discord</a><div style="float: right;" id="vote_userid"></div></div></div>');
	} else {
		$.each(icon, function (i, icon) {
			var pimg = '<div style="height:' + icon.height + ';text-align: center;"><img class="skicon" style="max-height:' + icon.height + ';" src="' + icon.src + '"></div>';
			$("#icon-set-localskicon").append("<div class='skchaticon sk_icon' data-toggle='tooltip' alt='" + icon.alt + "' data-original-title='" + pimg + icon.alt + "'><img class='skicon lazyload' data-src='" + icon.src + "'></div>");
		});
	}
	if (!isMobile) {
		$('.skchaticon').tooltip({ trigger: 'hover', html: 'true', placement: 'top' });
	}
}).fail(function () {
	$("#icon-set-localskicon").append('<div id="channeldata" style="font-size:12px;background: #505050;color:white;padding:4px;line-height: 15px;">你也可以為自己的頻道增加自訂GIF!<br>來SKLive Dashboard新增你的自訂貼圖吧!<div style="text-align: center;"><img src="https://images2.imgbox.com/96/c2/1h3xWzqS_o.jpg" height="110" style="left: 0px;"></div>如何新增本台自訂貼圖:<div style="margin-left:13px;    font-size: 12px;line-height: 15px;">1. 登入SKLive Dashboard <a href="https://live.sk-knower.com/dashboard/new/emoticon" target="_blank" style="color: #ffffff;">live.sk-knower.com/dashboard</a> <br>2. 連動你的Twitch帳號<br>3. 進入聊天室自訂表情, 照指示貼上你自備的圖片網址<br>4. F5你的Twitch聊天室就可以使用貼圖<br>你也可以製作本台專用的表情給觀眾使用!</div><div style="font-size: 12px;;">更多資料可以來SKLive <a href="https://discord.gg/XdvKzXe2K8" target="_blank" style="color: #2B60E6;text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;"> Discord</a><div style="float: right;" id="vote_userid"></div></div></div>');
});

$('#chatpagearea').on('click', ".sk_icon", function () {
	var axx = $(this).attr("alt");
	$("#postmsg").css('color', '#41a7f0');
	$('#msginput').insertAtCaret(' ' + axx + ' ');
	$('#msginput').focus();
});

$(document).ready(function () {
	dragPrototype("drag-icon", "chaticon");
	dragPrototype("user_data_drag-icon", "chat_user_data");
});



$('#chatpagearea').on('click', '.click_reply', function (e) {
	var chatid = $(this).data("chat");
	if (chatid) {
		$('#replyname').html($("." + chatid + " > .container > .skClass_userinfo >.nick").data("id"));
		$('#replycontent').html($("." + chatid + " .skClass").html());
		$('#replytimestamp').html(chatid);
		$('#goingtoreply').show();
		$("#checkorgmsg").hide();
		$('#msginput').focus();
	}
});

/*
$('#messages').on('dblclick', '.skClassMore ', function(e) { 
	$('#replyname').html($(this).parent().parent().children('.skClass_userinfo').children('.nick').text());
	$('#replycontent').html($(this).parent().children('.skClass').html());
	$('#replytimestamp').html($(this).children('.skClassMoreBtn').data("chat"));
	$('#goingtoreply').show();
});
$('#messages').on('dblclick', '.replythis ', function(e) { 
	if(e.target.nodeName=="DIV"){
		$('#replyname').html($(this).children('.container').children('.skClass_userinfo').children('.nick').text());
		$('#replycontent').html($(this).children('.container').children('.skClass_top').children('.skClass').html());
		$('#replytimestamp').html($(this).data("time"));
		$('#goingtoreply').show();
	}
});
$('#messages').on('click', '.skClassMoreBtn ', function(e) { 
	$('.skClass_top').removeAttr("data-skclassmore");
	$(this).parent().attr("data-skclassmore","");
	var offsettop=$(e).offset().top;
});
*/

$('#app').on('click', function (e) {
	var container = $(".skClassMore");
	if (!container.is(e.target) && container.has(e.target).length === 0) {
		$('.skClass_top').removeAttr("data-skclassmore");
	}
});

orgmsgid = '';
$('#chatpagearea').on('click', '.replyscrollto ', function (e) {
	//var $container = $("#messages-contain");
	var timestamp = $(this).data("time");
	//var $scrollTo = $('.'+timestamp+':last');
	//$container.animate({scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop(), scrollLeft: 0},300); 
	skchatscroll.scroll($('.' + timestamp + ':last'), 500, undefined, function () { });
	$('.' + timestamp + ':last').animate({ "left": "+=50px" }, "1000").animate({ "left": "-=50px" }, "1000");
	$("#checkorgmsg").show();
	orgmsgid = $(this).parent("span").parent("span").parent("span").parent("div").data("time");
});

altlIsPressed = false;
$(document).keydown(function (event) {
	if (event.which == "18") {
		altlIsPressed = true;
	}
});

$(document).keyup(function () {
	altlIsPressed = false;
});

$('#chatpagearea').on('click', '.chat_user_id ', function (e) {
	//var ctrlclick = getCookie("setctrl");
	//if (ctrlclick == '') {
	if (altlIsPressed) {
		var usernamedata = $(this).text().replace(":", '');
		//console.log(usernamedata);
		$("#msginput").insertAtCaret('@' + usernamedata + ' ');
		$("#msginput").focus();
		altlIsPressed = false;
	} else {
		show_chat_user_info(this);
	}
	//}
});


function show_chat_user_info(source) {
	$('#chat_user_data').attr("style", "");
	var elementheight = $(window).height();
	var offsettop = $(source).offset().top + 25;
	var offsettopplus = offsettop + 150;
	if (offsettopplus < elementheight) {
		$('#chat_user_data').css('top', offsettop);
	}
	$("#chat_user_data").addClass("setflex");
	var login = $(source).data("id");
	$.getJSON("https://sk-knower.com/twitch_api/user/login.php?login=" + login, function (data) {
		if (data.data.length == 0) {
			M.toast({ html: "Error: No Profile" });
		} else if (data.data[0].state == 429) {
			M.toast({ html: data.data[0].error });
		} else {
			if (data.data[0].broadcaster_type == 'partner') { var partner = "<span class='partner'>　</span>"; } else { var partner = ''; }
			$("#chat_user_info").data("user", data.data[0].login);
			$('#chat_user_info').html('<div style="background-image: url(' + data.data[0].offline_image_url + ');background-size: cover;background-position: center;height: 69px;width: 100%;position: fixed;z-index: 0;    position: absolute;"></div><div style="padding-top:10px;padding-bottom:10px;background-color: rgba(0,0,0,.7)!important;width: 100%;display: flex;  z-index: 1;position: relative;"><div class="profile-icon-container side-ch-box-icon-container" style="height: 50px;width: 50px;"><img class="profile-icon lazyload" data-src="' + data.data[0].profile_image_url + '" style="border-radius: 70px;"></div><div class="side-ch-box-dis" style="padding: 7px;"><div class="side-ch-box-title" style="font-size:15px;"><a href="https://sk-knower.com/twitch/' + data.data[0].login + '" target="_blank">' + partner + data.data[0].display_name + '(' + data.data[0].login + ')</a></div><span class="side-ch-box-tag"><span class="side-ch-box-game"></span> <span class="side-ch-box-view">' + data.users.acgsk_id + '</span></span></div></div>');
			$('#chat_control_btn').html('<div style="display: flex;"><span class="side-ch-box-dis chat_user_info_action" onclick="timeoutchat(&#x27;' + data.data[0].login + '&#x27;);" style="margin: 0;"><i class="material-icons">timer_off</i></span><span class="side-ch-box-dis chat_user_info_action" onclick="" style="margin: 0;display:none;">解除<i class="material-icons">timer_off</i></span><span class="side-ch-box-dis chat_user_info_action" onclick="banchatuser(&#x27;' + data.data[0].login + '&#x27;);" style="margin: 0;"><i class="material-icons">voice_over_off</i></span><span class="side-ch-box-dis chat_user_info_action" onclick="unbanchatuser(&#x27;' + data.data[0].login + '&#x27;);" style="margin: 0;"><i class="material-icons">record_voice_over</i></span></div><a style="padding: 5px;" class="skClass_usericon side-ch-box-icon" onclick="popttvchatuser(&#x27;' + data.data[0].login + '&#x27;);"><i class="material-icons" style="font-size: 20px;float: right;">open_in_new</i><div class="side-ch-box-dis chat_user_info_action">Twitch用戶詳細資料及MOD管理功能</div></a>');
		}
	});
}

function popttvchatuser(targetuser) {
	window.open('https://www.twitch.tv/popout/' + live_login + '/viewercard/' + targetuser, targetuser, 'width=401,height=700,directories=no,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=no,left=10,top=50,screenX=0,screenY=0'); return false
}

function close_user_info() {
	$("#chat_user_data").removeClass("setflex");
}
function banchatuser(user) {
	var user = $("#chat_user_info").data("user");
	socket.send("PRIVMSG #" + twitch + " :/ban " + user + "\r\n");
}
function unbanchatuser(user) {
	var user = $("#chat_user_info").data("user");
	socket.send("PRIVMSG #" + twitch + " :/unban " + user + "\r\n");
}
function timeoutchat(user) {
	var user = $("#chat_user_info").data("user");
	socket.send("PRIVMSG #" + twitch + " :/timeout " + user + "\r\n");
}
function clearchat() {
	socket.send("PRIVMSG #" + connectchannel + " :/clear \r\n");
}

$('#msginput').bind('input propertychange', function () {
	if (this.value == '') {
		$("#postmsg").css('color', '');
	} else {
		$("#postmsg").css('color', '#41a7f0');
	}
});
$('#chatpagearea').on('click', '.blockmsg', function (e) {
	$(this).children().toggle();
});

$('#chatpagearea').on('click', '.facebookvideo', function (e) {
	var fbid = $(this).data("fbid");
	$(this).html('<iframe width="100%" height="200" src="https://www.facebook.com/plugins/video.php?href=' + fbid + '&amp;show_text=0&amp;width=300&height=200" frameborder="0" allowfullscreen="" style="vertical-align: middle;"></iframe>');
});
$('#chatpagearea').on('click', '.facebookclosevideo', function (e) {
	var fbid = $(this).data("fbid");
	$("." + fbid).html('');
});


