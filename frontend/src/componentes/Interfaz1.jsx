import React, { useState } from "react";
import Interfaz2 from "./Interfaz2";

const Interfaz1 = () => {
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);
    const [ganado, setGanado] = useState(false);
    const [perdido, setPerdido] = useState(false);

    const generarNumeroAleatorio = () => {
        const nuevoNumero = generarNumeroUnico();
        setNumeroAleatorio(nuevoNumero);
        setGanado(false);
        setPerdido(false);
    };

    const generarNumeroUnico = () => {
        let nuevoNumero;
        do {
            nuevoNumero = Math.floor(Math.random() * 100) + 1;
        } while (numeroAleatorio === nuevoNumero);
        return nuevoNumero;
    };


    const handleGanar = () => {
        setGanado(true);
    };

    const handlePerder = () => {
        setPerdido(true);
    };

    return (
        <div className="container text-center my-2">
            <h1 className="my-2">Juego Adivina El Número</h1>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <button className="btn btn-primary my-1" onClick={generarNumeroAleatorio}>
                        Generar Número Aleatorio
                    </button>
                    <input
                        type="text"
                        size="3"
                        className="form-control mt-3 text-center text-danger"
                        value={numeroAleatorio !== null ? numeroAleatorio : ''}
                        readOnly
                    />
                </div>
            </div>
            <Interfaz2
                numeroAleatorio={numeroAleatorio}
                onGanar={handleGanar}
                onPerder={handlePerder}
                ganado={ganado}
                perdido={perdido}
            />
        </div>
    );
};

export default Interfaz1;
