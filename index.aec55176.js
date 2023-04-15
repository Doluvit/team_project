function t(t){const e={id:Date.now()};return new FormData(t.currentTarget).forEach(((t,o)=>{e[o]=t})),e}({form:document.querySelector("#task-form"),list:document.querySelector("#task-list")}).form.addEventListener("submit",(function(e){e.preventDefault(),console.log(t(e))}));
//# sourceMappingURL=index.aec55176.js.map
