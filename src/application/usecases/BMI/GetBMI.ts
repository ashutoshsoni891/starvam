import { IBMIRepositories } from "../../repositories/IBMIRepository";


export default class GetBMI{

    private IBMIRepository : IBMIRepositories

    constructor(repo : IBMIRepositories){
        this.IBMIRepository = repo
    }

    getBMI(filter :any ){
        return this.IBMIRepository.getBMI(filter)
    }
}