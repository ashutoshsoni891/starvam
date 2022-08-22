import { IBMIRepositories } from "../../repositories/IBMIRepository";


export default class DeleteBMI{

    private IBMIRepository : IBMIRepositories

    constructor(repo : IBMIRepositories){
        this.IBMIRepository = repo
    }

    updateBMI(id :any ){
        return this.IBMIRepository.deleteBMI(id)
    }
}