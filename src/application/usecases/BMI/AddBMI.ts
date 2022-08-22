import { IBMIRepositories } from "../../repositories/IBMIRepository";

 import {IAddBMIArray} from "../../../domain/index";

export default class CreateBMI{

    private IBMIRepository : IBMIRepositories

    constructor(repo : IBMIRepositories){
        this.IBMIRepository = repo
    }

    addBMI(data :IAddBMIArray ){
        return this.IBMIRepository.addBMI(data)
    }
}