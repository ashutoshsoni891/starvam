export abstract class IDBConnection {


    abstract getBMI(filter: any): any;
    abstract addBMI(data: any): any;
    abstract updateBMI(data: any): any;
    abstract deleteBMI(id: any): any;

}