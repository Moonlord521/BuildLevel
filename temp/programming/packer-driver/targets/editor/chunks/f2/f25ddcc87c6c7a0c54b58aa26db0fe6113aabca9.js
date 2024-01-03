System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MapInfo, matrix1, LightSource, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, LS_array, Light;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapInfo(extras) {
    _reporterNs.report("MapInfo", "./MapInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix(extras) {
    _reporterNs.report("matrix1", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLightSource(extras) {
    _reporterNs.report("LightSource", "./LightTravel", _context.meta, extras);
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
    }, function (_unresolved_4) {
      LightSource = _unresolved_4.LightSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0ed9iWgf9GhIKi+D5kewXa", "Light", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LightSource
       * DateTime = Sun Oct 31 2021 15:32:37 GMT+0800 (中国标准时间)
       * Author = Moonlord
       * FileBasename = LightSource.ts
       * FileBasenameNoExtension = LightSource
       * URL = db://assets/Scripts/LightSource.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("LS_array", LS_array = new Array());

      _export("Light", Light = (_dec = ccclass('Light'), _dec(_class = (_class2 = class Light extends Component {
        constructor(...args) {
          super(...args);
          this.id = 101;

          _initializerDefineProperty(this, "dir", _descriptor, this);

          this.squarex = 0;
          this.squarey = 0;

          _initializerDefineProperty(this, "red", _descriptor2, this);

          _initializerDefineProperty(this, "green", _descriptor3, this);

          _initializerDefineProperty(this, "blue", _descriptor4, this);
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

          this.node.setRotationFromEuler(0, 0, this.dir * 45);
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
          let LS = new (_crd && LightSource === void 0 ? (_reportPossibleCrUseOfLightSource({
            error: Error()
          }), LightSource) : LightSource)([this.squarex, this.squarey], this.dir, [this.red, this.green, this.blue]);
          LS_array.push(LS);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dir", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "red", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "green", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "blue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
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
//# sourceMappingURL=f25ddcc87c6c7a0c54b58aa26db0fe6113aabca9.js.map