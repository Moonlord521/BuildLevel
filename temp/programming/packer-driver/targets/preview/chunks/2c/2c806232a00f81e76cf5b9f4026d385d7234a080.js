System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FS_locate, matrix1, GetInColor, AddColor, AddQuantumColor, LightSource, FanseProp, _crd, FanseType;

  function GetDiffDir(dir1, dir2) {
    var diff = dir1 - dir2;
    return diff >= 0 ? diff : 8 + diff;
  }

  function GetStep(dir) {
    dir = dir % 8;

    switch (dir) {
      case 0:
        return [1, 0];

      case 1:
        return [1, 1];

      case 2:
        return [0, 1];

      case 3:
        return [-1, 1];

      case 4:
        return [-1, 0];

      case 5:
        return [-1, -1];

      case 6:
        return [0, -1];

      case 7:
        return [1, -1];
    }
  }

  function GetFanseIndex(diff) {
    switch (diff) {
      case 0:
        return 0;

      case 2:
        return 3;

      case 4:
        return 2;

      case 6:
        return 1;

      default:
        return 0;
    }
  }

  function NewFanseArray() {
    var FS_array = new Array(4);

    for (var i = 0; i < 4; i++) {
      FS_array[i] = new FanseProp();
    }

    return FS_array;
  }

  function QuantumNewLS(LS, LS_array) {
    var loc = LS.locate;
    var l_dir = LS.dir;
    var color = LS.color;
    var id = (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
      error: Error()
    }), matrix1) : matrix1)[loc[0] * 15 + loc[1]].id;
    var m_dir = (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
      error: Error()
    }), matrix1) : matrix1)[loc[0] * 15 + loc[1]].mirrordir;
    var diff = GetDiffDir(m_dir, l_dir);

    switch (id) {
      case -1:
      case 0:
        {
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);
          return LS;
        }

      case 1:
        {
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 3:
              {
                var nLS = new LightSource(loc, (l_dir + 2) % 8, color);
                return nLS;
              }

            case 4:
              {
                var _nLS = new LightSource(loc, (l_dir + 4) % 8, color);

                return _nLS;
              }

            case 5:
              {
                var _nLS2 = new LightSource(loc, (l_dir + 6) % 8, color);

                return _nLS2;
              }

            default:
              return null;
          }
        }

      case 2:
        {
          //斜角鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 2:
              {
                var _nLS3 = new LightSource(loc, (l_dir + 1) % 8, color);

                return _nLS3;
              }

            case 3:
              {
                var _nLS4 = new LightSource(loc, (l_dir + 3) % 8, color);

                return _nLS4;
              }

            case 4:
              {
                var _nLS5 = new LightSource(loc, (l_dir + 5) % 8, color);

                return _nLS5;
              }

            case 5:
              {
                var _nLS6 = new LightSource(loc, (l_dir + 7) % 8, color);

                return _nLS6;
              }

            default:
              return null;
          }
        }

      case 3: //分光鏡

      case 11: //量子鏡

      case 12:
        {
          //反色鏡
          var step = GetStep(l_dir);
          var old_loc = new Array(2);
          old_loc[0] = loc[0] - step[0];
          old_loc[1] = loc[1] - step[1];

          var _nLS7 = new LightSource(old_loc, l_dir, color);

          LS_array.push(_nLS7);
          return null;
        }

      case 4:
        {
          //濾光鏡(紅)
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 4:
              {
                if (color[0]) {
                  var _nLS8 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS8;
                }

                return null;
              }

            default:
              return null;
          }
        }

      case 5:
        {
          //濾光鏡(綠)
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 4:
              {
                if (color[1]) {
                  var _nLS9 = new LightSource(loc, l_dir, [false, true, false]);

                  return _nLS9;
                }

                return null;
              }

            default:
              return null;
          }
        }

      case 6:
        {
          //濾光鏡(藍)
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 4:
              {
                if (color[2]) {
                  var _nLS10 = new LightSource(loc, l_dir, [false, false, true]);

                  return _nLS10;
                }

                return null;
              }

            default:
              return null;
          }
        }

      case 7:
        {
          //光柵
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 2:
            case 6:
              {
                var _nLS11 = new LightSource(loc, l_dir, color);

                return _nLS11;
              }

            default:
              return null;
          }
        }

      case 8:
        {
          //三棱鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 5:
              {
                if (color[0]) {
                  var _nLS12 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS12;
                }

                return null;
              }

            case 1:
              {
                if (color[0]) {
                  var _nLS13 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS13;
                } else if (color[1]) {
                  var _nLS14 = new LightSource(loc, (l_dir + 7) % 8, [false, true, false]);

                  return _nLS14;
                } else {
                  var _nLS15 = new LightSource(loc, (l_dir + 6) % 8, [false, false, true]);

                  return _nLS15;
                }
              }

            case 4:
              {
                if (color[0]) {
                  var _nLS16 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS16;
                } else if (color[1]) {
                  var _nLS17 = new LightSource(loc, (l_dir + 1) % 8, [false, true, false]);

                  return _nLS17;
                } else {
                  var _nLS18 = new LightSource(loc, (l_dir + 2) % 8, [false, false, true]);

                  return _nLS18;
                }
              }

            case 6:
              {
                if (color[1]) {
                  var _nLS19 = new LightSource(loc, (l_dir + 1) % 8, [false, true, false]);

                  return _nLS19;
                }

                if (color[2]) {
                  var _nLS20 = new LightSource(loc, (l_dir + 6) % 8, [false, false, true]);

                  return _nLS20;
                }

                return null;
              }

            case 7:
              {
                if (color[1]) {
                  var _nLS21 = new LightSource(loc, (l_dir + 7) % 8, [false, true, false]);

                  return _nLS21;
                }

                if (color[2]) {
                  var _nLS22 = new LightSource(loc, (l_dir + 2) % 8, [false, false, true]);

                  return _nLS22;
                }

                return null;
              }

            default:
              return null;
          }
        }

      case 9:
        {
          //變色鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 2:
              {
                var _nLS23 = new LightSource(loc, l_dir, [color[2], color[0], color[1]]);

                return _nLS23;
              }

            case 6:
              {
                var _nLS24 = new LightSource(loc, l_dir, [color[1], color[2], color[0]]);

                return _nLS24;
              }

            default:
              return null;
          }
        }

      case 10:
        {
          //傳送門
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          var _step = GetStep(l_dir);

          var new_loc = new Array(2);
          [new_loc[0], new_loc[1]] = loc;

          while (true) {
            new_loc[0] = new_loc[0] + _step[0];
            new_loc[1] = new_loc[1] + _step[1];
            if (new_loc[0] < 0 || new_loc[0] >= 15) return null;
            if (new_loc[1] < 0 || new_loc[1] >= 15) return null;

            if ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
              error: Error()
            }), matrix1) : matrix1)[new_loc[0] * 15 + new_loc[1]].id == 10) {
              var _nLS25 = new LightSource(new_loc, l_dir, color);

              return _nLS25;
            }
          }
        }

      case 13:
        {
          //順時針旋轉鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          var _nLS26 = new LightSource(loc, (l_dir + 6) % 8, color);

          return _nLS26;
        }

      case 14:
        {
          //逆時針旋轉鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          var _nLS27 = new LightSource(loc, (l_dir + 2) % 8, color);

          return _nLS27;
        }

      case 15:
        {
          //紅擇色鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 4:
              {
                if (color[0]) {
                  var _nLS28 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS28;
                } else {
                  var _nLS29 = new LightSource(loc, (l_dir + 4) % 8, [false, color[1], color[2]]);

                  return _nLS29;
                }
              }

            case 1:
            case 5:
              {
                if (color[0]) {
                  var _nLS30 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS30;
                } else {
                  var _nLS31 = new LightSource(loc, (l_dir + 6) % 8, [false, color[1], color[2]]);

                  return _nLS31;
                }
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  var _nLS32 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS32;
                } else {
                  var _nLS33 = new LightSource(loc, (l_dir + 2) % 8, [false, color[1], color[2]]);

                  return _nLS33;
                }
              }

            default:
              return null;
          }
        }

      case 16:
        {
          //綠擇色鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 4:
              {
                if (color[1]) {
                  var _nLS34 = new LightSource(loc, l_dir, [false, true, false]);

                  return _nLS34;
                } else {
                  var _nLS35 = new LightSource(loc, (l_dir + 4) % 8, [color[0], false, color[2]]);

                  return _nLS35;
                }
              }

            case 1:
            case 5:
              {
                if (color[1]) {
                  var _nLS36 = new LightSource(loc, l_dir, [false, true, false]);

                  return _nLS36;
                } else {
                  var _nLS37 = new LightSource(loc, (l_dir + 6) % 8, [color[0], false, color[2]]);

                  return _nLS37;
                }
              }

            case 3:
            case 7:
              {
                if (color[1]) {
                  var _nLS38 = new LightSource(loc, l_dir, [false, true, false]);

                  return _nLS38;
                } else {
                  var _nLS39 = new LightSource(loc, (l_dir + 2) % 8, [color[0], false, color[2]]);

                  return _nLS39;
                }
              }

            default:
              return null;
          }
        }

      case 17:
        {
          //藍擇色鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 4:
              {
                if (color[2]) {
                  var _nLS40 = new LightSource(loc, l_dir, [false, false, true]);

                  return _nLS40;
                } else {
                  var _nLS41 = new LightSource(loc, (l_dir + 4) % 8, [color[0], color[1], false]);

                  return _nLS41;
                }
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  var _nLS42 = new LightSource(loc, l_dir, [false, false, true]);

                  return _nLS42;
                } else {
                  var _nLS43 = new LightSource(loc, (l_dir + 6) % 8, [color[0], color[1], false]);

                  return _nLS43;
                }
              }

            case 3:
            case 7:
              {
                if (color[2]) {
                  var _nLS44 = new LightSource(loc, l_dir, [false, false, true]);

                  return _nLS44;
                } else {
                  var _nLS45 = new LightSource(loc, (l_dir + 2) % 8, [color[0], color[1], false]);

                  return _nLS45;
                }
              }

            default:
              return null;
          }
        }

      case 18:
        {
          //多用濾光鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);

          switch (diff) {
            case 0:
            case 4:
              {
                if (color[1]) {
                  var _nLS46 = new LightSource(loc, l_dir, [false, true, false]);

                  return _nLS46;
                }

                return null;
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  var _nLS47 = new LightSource(loc, l_dir, [false, false, true]);

                  return _nLS47;
                }

                return null;
              }

            case 2:
            case 6:
              {
                var _nLS48 = new LightSource(loc, l_dir, color);

                return _nLS48;
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  var _nLS49 = new LightSource(loc, l_dir, [true, false, false]);

                  return _nLS49;
                }

                return null;
              }

            default:
              return null;
          }
        }

      case 101:
        {
          //障礙物
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);
          return null;
        }

      default:
        return null;
    }
  }

  function QuantumLightTravel(LS1, LS2, LS_array) {
    if (LS1 == null && LS2 == null) return;

    if (LS1 == null) {
      var step = GetStep(LS2.dir);
      var loc = new Array(2);
      loc[0] = LS2.locate[0] - step[0];
      loc[1] = LS2.locate[1] - step[1];
      var nLS = new LightSource(loc, LS2.dir, LS2.color);
      LS_array.push(nLS);
      return;
    }

    if (LS2 == null) {
      var _step2 = GetStep(LS1.dir);

      var _loc = new Array(2);

      _loc[0] = LS1.locate[0] - _step2[0];
      _loc[1] = LS1.locate[1] - _step2[1];

      var _nLS50 = new LightSource(_loc, LS1.dir, LS1.color);

      LS_array.push(_nLS50);
      return;
    }

    var nLS1 = QuantumNewLS(LS1, LS_array);
    var nLS2 = QuantumNewLS(LS2, LS_array);

    if (nLS1) {
      var index1 = nLS1.locate[0] * 15 + nLS1.locate[1];

      if (nLS2 && (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
        error: Error()
      }), matrix1) : matrix1)[index1].id == 9) {
        var diff = GetDiffDir((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[index1].mirrordir, nLS1.dir);

        if (diff == 2) {
          nLS2.color = [nLS2.color[1], nLS2.color[2], nLS2.color[0]];
        } else {
          nLS2.color = [nLS2.color[2], nLS2.color[0], nLS2.color[1]];
        }
      }
    }

    if (nLS2) {
      var index2 = nLS2.locate[0] * 15 + nLS2.locate[1];

      if (nLS1 && (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
        error: Error()
      }), matrix1) : matrix1)[index2].id == 9) {
        var _diff = GetDiffDir((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[index2].mirrordir, nLS2.dir);

        if (_diff == 2) {
          nLS1.color = [nLS1.color[1], nLS1.color[2], nLS1.color[0]];
        } else {
          nLS1.color = [nLS1.color[2], nLS1.color[0], nLS1.color[1]];
        }
      }
    }

    if (nLS1) {
      (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
        error: Error()
      }), AddQuantumColor) : AddQuantumColor)(nLS1.locate, nLS1.dir, nLS1.color, false);
      var step1 = GetStep(nLS1.dir);
      nLS1.locate[0] = nLS1.locate[0] + step1[0];
      nLS1.locate[1] = nLS1.locate[1] + step1[1];
      if (nLS1.locate[0] < 0 || nLS1.locate[0] >= 15 || nLS1.locate[1] < 0 || nLS1.locate[1] >= 15) nLS1 = null;
    }

    if (nLS2) {
      (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
        error: Error()
      }), AddQuantumColor) : AddQuantumColor)(nLS2.locate, nLS2.dir, nLS2.color, false);
      var step2 = GetStep(nLS2.dir);
      nLS2.locate[0] = nLS2.locate[0] + step2[0];
      nLS2.locate[1] = nLS2.locate[1] + step2[1];
      if (nLS2.locate[0] < 0 || nLS2.locate[0] >= 15 || nLS2.locate[1] < 0 || nLS2.locate[1] >= 15) nLS2 = null;
    }

    QuantumLightTravel(nLS1, nLS2, LS_array);
  }

  function NewLS(id, locate, m_dir, l_dir, color, LS_array, FS_array, FS_type) {
    if (FS_type === void 0) {
      FS_type = FanseType.Collect;
    }

    var diff = GetDiffDir(m_dir, l_dir); //注意dir_l為入射光的方向

    switch (id) {
      case 1:
        {
          //直角鏡
          switch (diff) {
            case 3:
              {
                var LS = new LightSource(locate, (l_dir + 2) % 8, color);
                LS_array.push(LS);
                break;
              }

            case 4:
              {
                var _LS = new LightSource(locate, (l_dir + 4) % 8, color);

                LS_array.push(_LS);
                break;
              }

            case 5:
              {
                var _LS2 = new LightSource(locate, (l_dir + 6) % 8, color);

                LS_array.push(_LS2);
                break;
              }

            default:
              break;
          }

          break;
        }

      case 2:
        {
          //斜角鏡
          switch (diff) {
            case 2:
              {
                var _LS3 = new LightSource(locate, (l_dir + 1) % 8, color);

                LS_array.push(_LS3);
                break;
              }

            case 3:
              {
                var _LS4 = new LightSource(locate, (l_dir + 3) % 8, color);

                LS_array.push(_LS4);
                break;
              }

            case 4:
              {
                var _LS5 = new LightSource(locate, (l_dir + 5) % 8, color);

                LS_array.push(_LS5);
                break;
              }

            case 5:
              {
                var _LS6 = new LightSource(locate, (l_dir + 7) % 8, color);

                LS_array.push(_LS6);
                break;
              }

            default:
              break;
          }

          break;
        }

      case 3:
        {
          //分光鏡
          switch (diff) {
            case 0:
            case 4:
              {
                var LS1 = new LightSource(locate, l_dir, color);
                var LS2 = new LightSource(locate, (l_dir + 4) % 8, color);
                LS_array.push(LS1, LS2);
                break;
              }

            case 1:
            case 5:
              {
                var _LS7 = new LightSource(locate, l_dir, color);

                var _LS8 = new LightSource(locate, (l_dir + 6) % 8, color);

                LS_array.push(_LS7, _LS8);
                break;
              }

            case 3:
            case 7:
              {
                var _LS9 = new LightSource(locate, l_dir, color);

                var _LS10 = new LightSource(locate, (l_dir + 2) % 8, color);

                LS_array.push(_LS9, _LS10);
                break;
              }

            default:
              break;
          }

          break;
        }

      case 4:
        {
          //濾光鏡(紅)
          switch (diff) {
            case 0:
            case 4:
              {
                if (color[0]) {
                  var _LS11 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS11);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 5:
        {
          //濾光鏡(綠)
          switch (diff) {
            case 0:
            case 4:
              {
                if (color[1]) {
                  var _LS12 = new LightSource(locate, l_dir, [false, true, false]);

                  LS_array.push(_LS12);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 6:
        {
          //濾光鏡(藍)
          switch (diff) {
            case 0:
            case 4:
              {
                if (color[2]) {
                  var _LS13 = new LightSource(locate, l_dir, [false, false, true]);

                  LS_array.push(_LS13);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 7:
        {
          //光柵
          switch (diff) {
            case 2:
            case 6:
              {
                var _LS14 = new LightSource(locate, l_dir, color);

                LS_array.push(_LS14);
                break;
              }

            default:
              break;
          }

          break;
        }

      case 8:
        {
          //三棱鏡
          switch (diff) {
            case 0:
            case 5:
              {
                if (color[0]) {
                  var _LS15 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS15);
                }

                break;
              }

            case 1:
              {
                if (color[0]) {
                  var _LS16 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS16);
                }

                if (color[1]) {
                  var _LS17 = new LightSource(locate, (l_dir + 7) % 8, [false, true, false]);

                  LS_array.push(_LS17);
                }

                if (color[2]) {
                  var _LS18 = new LightSource(locate, (l_dir + 6) % 8, [false, false, true]);

                  LS_array.push(_LS18);
                }

                break;
              }

            case 4:
              {
                if (color[0]) {
                  var _LS19 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS19);
                }

                if (color[1]) {
                  var _LS20 = new LightSource(locate, (l_dir + 1) % 8, [false, true, false]);

                  LS_array.push(_LS20);
                }

                if (color[2]) {
                  var _LS21 = new LightSource(locate, (l_dir + 2) % 8, [false, false, true]);

                  LS_array.push(_LS21);
                }

                break;
              }

            case 6:
              {
                if (color[1]) {
                  var _LS22 = new LightSource(locate, (l_dir + 1) % 8, [false, true, false]);

                  LS_array.push(_LS22);
                }

                if (color[2]) {
                  var _LS23 = new LightSource(locate, (l_dir + 6) % 8, [false, false, true]);

                  LS_array.push(_LS23);
                }

                break;
              }

            case 7:
              {
                if (color[1]) {
                  var _LS24 = new LightSource(locate, (l_dir + 7) % 8, [false, true, false]);

                  LS_array.push(_LS24);
                }

                if (color[2]) {
                  var _LS25 = new LightSource(locate, (l_dir + 2) % 8, [false, false, true]);

                  LS_array.push(_LS25);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 9:
        {
          //變色鏡
          switch (diff) {
            case 2:
              {
                var _LS26 = new LightSource(locate, l_dir, [color[2], color[0], color[1]]);

                LS_array.push(_LS26);
                break;
              }

            case 6:
              {
                var _LS27 = new LightSource(locate, l_dir, [color[1], color[2], color[0]]);

                LS_array.push(_LS27);
                break;
              }

            default:
              break;
          }

          break;
        }

      case 10:
        {
          //傳送門
          var step = GetStep(l_dir);
          var loc = new Array(2);
          [loc[0], loc[1]] = locate;

          while (true) {
            loc[0] = loc[0] + step[0];
            loc[1] = loc[1] + step[1];
            if (loc[0] < 0 || loc[0] >= 15) break;
            if (loc[1] < 0 || loc[1] >= 15) break;

            if ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
              error: Error()
            }), matrix1) : matrix1)[loc[0] * 15 + loc[1]].id == 10) {
              var _LS28 = new LightSource(loc, l_dir, color);

              LS_array.push(_LS28);
              break;
            }
          }

          break;
        }

      case 11:
        {
          //量子鏡
          switch (diff) {
            case 6:
              {
                for (var i = 0; i < 3; i++) {
                  if (color[i]) {
                    var single_color = [false, false, false];
                    single_color[i] = true;
                    (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
                      error: Error()
                    }), AddQuantumColor) : AddQuantumColor)(locate, (l_dir + 6) % 8, single_color, false);
                    (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
                      error: Error()
                    }), AddQuantumColor) : AddQuantumColor)(locate, (l_dir + 2) % 8, single_color, false);
                    var step1 = GetStep((l_dir + 6) % 8);
                    var step2 = GetStep((l_dir + 2) % 8);
                    var loc1 = new Array(2);
                    var loc2 = new Array(2);
                    loc1[0] = locate[0] + step1[0];
                    loc1[1] = locate[1] + step1[1];
                    loc2[0] = locate[0] + step2[0];
                    loc2[1] = locate[1] + step2[1];

                    var _LS29 = new LightSource(loc1, (l_dir + 6) % 8, single_color);

                    var _LS30 = new LightSource(loc2, (l_dir + 2) % 8, single_color);

                    if (loc1[0] < 0 || loc1[0] >= 15 || loc1[1] < 0 || loc1[1] >= 15) _LS29 = null;
                    if (loc2[0] < 0 || loc2[0] >= 15 || loc2[1] < 0 || loc2[1] >= 15) _LS30 = null;
                    QuantumLightTravel(_LS29, _LS30, LS_array);
                  }
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 12:
        {
          //反色鏡
          (_crd && FS_locate === void 0 ? (_reportPossibleCrUseOfFS_locate({
            error: Error()
          }), FS_locate) : FS_locate)[0] = locate[0];
          (_crd && FS_locate === void 0 ? (_reportPossibleCrUseOfFS_locate({
            error: Error()
          }), FS_locate) : FS_locate)[1] = locate[1];

          switch (diff) {
            case 0:
            case 2:
            case 4:
            case 6:
              {
                if (FS_type != FanseType.Draw) {
                  var index = GetFanseIndex(diff);
                  var FS_color = FS_array[index].color;

                  if (color[0] && FS_color[0] || color[1] && FS_color[1] || color[2] && FS_color[2]) {
                    var _FS_array$index$color, _, _FS_array$index$color2, _2, _FS_array$index$color3, _3;

                    (_FS_array$index$color = FS_array[index].color)[_ = 0] && (_FS_array$index$color[_] = !color[0]);
                    (_FS_array$index$color2 = FS_array[index].color)[_2 = 1] && (_FS_array$index$color2[_2] = !color[1]);
                    (_FS_array$index$color3 = FS_array[index].color)[_3 = 2] && (_FS_array$index$color3[_3] = !color[2]);
                    FS_array[index].over = false;
                  }

                  if (!FS_array[index].color[0] && !FS_array[index].color[1] && !FS_array[index].color[2]) {
                    FS_array[index].over = true;
                  }
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 13:
        {
          //順時針旋轉鏡
          var _LS31 = new LightSource(locate, (l_dir + 6) % 8, color);

          LS_array.push(_LS31);
          break;
        }

      case 14:
        {
          //逆時針旋轉鏡
          var _LS32 = new LightSource(locate, (l_dir + 2) % 8, color);

          LS_array.push(_LS32);
          break;
        }

      case 15:
        {
          //紅擇色鏡
          switch (diff) {
            case 0:
            case 4:
              {
                if (color[0]) {
                  var _LS33 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS33);
                }

                if (color[1] || color[2]) {
                  var _LS34 = new LightSource(locate, (l_dir + 4) % 8, [false, color[1], color[2]]);

                  LS_array.push(_LS34);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[0]) {
                  var _LS35 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS35);
                }

                if (color[1] || color[2]) {
                  var _LS36 = new LightSource(locate, (l_dir + 6) % 8, [false, color[1], color[2]]);

                  LS_array.push(_LS36);
                }

                break;
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  var _LS37 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS37);
                }

                if (color[1] || color[2]) {
                  var _LS38 = new LightSource(locate, (l_dir + 2) % 8, [false, color[1], color[2]]);

                  LS_array.push(_LS38);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 16:
        {
          //綠擇色鏡
          switch (diff) {
            case 0:
            case 4:
              {
                if (color[1]) {
                  var _LS39 = new LightSource(locate, l_dir, [false, true, false]);

                  LS_array.push(_LS39);
                }

                if (color[0] || color[2]) {
                  var _LS40 = new LightSource(locate, (l_dir + 4) % 8, [color[0], false, color[2]]);

                  LS_array.push(_LS40);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[1]) {
                  var _LS41 = new LightSource(locate, l_dir, [false, true, false]);

                  LS_array.push(_LS41);
                }

                if (color[0] || color[2]) {
                  var _LS42 = new LightSource(locate, (l_dir + 6) % 8, [color[0], false, color[2]]);

                  LS_array.push(_LS42);
                }

                break;
              }

            case 3:
            case 7:
              {
                if (color[1]) {
                  var _LS43 = new LightSource(locate, l_dir, [false, true, false]);

                  LS_array.push(_LS43);
                }

                if (color[0] || color[2]) {
                  var _LS44 = new LightSource(locate, (l_dir + 2) % 8, [color[0], false, color[2]]);

                  LS_array.push(_LS44);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 17:
        {
          //藍擇色鏡
          switch (diff) {
            case 0:
            case 4:
              {
                if (color[2]) {
                  var _LS45 = new LightSource(locate, l_dir, [false, false, true]);

                  LS_array.push(_LS45);
                }

                if (color[0] || color[1]) {
                  var _LS46 = new LightSource(locate, (l_dir + 4) % 8, [color[0], color[1], false]);

                  LS_array.push(_LS46);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  var _LS47 = new LightSource(locate, l_dir, [false, false, true]);

                  LS_array.push(_LS47);
                }

                if (color[0] || color[1]) {
                  var _LS48 = new LightSource(locate, (l_dir + 6) % 8, [color[0], color[1], false]);

                  LS_array.push(_LS48);
                }

                break;
              }

            case 3:
            case 7:
              {
                if (color[2]) {
                  var _LS49 = new LightSource(locate, l_dir, [false, false, true]);

                  LS_array.push(_LS49);
                }

                if (color[0] || color[1]) {
                  var _LS50 = new LightSource(locate, (l_dir + 2) % 8, [color[0], color[1], false]);

                  LS_array.push(_LS50);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      case 18:
        {
          //多用濾光鏡
          switch (diff) {
            case 0:
            case 4:
              {
                if (color[1]) {
                  var _LS51 = new LightSource(locate, l_dir, [false, true, false]);

                  LS_array.push(_LS51);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  var _LS52 = new LightSource(locate, l_dir, [false, false, true]);

                  LS_array.push(_LS52);
                }

                break;
              }

            case 2:
            case 6:
              {
                var _LS53 = new LightSource(locate, l_dir, color);

                LS_array.push(_LS53);
                break;
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  var _LS54 = new LightSource(locate, l_dir, [true, false, false]);

                  LS_array.push(_LS54);
                }

                break;
              }

            default:
              break;
          }

          break;
        }

      default:
        break;
    }
  }

  function LightTravel(LS_array, FS_array, FS_type) {
    if (FS_type === void 0) {
      FS_type = FanseType.Collect;
    }

    while (LS_array.length > 0) {
      var LS = LS_array.pop();
      if (FS_type != FanseType.Detect) (_crd && AddColor === void 0 ? (_reportPossibleCrUseOfAddColor({
        error: Error()
      }), AddColor) : AddColor)(LS.locate, LS.dir, LS.color, false);
      var id = -1;
      var step = GetStep(LS.dir);
      var locate = new Array(2);
      [locate[0], locate[1]] = LS.locate;

      while (true) {
        locate[0] = locate[0] + step[0];
        locate[1] = locate[1] + step[1];
        if (locate[0] < 0 || locate[0] >= 15) break;
        if (locate[1] < 0 || locate[1] >= 15) break;
        var [r, g, b] = (_crd && GetInColor === void 0 ? (_reportPossibleCrUseOfGetInColor({
          error: Error()
        }), GetInColor) : GetInColor)(locate, (LS.dir + 4) % 8);
        if ((!LS.color[0] || r) && (!LS.color[1] || g) && (!LS.color[2] || b)) break;

        if ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].id > 0) {
          id = (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
            error: Error()
          }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].id;
          break;
        }

        if (FS_type != FanseType.Detect) (_crd && AddColor === void 0 ? (_reportPossibleCrUseOfAddColor({
          error: Error()
        }), AddColor) : AddColor)(locate, (LS.dir + 4) % 8, LS.color, true);
        if (FS_type != FanseType.Detect) (_crd && AddColor === void 0 ? (_reportPossibleCrUseOfAddColor({
          error: Error()
        }), AddColor) : AddColor)(locate, LS.dir, LS.color, false);
      }

      if (id > 0 && id != 102) {
        if (FS_type != FanseType.Detect) (_crd && AddColor === void 0 ? (_reportPossibleCrUseOfAddColor({
          error: Error()
        }), AddColor) : AddColor)(locate, (LS.dir + 4) % 8, LS.color, true);
        var m_dir = (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].mirrordir;
        NewLS(id, locate, m_dir, LS.dir, LS.color, LS_array, FS_array);
      }
    }
  }

  function FanseDetect(locate, FS_array) {
    while (!FS_array[0].over || !FS_array[1].over || !FS_array[2].over || !FS_array[3].over) {
      var LS_array = new Array();

      for (var i = 0; i < 4; i++) {
        if (!FS_array[i].over) {
          FS_array[i].over = true;
          var dir = ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
            error: Error()
          }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].mirrordir + 2 * i) % 8;
          var LS = new LightSource(locate, dir, FS_array[i].color);
          LS_array.push(LS);
        }
      }

      LightTravel(LS_array, FS_array, FanseType.Detect);
    }
  }

  function FanseDraw(locate, FS_array) {
    var LS_array = new Array();

    for (var i = 0; i < 4; i++) {
      var color = FS_array[i].color;

      if (!(color[0] && color[1] && color[2] || !color[0] && !color[1] && !color[2])) {
        var dir = ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].mirrordir + 2 * i) % 8;
        var LS = new LightSource(locate, dir, FS_array[i].color);
        LS_array.push(LS);
      }
    }

    LightTravel(LS_array, FS_array, FanseType.Draw);
  }
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


  function _reportPossibleCrUseOfFS_locate(extras) {
    _reporterNs.report("FS_locate", "./MainTheme", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmatrix(extras) {
    _reporterNs.report("matrix1", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetInColor(extras) {
    _reporterNs.report("GetInColor", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAddColor(extras) {
    _reporterNs.report("AddColor", "./Square", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAddQuantumColor(extras) {
    _reporterNs.report("AddQuantumColor", "./Square", _context.meta, extras);
  }

  _export({
    LightSource: void 0,
    GetDiffDir: GetDiffDir,
    NewFanseArray: NewFanseArray,
    NewLS: NewLS,
    LightTravel: LightTravel,
    FanseDetect: FanseDetect,
    FanseDraw: FanseDraw
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FS_locate = _unresolved_2.FS_locate;
    }, function (_unresolved_3) {
      matrix1 = _unresolved_3.matrix1;
      GetInColor = _unresolved_3.GetInColor;
      AddColor = _unresolved_3.AddColor;
      AddQuantumColor = _unresolved_3.AddQuantumColor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ca12MHAbhPfpf7u7mmWa7g", "LightTravel", undefined);

      /**
       * Predefined variables
       * Name = Source
       * DateTime = Wed Nov 03 2021 11:14:46 GMT+0800 (中國標準時間)
       * Author = XieYe0920
       * FileBasename = Source.ts
       * FileBasenameNoExtension = Source
       * URL = db://assets/scripts/Source.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      _export("FanseType", FanseType = /*#__PURE__*/function (FanseType) {
        FanseType[FanseType["Collect"] = 0] = "Collect";
        FanseType[FanseType["Detect"] = 1] = "Detect";
        FanseType[FanseType["Draw"] = 2] = "Draw";
        return FanseType;
      }({}));

      _export("LightSource", LightSource = class LightSource {
        constructor(locate, dir, color) {
          this.locate = void 0;
          this.dir = void 0;
          this.color = void 0;
          this.locate = locate;
          this.dir = dir;
          this.color = color;
        }

      });

      FanseProp = class FanseProp {
        constructor() {
          this.over = void 0;
          this.color = void 0;
          this.over = true;
          this.color = [true, true, true];
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c806232a00f81e76cf5b9f4026d385d7234a080.js.map