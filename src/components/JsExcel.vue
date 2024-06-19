<!-- "use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
setup;
lang = "ts" >
;
var vue_1 = require("vue");
var xlsx_1 = require("xlsx");
var currFileName = (0, vue_1.ref)("");
var currSheet = (0, vue_1.ref)("");
var sheets = (0, vue_1.ref)([]);
var workBook = (0, vue_1.ref)({});
var rows = (0, vue_1.ref)([]);
var columns = (0, vue_1.ref)([]);
var exportTypes = ["xlsx", "xlsb", "csv", "html"];
var cell = 0;
function resetCell() {
    cell = 0;
}
function display(col) {
    return function (row) {
        var _a;
        return "<span\n               style=\"user-select: none; display: block\"\n               position=\"".concat(Math.floor(cell++ / columns.value.length), ".").concat(col, "\"\n               onblur=\"endEdit(event)\"\n               ondblclick=\"startEdit(event)\"\n               onkeydown=\"endEdit(event)\">").concat((_a = row[col]) !== null && _a !== void 0 ? _a : "&nbsp;", "</span>");
    };
}
window.startEdit = function (ev) {
    ev.target.contentEditable = true;
    ev.target.focus();
};
window.endEdit = function (ev) {
    if (ev.key === undefined || ev.key === "Enter") {
        var pos = ev.target.getAttribute("position").split(".");
        ev.target.contentEditable = false;
        rows.value[pos[0]][pos[1]] = ev.target.innerText;
        workBook.value[currSheet.value] = xlsx_1.utils.json_to_sheet(rows.value, {
            header: columns.value.map(function (col) { return col.field; }),
            skipHeader: true,
        });
    }
};
function getRowsCols(data, sheetName) {
    var rows = xlsx_1.utils.sheet_to_json(data[sheetName], { header: 1 });
    var cols = [];
    for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
        var row = rows_1[_i];
        var keys = Object.keys(row);
        if (keys.length > cols.length) {
            cols = keys.map(function (key) {
                return {
                    field: key,
                    label: xlsx_1.utils.encode_col(+key),
                    display: display(key),
                };
            });
        }
    }
    return { rows: rows, cols: cols };
}
function importFile(ev) {
    var _a;
    return __awaiter(this, void 0, Promise, function () {
        var file, data, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    file = ev.target.files[0];
                    _b = xlsx_1.read;
                    return [4 /*yield*/, file.arrayBuffer()];
                case 1:
                    data = _b.apply(void 0, [_c.sent()]);
                    currFileName.value = file.name;
                    currSheet.value = (_a = data.SheetNames) === null || _a === void 0 ? void 0 : _a[0];
                    sheets.value = data.SheetNames;
                    workBook.value = data.Sheets;
                    selectSheet(currSheet.value);
                    return [2 /*return*/];
            }
        });
    });
}
function exportFile(type) {
    var wb = xlsx_1.utils.book_new();
    sheets.value.forEach(function (sheet) {
        xlsx_1.utils.book_append_sheet(wb, workBook.value[sheet], sheet);
    });
    (0, xlsx_1.writeFile)(wb, "sheet.".concat(type));
}
function selectSheet(sheet) {
    var _a = getRowsCols(workBook.value, sheet), newRows = _a.rows, newCols = _a.cols;
    resetCell();
    rows.value = newRows;
    columns.value = newCols;
    currSheet.value = sheet;
}
/script>
    < template >
    /** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }());
"imp-exp" >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"import" >
    type;
"file";
id = "import";
"importFile" /  >
;
for ( = "import" > import < /label>
    < /div>
    < span > {}; { currFileName: currFileName } || "vue-modify demo"; )
    ;
/span>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"export" >
;
/span>
    < ul >
    v - ;
for ( = "type in exportTypes"; ; )
"exportFile(type)" >
    {};
{
    ".".concat(type);
}
/li>
    < /ul>
    < /div>
    < /header>
    < div;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"sheets" >
    v - ;
for ( = "sheet in sheets"; ; )
"selectSheet(sheet)";
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"[currSheet === sheet ? 'selected' : '']"
    >
        {};
{
    sheet;
}
/span>
    < /div>
    < vue - table - lite;
is - static - mode;
"true";
page - size;
"50";
columns = "columns";
rows = "rows"
    > /vue-table-lite>
    < /template>(imp - exp, {
        display: flex,
        justify: justify
    } - content, space - between);
padding: 0.5;
rem;
module_1.font - family;
mono;
color: #;
212529;
var module_1 = require();
medium;
{
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
{
    background - color;
    white;
    border: 1;
    px;
    solid;
    padding: 0.3;
    rem;
}
hover;
{
    border - bottom;
    none;
}
hover;
ul;
{
    display: block;
}
span;
{
    padding: 0.3;
    rem;
    border: 1;
    px;
    solid;
    cursor: pointer;
}
ul;
{
    display: none;
    position: absolute;
    z - index;
    5;
    background - color;
    white;
    list - style;
    none;
    padding: 0.3;
    rem;
    border: 1;
    px;
    solid;
    margin - top;
    0.3;
    rem;
    border - top;
    none;
}
ul;
li;
{
    padding: 0.3;
    rem;
    text - align;
    center;
}
ul;
li: hover;
{
    background - color;
    lightgray;
    cursor: pointer;
}
sheets;
{
    display: flex;
    justify - content;
    center;
    margin: 0.3;
    rem;
    color: #;
    212529;
}
sheets;
span;
{
    border: 1;
    px;
    solid;
    padding: 0.5;
    rem;
    margin: 0.3;
    rem;
}
sheets;
span: hover: not(selected);
{
    background - color;
    lightgray;
    cursor: pointer;
}
selected;
{
    background - color;
    #;
    343;
    a40;
    color: white;
}
/style>; -->
