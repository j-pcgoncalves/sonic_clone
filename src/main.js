import k from "./kaplayCtx";
import disclaimer from "./scenes/disclaimer";

k.loadFont("mania", "fonts/mania.ttf");

k.scene("disclaimer", disclaimer);

k.go("disclaimer");