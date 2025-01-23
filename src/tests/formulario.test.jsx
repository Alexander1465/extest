import { describe, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "../components/Formulario";

describe('Formulario', () => {
    let cabecera;
    let imagen;
    let textfielnombre;
    let textfieledad;
    let boton;


    beforeEach(() => {
        render(<Formulario />);
        cabecera =screen.getByText("Rellena el formulario");
        imagen = screen.getByRole('img');
        textfielnombre = screen.getByLabelText('Nombre');
        textfieledad = screen.getByLabelText('Edad');
        boton = screen.getByRole('button', name='Enviar');
        
    });

    it("render cabecera nv2", () => {
        expect(cabecera).toBeInTheDocument(); 
    });

    it (" render img", () => {
    expect(imagen).toBeInTheDocument();
    });

    it ("render textfield nombre", () => {
    expect(textfielnombre).toBeInTheDocument();
    });

    it ("render textfield edad", () => {
    expect(textfieledad).toBeInTheDocument();
    });
    
    it ("render boton enviar", () => {
    expect(boton).toBeInTheDocument();
    });

    it('comprobamos que cuando el usuario rellena el formulario aparece una cabecera de nivel 6', async () => 
    {
        const user = userEvent.setup();
        await user.type(textfielnombre, 'Juan');
        await user.type(textfieledad, '25');
        await user.click(boton);
    });

});