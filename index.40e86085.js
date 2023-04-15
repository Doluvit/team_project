!function(){function t(t){var e={id:Date.now()};return new FormData(t.currentTarget).forEach((function(t,n){e[n]=t})),e}({form:document.querySelector("#task-form"),list:document.querySelector("#task-list")}).form.addEventListener("submit",(function(e){e.preventDefault(),console.log(t(e))}))}();
//# sourceMappingURL=index.40e86085.js.map
