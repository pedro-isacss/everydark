chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const black = "#090909";
      const pColor = "#999999";
      const titleColor = "#eeeeee";
      const linkColor = "#fff";
      const codeColor = "#444";
      // === BODY ===
      document.body.style.backgroundColor = black;
      // === MAIN ===
      const allMain = document.querySelectorAll("main");
      allMain.forEach((main) => {
        main.style.backgroundColor = black;
      });
      // === DIVS ===
      const allDivs = document.querySelectorAll("div");
      allDivs.forEach((div) => {
        div.style.backgroundColor = black;
        div.style.borderColor = pColor;
      });
      // === DIVS > DIV ===
      const allChildrenDiv = document.querySelectorAll("div > div");
      allChildrenDiv.forEach((div) => {
        div.style.backgroundColor = "transparent";
      });
      // === HEADERS ===
      const allHeaders = document.querySelectorAll("header");
      allHeaders.forEach((header) => {
        header.style.backgroundColor = black;
        header.style.borderColor = pColor;
      });
      // === HEADERS ===
      const allCodes = document.querySelectorAll("pre");
      allCodes.forEach((code) => {
        code.style.backgroundColor = black;
        code.style.borderColor = pColor;
      });
      // === INPUTS ===
      const allInputs = document.querySelectorAll("input");
      allInputs.forEach((input) => {
        input.style.color = pColor;
        input.style.borderColor = pColor;
      });
      // === P ===
      const allP = document.querySelectorAll("p");
      allP.forEach((p) => {
        p.style.color = pColor;
      });
      // === A ===
      const allA = document.querySelectorAll("a");
      allA.forEach((a) => {
        a.style.color = linkColor;
        a.style.opacity = 0.8;
      });
      // === SPAN ===
      const allSpans = document.querySelectorAll("span");
      allSpans.forEach((span) => {
        span.style.color = pColor;
      });
      // === H1 ===
      const allH1 = document.querySelectorAll("h1");
      allH1.forEach((h1) => {
        h1.style.color = titleColor;
        h1.style.fontWeight = "800";
      });
      // === H2 ===
      const allH2 = document.querySelectorAll("h2");
      allH2.forEach((h2) => {
        h2.style.color = titleColor;
        h2.style.fontWeight = "800";
      });
      // === H3 ===
      const allH3 = document.querySelectorAll("h3");
      allH3.forEach((h3) => {
        h3.style.color = titleColor;
        h3.style.fontWeight = "800";
      });
    },
  });
});
