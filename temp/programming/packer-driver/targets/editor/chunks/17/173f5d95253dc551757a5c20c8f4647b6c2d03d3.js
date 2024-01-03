System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Component, director, sys, MapInfo, GetTotalColor, matrix1, matrix2, LS_array, Flower, flower_array, LightTravel, FanseType, NewFanseArray, FanseDetect, FanseDraw, MainTheme, FS_locate, MirrorState, _dec, _class2, _class3, _descriptor, _descriptor2, _crd, ccclass, property, mirror_array, Mirror;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  /**
   * Predefined variables
   * Name = Mirror
   * DateTime = Fri Oct 29 2021 12:54:14 GMT+0800 (中国标准时间)
   * Author = Moonlord
   * FileBasename = Mirror.ts
   * FileBasenameNoExtension = Mirror
   * URL = db://assets/scripts/Mirror.ts
   * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
   *
   */
  function ChangeMirror() {
    let i, j;

    for (i = 0; i < 15 * 15; i++) {
      for (j = 0; j < 8 * 9; j++) {
        (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[i].lightdir[j] = false;
      }
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
    (_crd && FS_locate === void 0 ? (_reportPossibleCrUseOfFS_locate({
      error: Error()
    }), FS_locate) : FS_locate)[0] = -1;
    (_crd && FS_locate === void 0 ? (_reportPossibleCrUseOfFS_locate({
      error: Error()
    }), FS_locate) : FS_locate)[1] = -1;
    (_crd && LightTravel === void 0 ? (_reportPossibleCrUseOfLightTravel({
      error: Error()
    }), LightTravel) : LightTravel)(L_array, FS_array, (_crd && FanseType === void 0 ? (_reportPossibleCrUseOfFanseType({
      error: Error()
    }), FanseType) : FanseType).Collect);

    if ((_crd && FS_locate === void 0 ? (_reportPossibleCrUseOfFS_locate({
      error: Error()
    }), FS_locate) : FS_locate)[0] >= 0) {
      (_crd && FanseDetect === void 0 ? (_reportPossibleCrUseOfFanseDetect({
        error: Error()
      }), FanseDetect) : FanseDetect)(_crd && FS_locate === void 0 ? (_reportPossibleCrUseOfFS_locate({
        error: Error()
      }), FS_locate) : FS_locate, FS_array);
      (_crd && FanseDraw === void 0 ? (_reportPossibleCrUseOfFanseDraw({
        error: Error()
      }), FanseDraw) : FanseDraw)(_crd && FS_locate === void 0 ? (_reportPossibleCrUseOfFS_locate({
        error: Error()
      }), FS_locate) : FS_locate, FS_array);
    }

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
  }

  function _reportPossibleCrUseOfMapInfo(extras) {
    _reporterNs.report("MapInfo", "./MapInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetTotalColor(extras) {
    _reporterNs.report("GetTotalColor", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix(extras) {
    _reporterNs.report("matrix1", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix2(extras) {
    _reporterNs.report("matrix2", "./Square", _context.meta, extras);
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

  function _reportPossibleCrUseOfMainTheme(extras) {
    _reporterNs.report("MainTheme", "./MainTheme", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFS_locate(extras) {
    _reporterNs.report("FS_locate", "./MainTheme", _context.meta, extras);
  }

  _export({
    ChangeMirror: ChangeMirror,
    MirrorState: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Component = _cc.Component;
      director = _cc.director;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      MapInfo = _unresolved_2.MapInfo;
    }, function (_unresolved_3) {
      GetTotalColor = _unresolved_3.GetTotalColor;
      matrix1 = _unresolved_3.matrix1;
      matrix2 = _unresolved_3.matrix2;
    }, function (_unresolved_4) {
      LS_array = _unresolved_4.LS_array;
    }, function (_unresolved_5) {
      Flower = _unresolved_5.Flower;
      flower_array = _unresolved_5.flower_array;
    }, function (_unresolved_6) {
      LightTravel = _unresolved_6.LightTravel;
      FanseType = _unresolved_6.FanseType;
      NewFanseArray = _unresolved_6.NewFanseArray;
      FanseDetect = _unresolved_6.FanseDetect;
      FanseDraw = _unresolved_6.FanseDraw;
    }, function (_unresolved_7) {
      MainTheme = _unresolved_7.MainTheme;
      FS_locate = _unresolved_7.FS_locate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d15cgPa2xEOKXT/tTwRV0t", "Mirror", undefined);

      __checkObsolete__(['_decorator', 'Node', 'EventTouch', 'Component', 'director', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mirror_array", mirror_array = new Array());

      _export("MirrorState", MirrorState = class MirrorState {
        constructor(dir, area, locate) {
          this.dir = void 0;
          this.area = void 0;
          this.locate = void 0;
          this.dir = dir;
          this.area = area;
          this.locate = locate;
        }

      });

      _export("Mirror", Mirror = (_dec = ccclass('Mirror'), _dec(_class2 = (_class3 = class Mirror extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "id", _descriptor, this);

          _initializerDefineProperty(this, "rotatable", _descriptor2, this);

          this.dir = void 0;
          this.area = void 0;
          this.squarex = void 0;
          this.squarey = void 0;
          this.isClick = true;
        }

        onLoad() {
          mirror_array.push(this);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        }

        GetMirrorIndex() {
          for (let i = 0; i < mirror_array.length; i++) {
            if (!this._id.localeCompare(mirror_array[i]._id)) return i;
          }

          return null;
        }

        SetMirror(mirror_state) {
          this.dir = mirror_state.dir;
          this.area = mirror_state.area;
          this.squarex = mirror_state.locate[0];
          this.squarey = mirror_state.locate[1];

          if (this.area == 1) {
            this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).xshift1(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).yshift1(), 0);
            if (this.rotatable) this.node.setRotationFromEuler(0, 0, this.dir * 45);

            if (this.squarex * 15 + this.squarey < 15 * 15) {
              (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                error: Error()
              }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].id = this.id;
              (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                error: Error()
              }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].mirrordir = this.dir;
            }
          } else if (this.area == 2) {
            this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).totalsize2x() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).xshift2(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).totalsize2y() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).yshift2(), 0);
            if (this.rotatable) this.node.setRotationFromEuler(0, 0, this.dir * 45);

            if (this.squarex * 2 + this.squarey < 2 * 12) {
              (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
                error: Error()
              }), matrix2) : matrix2)[this.squarex * 2 + this.squarey] = true;
            }
          }
        }

        ChangeMirrorState(index) {
          let scene_name = director.getScene().name;
          let MS_array = JSON.parse(sys.localStorage.getItem(scene_name));
          MS_array[index].dir = this.dir;
          MS_array[index].area = this.area;
          MS_array[index].locate = [this.squarex, this.squarey];
          sys.localStorage.setItem(scene_name, JSON.stringify(MS_array));
        }

        touchStart(event) {
          this.isClick = true;
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.scheduleOnce(function () {
            this.isClick = false;
          }, 0.1);
        }

        touchEnd(event) {
          let index = this.GetMirrorIndex();

          if (this.isClick) {
            if (this.rotatable) {
              this.dir = (this.dir + 1) % 8;
              this.node.setRotationFromEuler(0, 0, this.dir * 45);
              this.ChangeMirrorState(index);
            }

            if (this.area == 1) {
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
              }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].mirrordir = this.dir;
              ChangeMirror();
              let maintheme = this.node.parent.getComponent(_crd && MainTheme === void 0 ? (_reportPossibleCrUseOfMainTheme({
                error: Error()
              }), MainTheme) : MainTheme);
              maintheme.Success();
            } else {
              this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).totalsize2x() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).xshift2(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).totalsize2y() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).yshift2(), 0);
            }
          } else {
            let x = event.getUILocation().x - 562.5;
            let y = event.getUILocation().y - 1218;
            let new_x;
            let new_y;

            if (x >= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).xstart1() && x <= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).xend1() && y >= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).ystart1() && y <= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).yend1()) {
              new_x = Math.floor((x - (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).xstart1()) / (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).totalsize());
              new_y = Math.floor((y - (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).ystart1()) / (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).totalsize());

              if ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                error: Error()
              }), matrix1) : matrix1)[new_x * 15 + new_y].id == -1) {
                let [r0, g0, b0] = [false, false, false];

                if (this.area == 1) {
                  (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                    error: Error()
                  }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].id = -1;
                  [r0, g0, b0] = (_crd && GetTotalColor === void 0 ? (_reportPossibleCrUseOfGetTotalColor({
                    error: Error()
                  }), GetTotalColor) : GetTotalColor)([this.squarex, this.squarey]);
                } else {
                  (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
                    error: Error()
                  }), matrix2) : matrix2)[this.squarex * 2 + this.squarey] = false;
                }

                this.area = 1;
                (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                  error: Error()
                }), matrix1) : matrix1)[new_x * 15 + new_y].id = this.id;
                (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                  error: Error()
                }), matrix1) : matrix1)[new_x * 15 + new_y].mirrordir = this.dir;
                this.squarex = new_x;
                this.squarey = new_y;
                this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).xshift1(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).yshift1(), 0);
                ChangeMirror();
                let maintheme = this.node.parent.getComponent(_crd && MainTheme === void 0 ? (_reportPossibleCrUseOfMainTheme({
                  error: Error()
                }), MainTheme) : MainTheme);
                maintheme.Success();
                this.ChangeMirrorState(index);
              } else {
                if (this.area == 1) {
                  this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).xshift1(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).yshift1(), 0);
                } else {
                  this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize2x() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).xshift2(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize2y() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).yshift2(), 0);
                }
              }
            } else if (x >= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).xstart2() && x <= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).xend2() && y >= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).ystart2() && y <= (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
              error: Error()
            }), MapInfo) : MapInfo).yend2()) {
              new_x = Math.floor((x - (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).xstart2()) / (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).totalsize2x());
              new_y = Math.floor((y - (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).ystart2()) / (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                error: Error()
              }), MapInfo) : MapInfo).totalsize2y());

              if ((_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
                error: Error()
              }), matrix2) : matrix2)[new_x * 2 + new_y] == false) {
                if (this.area == 1) {
                  (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
                    error: Error()
                  }), matrix1) : matrix1)[this.squarex * 15 + this.squarey].id = -1;
                  ChangeMirror();
                  let maintheme = this.node.parent.getComponent(_crd && MainTheme === void 0 ? (_reportPossibleCrUseOfMainTheme({
                    error: Error()
                  }), MainTheme) : MainTheme);
                  maintheme.Success();
                } else {
                  (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
                    error: Error()
                  }), matrix2) : matrix2)[this.squarex * 2 + this.squarey] = false;
                }

                this.area = 2;
                (_crd && matrix2 === void 0 ? (_reportPossibleCrUseOfmatrix2({
                  error: Error()
                }), matrix2) : matrix2)[new_x * 2 + new_y] = true;
                this.squarex = new_x;
                this.squarey = new_y;
                this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize2x() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).xshift2(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize2y() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).yshift2(), 0);
                this.ChangeMirrorState(index);
              } else {
                if (this.area == 1) {
                  this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).xshift1(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).yshift1(), 0);
                } else {
                  this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize2x() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).xshift2(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).totalsize2y() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                    error: Error()
                  }), MapInfo) : MapInfo).yshift2(), 0);
                }
              }
            } else {
              if (this.area == 1) {
                this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).xshift1(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).yshift1(), 0);
              } else {
                this.node.setPosition(this.squarex * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize2x() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).xshift2(), this.squarey * (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).totalsize2y() + (_crd && MapInfo === void 0 ? (_reportPossibleCrUseOfMapInfo({
                  error: Error()
                }), MapInfo) : MapInfo).yshift2(), 0);
              }
            }
          }
        }

        touchMove(event) {
          this.node.setPosition(this.node.getPosition().x + event.getUIDelta().x, this.node.getPosition().y + event.getUIDelta().y, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "id", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "rotatable", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class3)) || _class2));
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
//# sourceMappingURL=173f5d95253dc551757a5c20c8f4647b6c2d03d3.js.map