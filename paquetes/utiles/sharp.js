const sharp = require("sharp");

sharp("./pic.jpg")
    .resize(100)
    .grayscale()
    .toFile("resizeX100.png");
