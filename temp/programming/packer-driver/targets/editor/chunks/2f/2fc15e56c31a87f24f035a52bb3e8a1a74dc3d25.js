System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MapInfo, matrix1, _dec, _class, _crd, ccclass, Obstacle;

  function _reportPossibleCrUseOfMapInfo(extras) {
    _reporterNs.report("MapInfo", "./MapInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix(extras) {
    _reporterNs.report("matrix1", "./Square", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      MapInfo = _unresolved_2.MapInfo;
    }, function (_unresolved_3) {
      matrix1 = _unresolved_3.matrix1;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7401898oBxIMLBXBgeRLfMf", "Obstacle", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass
      } = _decorator);
      /**
       * Predefined variables
       * Name = Obstacle
       * DateTime = Tue Nov 09 2021 21:56:38 GMT+0800 (中國標準時間)
       * Author = XieYe0920
       * FileBasename = Obstacle.ts
       * FileBasenameNoExtension = Obstacle
       * URL = db://assets/scripts/Obstacle.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("Obstacle", Obstacle = (_dec = ccclass('Obstacle'), _dec(_class = class Obstacle extends Component {
        constructor(...args) {
          super(...args);
          this.id = 102;
          this.squarex = void 0;
          this.squarey = void 0;
        }

        onLoad() {
          let x = this.node.getPosition().x;
          let y = this.node.getPosition().y;

          if (x >= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).xstart1() && x <= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).xend1() && y >= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).ystart1() && y <= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).yend1()) {
            this.squarex = Math.floor((x - (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).xstart1()) / (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).totalsize());
            this.squarey = Math.floor((y - (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).ystart1()) / (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).totalsize());
          }

          this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).xshift1(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).yshift1(), 0);
          (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
            error: Error()
          }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].id = this.id;
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
//# sourceMappingURL=2fc15e56c31a87f24f035a52bb3e8a1a74dc3d25.js.map