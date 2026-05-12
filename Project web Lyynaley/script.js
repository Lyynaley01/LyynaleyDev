<script>
function createLeaf() {
  const leaf = document.createElement("div");
  leaf.className = "leaf";

  leaf.style.left = Math.random() * window.innerWidth + "px";

  let size = Math.random() * 20 + 10;
  leaf.style.width = size + "px";
  leaf.style.height = size + "px";

  let duration = Math.random() * 3 + 3;
  leaf.style.animationDuration = duration + "s";

  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.remove();
  }, duration * 1000);
}

// lebih aman daripada langsung 300ms
setInterval(createLeaf, 200);
</script>