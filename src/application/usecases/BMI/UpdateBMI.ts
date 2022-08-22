import { IBMIRepositories } from "../../repositories/IBMIRepository";

 import {IUpdateBMI} from "../../../domain/index";

export default class UpdateBMI{

    private IBMIRepository : IBMIRepositories

    constructor(repo : IBMIRepositories){
        this.IBMIRepository = repo
    }

    updateBMI(data :IUpdateBMI ){
        return this.IBMIRepository.updateBMI(data)
    }
}