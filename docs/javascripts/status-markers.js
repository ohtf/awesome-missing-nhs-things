// SPDX-FileCopyrightText: 2026 Marcus Baw and contributors
// SPDX-License-Identifier: CC-BY-SA-4.0
//
// Style the status markers. In the Markdown a marker is plain inline code at
// the start of an entry (`missing`, `restricted` and so on), which GitHub
// shows as-is. On the site this adds a class per status and a tooltip with its
// meaning, for markers that start a list item or a cell of the legend table.

(function () {
  const MEANINGS = {
    missing: "Nothing usable exists.",
    restricted: "It exists, but a licence, paywall, registration requirement or closed platform stops it being freely reused.",
    partial: "An open or national service covers part of the need.",
    building: "An open project is working on it.",
    solved: "It now exists openly.",
  };

  function markEntries() {
    const selector = ".md-typeset li > code:first-child, .md-typeset li > p:first-child > code:first-child, .md-typeset td > code:first-child";
    document.querySelectorAll(selector).forEach((code) => {
      const status = code.textContent.trim();
      if (!Object.hasOwn(MEANINGS, status) || code.parentElement.firstChild !== code) return;
      code.classList.add("amnt-status", "amnt-status--" + status);
      code.title = MEANINGS[status];
      const list = code.closest("ul");
      if (list) list.classList.add("amnt-entries");
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(markEntries);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", markEntries);
  } else {
    markEntries();
  }
})();
