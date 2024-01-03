System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Color, MapInfo, matrix1, GetTotalColor, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, flower_array, Flower;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapInfo(extras) {
    _reporterNs.report("MapInfo", "./MapInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix(extras) {
    _reporterNs.report("matrix1", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetTotalColor(extras) {
    _reporterNs.report("GetTotalColor", "./Square", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      MapInfo = _unresolved_2.MapInfo;
    }, function (_unresolved_3) {
      matrix1 = _unresolved_3.matrix1;
      GetTotalColor = _unresolved_3.GetTotalColor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edab9+gf55O5rON2LXcQH27", "Flower", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Flower
       * DateTime = Sun Oct 31 2021 17:42:46 GMT+0800 (中国标准时间)
       * Author = Moonlord
       * FileBasename = Flower.ts
       * FileBasenameNoExtension = Flower
       * URL = db://assets/Scripts/Flower.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("flower_array", flower_array = new Array());

      _export("Flower", Flower = (_dec = ccclass('Flower'), _dec(_class = (_class2 = class Flower extends Component {
        constructor() {
          super(...arguments);
          this.id = void 0;
          this.squarex = 0;
          this.squarey = 0;

          _initializerDefineProperty(this, "red", _descriptor, this);

          _initializerDefineProperty(this, "green", _descriptor2, this);

          _initializerDefineProperty(this, "blue", _descriptor3, this);

          this.state = false;
        }

        onLoad() {
          var x = this.node.getPosition().x;
          var y = this.node.getPosition().y;

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

          this.id = 0;
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
          flower_array.push(this.node);
          this.ChangeState();
        }

        ChangeState() {
          var [r, g, b] = (_crd && GetTotalColor === void 0 ? (_reportPossibleCrUseOfGetTotalColor({
            error: Error()
          }), GetTotalColor) : GetTotalColor)([this.squarex, this.squarey]);

          if (r == this.red && g == this.green && b == this.blue) {
            this.state = true;
          } else {
            this.state = false;
          }

          var sprite = this.getComponent(Sprite);

          if (this.state) {
            this.node.setScale(1, 1);
            sprite.color = new Color(this.red ? 255 : 0, this.green ? 255 : 0, this.blue ? 255 : 0, 255);
          } else {
            this.node.setScale(0.9, 0.9);

            if (this.red || this.green || this.blue) {
              sprite.color = new Color(this.red ? 150 : 0, this.green ? 150 : 0, this.blue ? 150 : 0, 255);
            } else {
              sprite.color = new Color(80, 80, 80, 255);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "red", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "green", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=122408b6c88d9d8bd5c477dcc254a8b1638c2a22.js.map