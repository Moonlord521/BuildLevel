System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, Sprite, SpriteFrame, resources, Color, MapInfo, GetColor, _dec, _class, _crd, ccclass, LightPiece;

  function _reportPossibleCrUseOfMapInfo(extras) {
    _reporterNs.report("MapInfo", "./MapInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetColor(extras) {
    _reporterNs.report("GetColor", "./Square", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      MapInfo = _unresolved_2.MapInfo;
    }, function (_unresolved_3) {
      GetColor = _unresolved_3.GetColor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2e850gSFdFiqHqLM1WoXTc", "LightPiece", undefined);

      __checkObsolete__(['_decorator', 'Component', 'UITransform', 'Sprite', 'SpriteFrame', 'resources', 'Color']);

      ({
        ccclass
      } = _decorator);
      /**
       * Predefined variables
       * Name = LightPiece
       * DateTime = Wed Nov 03 2021 20:14:34 GMT+0800 (中國標準時間)
       * Author = XieYe0920
       * FileBasename = LightPiece.ts
       * FileBasenameNoExtension = LightPiece
       * URL = db://assets/scripts/LightPiece.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      // const ImWidth = 36;
      // const ImHeight = 2;
      // const ImData = new Uint8Array(ImWidth * ImHeight * 4);
      // for (let i=0; i<ImWidth*ImHeight*4; i++) {
      //     ImData[i] = 255;
      // }

      _export("LightPiece", LightPiece = (_dec = ccclass('LightPiece'), _dec(_class = class LightPiece extends Component {
        constructor() {
          super(...arguments);
          this.dir = 0;
          this.locate = [0, 0];
        }

        SetProps(locate, dir) {
          this.locate = locate;
          this.dir = dir;
        }

        onLoad() {
          var UI = this.getComponent(UITransform);
          UI.anchorX = 0;
          UI.anchorY = 0.5;

          if (this.dir % 2 == 1) {
            this.node.setScale(1.41421, 1);
          } else {
            this.node.setScale(1, 1);
          }

          this.node.setPosition(this.locate[0] * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).xshift1(), this.locate[1] * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
            error: Error()
          }), MapInfo) : MapInfo).yshift1(), 0);
          this.node.setRotationFromEuler(0, 0, this.dir * 45);
          resources.load("LightPiece/spriteFrame", SpriteFrame, (_err, spriteFrame) => {
            this.getComponent(Sprite).spriteFrame = spriteFrame;
          });
          var [r, g, b] = (_crd && GetColor === void 0 ? (_reportPossibleCrUseOfGetColor({
            error: Error()
          }), GetColor) : GetColor)(this.locate, this.dir);
          var sprite = this.getComponent(Sprite);

          if (r == false && g == false && b == false) {
            sprite.color = new Color(0, 0, 0, 0);
          } else {
            sprite.color = new Color(r ? 255 : 0, g ? 255 : 0, b ? 255 : 0, 255);
          }
        }

        update() {
          var [r, g, b] = (_crd && GetColor === void 0 ? (_reportPossibleCrUseOfGetColor({
            error: Error()
          }), GetColor) : GetColor)(this.locate, this.dir);
          var sprite = this.getComponent(Sprite);

          if (r == false && g == false && b == false) {
            sprite.color = new Color(0, 0, 0, 0);
          } else {
            sprite.color = new Color(r ? 255 : 0, g ? 255 : 0, b ? 255 : 0, 255);
          }
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
//# sourceMappingURL=c327788241c72a890a8067f3443c877534ee6685.js.map