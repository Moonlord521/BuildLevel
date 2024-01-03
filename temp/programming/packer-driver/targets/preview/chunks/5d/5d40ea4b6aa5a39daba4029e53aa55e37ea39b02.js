System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, SceneSwitch;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ff96inR3FE8I5MMOZKfiL8", "SceneSwitch", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass
      } = _decorator);
      /**
       * Predefined variables
       * Name = SceneSwitch
       * DateTime = Sat Oct 30 2021 22:43:01 GMT+0800 (中国标准时间)
       * Author = Moonlord
       * FileBasename = SceneSwitch.ts
       * FileBasenameNoExtension = SceneSwitch
       * URL = db://assets/Scripts/SceneSwitch.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("SceneSwitch", SceneSwitch = (_dec = ccclass('SceneSwitch'), _dec(_class = class SceneSwitch extends Component {
        buttoncallback(event, sceneName) {
          director.loadScene(sceneName);
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
//# sourceMappingURL=5d40ea4b6aa5a39daba4029e53aa55e37ea39b02.js.map