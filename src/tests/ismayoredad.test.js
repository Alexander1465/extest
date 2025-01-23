import { describe, expect } from 'vitest';
import ismayoredad from '../utils/ismayoredad';

describe('Formulario', () => {

    it ("la funcion ismayoredad() devuelva un valor booleano", () => 
    {
        const result = ismayoredad(18)
        expect(typeof result).toBe('boolean');
    })

    it ("si la entrada de la funcion es 18 devuelva true", () => 
    {
        const result = ismayoredad(18)
        expect(result).toBe(true);
    })
    
    it ( "si la entrada de la funcion es mayor a 18 no devuelva true", () => 
    {
        const result = ismayoredad(20)
        expect(result).toBe(true);
    })

    it ("si la entrada de la funcion es menor a 18 no devuelva false", () => 
    {
        const result = ismayoredad(16)
        expect(result).toBe(false);
    })

    it("si la entradad de la funcion es numero negativo nos devuelva null", () => 
    {
        const result = ismayoredad(-18)
        expect(result).toBe(null);
    })
    
});