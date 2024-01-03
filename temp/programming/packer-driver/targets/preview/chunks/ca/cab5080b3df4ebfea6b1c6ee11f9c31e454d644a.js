System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Square, _crd, i, matrix1, matrix2;

  function ClearMatrix() {
    var i, j;

    for (i = 0; i < 15 * 15; i++) {
      matrix1[i].id = -1;

      for (j = 0; j < 8 * 9; j++) {
        matrix1[i].lightdir[j] = false;
      }
    }

    for (i = 0; i < 12 * 2; i++) {
      matrix2[i] = false;
    }
  }

  function GetColor(locate, dir) {
    var index1 = locate[0] * 15 + locate[1];
    var index2 = dir * 9;
    var r = matrix1[index1].lightdir[index2];
    var g = matrix1[index1].lightdir[index2 + 1];
    var b = matrix1[index1].lightdir[index2 + 2];
    return [r, g, b];
  }

  function GetInColor(locate, dir) {
    var index1 = locate[0] * 15 + locate[1];
    var index2 = dir * 9;
    var r = matrix1[index1].lightdir[index2 + 3];
    var g = matrix1[index1].lightdir[index2 + 4];
    var b = matrix1[index1].lightdir[index2 + 5];
    return [r, g, b];
  }

  function GetTotalColor(locate) {
    var r = false,
        g = false,
        b = false;
    var index1 = locate[0] * 15 + locate[1];
    var dir, index2;

    for (dir = 0; dir < 8; dir++) {
      index2 = dir * 9;
      r || (r = matrix1[index1].lightdir[index2 + 3] || matrix1[index1].lightdir[index2 + 6]);
      g || (g = matrix1[index1].lightdir[index2 + 4] || matrix1[index1].lightdir[index2 + 7]);
      b || (b = matrix1[index1].lightdir[index2 + 5] || matrix1[index1].lightdir[index2 + 8]);
    }

    return [r, g, b];
  }

  function AddColor(locate, dir, color, io) {
    var _matrix1$index1$light, _matrix1$index1$light2, _ref, _matrix1$index1$light3, _ref2;

    var index1 = locate[0] * 15 + locate[1];
    var index2 = dir * 9;
    (_matrix1$index1$light = matrix1[index1].lightdir)[index2] || (_matrix1$index1$light[index2] = color[0]);
    (_matrix1$index1$light2 = matrix1[index1].lightdir)[_ref = index2 + 1] || (_matrix1$index1$light2[_ref] = color[1]);
    (_matrix1$index1$light3 = matrix1[index1].lightdir)[_ref2 = index2 + 2] || (_matrix1$index1$light3[_ref2] = color[2]);

    if (io) {
      var _matrix1$index1$light4, _ref3, _matrix1$index1$light5, _ref4, _matrix1$index1$light6, _ref5;

      (_matrix1$index1$light4 = matrix1[index1].lightdir)[_ref3 = index2 + 3] || (_matrix1$index1$light4[_ref3] = color[0]);
      (_matrix1$index1$light5 = matrix1[index1].lightdir)[_ref4 = index2 + 4] || (_matrix1$index1$light5[_ref4] = color[1]);
      (_matrix1$index1$light6 = matrix1[index1].lightdir)[_ref5 = index2 + 5] || (_matrix1$index1$light6[_ref5] = color[2]);
    }
  }

  function AddQuantumColor(locate, dir, color, io) {
    var _matrix1$index1$light7, _matrix1$index1$light8, _ref6, _matrix1$index1$light9, _ref7;

    var index1 = locate[0] * 15 + locate[1];
    var index2 = dir * 9;
    (_matrix1$index1$light7 = matrix1[index1].lightdir)[index2] || (_matrix1$index1$light7[index2] = color[0]);
    (_matrix1$index1$light8 = matrix1[index1].lightdir)[_ref6 = index2 + 1] || (_matrix1$index1$light8[_ref6] = color[1]);
    (_matrix1$index1$light9 = matrix1[index1].lightdir)[_ref7 = index2 + 2] || (_matrix1$index1$light9[_ref7] = color[2]);

    if (io) {
      var _matrix1$index1$light10, _ref8, _matrix1$index1$light11, _ref9, _matrix1$index1$light12, _ref10;

      (_matrix1$index1$light10 = matrix1[index1].lightdir)[_ref8 = index2 + 6] || (_matrix1$index1$light10[_ref8] = color[0]);
      (_matrix1$index1$light11 = matrix1[index1].lightdir)[_ref9 = index2 + 7] || (_matrix1$index1$light11[_ref9] = color[1]);
      (_matrix1$index1$light12 = matrix1[index1].lightdir)[_ref10 = index2 + 8] || (_matrix1$index1$light12[_ref10] = color[2]);
    }
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


  _export({
    Square: void 0,
    ClearMatrix: ClearMatrix,
    GetColor: GetColor,
    GetInColor: GetInColor,
    GetTotalColor: GetTotalColor,
    AddColor: AddColor,
    AddQuantumColor: AddQuantumColor
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1458pWh1pPyI1rEYu9FgHj", "Square", undefined);

      /**
       * Predefined variables
       * Name = Square
       * DateTime = Tue Nov 02 2021 17:32:52 GMT+0800 (中國標準時間)
       * Author = XieYe0920
       * FileBasename = Square.ts
       * FileBasenameNoExtension = Square
       * URL = db://assets/scripts/Square.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      _export("Square", Square = class Square {
        constructor() {
          this.id = void 0;
          this.mirrordir = void 0;
          this.lightdir = void 0;
          this.id = -1;
          this.mirrordir = 0;
          this.lightdir = new Array(8 * 9);
          var i;

          for (i = 0; i < 8 * 9; i++) {
            this.lightdir[i] = false;
          }
        }

      });

      _export("matrix1", matrix1 = new Array(15 * 15));

      _export("matrix2", matrix2 = new Array(2 * 12));

      for (i = 0; i < 15 * 15; i++) matrix1[i] = new Square();

      for (i = 0; i < 2 * 12; i++) matrix2[i] = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cab5080b3df4ebfea6b1c6ee11f9c31e454d644a.js.map