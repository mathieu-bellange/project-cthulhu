 let socket = new WebSocket('ws://192.168.0.22:3001');
 socket.addEventListener('message', function(event) {
    const sharedDocs = document.querySelectorAll('.shared-doc');
    for (var doc of sharedDocs) {
      doc.remove();
    }
    const data = JSON.parse(event.data);
    if (data.length === 0) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "no-content");
      newDiv.append('no content');
      document.getElementById("shared-container").appendChild(newDiv);
    } else {
      const noContentElements = document.querySelectorAll('.no-content');
      for (var el of noContentElements) {
        el.remove();
      }
    }
    data.forEach(item => {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "shared-doc");
      const img = document.createElement("img", { src: item.overview });
      img.setAttribute("src", `/images/${item.overview}`);
      newDiv.appendChild(img);
      document.getElementById("shared-container").appendChild(newDiv);
    });
});

window.onbeforeunload = function() {
    socket.onclose = function() {}; // disable onclose handler first
    socket.close();
};
