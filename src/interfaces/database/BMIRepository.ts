import { IBMIRepositories } from "../../application/repositories/IBMIRepository";
import { IDBConnection } from './IDBConnection'

export class BMIRepository extends IBMIRepositories {

    private connection: IDBConnection;
  
    constructor(connection: IDBConnection) {
      super();
      this.connection = connection;
    }
  
    async addBMI(data: any) : Promise<any>{
        let result = await this.connection.addBMI(data);
        return result;
    }
    async getBMI(filter: any): Promise<any> {
        let result = await this.connection.getBMI(filter);
        return result;
    }
    async updateBMI(data: any): Promise<any> {
        let result = await this.connection.updateBMI(data);
        return result;
    }
    async deleteBMI(id: any): Promise<any> {
        let result = await this.connection.deleteBMI(id);
        return result;
    }
  
}