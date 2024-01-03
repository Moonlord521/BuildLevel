System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, _dec, _class, _crd, ccclass, TotalLevel, FirstPage;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49e45OoiQ9OAJPOZsfx9zTZ", "FirstPage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sys']);

      ({
        ccclass
      } = _decorator);
      /**
       * Predefined variables
       * Name = FirstPage
       * DateTime = Tue Nov 16 2021 15:47:03 GMT+0800 (中國標準時間)
       * Author = XieYe0920
       * FileBasename = FirstPage.ts
       * FileBasenameNoExtension = FirstPage
       * URL = db://assets/scripts/FirstPage.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      TotalLevel = 100;

      _export("FirstPage", FirstPage = (_dec = ccclass('FirstPage'), _dec(_class = class FirstPage extends Component {
        onLoad() {
          let str = sys.localStorage.getItem('LevelState');

          if (str == '' || str == null) {
            let LevelState = new Array(TotalLevel);

            for (let i = 0; i < TotalLevel; i++) {
              LevelState[i] = false;
            }

            sys.localStorage.setItem('LevelState', JSON.stringify(LevelState));
          } else {
            let LevelState = JSON.parse(str);

            if (LevelState.length < TotalLevel) {
              let nLevelState = new Array(TotalLevel);

              for (let i = 0; i < TotalLevel; i++) {
                if (i < LevelState.length) nLevelState[i] = LevelState[i];else nLevelState[i] = false;
              }

              sys.localStorage.setItem('LevelState', JSON.stringify(nLevelState));
            }
          }
        }

        ClearData() {
          sys.localStorage.removeItem('LevelState');
          let LevelState = new Array(TotalLevel);

          for (let i = 0; i < TotalLevel; i++) {
            LevelState[i] = false;
            let scene_name = 'Level' + (i + 1);
            sys.localStorage.removeItem(scene_name);
          }

          sys.localStorage.setItem('LevelState', JSON.stringify(LevelState));
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
//# sourceMappingURL=1f63c291f1dca21280e5dd369fd6ef0d5e004d6b.js.map