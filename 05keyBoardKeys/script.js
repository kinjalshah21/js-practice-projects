const insert = document.querySelector("#insert");

window.addEventListener("keypress", function (e) {
  insert.innerHTML = `
<div class = color>
   <table>
   <tr>
    <th>Key</th>
    <th>Code</th>
    <th>KeyCode</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.code}</td>
    <td>${e.keyCode}</td>
  </tr>
  </table>
</div>
  `;
});
