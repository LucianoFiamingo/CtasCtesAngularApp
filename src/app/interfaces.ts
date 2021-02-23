export interface Titular {
    id: number,
    rut: string,
    cuentasCorrientes: CuentaCorriente[]
}

export interface CuentaCorriente{
    id : number,
    numero : number,
    moneda : string,
    saldo : number,
    titular : Titular
}

export interface PersonaFisica extends Titular{
    nombre : string,
    apellido : string
}

export interface PersonaJuridica extends Titular{
    razonSocial : string,
    anioFundacion : number
}