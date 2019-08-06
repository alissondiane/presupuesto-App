import {Egreso}  from './egreso.model';

export class EgresoServicio{
    egresos : Egreso[] = [
        new Egreso("Renta Depto",900),
        new Egreso("Ropa",200)
    ]    
    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);//indice,1 =nro de elementos a eliminar a partir de ese indice
    }
}