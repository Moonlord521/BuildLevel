System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FS_locate, matrix1, GetInColor, AddColor, AddQuantumColor, LightSource, FanseProp, _crd, FanseType;

  function GetDiffDir(dir1, dir2) {
    let diff = dir1 - dir2;
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
    let FS_array = new Array(4);

    for (let i = 0; i < 4; i++) {
      FS_array[i] = new FanseProp();
    }

    return FS_array;
  }

  function QuantumNewLS(LS, LS_array) {
    let loc = LS.locate;
    let l_dir = LS.dir;
    let color = LS.color;
    let id = (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
      error: Error()
    }), matrix1) : matrix1)[loc[0] * 15 + loc[1]].id;
    let m_dir = (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
      error: Error()
    }), matrix1) : matrix1)[loc[0] * 15 + loc[1]].mirrordir;
    let diff = GetDiffDir(m_dir, l_dir);

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
                let nLS = new LightSource(loc, (l_dir + 2) % 8, color);
                return nLS;
              }

            case 4:
              {
                let nLS = new LightSource(loc, (l_dir + 4) % 8, color);
                return nLS;
              }

            case 5:
              {
                let nLS = new LightSource(loc, (l_dir + 6) % 8, color);
                return nLS;
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
                let nLS = new LightSource(loc, (l_dir + 1) % 8, color);
                return nLS;
              }

            case 3:
              {
                let nLS = new LightSource(loc, (l_dir + 3) % 8, color);
                return nLS;
              }

            case 4:
              {
                let nLS = new LightSource(loc, (l_dir + 5) % 8, color);
                return nLS;
              }

            case 5:
              {
                let nLS = new LightSource(loc, (l_dir + 7) % 8, color);
                return nLS;
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
          let step = GetStep(l_dir);
          let old_loc = new Array(2);
          old_loc[0] = loc[0] - step[0];
          old_loc[1] = loc[1] - step[1];
          let nLS = new LightSource(old_loc, l_dir, color);
          LS_array.push(nLS);
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
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
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
                  let nLS = new LightSource(loc, l_dir, [false, true, false]);
                  return nLS;
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
                  let nLS = new LightSource(loc, l_dir, [false, false, true]);
                  return nLS;
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
                let nLS = new LightSource(loc, l_dir, color);
                return nLS;
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
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
                }

                return null;
              }

            case 1:
              {
                if (color[0]) {
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
                } else if (color[1]) {
                  let nLS = new LightSource(loc, (l_dir + 7) % 8, [false, true, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 6) % 8, [false, false, true]);
                  return nLS;
                }
              }

            case 4:
              {
                if (color[0]) {
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
                } else if (color[1]) {
                  let nLS = new LightSource(loc, (l_dir + 1) % 8, [false, true, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 2) % 8, [false, false, true]);
                  return nLS;
                }
              }

            case 6:
              {
                if (color[1]) {
                  let nLS = new LightSource(loc, (l_dir + 1) % 8, [false, true, false]);
                  return nLS;
                }

                if (color[2]) {
                  let nLS = new LightSource(loc, (l_dir + 6) % 8, [false, false, true]);
                  return nLS;
                }

                return null;
              }

            case 7:
              {
                if (color[1]) {
                  let nLS = new LightSource(loc, (l_dir + 7) % 8, [false, true, false]);
                  return nLS;
                }

                if (color[2]) {
                  let nLS = new LightSource(loc, (l_dir + 2) % 8, [false, false, true]);
                  return nLS;
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
                let nLS = new LightSource(loc, l_dir, [color[2], color[0], color[1]]);
                return nLS;
              }

            case 6:
              {
                let nLS = new LightSource(loc, l_dir, [color[1], color[2], color[0]]);
                return nLS;
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
          let step = GetStep(l_dir);
          let new_loc = new Array(2);
          [new_loc[0], new_loc[1]] = loc;

          while (true) {
            new_loc[0] = new_loc[0] + step[0];
            new_loc[1] = new_loc[1] + step[1];
            if (new_loc[0] < 0 || new_loc[0] >= 15) return null;
            if (new_loc[1] < 0 || new_loc[1] >= 15) return null;

            if ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
              error: Error()
            }), matrix1) : matrix1)[new_loc[0] * 15 + new_loc[1]].id == 10) {
              let nLS = new LightSource(new_loc, l_dir, color);
              return nLS;
            }
          }
        }

      case 13:
        {
          //順時針旋轉鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);
          let nLS = new LightSource(loc, (l_dir + 6) % 8, color);
          return nLS;
        }

      case 14:
        {
          //逆時針旋轉鏡
          (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
            error: Error()
          }), AddQuantumColor) : AddQuantumColor)(loc, (l_dir + 4) % 8, color, true);
          let nLS = new LightSource(loc, (l_dir + 2) % 8, color);
          return nLS;
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
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 4) % 8, [false, color[1], color[2]]);
                  return nLS;
                }
              }

            case 1:
            case 5:
              {
                if (color[0]) {
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 6) % 8, [false, color[1], color[2]]);
                  return nLS;
                }
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 2) % 8, [false, color[1], color[2]]);
                  return nLS;
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
                  let nLS = new LightSource(loc, l_dir, [false, true, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 4) % 8, [color[0], false, color[2]]);
                  return nLS;
                }
              }

            case 1:
            case 5:
              {
                if (color[1]) {
                  let nLS = new LightSource(loc, l_dir, [false, true, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 6) % 8, [color[0], false, color[2]]);
                  return nLS;
                }
              }

            case 3:
            case 7:
              {
                if (color[1]) {
                  let nLS = new LightSource(loc, l_dir, [false, true, false]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 2) % 8, [color[0], false, color[2]]);
                  return nLS;
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
                  let nLS = new LightSource(loc, l_dir, [false, false, true]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 4) % 8, [color[0], color[1], false]);
                  return nLS;
                }
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  let nLS = new LightSource(loc, l_dir, [false, false, true]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 6) % 8, [color[0], color[1], false]);
                  return nLS;
                }
              }

            case 3:
            case 7:
              {
                if (color[2]) {
                  let nLS = new LightSource(loc, l_dir, [false, false, true]);
                  return nLS;
                } else {
                  let nLS = new LightSource(loc, (l_dir + 2) % 8, [color[0], color[1], false]);
                  return nLS;
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
                  let nLS = new LightSource(loc, l_dir, [false, true, false]);
                  return nLS;
                }

                return null;
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  let nLS = new LightSource(loc, l_dir, [false, false, true]);
                  return nLS;
                }

                return null;
              }

            case 2:
            case 6:
              {
                let nLS = new LightSource(loc, l_dir, color);
                return nLS;
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  let nLS = new LightSource(loc, l_dir, [true, false, false]);
                  return nLS;
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
      let step = GetStep(LS2.dir);
      let loc = new Array(2);
      loc[0] = LS2.locate[0] - step[0];
      loc[1] = LS2.locate[1] - step[1];
      let nLS = new LightSource(loc, LS2.dir, LS2.color);
      LS_array.push(nLS);
      return;
    }

    if (LS2 == null) {
      let step = GetStep(LS1.dir);
      let loc = new Array(2);
      loc[0] = LS1.locate[0] - step[0];
      loc[1] = LS1.locate[1] - step[1];
      let nLS = new LightSource(loc, LS1.dir, LS1.color);
      LS_array.push(nLS);
      return;
    }

    let nLS1 = QuantumNewLS(LS1, LS_array);
    let nLS2 = QuantumNewLS(LS2, LS_array);

    if (nLS1) {
      let index1 = nLS1.locate[0] * 15 + nLS1.locate[1];

      if (nLS2 && (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
        error: Error()
      }), matrix1) : matrix1)[index1].id == 9) {
        let diff = GetDiffDir((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
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
      let index2 = nLS2.locate[0] * 15 + nLS2.locate[1];

      if (nLS1 && (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
        error: Error()
      }), matrix1) : matrix1)[index2].id == 9) {
        let diff = GetDiffDir((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[index2].mirrordir, nLS2.dir);

        if (diff == 2) {
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
      let step1 = GetStep(nLS1.dir);
      nLS1.locate[0] = nLS1.locate[0] + step1[0];
      nLS1.locate[1] = nLS1.locate[1] + step1[1];
      if (nLS1.locate[0] < 0 || nLS1.locate[0] >= 15 || nLS1.locate[1] < 0 || nLS1.locate[1] >= 15) nLS1 = null;
    }

    if (nLS2) {
      (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
        error: Error()
      }), AddQuantumColor) : AddQuantumColor)(nLS2.locate, nLS2.dir, nLS2.color, false);
      let step2 = GetStep(nLS2.dir);
      nLS2.locate[0] = nLS2.locate[0] + step2[0];
      nLS2.locate[1] = nLS2.locate[1] + step2[1];
      if (nLS2.locate[0] < 0 || nLS2.locate[0] >= 15 || nLS2.locate[1] < 0 || nLS2.locate[1] >= 15) nLS2 = null;
    }

    QuantumLightTravel(nLS1, nLS2, LS_array);
  }

  function NewLS(id, locate, m_dir, l_dir, color, LS_array, FS_array, FS_type = FanseType.Collect) {
    let diff = GetDiffDir(m_dir, l_dir); //注意dir_l為入射光的方向

    switch (id) {
      case 1:
        {
          //直角鏡
          switch (diff) {
            case 3:
              {
                let LS = new LightSource(locate, (l_dir + 2) % 8, color);
                LS_array.push(LS);
                break;
              }

            case 4:
              {
                let LS = new LightSource(locate, (l_dir + 4) % 8, color);
                LS_array.push(LS);
                break;
              }

            case 5:
              {
                let LS = new LightSource(locate, (l_dir + 6) % 8, color);
                LS_array.push(LS);
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
                let LS = new LightSource(locate, (l_dir + 1) % 8, color);
                LS_array.push(LS);
                break;
              }

            case 3:
              {
                let LS = new LightSource(locate, (l_dir + 3) % 8, color);
                LS_array.push(LS);
                break;
              }

            case 4:
              {
                let LS = new LightSource(locate, (l_dir + 5) % 8, color);
                LS_array.push(LS);
                break;
              }

            case 5:
              {
                let LS = new LightSource(locate, (l_dir + 7) % 8, color);
                LS_array.push(LS);
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
                let LS1 = new LightSource(locate, l_dir, color);
                let LS2 = new LightSource(locate, (l_dir + 4) % 8, color);
                LS_array.push(LS1, LS2);
                break;
              }

            case 1:
            case 5:
              {
                let LS1 = new LightSource(locate, l_dir, color);
                let LS2 = new LightSource(locate, (l_dir + 6) % 8, color);
                LS_array.push(LS1, LS2);
                break;
              }

            case 3:
            case 7:
              {
                let LS1 = new LightSource(locate, l_dir, color);
                let LS2 = new LightSource(locate, (l_dir + 2) % 8, color);
                LS_array.push(LS1, LS2);
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
                  let LS = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS);
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
                  let LS = new LightSource(locate, l_dir, [false, true, false]);
                  LS_array.push(LS);
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
                  let LS = new LightSource(locate, l_dir, [false, false, true]);
                  LS_array.push(LS);
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
                let LS = new LightSource(locate, l_dir, color);
                LS_array.push(LS);
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
                  let LS = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS);
                }

                break;
              }

            case 1:
              {
                if (color[0]) {
                  let LS = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS);
                }

                if (color[1]) {
                  let LS = new LightSource(locate, (l_dir + 7) % 8, [false, true, false]);
                  LS_array.push(LS);
                }

                if (color[2]) {
                  let LS = new LightSource(locate, (l_dir + 6) % 8, [false, false, true]);
                  LS_array.push(LS);
                }

                break;
              }

            case 4:
              {
                if (color[0]) {
                  let LS = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS);
                }

                if (color[1]) {
                  let LS = new LightSource(locate, (l_dir + 1) % 8, [false, true, false]);
                  LS_array.push(LS);
                }

                if (color[2]) {
                  let LS = new LightSource(locate, (l_dir + 2) % 8, [false, false, true]);
                  LS_array.push(LS);
                }

                break;
              }

            case 6:
              {
                if (color[1]) {
                  let LS = new LightSource(locate, (l_dir + 1) % 8, [false, true, false]);
                  LS_array.push(LS);
                }

                if (color[2]) {
                  let LS = new LightSource(locate, (l_dir + 6) % 8, [false, false, true]);
                  LS_array.push(LS);
                }

                break;
              }

            case 7:
              {
                if (color[1]) {
                  let LS = new LightSource(locate, (l_dir + 7) % 8, [false, true, false]);
                  LS_array.push(LS);
                }

                if (color[2]) {
                  let LS = new LightSource(locate, (l_dir + 2) % 8, [false, false, true]);
                  LS_array.push(LS);
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
                let LS = new LightSource(locate, l_dir, [color[2], color[0], color[1]]);
                LS_array.push(LS);
                break;
              }

            case 6:
              {
                let LS = new LightSource(locate, l_dir, [color[1], color[2], color[0]]);
                LS_array.push(LS);
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
          let step = GetStep(l_dir);
          let loc = new Array(2);
          [loc[0], loc[1]] = locate;

          while (true) {
            loc[0] = loc[0] + step[0];
            loc[1] = loc[1] + step[1];
            if (loc[0] < 0 || loc[0] >= 15) break;
            if (loc[1] < 0 || loc[1] >= 15) break;

            if ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
              error: Error()
            }), matrix1) : matrix1)[loc[0] * 15 + loc[1]].id == 10) {
              let LS = new LightSource(loc, l_dir, color);
              LS_array.push(LS);
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
                for (let i = 0; i < 3; i++) {
                  if (color[i]) {
                    let single_color = [false, false, false];
                    single_color[i] = true;
                    (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
                      error: Error()
                    }), AddQuantumColor) : AddQuantumColor)(locate, (l_dir + 6) % 8, single_color, false);
                    (_crd && AddQuantumColor === void 0 ? (_reportPossibleCrUseOfAddQuantumColor({
                      error: Error()
                    }), AddQuantumColor) : AddQuantumColor)(locate, (l_dir + 2) % 8, single_color, false);
                    let step1 = GetStep((l_dir + 6) % 8);
                    let step2 = GetStep((l_dir + 2) % 8);
                    let loc1 = new Array(2);
                    let loc2 = new Array(2);
                    loc1[0] = locate[0] + step1[0];
                    loc1[1] = locate[1] + step1[1];
                    loc2[0] = locate[0] + step2[0];
                    loc2[1] = locate[1] + step2[1];
                    let LS1 = new LightSource(loc1, (l_dir + 6) % 8, single_color);
                    let LS2 = new LightSource(loc2, (l_dir + 2) % 8, single_color);
                    if (loc1[0] < 0 || loc1[0] >= 15 || loc1[1] < 0 || loc1[1] >= 15) LS1 = null;
                    if (loc2[0] < 0 || loc2[0] >= 15 || loc2[1] < 0 || loc2[1] >= 15) LS2 = null;
                    QuantumLightTravel(LS1, LS2, LS_array);
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
                  let index = GetFanseIndex(diff);
                  let FS_color = FS_array[index].color;

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
          let LS = new LightSource(locate, (l_dir + 6) % 8, color);
          LS_array.push(LS);
          break;
        }

      case 14:
        {
          //逆時針旋轉鏡
          let LS = new LightSource(locate, (l_dir + 2) % 8, color);
          LS_array.push(LS);
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
                  let LS1 = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS1);
                }

                if (color[1] || color[2]) {
                  let LS2 = new LightSource(locate, (l_dir + 4) % 8, [false, color[1], color[2]]);
                  LS_array.push(LS2);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[0]) {
                  let LS1 = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS1);
                }

                if (color[1] || color[2]) {
                  let LS2 = new LightSource(locate, (l_dir + 6) % 8, [false, color[1], color[2]]);
                  LS_array.push(LS2);
                }

                break;
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  let LS1 = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS1);
                }

                if (color[1] || color[2]) {
                  let LS2 = new LightSource(locate, (l_dir + 2) % 8, [false, color[1], color[2]]);
                  LS_array.push(LS2);
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
                  let LS1 = new LightSource(locate, l_dir, [false, true, false]);
                  LS_array.push(LS1);
                }

                if (color[0] || color[2]) {
                  let LS2 = new LightSource(locate, (l_dir + 4) % 8, [color[0], false, color[2]]);
                  LS_array.push(LS2);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[1]) {
                  let LS1 = new LightSource(locate, l_dir, [false, true, false]);
                  LS_array.push(LS1);
                }

                if (color[0] || color[2]) {
                  let LS2 = new LightSource(locate, (l_dir + 6) % 8, [color[0], false, color[2]]);
                  LS_array.push(LS2);
                }

                break;
              }

            case 3:
            case 7:
              {
                if (color[1]) {
                  let LS1 = new LightSource(locate, l_dir, [false, true, false]);
                  LS_array.push(LS1);
                }

                if (color[0] || color[2]) {
                  let LS2 = new LightSource(locate, (l_dir + 2) % 8, [color[0], false, color[2]]);
                  LS_array.push(LS2);
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
                  let LS1 = new LightSource(locate, l_dir, [false, false, true]);
                  LS_array.push(LS1);
                }

                if (color[0] || color[1]) {
                  let LS2 = new LightSource(locate, (l_dir + 4) % 8, [color[0], color[1], false]);
                  LS_array.push(LS2);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  let LS1 = new LightSource(locate, l_dir, [false, false, true]);
                  LS_array.push(LS1);
                }

                if (color[0] || color[1]) {
                  let LS2 = new LightSource(locate, (l_dir + 6) % 8, [color[0], color[1], false]);
                  LS_array.push(LS2);
                }

                break;
              }

            case 3:
            case 7:
              {
                if (color[2]) {
                  let LS1 = new LightSource(locate, l_dir, [false, false, true]);
                  LS_array.push(LS1);
                }

                if (color[0] || color[1]) {
                  let LS2 = new LightSource(locate, (l_dir + 2) % 8, [color[0], color[1], false]);
                  LS_array.push(LS2);
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
                  let LS = new LightSource(locate, l_dir, [false, true, false]);
                  LS_array.push(LS);
                }

                break;
              }

            case 1:
            case 5:
              {
                if (color[2]) {
                  let LS = new LightSource(locate, l_dir, [false, false, true]);
                  LS_array.push(LS);
                }

                break;
              }

            case 2:
            case 6:
              {
                let LS = new LightSource(locate, l_dir, color);
                LS_array.push(LS);
                break;
              }

            case 3:
            case 7:
              {
                if (color[0]) {
                  let LS = new LightSource(locate, l_dir, [true, false, false]);
                  LS_array.push(LS);
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

  function LightTravel(LS_array, FS_array, FS_type = FanseType.Collect) {
    while (LS_array.length > 0) {
      let LS = LS_array.pop();
      if (FS_type != FanseType.Detect) (_crd && AddColor === void 0 ? (_reportPossibleCrUseOfAddColor({
        error: Error()
      }), AddColor) : AddColor)(LS.locate, LS.dir, LS.color, false);
      let id = -1;
      let step = GetStep(LS.dir);
      let locate = new Array(2);
      [locate[0], locate[1]] = LS.locate;

      while (true) {
        locate[0] = locate[0] + step[0];
        locate[1] = locate[1] + step[1];
        if (locate[0] < 0 || locate[0] >= 15) break;
        if (locate[1] < 0 || locate[1] >= 15) break;
        let [r, g, b] = (_crd && GetInColor === void 0 ? (_reportPossibleCrUseOfGetInColor({
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
        let m_dir = (_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].mirrordir;
        NewLS(id, locate, m_dir, LS.dir, LS.color, LS_array, FS_array);
      }
    }
  }

  function FanseDetect(locate, FS_array) {
    while (!FS_array[0].over || !FS_array[1].over || !FS_array[2].over || !FS_array[3].over) {
      let LS_array = new Array();

      for (let i = 0; i < 4; i++) {
        if (!FS_array[i].over) {
          FS_array[i].over = true;
          let dir = ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
            error: Error()
          }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].mirrordir + 2 * i) % 8;
          let LS = new LightSource(locate, dir, FS_array[i].color);
          LS_array.push(LS);
        }
      }

      LightTravel(LS_array, FS_array, FanseType.Detect);
    }
  }

  function FanseDraw(locate, FS_array) {
    let LS_array = new Array();

    for (let i = 0; i < 4; i++) {
      let color = FS_array[i].color;

      if (!(color[0] && color[1] && color[2] || !color[0] && !color[1] && !color[2])) {
        let dir = ((_crd && matrix1 === void 0 ? (_reportPossibleCrUseOfmatrix({
          error: Error()
        }), matrix1) : matrix1)[locate[0] * 15 + locate[1]].mirrordir + 2 * i) % 8;
        let LS = new LightSource(locate, dir, FS_array[i].color);
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