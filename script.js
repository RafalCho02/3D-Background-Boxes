$(document).ready(function () {
  const $boxesContainer = $("#boxes");
  const $btn = $("#btn");

  $btn.on("click", function () {
    $boxesContainer.toggleClass("big");
    $btn.toggleClass("active");
  });

  function createBoxes() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const $box = $("<div></div>")
          .addClass("box")
          .css({
            backgroundPosition: `${-j * 125}px ${-i * 125}px`,
          });
        $box.appendTo($boxesContainer);

        $box.on("mouseover", function () {
          $(this).css("transform", "scale(1.2)");
        });

        $box.on("mouseout", function () {
          $(this).css("transform", "scale(1)");
        });
      }
    }
  }

  createBoxes();
});
