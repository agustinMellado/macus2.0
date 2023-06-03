export interface Pregunta{
    id:number;
    pregunta:string;
    categoria:string;
    respuesta: Respuesta[]
}
export interface Respuesta{
    id:number;
    respuesta:string;
    correcta:boolean;
}