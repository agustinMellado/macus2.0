export interface pregrunta{
    id:string;
    pregunta:string;
    categoria:string;
    respuesta: Respuesta[]
}
export interface Respuesta{
    id:string;
    respuesta:string;
    correcta:boolean;
}