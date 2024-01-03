System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MapInfo, matrix1, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, StableMirror;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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

      _cclegacy._RF.push({}, "76555dARtZMe7UDzdLvOM56", "StableMirror", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = StableMirror
       * DateTime = Tue Nov 16 2021 17:41:11 GMT+0800 (中國標準時間)
       * Author = XieYe0920
       * FileBasename = StableMirror.ts
       * FileBasenameNoExtension = StableMirror
       * URL = db://assets/scripts/StableMirror.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("StableMirror", StableMirror = (_dec = ccclass('StableMirror'), _dec(_class = (_class2 = class StableMirror extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "id", _descriptor, this);

          _initializerDefineProperty(this, "dir", _descriptor2, this);

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
          this.node.setRotationFromEuler(0, 0, this.dir * 45);
          (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
            error: Error()
          }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].id = this.id;
          (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
            error: Error()
          }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].mirrordir = this.dir;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dir", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=0358fd2ec6fea10d3278f4cab54f27882f431667.js.map