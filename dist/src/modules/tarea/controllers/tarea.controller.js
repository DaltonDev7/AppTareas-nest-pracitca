"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.TareaController = void 0;
var common_1 = require("@nestjs/common");
var tarea_service_1 = require("../../../core/services/tarea.service");
var Tarea_1 = require("../../../entities/Tarea");
var TareaController = /** @class */ (function () {
    function TareaController(tareaService) {
        this.tareaService = tareaService;
    }
    TareaController.prototype.getTareas = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, this.tareaService.getAll()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_1 = _c.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_1
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TareaController.prototype.GetByIdUsuario = function (id, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, this.tareaService.getTareaByIdUsuario(id)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_2 = _c.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_2
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TareaController.prototype.Save = function (tarea, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(tarea);
                        return [4 /*yield*/, this.tareaService.save(tarea).then(function () {
                                return res.status(201).json({
                                    msg: 'Tarea Creada'
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_3
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TareaController.prototype.Delete = function (id, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.tareaService.delete(id).then(function () {
                                return res.json({
                                    msg: 'Tarea Eliminado'
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_4
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        common_1.Get('GetAll'),
        __param(0, common_1.Req()),
        __param(1, common_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], TareaController.prototype, "getTareas", null);
    __decorate([
        common_1.Get('GetByIdUsuario/:idUsuario'),
        __param(0, common_1.Param('idUsuario', common_1.ParseIntPipe)),
        __param(1, common_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], TareaController.prototype, "GetByIdUsuario", null);
    __decorate([
        common_1.Post('Save'),
        __param(0, common_1.Body()),
        __param(1, common_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Tarea_1.Tarea, Object]),
        __metadata("design:returntype", Promise)
    ], TareaController.prototype, "Save", null);
    __decorate([
        common_1.Delete('Delete/:id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)),
        __param(1, common_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], TareaController.prototype, "Delete", null);
    TareaController = __decorate([
        common_1.Controller('tarea'),
        __metadata("design:paramtypes", [tarea_service_1.TareaService])
    ], TareaController);
    return TareaController;
}());
exports.TareaController = TareaController;
//# sourceMappingURL=tarea.controller.js.map