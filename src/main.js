import k from "./kaplayCtx";
import disclaimer from "./scenes/disclaimer";
import mainMenu from "./scenes/mainMenu";

k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms", "graphics/platforms.png");
k.loadSprite("sonic", "graphics/sonic.png", {
	sliceX: 8,
	sliceY: 2,
	anims: {
		run: { from: 0, to: 7, loop: true, speed: 30 },
		jump: { from: 8, to: 15, loop: true, speed: 100 },
	},
});

k.loadFont("mania", "fonts/mania.ttf");

k.loadSound("jump", "sounds/Jump.wav");

k.scene("disclaimer", disclaimer);
k.scene("main-menu", mainMenu);

k.go("disclaimer");