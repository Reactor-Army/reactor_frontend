import {useSelector} from "react-redux";
import React from "react";

export function AdsorbateList() {
  const loading = useSelector((state) => state.loading);
  const {adsorbates} = useSelector((state) => state.adsorbates);

  return (
    <div className="container">
      <div className="row">
        <h1>Algo que intenta ser Redux y consumir el back</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Agregar Adsorbato</button>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Nombre de Ion</th>
                <th>Carga de Ion</th>
                <th>Radio Ionico</th>
                <th>Limite de Vertido</th>
              </tr>
            </thead>
            <tbody>
              {adsorbates.length &&
                adsorbates.map(
                  ({nombreIon, cargaIon, radioIonico, limiteVertido}, i) => (
                    <tr key={i}>
                      <td>{nombreIon}</td>
                      <td>{cargaIon}</td>
                      <td>{radioIonico}</td>
                      <td>{limiteVertido}</td>
                    </tr>
                  ),
                )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
