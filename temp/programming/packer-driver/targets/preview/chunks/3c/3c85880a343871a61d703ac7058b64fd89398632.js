System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, MapInfo;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e33eMjiv1EX4JpsyNwOt0p", "MapInfo", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass
      } = _decorator);
      /**
       * Predefined variables
       * Name = MapInfo
       * DateTime = Sun Oct 31 2021 16:36:39 GMT+0800 (中国标准时间)
       * Author = Moonlord
       * FileBasename = MapInfo.ts
       * FileBasenameNoExtension = MapInfo
       * URL = db://assets/Scripts/MapInfo.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("MapInfo", MapInfo = (_dec = ccclass('MapInfo'), _dec(_class = class MapInfo {
        static xstart1() {
          return -541.5;
        }

        static ystart1() {
          return -264;
        }

        static squaresize() {
          return 70;
        }

        static framesize() {
          return 2;
        }

        static xshift1() {
          return MapInfo.xstart1() + MapInfo.squaresize() / 2 + MapInfo.framesize();
        }

        static yshift1() {
          return MapInfo.ystart1() + MapInfo.squaresize() / 2 + MapInfo.framesize();
        }

        static totalsize() {
          return MapInfo.squaresize() + MapInfo.framesize();
        }

        static squarenum() {
          return 15;
        }

        static xend1() {
          return MapInfo.xstart1() + MapInfo.squarenum() * MapInfo.totalsize();
        }

        static yend1() {
          return MapInfo.ystart1() + MapInfo.squarenum() * MapInfo.totalsize();
        }

        static xstart2() {
          return -550.5;
        }

        static ystart2() {
          return -582;
        }

        static squaresize2() {
          return 70;
        }

        static framesize2x() {
          return 20;
        }

        static framesize2y() {
          return 30;
        }

        static xshift2() {
          return MapInfo.xstart2() + MapInfo.squaresize2() / 2 + MapInfo.framesize2x();
        }

        static yshift2() {
          return MapInfo.ystart2() + MapInfo.squaresize2() / 2 + MapInfo.framesize2y();
        }

        static totalsize2x() {
          return MapInfo.squaresize2() + MapInfo.framesize2x();
        }

        static totalsize2y() {
          return MapInfo.squaresize2() + MapInfo.framesize2y();
        }

        static squarenum2x() {
          return 12;
        }

        static squarenum2y() {
          return 2;
        }

        static xend2() {
          return MapInfo.xstart2() + MapInfo.squarenum2x() * MapInfo.totalsize2x();
        }

        static yend2() {
          return MapInfo.ystart2() + MapInfo.squarenum2y() * MapInfo.totalsize2y();
        }

      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c85880a343871a61d703ac7058b64fd89398632.js.map