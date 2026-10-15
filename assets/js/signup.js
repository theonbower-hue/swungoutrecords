// Submits signup forms in place and tracks a Meta "Lead" when it succeeds.
document.querySelectorAll(".signup-form").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var note = form.parentNode.querySelector(".signup-note");
    var btn = form.querySelector("button");
    btn.disabled = true;
    note.textContent = "Signing you up...";
    fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.json().catch(function () { return {}; });
      })
      .then(function (data) {
        if (data && data.success === false) throw new Error("rejected");
        form.reset();
        form.hidden = true;
        note.textContent = "You're in. Check your inbox.";
        if (window.soTrack) soTrack("Lead", { content_name: "Mailing list" });
      })
      .catch(function () {
        btn.disabled = false;
        note.textContent = "Something went wrong. Please try again.";
      });
  });
});
