"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_config_base_1 = require("./entity-config.base");
var ModelEntity = /** @class */ (function (_super) {
    __extends(ModelEntity, _super);
    function ModelEntity(config, entityConstructor) {
        var _this = _super.call(this, config, entityConstructor) || this;
        _this.loadAll = false;
        _this.loadAll = config.loadAll === true;
        if (!_this.endpoint && !_this.values)
            throw new Error("Can't create entity " + _this.entityConstructor.name + ", no endpoint or values defined.");
        return _this;
    }
    return ModelEntity;
}(entity_config_base_1.EntityConfigBase));
exports.ModelEntity = ModelEntity;
