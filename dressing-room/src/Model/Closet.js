import Data from "../Data/Data";
import dateDrawer from "../Data/buttonArray";
import Drawer from "./Drawer";
import Item from "./Item";

class Closet {
  constructor() {
    this.drawers = [];
  }
  addDrawer = drawer => {
    this.drawers = [...this.drawers, drawer];
  };
}
let Wardrobe = new Closet();

for (let item of dateDrawer) {
  let type = item.type;
  let name = item.showName;
  let drawer = new Drawer(type, name);
  for (let item of Data) {
    let type = item.type;
    let imgSrc_jpg = item.imgSrc_jpg;
    let imgSrc_png = item.imgSrc_png;
    let itemDrawer = new Item(type, imgSrc_jpg, imgSrc_png);
    if(itemDrawer.type === drawer.type){
        drawer.addItem(itemDrawer);
    }
  }
  Wardrobe.addDrawer(drawer);
}

export default Wardrobe.drawers;
