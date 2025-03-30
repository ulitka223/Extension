console.log("Background script running...");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com")) {
    console.log(`YouTube tab detected: ${tab.id}`);
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files:["content.js"]
    });
    
    setTimeout(() => {
      chrome.tabs.get(tabId, (tab) => {
        if (chrome.runtime.lastError || !tab) {
            console.warn('tab no longer exists');
            return;
        }
      })
      chrome.tabs.remove(tabId, () => {
        if (chrome.runtime.lastError) {
          console.error(`Failed to close tab ${tabId}: ${chrome.runtime.lastError.message}`);
        } else {
          console.log(`Tab ${tabId} closed successfully after 10 seconds`);
        }
      });
    }, 10000);

    console.log(`Tab ${tab.id} will be closed in 10 seconds`);
  }
});


  
  
  
