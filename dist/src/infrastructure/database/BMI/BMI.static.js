"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBMI = exports.getBMI = exports.updateBMI = exports.addBMI = void 0;
const uuid_1 = require("uuid");
const { ObjectId } = require('mongodb');
function addBMI(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(data.BMI);
        for (let i = 0; i < data.BMI.length; i++) {
            let element = data.BMI[i];
            element['uuid'] = (0, uuid_1.v4)();
            element['bmi_index'] = element['weight'] / element['height'];
            if (element['bmi_index'] <= 18.4) {
                element['category'] = 'Underweight';
                element['health_risk'] = 'Malnutrition risk';
            }
            if (element['bmi_index'] > 25 && element['bmi_index'] <= 29.9) {
                element['category'] = 'Normal weight';
                element['health_risk'] = 'Low risk';
            }
            if (element['bmi_index'] > 30 && element['bmi_index'] <= 34.9) {
                element['category'] = 'Overweight';
                element['health_risk'] = 'Enhanced risk';
            }
            if (element['bmi_index'] > 30 && element['bmi_index'] <= 34.9) {
                element['category'] = 'Moderately obese';
                element['health_risk'] = 'Medium risk';
            }
            if (element['bmi_index'] > 35 && element['bmi_index'] <= 39.9) {
                element['category'] = 'Severel obese';
                element['health_risk'] = 'High,';
            }
            if (element['bmi_index'] > 40) {
                element['category'] = 'Very severely obese';
                element['health_risk'] = 'Very high risk';
            }
        }
        let result = yield this.create(data.BMI);
        console.log(result);
        return result;
    });
}
exports.addBMI = addBMI;
function updateBMI(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let record = [];
        for (let bmi of data.BMI) {
            let _id = bmi["_id"];
            delete bmi["_id"];
            console.log(_id, bmi);
            record.push(yield this.updateOne({ _id: _id }, {
                $set: bmi
            }));
        }
        return record;
    });
}
exports.updateBMI = updateBMI;
function getBMI(filter, pagination) {
    return __awaiter(this, void 0, void 0, function* () {
        let page_size = 0;
        let skip = 0;
        if (pagination) {
            page_size = pagination.page_size;
            skip = pagination.page * page_size;
        }
        let query = {};
        if (filter.user) {
            query["uuid"] = filter.uuid;
        }
        if (filter.weight) {
            query["weight"] = filter.weight;
        }
        if (filter.height) {
            query["height"] = filter.height;
        }
        if (filter.bmi_index) {
            query["bmi_index"] = filter.bmi_index;
        }
        if (filter.health_risk) {
            query["health_risk"] = filter.health_risk;
        }
        if (filter.category) {
            query["category"] = filter.category;
        }
        let noOfRecord = yield this.find(query).countDocuments();
        const data = yield this.find(query)
            .lean()
            .skip(skip)
            .limit(page_size);
        return { data, noOfRecord };
    });
}
exports.getBMI = getBMI;
function deleteBMI(uuid) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.deleteOne({ uuid: uuid });
        return true;
    });
}
exports.deleteBMI = deleteBMI;
