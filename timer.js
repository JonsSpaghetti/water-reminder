//TODO - allow setting a drinking interval.

var newAlarm = chrome.alarms.create("water", {
    periodInMinutes: .1
});

chrome.alarms.onAlarm.addListener(function (alarmInfo) {
    if (alarmInfo.name == "water") {
        chrome.notifications.create('reminder', {
            type: 'basic',
            iconUrl: 'icons/water-48.png',
            title: 'WATER!',
            message: 'DRINK SOME DAMN WATER!'
        }, function (notificationId) { });
    }
})

chrome.runtime.onMessage.addListener(function (message) {
    if (message.interval > 0) {
        chrome.alarms.clear("water", function () {
            var newAlarm = chrome.alarms.create("water", {
                periodInMinutes: Number(message.interval)
            });
        });
    }
});
