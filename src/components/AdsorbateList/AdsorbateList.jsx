import React from "react";

export function AdsorbateList({loading, adsorbates}) {
  return (
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
  );
}
