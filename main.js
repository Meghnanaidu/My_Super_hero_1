var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update() {
  fabric.Image.fromURL(
    "https://doc-10-ak-docs.googleusercontent.com/docs/securesc/f9i01837g9152dku0qdbkdeq7b0gc0ll/jpr9bq6ddr1ambf1j37lk3e3oipecaqk/1624091550000/12130465111352149128/02098621126902139019Z/1VDntS8HZKpir-9OIMrV7INLOQili4Pyz?nonce=p9rhr2linscus&user=02098621126902139019Z&hash=9u0ma9fblotl0t0778388pmkjtu0ua7h",
    function (Img) {
      player_object = Img;
      player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({ top: player_y, left: player_x });
      canvas.add(player_object);
    }
  );
}

function new_image(get_image) {
  fabric.Image.fromURL(get_image, function (Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({ top: player_y, left: player_x });
    canvas.add(block_image_object);
  });
}
