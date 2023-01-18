(()=>{"use strict";const t=()=>{const t=document.querySelector("input#title"),e=document.querySelector("input#description"),o=document.querySelector("input#due-date"),n=document.querySelector("select#priority"),l=document.querySelector("input#project");return new class{constructor(t,e,o,n,l){this.title=t,this.description=e,this.dueDate=o,this.priority=n,this.project=l}}(t.value,e.value,o.value,n.value,l.value)},e=(t,e)=>{"low"===e&&t.setAttribute("style","background-color: #07e707"),"medium"===e&&t.setAttribute("style","background-color: #ffe81d"),"high"===e&&t.setAttribute("style","background-color: #fb9500"),"critical"===e&&t.setAttribute("style","background-color: #ff1100")},o=(t,o)=>{const n=document.querySelector(".projects-list");t.list.length>0&&t.list.forEach((t=>{const l=document.createElement("li");l.classList.add("project-item"),l.textContent=t.name;const i=document.createElement("ul");if(i.textContent="Tasks assigned: ",l.appendChild(i),o)for(let n=0;n<o.list.length;n++)if(o.list[n].project===t.name){const t=document.createElement("li");t.classList.add("assigned-to-project-item");const l=document.createElement("p");l.classList.add("item-detail-title"),l.textContent=`Title: ${o.list[n].title}`;const s=document.createElement("p");s.classList.add("item-detail-date"),s.textContent=`Due date: ${o.list[n].dueDate}`,e(t,o.list[n].priority),t.appendChild(l),t.appendChild(s),i.appendChild(t)}n.appendChild(l)}))},n=()=>{const t=document.querySelector(".projects-list"),e=document.querySelectorAll(".projects-list>li");for(let o=0;o<e.length;o++)t.removeChild(e[o])},l=class{constructor(t=[]){this.list=t}addItem(t){this.list.push(t)}editItem(t,e){this.list[t]=e}removeItem(t){this.list.splice(t,1)}},i=(t,e)=>{document.querySelector(".add-new-project").addEventListener("click",(()=>{const l=(()=>{const t=prompt("NAME: ");return new class{constructor(t){this.name=t,this.list=[]}addItemToProject(t){this.list.push(t)}}(t)})();t.addProject({name:l.name}),localStorage.setItem("projectsCollection",JSON.stringify(t)),n(),o(t,e)}))},s=class{constructor(t=[]){this.list=t}addProject(t){this.list.push(t)}};(()=>{let c=new s,d=new l;localStorage.getItem("projectsCollection")?c=new s(JSON.parse(localStorage.getItem("projectsCollection")).list):localStorage.setItem("projectsCollection",JSON.stringify(c)),localStorage.getItem("itemsCollection")?d=new l(JSON.parse(localStorage.getItem("itemsCollection")).list):localStorage.setItem("itemsCollection",JSON.stringify(d)),window.addEventListener("load",(()=>{d=new l(JSON.parse(localStorage.getItem("itemsCollection")).list),localStorage.setItem("itemsCollection",JSON.stringify(d)),c=new s(JSON.parse(localStorage.getItem("projectsCollection")).list),localStorage.setItem("projectsCollection",JSON.stringify(c))})),(()=>{const t=document.querySelector(".container"),e=document.createElement("ul");e.classList.add("projects-list");const o=document.createElement("p");o.textContent="PROJECTS COLLECTION",e.appendChild(o),t.appendChild(e);const n=document.querySelector(".buttons"),l=document.createElement("button");l.classList.add("add-new-project"),l.textContent="ADD NEW PROJECT",n.appendChild(l)})(),(()=>{const t=document.querySelector(".container"),e=document.createElement("ul");e.classList.add("items-list");const o=document.createElement("p");o.textContent="ITEMS COLLECTION",e.appendChild(o),t.appendChild(e);const n=document.querySelector(".buttons"),l=document.createElement("button");l.classList.add("add-new-item"),l.textContent="ADD NEW ITEM",n.appendChild(l)})(),o(c,d),((i,s)=>{const c=document.querySelector(".items-list"),d=document.querySelector(".add-new-item"),r=document.getElementsByClassName("close")[0],a=document.querySelector("form"),m=document.getElementById("new-item-modal"),u=document.querySelector(".add-new-item-modal-btn");let p;const y=document.createElement("button");y.classList.add("edit-item-button"),y.textContent="Save changes",d.addEventListener("click",(()=>{m.style.display="block",a.reset(),y.setAttribute("style","display: none;"),a.appendChild(y)})),r.onclick=function(){m.style.display="none",u.removeAttribute("style","display: none;")},window.onclick=function(t){t.target==m&&(m.style.display="none",u.removeAttribute("style","display: none;"))},u.addEventListener("click",(()=>{const e=t();s.addItem(e),localStorage.setItem("itemsCollection",JSON.stringify(s)),a.reset(),m.removeAttribute("style","display:block;"),h(),C(s),n(),o(i,s)}));const C=t=>{if(t.list.length>0)for(let e=0;e<t.list.length;e++)S(t,t.list[e])};window.addEventListener("load",(()=>{const t=new l(JSON.parse(localStorage.getItem("itemsCollection")).list);C(t)}));const S=(t,l)=>{const s=document.createElement("li");s.classList.add("to-do-item"),p=t.list.indexOf(l),s.setAttribute("item-key-id",p);const d=document.createElement("div");d.classList.add("item-content-wrapper");const r=document.createElement("p"),S=document.createElement("p"),E=document.createElement("p"),g=document.createElement("p"),v=document.createElement("p");r.textContent=`TITLE: ${l.title}`,S.textContent=`DESC: ${l.description}`,E.textContent=`DUE DATE: ${l.dueDate}`,g.textContent=`PRIORITY: ${l.priority}`,v.textContent=`PROJECT: ${l.project}`,e(s,l.priority),d.appendChild(r),d.appendChild(S),d.appendChild(E),d.appendChild(g),d.appendChild(v),s.appendChild(d);const b=document.createElement("div");b.classList.add("actions-wrapper");const I=document.createElement("button");I.classList.add("remove-item"),I.textContent="Remove",b.appendChild(I);const f=document.createElement("button");f.classList.add("edit-button"),f.textContent="Edit",b.appendChild(f),s.appendChild(b),f.addEventListener("click",(()=>{a.appendChild(y),a.reset(),m.style.display="block",y.removeAttribute("style","display: none;"),u.setAttribute("style","display: none;");const e=document.querySelector("input#title"),o=document.querySelector("input#description"),n=document.querySelector("input#due-date"),i=document.querySelector("select#priority"),s=document.querySelector("input#project");p=t.list.indexOf(l),e.value=t.list[p].title,o.value=t.list[p].description,n.value=t.list[p].dueDate,i.value=t.list[p].priority,s.value=t.list[p].project})),I.addEventListener("click",(()=>{p=t.list.indexOf(l),t.removeItem(p),localStorage.setItem("itemsCollection",JSON.stringify(t)),c.removeChild(s),h(),C(t),n(),o(i,t)})),c.appendChild(s)};y.addEventListener("click",(()=>{const e=t();s.editItem(p,e),localStorage.setItem("itemsCollection",JSON.stringify(s)),m.removeAttribute("style","display:block;"),y.setAttribute("style","display: none;"),u.removeAttribute("style","display: none;"),h(),C(s),n(),o(i,s)}));const h=()=>{const t=document.querySelectorAll(".to-do-item");Array.from(t).forEach((t=>{c.removeChild(t)}))}})(c,d),i(c,d)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ1plLElBQ0FqQixFQUF3QkMsRUFBb0JDLEVBQWdCLElBR2hFLE1BQU0rRCxFQUFpQixLQUNuQixNQUFNVSxFQUFXdkYsU0FBUytCLGlCQUFpQixlQUN4QnlELE1BQU1DLEtBQUtGLEdBQ25CckUsU0FBUVIsSUFDZmlELEVBQVUzQixZQUFZdEIsRUFBSyxHQUM5QixDQUNKLEVIdkhEZ0YsQ0FBb0I3RSxFQUFvQkMsR0FDeEMwQixFQUFjM0IsRUFBb0JDLEVBQWdCLEVBR3RENkUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy1kZWZpbml0aW9uL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzLWNyZWF0aW9uL2NyZWF0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW5kZXJpbmcvcmVuZGVyUHJpb3JpdHlDb2xvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbmRlcmluZy9yZW5kZXJQcm9qZWN0c0Zyb21BcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMtZGVmaW5pdGlvbi9pdGVtc0NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW5kZXJpbmcvcmVuZGVyUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMtY3JlYXRpb24vY3JlYXRlTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMtZGVmaW5pdGlvbi9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy1kZWZpbml0aW9uL3Byb2plY3RzQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVuZGVyaW5nL3JlbmRlckluaXRpYWxQcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW5kZXJpbmcvcmVuZGVySXRlbXNMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVuZGVyaW5nL3JlbmRlckl0ZW1JblByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbTsiLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy1kZWZpbml0aW9uL2l0ZW1cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWUtZGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QjcHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwcm9qZWN0XCIpO1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgSXRlbSh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBwcm9qZWN0LnZhbHVlKTtcbiAgICByZXR1cm4gbmV3SXRlbTtcbn1cbiIsImV4cG9ydCBjb25zdCByZW5kZXJQcmlvcml0eUNvbG9yID0gKGl0ZW0sIHByaW9yaXR5KSA9PiB7XG4gICAgaWYocHJpb3JpdHkgPT09ICdsb3cnKSBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogIzA3ZTcwNycpO1xuICAgIGlmKHByaW9yaXR5ID09PSAnbWVkaXVtJykgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6ICNmZmU4MWQnKTtcbiAgICBpZihwcmlvcml0eSA9PT0gJ2hpZ2gnKSBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2ZiOTUwMCcpO1xuICAgIGlmKHByaW9yaXR5ID09PSAnY3JpdGljYWwnKSBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogI2ZmMTEwMCcpO1xufSIsImltcG9ydCB7IHJlbmRlclByaW9yaXR5Q29sb3IgfSBmcm9tIFwiLi9yZW5kZXJQcmlvcml0eUNvbG9yXCI7XG5cbmNvbnN0IHJlbmRlclByb2plY3RzRnJvbUFycmF5ID0gKHByb2plY3RzQ29sbGVjdGlvbiwgaXRlbXNDb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcbiAgICBpZihwcm9qZWN0c0NvbGxlY3Rpb24ubGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHByb2plY3RzQ29sbGVjdGlvbi5saXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0VG9EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RUb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0VG9EaXNwbGF5LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgYXNzaWduZWRJdGVtc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgYXNzaWduZWRJdGVtc0xpc3QudGV4dENvbnRlbnQgPSAnVGFza3MgYXNzaWduZWQ6ICdcbiAgICAgICAgICAgIG5ld1Byb2plY3RUb0Rpc3BsYXkuYXBwZW5kQ2hpbGQoYXNzaWduZWRJdGVtc0xpc3QpO1xuXG4gICAgICAgICAgICBpZihpdGVtc0NvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8aXRlbXNDb2xsZWN0aW9uLmxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbXNDb2xsZWN0aW9uLmxpc3RbaV0ucHJvamVjdCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNzaWduZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25lZEl0ZW0uY2xhc3NMaXN0LmFkZCgnYXNzaWduZWQtdG8tcHJvamVjdC1pdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXRhaWwtdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtpdGVtc0NvbGxlY3Rpb24ubGlzdFtpXS50aXRsZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWRldGFpbC1kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHtpdGVtc0NvbGxlY3Rpb24ubGlzdFtpXS5kdWVEYXRlfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJpb3JpdHlDb2xvcihhc3NpZ25lZEl0ZW0sIGl0ZW1zQ29sbGVjdGlvbi5saXN0W2ldLnByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbmVkSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWduZWRJdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbmVkSXRlbXNMaXN0LmFwcGVuZENoaWxkKGFzc2lnbmVkSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRvRGlzcGxheSk7XG4gICAgICAgIH0pOyAgIFxuICAgIH1cbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMtbGlzdD5saScpO1xuICAgIGZvcihsZXQgaT0wOyBpPHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzTGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0c1tpXSk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgcmVuZGVyUHJvamVjdHNGcm9tQXJyYXksIGNsZWFyUHJvamVjdHNMaXN0IH07IiwiY2xhc3MgSXRlbXNDb2xsZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciAobGlzdD1bXSkge1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLmxpc3QucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBlZGl0SXRlbShpbmRleCwgaXRlbSkge1xuICAgICAgICB0aGlzLmxpc3RbaW5kZXhdID0gaXRlbTtcbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGl0ZW1JbmRleCkge1xuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtc0NvbGxlY3Rpb247IiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuLi9jb21wb25lbnRzLWNyZWF0aW9uL2NyZWF0ZU5ld1Byb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzRnJvbUFycmF5LCBjbGVhclByb2plY3RzTGlzdCB9IGZyb20gXCIuL3JlbmRlclByb2plY3RzRnJvbUFycmF5XCI7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0ID0gKHByb2plY3RzQ29sbGVjdGlvbiwgaXRlbXNDb2xsZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctcHJvamVjdCcpO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYnJhbmROZXdQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgICBwcm9qZWN0c0NvbGxlY3Rpb24uYWRkUHJvamVjdCh7bmFtZTogYnJhbmROZXdQcm9qZWN0Lm5hbWV9KVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQ29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbGxlY3Rpb24pKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0c0xpc3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHNGcm9tQXJyYXkocHJvamVjdHNDb2xsZWN0aW9uLCBpdGVtc0NvbGxlY3Rpb24pXG4gICAgfSlcbiAgICBcbn1cblxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMtZGVmaW5pdGlvbi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJOQU1FOiBcIik7XG4gICAgXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuIiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRJdGVtVG9Qcm9qZWN0KGl0ZW0pIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2goaXRlbSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImNsYXNzIFByb2plY3RzQ29sbGVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IgKGxpc3QgPSBbXSkge1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLmxpc3QucHVzaChwcm9qZWN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzQ29sbGVjdGlvbjsiLCJpbXBvcnQgeyByZW5kZXJJdGVtSW5Qcm9qZWN0IH0gZnJvbSBcIi4vcmVuZGVyaW5nL3JlbmRlckl0ZW1JblByb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlckl0ZW1zTGlzdCB9IGZyb20gJy4vcmVuZGVyaW5nL3JlbmRlckl0ZW1zTGlzdCc7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0c0Zyb21BcnJheSB9IGZyb20gXCIuL3JlbmRlcmluZy9yZW5kZXJQcm9qZWN0c0Zyb21BcnJheVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL3JlbmRlcmluZy9yZW5kZXJQcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdHNDb2xsZWN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMtZGVmaW5pdGlvbi9wcm9qZWN0c0NvbGxlY3Rpb25cIjtcbmltcG9ydCBJdGVtc0NvbGxlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy1kZWZpbml0aW9uL2l0ZW1zQ29sbGVjdGlvblwiO1xuaW1wb3J0IHsgcmVuZGVySW5pdGlhbFByb2plY3RzTGlzdCB9IGZyb20gXCIuL3JlbmRlcmluZy9yZW5kZXJJbml0aWFsUHJvamVjdHNMaXN0XCI7XG5cblxuXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0c0NvbGxlY3Rpb24gPSBuZXcgUHJvamVjdHNDb2xsZWN0aW9uKCk7XG4gICAgbGV0IGl0ZW1zQ29sbGVjdGlvbiA9IG5ldyBJdGVtc0NvbGxlY3Rpb24oKTtcbiAgICBcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0NvbGxlY3Rpb24nKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQ29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbGxlY3Rpb24pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzQ29sbGVjdGlvbiA9IG5ldyBQcm9qZWN0c0NvbGxlY3Rpb24oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQ29sbGVjdGlvblwiKSkubGlzdCk7XG4gICAgfVxuXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbXNDb2xsZWN0aW9uJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpdGVtc0NvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbXNDb2xsZWN0aW9uKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtc0NvbGxlY3Rpb24gPSBuZXcgSXRlbXNDb2xsZWN0aW9uKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpdGVtc0NvbGxlY3Rpb25cIikpLmxpc3QpO1xuICAgIH1cblxuICAgIFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBpdGVtc0NvbGxlY3Rpb24gPSBuZXcgSXRlbXNDb2xsZWN0aW9uKCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbXNDb2xsZWN0aW9uXCIpKS5saXN0ICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpdGVtc0NvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkoaXRlbXNDb2xsZWN0aW9uKSk7XG5cbiAgICBwcm9qZWN0c0NvbGxlY3Rpb24gPSBuZXcgUHJvamVjdHNDb2xsZWN0aW9uKCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNDb2xsZWN0aW9uXCIpKS5saXN0ICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0NvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb2xsZWN0aW9uKSk7XG4gICAgfSk7ICBcblxuICAgIHJlbmRlckluaXRpYWxQcm9qZWN0c0xpc3QoKTtcbiAgICByZW5kZXJJdGVtc0xpc3QoKTtcbiAgICByZW5kZXJQcm9qZWN0c0Zyb21BcnJheShwcm9qZWN0c0NvbGxlY3Rpb24sIGl0ZW1zQ29sbGVjdGlvbik7XG4gICAgcmVuZGVySXRlbUluUHJvamVjdChwcm9qZWN0c0NvbGxlY3Rpb24sIGl0ZW1zQ29sbGVjdGlvbik7XG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0c0NvbGxlY3Rpb24sIGl0ZW1zQ29sbGVjdGlvbik7XG59O1xuXG5jcmVhdGVQYWdlKCk7IiwiZXhwb3J0IGNvbnN0IHJlbmRlckluaXRpYWxQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWxpc3QnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQUk9KRUNUUyBDT0xMRUNUSU9OJ1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG5cbiAgICBjb25zdCBidXR0b25zV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1uZXctcHJvamVjdCcpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBREQgTkVXIFBST0pFQ1QnO1xuICAgIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59IiwiXG5leHBvcnQgY29uc3QgcmVuZGVySXRlbXNMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb25zdCBpdGVtc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGl0ZW1zQ29sbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtcy1saXN0Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnSVRFTVMgQ09MTEVDVElPTic7XG4gICAgaXRlbXNDb2xsZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXNDb2xsZWN0aW9uKTtcblxuICAgIGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLW5ldy1pdGVtJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0FERCBORVcgSVRFTSc7XG4gICAgYnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuLi9jb21wb25lbnRzLWNyZWF0aW9uL2NyZWF0ZUl0ZW1cIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzRnJvbUFycmF5LCBjbGVhclByb2plY3RzTGlzdCB9IGZyb20gXCIuL3JlbmRlclByb2plY3RzRnJvbUFycmF5XCI7XG5pbXBvcnQgeyByZW5kZXJQcmlvcml0eUNvbG9yIH0gZnJvbSBcIi4vcmVuZGVyUHJpb3JpdHlDb2xvclwiO1xuaW1wb3J0IEl0ZW1zQ29sbGVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy1kZWZpbml0aW9uL2l0ZW1zQ29sbGVjdGlvblwiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVySXRlbUluUHJvamVjdCA9IChwcm9qZWN0c0NvbGxlY3Rpb24sIGl0ZW1zQ29sbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IGl0ZW1zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1saXN0Jyk7XG4gICAgY29uc3QgYWRkTmV3SXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWl0ZW0tbW9kYWxcIik7XG4gICAgY29uc3QgYWRkSXRlbUJ0bk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctaXRlbS1tb2RhbC1idG4nKTtcbiAgICBsZXQgaXRlbUtleUlkID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgZWRpdEl0ZW1CdG5Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRJdGVtQnRuTW9kYWwuY2xhc3NMaXN0LmFkZCgnZWRpdC1pdGVtLWJ1dHRvbicpO1xuICAgIGVkaXRJdGVtQnRuTW9kYWwudGV4dENvbnRlbnQgPSAnU2F2ZSBjaGFuZ2VzJztcbiAgICBcbiAgICBhZGROZXdJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIGVkaXRJdGVtQnRuTW9kYWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGVkaXRJdGVtQnRuTW9kYWwpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gPHNwYW4+ICh4KSwgY2xvc2UgdGhlIG1vZGFsXG4gICAgc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkSXRlbUJ0bk1vZGFsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbiAgICB9XG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgYW55d2hlcmUgb3V0c2lkZSBvZiB0aGUgbW9kYWwsIGNsb3NlIGl0XG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgYWRkSXRlbUJ0bk1vZGFsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEl0ZW1CdG5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYnJhbmROZXdJdGVtID0gY3JlYXRlSXRlbSgpO1xuICAgICAgICBpdGVtc0NvbGxlY3Rpb24uYWRkSXRlbShicmFuZE5ld0l0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIml0ZW1zQ29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShpdGVtc0NvbGxlY3Rpb24pKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6YmxvY2s7XCIpO1xuICAgICAgICBjbGVhckl0ZW1zTGlzdCgpO1xuICAgICAgICByZW5kZXJJdGVtcyhpdGVtc0NvbGxlY3Rpb24pO1xuICAgICAgICBjbGVhclByb2plY3RzTGlzdCgpO1xuICAgICAgICByZW5kZXJQcm9qZWN0c0Zyb21BcnJheShwcm9qZWN0c0NvbGxlY3Rpb24sIGl0ZW1zQ29sbGVjdGlvbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJJdGVtcyA9IChpdGVtc0NvbGxlY3Rpb24pID0+IHtcbiAgICAgICAgaWYoaXRlbXNDb2xsZWN0aW9uLmxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8aXRlbXNDb2xsZWN0aW9uLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtKGl0ZW1zQ29sbGVjdGlvbiwgaXRlbXNDb2xsZWN0aW9uLmxpc3RbaV0pO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc0NvbGxlY3Rpb24gPSBuZXcgSXRlbXNDb2xsZWN0aW9uKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpdGVtc0NvbGxlY3Rpb25cIikpLmxpc3QpO1xuICAgICAgICByZW5kZXJJdGVtcyhpdGVtc0NvbGxlY3Rpb24pO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJJdGVtID0gKGl0ZW1zQ29sbGVjdGlvbiwgaXRlbSkgPT4geyBcbiAgICAgICAgY29uc3QgbmV3SXRlbVRvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld0l0ZW1Ub0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbScpO1xuICAgICAgICBpdGVtS2V5SWQgPSBpdGVtc0NvbGxlY3Rpb24ubGlzdC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBuZXdJdGVtVG9EaXNwbGF5LnNldEF0dHJpYnV0ZSgnaXRlbS1rZXktaWQnLCBpdGVtS2V5SWQpXG5cbiAgICAgICAgY29uc3QgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250ZW50LXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgVElUTEU6ICR7aXRlbS50aXRsZX1gO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBERVNDOiAke2l0ZW0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEVUUgREFURTogJHtpdGVtLmR1ZURhdGV9YDtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUFJJT1JJVFk6ICR7aXRlbS5wcmlvcml0eX1gO1xuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYFBST0pFQ1Q6ICR7aXRlbS5wcm9qZWN0fWA7XG4gICAgICAgIHJlbmRlclByaW9yaXR5Q29sb3IobmV3SXRlbVRvRGlzcGxheSwgaXRlbS5wcmlvcml0eSk7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICAgICAgbmV3SXRlbVRvRGlzcGxheS5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aW9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWN0aW9ucy13cmFwcGVyJyk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtaXRlbScpO1xuICAgICAgICByZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcbiAgICAgICAgYWN0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcbiAgICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgYWN0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAgICAgbmV3SXRlbVRvRGlzcGxheS5hcHBlbmRDaGlsZChhY3Rpb25zV3JhcHBlcik7XG5cbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZWRpdEl0ZW1CdG5Nb2RhbCk7XG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZWRpdEl0ZW1CdG5Nb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG4gICAgICAgICAgICBhZGRJdGVtQnRuTW9kYWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0aXRsZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdCNwcmlvcml0eVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHJvamVjdFwiKTtcblxuICAgICAgICAgICAgaXRlbUtleUlkID0gaXRlbXNDb2xsZWN0aW9uLmxpc3QuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgICAgIHRpdGxlLnZhbHVlID0gaXRlbXNDb2xsZWN0aW9uLmxpc3RbaXRlbUtleUlkXS50aXRsZTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gaXRlbXNDb2xsZWN0aW9uLmxpc3RbaXRlbUtleUlkXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPSBpdGVtc0NvbGxlY3Rpb24ubGlzdFtpdGVtS2V5SWRdLmR1ZURhdGU7XG4gICAgICAgICAgICBwcmlvcml0eS52YWx1ZSA9IGl0ZW1zQ29sbGVjdGlvbi5saXN0W2l0ZW1LZXlJZF0ucHJpb3JpdHk7XG4gICAgICAgICAgICBwcm9qZWN0LnZhbHVlID0gaXRlbXNDb2xsZWN0aW9uLmxpc3RbaXRlbUtleUlkXS5wcm9qZWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpdGVtS2V5SWQgPSBpdGVtc0NvbGxlY3Rpb24ubGlzdC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgICAgaXRlbXNDb2xsZWN0aW9uLnJlbW92ZUl0ZW0oaXRlbUtleUlkKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXRlbXNDb2xsZWN0aW9uXCIsIEpTT04uc3RyaW5naWZ5KGl0ZW1zQ29sbGVjdGlvbikpO1xuICAgICAgICAgICAgaXRlbXNMaXN0LnJlbW92ZUNoaWxkKG5ld0l0ZW1Ub0Rpc3BsYXkpO1xuICAgICAgICAgICAgY2xlYXJJdGVtc0xpc3QoKTtcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zKGl0ZW1zQ29sbGVjdGlvbik7XG4gICAgICAgICAgICBjbGVhclByb2plY3RzTGlzdCgpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdHNGcm9tQXJyYXkocHJvamVjdHNDb2xsZWN0aW9uLCBpdGVtc0NvbGxlY3Rpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtc0xpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbVRvRGlzcGxheSk7XG4gICAgfTtcblxuICAgIGVkaXRJdGVtQnRuTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRlZEl0ZW0gPSBjcmVhdGVJdGVtKCk7XG4gICAgICAgIGl0ZW1zQ29sbGVjdGlvbi5lZGl0SXRlbShpdGVtS2V5SWQsIGVkaXRlZEl0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIml0ZW1zQ29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShpdGVtc0NvbGxlY3Rpb24pKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OmJsb2NrO1wiKTtcbiAgICAgICAgZWRpdEl0ZW1CdG5Nb2RhbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG4gICAgICAgIGFkZEl0ZW1CdG5Nb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG4gICAgICAgIGNsZWFySXRlbXNMaXN0KCk7XG4gICAgICAgIHJlbmRlckl0ZW1zKGl0ZW1zQ29sbGVjdGlvbilcbiAgICAgICAgY2xlYXJQcm9qZWN0c0xpc3QoKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHNGcm9tQXJyYXkocHJvamVjdHNDb2xsZWN0aW9uLCBpdGVtc0NvbGxlY3Rpb24pO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbGVhckl0ZW1zTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8taXRlbScpO1xuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gQXJyYXkuZnJvbShhbGxJdGVtcyk7XG4gICAgICAgIGl0ZW1zQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW1zTGlzdC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVJdGVtIiwidGl0bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJ2YWx1ZSIsInJlbmRlclByaW9yaXR5Q29sb3IiLCJpdGVtIiwic2V0QXR0cmlidXRlIiwicmVuZGVyUHJvamVjdHNGcm9tQXJyYXkiLCJwcm9qZWN0c0NvbGxlY3Rpb24iLCJpdGVtc0NvbGxlY3Rpb24iLCJwcm9qZWN0c0xpc3QiLCJsaXN0IiwibGVuZ3RoIiwiZm9yRWFjaCIsIm5ld1Byb2plY3RUb0Rpc3BsYXkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJuYW1lIiwiYXNzaWduZWRJdGVtc0xpc3QiLCJhcHBlbmRDaGlsZCIsImkiLCJhc3NpZ25lZEl0ZW0iLCJjbGVhclByb2plY3RzTGlzdCIsInByb2plY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUNoaWxkIiwiYWRkSXRlbSIsInB1c2giLCJlZGl0SXRlbSIsImluZGV4IiwicmVtb3ZlSXRlbSIsIml0ZW1JbmRleCIsInNwbGljZSIsInJlbmRlclByb2plY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiYnJhbmROZXdQcm9qZWN0IiwicHJvbXB0IiwiYWRkSXRlbVRvUHJvamVjdCIsImNyZWF0ZU5ld1Byb2plY3QiLCJhZGRQcm9qZWN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJdGVtIiwicGFyc2UiLCJ3aW5kb3ciLCJjb250YWluZXIiLCJidXR0b25zV3JhcHBlciIsImJ1dHRvbiIsInJlbmRlckluaXRpYWxQcm9qZWN0c0xpc3QiLCJyZW5kZXJJdGVtc0xpc3QiLCJpdGVtc0xpc3QiLCJhZGROZXdJdGVtQnV0dG9uIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JtIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImFkZEl0ZW1CdG5Nb2RhbCIsIml0ZW1LZXlJZCIsImVkaXRJdGVtQnRuTW9kYWwiLCJzdHlsZSIsImRpc3BsYXkiLCJyZXNldCIsIm9uY2xpY2siLCJyZW1vdmVBdHRyaWJ1dGUiLCJldmVudCIsInRhcmdldCIsImJyYW5kTmV3SXRlbSIsImNsZWFySXRlbXNMaXN0IiwicmVuZGVySXRlbXMiLCJyZW5kZXJJdGVtIiwibmV3SXRlbVRvRGlzcGxheSIsImluZGV4T2YiLCJjb250ZW50V3JhcHBlciIsImFjdGlvbnNXcmFwcGVyIiwicmVtb3ZlQnV0dG9uIiwiZWRpdEJ1dHRvbiIsImVkaXRlZEl0ZW0iLCJhbGxJdGVtcyIsIkFycmF5IiwiZnJvbSIsInJlbmRlckl0ZW1JblByb2plY3QiLCJjcmVhdGVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==