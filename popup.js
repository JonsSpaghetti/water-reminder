function saveOptions() {
    var time = document.getElementById('time').value;
    chrome.runtime.sendMessage('', {interval: time}, {}, function(response) {})
    chrome.storage.sync.set({
        interval: time
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Preferences saved!';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restoreOptions(){
    chrome.storage.sync.get({
        interval: 5
    }, function(items) {
        document.getElementById('time').value = items.interval;
    })
}

window.onload = function() {
    // document.addEventListener('DOMContentLoaded', restoreOptions); //don't even bother
    restoreOptions();
    document.getElementById('save').onclick = saveOptions;
}