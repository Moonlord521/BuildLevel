System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, Label, director, sys, Light, LS_array, Flower, flower_array, LightPiece, LightTravel, FanseType, NewFanseArray, FanseDetect, FanseDraw, ClearMatrix, matrix1, matrix2, MirrorState, mirror_array, ChangeMirror, Mirror, StableMirror, Obstacle, _dec, _class, _class2, _descriptor, _crd, ccclass, property, success, FS_locate, MainTheme;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function Num2Char(num) {
    if (num < 10) return String(num);else return String.fromCharCode(num + 87);
  }

  function Color2Char(color) {
    let a = color[0] ? 1 : 0;
    let b = color[1] ? 1 : 0;
    let c = color[2] ? 1 : 0;
    let num = a * 4 + b * 2 + c;
    return String(num);
  }

  function GenerateLocate(i) {
    let x, y;

    if (i < 12) {
      x = i;
      y = 1;
    } else {
      x = i - 12;
      y = 0;
    }

    return [x, y];
  }

  function InArray(key, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == key) return true;
    }

    return false;
  }

  function _reportPossibleCrUseOfLight(extras) {
    _reporterNs.report("Light", "./Light", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLS_array(extras) {
    _reporterNs.report("LS_array", "./Light", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlower(extras) {
    _reporterNs.report("Flower", "./Flower", _context.meta, extras);
  }

  function _reportPossibleCrUseOfflower_array(extras) {
    _reporterNs.report("flower_array", "./Flower", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLightPiece(extras) {
    _reporterNs.report("LightPiece", "./LightPiece", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLightSource(extras) {
    _reporterNs.report("LightSource", "./LightTravel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLightTravel(extras) {
    _reporterNs.report("LightTravel", "./LightTravel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFanseType(extras) {
    _reporterNs.report("FanseType", "./LightTravel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewFanseArray(extras) {
    _reporterNs.report("NewFanseArray", "./LightTravel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFanseDetect(extras) {
    _reporterNs.report("FanseDetect", "./LightTravel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFanseDraw(extras) {
    _reporterNs.report("FanseDraw", "./LightTravel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClearMatrix(extras) {
    _reporterNs.report("ClearMatrix", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix(extras) {
    _reporterNs.report("matrix1", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix2(extras) {
    _reporterNs.report("matrix2", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMirrorState(extras) {
    _reporterNs.report("MirrorState", "./Mirror", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmirror_array(extras) {
    _reporterNs.report("mirror_array", "./Mirror", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChangeMirror(extras) {
    _reporterNs.report("ChangeMirror", "./Mirror", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMirror(extras) {
    _reporterNs.report("Mirror", "./Mirror", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStableMirror(extras) {
    _reporterNs.report("StableMirror", "./StableMirror", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObstacle(extras) {
    _reporterNs.report("Obstacle", "./Obstacle", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      director = _cc.director;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Light = _unresolved_2.Light;
      LS_array = _unresolved_2.LS_array;
    }, function (_unresolved_3) {
      Flower = _unresolved_3.Flower;
      flower_array = _unresolved_3.flower_array;
    }, function (_unresolved_4) {
      LightPiece = _unresolved_4.LightPiece;
    }, function (_unresolved_5) {
      LightTravel = _unresolved_5.LightTravel;
      FanseType = _unresolved_5.FanseType;
      NewFanseArray = _unresolved_5.NewFanseArray;
      FanseDetect = _unresolved_5.FanseDetect;
      FanseDraw = _unresolved_5.FanseDraw;
    }, function (_unresolved_6) {
      ClearMatrix = _unresolved_6.ClearMatrix;
      matrix1 = _unresolved_6.matrix1;
      matrix2 = _unresolved_6.matrix2;
    }, function (_unresolved_7) {
      MirrorState = _unresolved_7.MirrorState;
      mirror_array = _unresolved_7.mirror_array;
      ChangeMirror = _unresolved_7.ChangeMirror;
      Mirror = _unresolved_7.Mirror;
    }, function (_unresolved_8) {
      StableMirror = _unresolved_8.StableMirror;
    }, function (_unresolved_9) {
      Obstacle = _unresolved_9.Obstacle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82c684UKehPdY2ZDtzje3aX", "MainTheme", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label', 'director', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MainTheme
       * DateTime = Thu Nov 04 2021 16:21:57 GMT+0800 (中國標準時間)
       * Author = XieYe0920
       * FileBasename = MainTheme.ts
       * FileBasenameNoExtension = MainTheme
       * URL = db://assets/scripts/MainTheme.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("success", success = false);

      _export("FS_locate", FS_locate = [-1, -1]);

      _export("MainTheme", MainTheme = (_dec = ccclass('MainTheme'), _dec(_class = (_class2 = class MainTheme extends Component {
        constructor(...args) {
          super(...args);
          this.str = void 0;

          _initializerDefineProperty(this, "success_str", _descriptor, this);
        }

        onLoad() {
          (_crd && ClearMatrix === void 0 ? (_reportPossibleCrUseOfClearMatrix({
            error: Error()
          }), ClearMatrix) : ClearMatrix)();

          while ((_crd && LS_array === void 0 ? (_reportPossibleCrUseOfLS_array({
            error: Error()
          }), LS_array) : LS_array).length > 0) (_crd && LS_array === void 0 ? (_reportPossibleCrUseOfLS_array({
            error: Error()
          }), LS_array) : LS_array).pop();

          while ((_crd && flower_array === void 0 ? (_reportPossibleCrUseOfflower_array({
            error: Error()
          }), flower_array) : flower_array).length > 0) (_crd && flower_array === void 0 ? (_reportPossibleCrUseOfflower_array({
            error: Error()
          }), flower_array) : flower_array).pop();

          while ((_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
            error: Error()
          }), mirror_array) : mirror_array).length > 0) (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
            error: Error()
          }), mirror_array) : mirror_array).pop();

          let i, j, dir;

          for (i = 0; i < 15; i++) {
            for (j = 0; j < 15; j++) {
              for (dir = 0; dir < 8; dir++) {
                let node = new Node('LP_node');
                node.layer = 33554432;
                node.addComponent(Sprite);
                let LP = node.addComponent(_crd && LightPiece === void 0 ? (_reportPossibleCrUseOfLightPiece({
                  error: Error()
                }), LightPiece) : LightPiece);
                LP.SetProps([i, j], dir);
                this.node.addChild(node);
              }
            }
          }

          let discribe = this.node.getChildByName('LevelDescribe');
          let label = discribe.getComponent(Label);
          this.str = label.string;
        }

        GenerateCode() {
          let node_list = this.node.children;
          let node_num = node_list.length;
          let L = 'L';
          let F = 'F';
          let M = 'M';
          let G = '';
          let S = '';
          let mirror_list = new Array(17);

          for (let i = 0; i < 17; i++) mirror_list[i] = 0;

          for (let i = 6; i < node_num; i++) {
            let node = node_list[i];
            let light = node.getComponent(_crd && Light === void 0 ? (_reportPossibleCrUseOfLight({
              error: Error()
            }), Light) : Light);
            let flower = node.getComponent(_crd && Flower === void 0 ? (_reportPossibleCrUseOfFlower({
              error: Error()
            }), Flower) : Flower);
            let mirror = node.getComponent(_crd && Mirror === void 0 ? (_reportPossibleCrUseOfMirror({
              error: Error()
            }), Mirror) : Mirror);
            let st_mirror = node.getComponent(_crd && StableMirror === void 0 ? (_reportPossibleCrUseOfStableMirror({
              error: Error()
            }), StableMirror) : StableMirror);
            let obstacle = node.getComponent(_crd && Obstacle === void 0 ? (_reportPossibleCrUseOfObstacle({
              error: Error()
            }), Obstacle) : Obstacle);

            if (light != null) {
              L += Num2Char(light.squarex);
              L += Num2Char(light.squarey);
              L += Num2Char(light.dir);
              L += Color2Char([light.red, light.green, light.blue]);
            }

            if (flower != null) {
              F += Num2Char(flower.squarex);
              F += Num2Char(flower.squarey);
              F += Color2Char([flower.red, flower.green, flower.blue]);
            }

            if (mirror != null) {
              mirror_list[mirror.id - 1]++;
            }

            if (st_mirror != null) {
              let id = st_mirror.id;

              switch (id) {
                case 7:
                  {
                    G += Num2Char(st_mirror.squarex);
                    G += Num2Char(st_mirror.squarey);
                    G += Num2Char(st_mirror.dir);
                    break;
                  }

                case 10:
                  {
                    S += Num2Char(st_mirror.squarex);
                    S += Num2Char(st_mirror.squarey);
                    S += '2';
                    break;
                  }

                case 13:
                  {
                    S += Num2Char(st_mirror.squarex);
                    S += Num2Char(st_mirror.squarey);
                    S += '3';
                    break;
                  }

                case 14:
                  {
                    S += Num2Char(st_mirror.squarex);
                    S += Num2Char(st_mirror.squarey);
                    S += '4';
                    break;
                  }

                default:
                  break;
              }
            }

            if (obstacle != null) {
              S += Num2Char(obstacle.squarex);
              S += Num2Char(obstacle.squarey);
              S += '1';
            }
          }

          for (let i = 0; i < 17; i++) {
            if (mirror_list[i] > 0) {
              M += Num2Char(i + 1);
              M += Num2Char(mirror_list[i]);
            }
          }

          let level_str = L + F + M;
          if (G.length > 0) level_str = level_str + 'G' + G;
          if (S.length > 0) level_str = level_str + 'S' + S;
          console.log(level_str);
        }

        start() {
          this.GenerateCode();
          let scene_name = director.getScene().name;
          let str = sys.localStorage.getItem(scene_name);
          let MS_array;

          if (str == '' || str == null) {
            MS_array = new Array();

            for (let i = 0; i < (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array).length; i++) {
              let mirror_state = new (_crd && MirrorState === void 0 ? (_reportPossibleCrUseOfMirrorState({
                error: Error()
              }), MirrorState) : MirrorState)(0, 2, GenerateLocate(i));
              MS_array.push(mirror_state);
            }

            sys.localStorage.setItem(scene_name, JSON.stringify(MS_array));
          } else {
            MS_array = JSON.parse(str);

            if (MS_array.length != (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array).length) {
              while (MS_array.length > 0) MS_array.pop();

              for (let i = 0; i < (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
                error: Error()
              }), mirror_array) : mirror_array).length; i++) {
                let mirror_state = new (_crd && MirrorState === void 0 ? (_reportPossibleCrUseOfMirrorState({
                  error: Error()
                }), MirrorState) : MirrorState)(0, 2, GenerateLocate(i));
                MS_array.push(mirror_state);
              }

              sys.localStorage.setItem(scene_name, JSON.stringify(MS_array));
            }
          }

          for (let i = 0; i < (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
            error: Error()
          }), mirror_array) : mirror_array).length; i++) {
            (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array)[i].SetMirror(MS_array[i]);
          }

          let L_array = new Array((_crd && LS_array === void 0 ? (_reportPossibleCrUseOfLS_array({
            error: Error()
          }), LS_array) : LS_array).length);

          for (let i = 0; i < (_crd && LS_array === void 0 ? (_reportPossibleCrUseOfLS_array({
            error: Error()
          }), LS_array) : LS_array).length; i++) L_array[i] = (_crd && LS_array === void 0 ? (_reportPossibleCrUseOfLS_array({
            error: Error()
          }), LS_array) : LS_array)[i];

          let FS_array = (_crd && NewFanseArray === void 0 ? (_reportPossibleCrUseOfNewFanseArray({
            error: Error()
          }), NewFanseArray) : NewFanseArray)();
          (_crd && LightTravel === void 0 ? (_reportPossibleCrUseOfLightTravel({
            error: Error()
          }), LightTravel) : LightTravel)(L_array, FS_array, (_crd && FanseType === void 0 ? (_reportPossibleCrUseOfFanseType({
            error: Error()
          }), FanseType) : FanseType).Collect);

          if (FS_locate[0] >= 0) {
            (_crd && FanseDetect === void 0 ? (_reportPossibleCrUseOfFanseDetect({
              error: Error()
            }), FanseDetect) : FanseDetect)(FS_locate, FS_array);
            (_crd && FanseDraw === void 0 ? (_reportPossibleCrUseOfFanseDraw({
              error: Error()
            }), FanseDraw) : FanseDraw)(FS_locate, FS_array);
          }

          let i;

          for (i = 0; i < (_crd && flower_array === void 0 ? (_reportPossibleCrUseOfflower_array({
            error: Error()
          }), flower_array) : flower_array).length; i++) {
            let flower = (_crd && flower_array === void 0 ? (_reportPossibleCrUseOfflower_array({
              error: Error()
            }), flower_array) : flower_array)[i].getComponent(_crd && Flower === void 0 ? (_reportPossibleCrUseOfFlower({
              error: Error()
            }), Flower) : Flower);
            flower.ChangeState();
          }

          this.Success();
        }

        GetSceneIndex() {
          let scene_name = director.getScene().name;
          let scene_index = scene_name.slice(5, scene_name.length);
          let index = Number(scene_index);
          return index - 1;
        }

        SetUserState(scenen_index, success) {
          let LevelState = JSON.parse(sys.localStorage.getItem('LevelState'));
          let node = this.node.getChildByName('UserState');
          let label = node.getComponent(Label);

          if (LevelState[scenen_index]) {
            label.string = '已过关';
          } else {
            if (success) {
              LevelState[scenen_index] = true;
              label.string = '已过关';
              sys.localStorage.setItem('LevelState', JSON.stringify(LevelState));
            } else {
              label.string = '未过关';
            }
          }
        }

        Reset() {
          let scene_name = director.getScene().name;
          let MS_array = JSON.parse(sys.localStorage.getItem(scene_name));

          for (let i = 0; i < MS_array.length; i++) {
            MS_array[i].dir = 0;
            MS_array[i].area = 2;
            MS_array[i].locate = GenerateLocate(i);

            if ((_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array)[i].area == 1) {
              (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                error: Error()
              }), matrix1) : matrix1)[(_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
                error: Error()
              }), mirror_array) : mirror_array)[i].squarex * 15 + (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
                error: Error()
              }), mirror_array) : mirror_array)[i].squarey].id = -1;
            }

            (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array)[i].SetMirror(MS_array[i]);
          }

          for (let i = 0; i < 12 * 2; i++) {
            let [x, y] = GenerateLocate(i);
            if (i < MS_array.length) (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
              error: Error()
            }), matrix2) : matrix2)[x * 2 + y] = true;else (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
              error: Error()
            }), matrix2) : matrix2)[x * 2 + y] = false;
          }

          (_crd && ChangeMirror === void 0 ? (_reportPossibleCrUseOfChangeMirror({
            error: Error()
          }), ChangeMirror) : ChangeMirror)();
          this.Success();
          sys.localStorage.setItem(scene_name, JSON.stringify(MS_array));
        }

        Hint(event, hint_str) {
          if (hint_str == '' || hint_str == null) return;
          let scene_name = director.getScene().name;
          let MS_array = JSON.parse(sys.localStorage.getItem(scene_name));
          let hint_num = hint_str.length / 7;
          let other_num = MS_array.length - hint_num;
          let hint_index = new Array(hint_num);

          for (let i = 0; i < MS_array.length; i++) {
            MS_array[i].dir = 0;
            MS_array[i].area = 2;
            MS_array[i].locate = GenerateLocate(i);

            if ((_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array)[i].area == 1) {
              (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                error: Error()
              }), matrix1) : matrix1)[(_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
                error: Error()
              }), mirror_array) : mirror_array)[i].squarex * 15 + (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
                error: Error()
              }), mirror_array) : mirror_array)[i].squarey].id = -1;
            }

            (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array)[i].SetMirror(MS_array[i]);
          }

          for (let i = 0; i < hint_num; i++) {
            let str = hint_str.slice(i * 7, (i + 1) * 7);
            let index = +str.slice(0, 2);

            if (MS_array[index].area == 1) {
              let [x, y] = MS_array[index].locate;
              (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                error: Error()
              }), matrix1) : matrix1)[x * 15 + y].id = -1;
            }

            MS_array[index].area = 1;
            MS_array[index].dir = +str[2];
            MS_array[index].locate[0] = +str.slice(3, 5);
            MS_array[index].locate[1] = +str.slice(5, 7);
            (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
              error: Error()
            }), mirror_array) : mirror_array)[index].SetMirror(MS_array[index]);
            hint_index[i] = index;
          }

          let k = 0;

          for (let i = 0; i < MS_array.length; i++) {
            if (!InArray(i, hint_index)) {
              if (MS_array[i].area == 1) {
                let [x, y] = MS_array[i].locate;
                (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                  error: Error()
                }), matrix1) : matrix1)[x * 15 + y].id = -1;
              }

              MS_array[i].area = 2;
              MS_array[i].dir = 0;
              MS_array[i].locate = GenerateLocate(k++);
              (_crd && mirror_array === void 0 ? (_reportPossibleCrUseOfmirror_array({
                error: Error()
              }), mirror_array) : mirror_array)[i].SetMirror(MS_array[i]);
            }
          }

          for (let i = 0; i < 12 * 2; i++) {
            let [x, y] = GenerateLocate(i);
            if (i < other_num) (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
              error: Error()
            }), matrix2) : matrix2)[x * 2 + y] = true;else (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
              error: Error()
            }), matrix2) : matrix2)[x * 2 + y] = false;
          }

          (_crd && ChangeMirror === void 0 ? (_reportPossibleCrUseOfChangeMirror({
            error: Error()
          }), ChangeMirror) : ChangeMirror)();
          this.Success();
          sys.localStorage.setItem(scene_name, JSON.stringify(MS_array));
        }

        Success() {
          let success = true;
          let i;

          for (i = 0; i < (_crd && flower_array === void 0 ? (_reportPossibleCrUseOfflower_array({
            error: Error()
          }), flower_array) : flower_array).length; i++) {
            let flower = (_crd && flower_array === void 0 ? (_reportPossibleCrUseOfflower_array({
              error: Error()
            }), flower_array) : flower_array)[i].getComponent(_crd && Flower === void 0 ? (_reportPossibleCrUseOfFlower({
              error: Error()
            }), Flower) : Flower);
            success && (success = flower.state);
          }

          let discribe = this.node.getChildByName('LevelDescribe');
          let label = discribe.getComponent(Label);
          let scenen_index = this.GetSceneIndex();

          if (success) {
            label.string = this.success_str;
            this.SetUserState(scenen_index, true);
          } else {
            label.string = this.str;
            this.SetUserState(scenen_index, false);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "success_str", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
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
//# sourceMappingURL=1345ca19769320abeff2476108abc2556b7c0444.js.map