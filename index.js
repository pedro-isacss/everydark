chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      localStorage.setItem(
        "every-dark",
        localStorage.getItem("every-dark") === "true" ? false : true
      );
      if (localStorage.getItem("every-dark") === "true") {
        document.body.classList.add("every-dark");
      } else {
        document.body.classList.remove("every-dark");
      }
    },
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: () => {
        if (localStorage.getItem("every-dark") === "true") {
          document.body.classList.add("every-dark");
        }
      },
    });
  }
});
