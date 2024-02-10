import React, { useState } from "react";

const Interfaz2 = ({ numeroAleatorio, onGanar, onPerder, ganado, perdido }) => {
    const [numeros, setNumeros] = useState([null, null, null, null, null]);
    const [numerosDeshabilitados, setNumerosDeshabilitados] = useState([false, false, false, false, false]);
    const [secuenciaActual, setSecuenciaActual] = useState([]);

    const generarNumeroAleatorio = (indice) => {
        if (!numerosDeshabilitados[indice]) {
            const nuevosNumeros = [...numeros];
            nuevosNumeros[indice] = numeroAleatorio;
            setNumeros(nuevosNumeros);
            botonPresionado(indice);

            // Actualizar la secuenci
            const nuevaSecuencia = [...secuenciaActual];
            nuevaSecuencia[indice] = numeroAleatorio;
            setSecuenciaActual(nuevaSecuencia);

            

            // Verificar si la secuencia actual está ordenada
            if (!sonNumerosOrdenados(nuevaSecuencia)) {
                onPerder(); 
            } else {
                if (nuevaSecuencia.filter(num => num !== null).length === numeros.length && sonNumerosOrdenados(nuevaSecuencia)) {
                    onGanar(); 
                }
            }
        }
    };

    const sonNumerosOrdenados = (array) => {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] !== null && array[i + 1] !== null && array[i] > array[i + 1]) {
                return false;
            }
        }
        return true;
    };

    const botonPresionado = (indice) => {
        const nuevosNumerosDeshabilitados = [...numerosDeshabilitados];
        nuevosNumerosDeshabilitados[indice] = true;
        setNumerosDeshabilitados(nuevosNumerosDeshabilitados);
    };

    return (
        <div className="container text-center my-5">
            {ganado && <h2 className="text-success">¡Ganaste!</h2>}
            {perdido && <h2 className="text-danger">¡Perdiste!</h2>}
            {!ganado && !perdido && (
                <>
                    <h1 className="my-4">Asigna Números</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-2">
                            {numeros.map((numero, indice) => (
                                <div key={indice} className="mb-2">
                                    <input
                                        type="text"
                                        size="3"
                                        className="form-control mr-2 d-inline"
                                        value={numero !== null ? numero : ''}
                                        readOnly
                                    />
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => generarNumeroAleatorio(indice)}
                                        disabled={numerosDeshabilitados[indice]}
                                    >
                                        Asigna El Número
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Interfaz2;
