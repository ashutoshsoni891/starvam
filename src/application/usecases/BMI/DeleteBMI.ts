import { IBMIRepositories } from "../../repositories/IBMIRepository";


export default class DeleteBMI{

    private IBMIRepository : IBMIRepositories

    constructor(repo : IBMIRepositories){
        this.IBMIRepository = repo
    }

    deleteBMI(uuid :any ){
        return this.IBMIRepository.deleteBMI(uuid)
    }
}