import React from 'react'
import './Content.css'

const NosAction = ({children}) => {
  return (
    <div className="container-content">
      <h2>Nos actions</h2>
      <p><em> Pour une autre PAC </em> anime un travail collectif s’articulant autour de trois axes :</p>
      <ul>
        <li>Favoriser l’échange entre parties prenantes à but non lucratif sur la thématique de la PAC, en France et dans l’Union européenne :
          <ul>
            <li>suivre l’actualité politique française et européenne en lien avec la réforme de la PAC,</li>
            <li>favoriser l’échange d’informations entre ses membres comme avec ses partenaires européens,</li>
            <li>veiller à la complémentarité de ses actions avec celles de ses membres et de ses partenaires européens.</li>
          </ul>
        </li>
        <li>Promouvoir une réforme ambitieuse de la PAC et orienter sa définition vers plus de durabilité, de justice et de cohérence :
          <ul>
            <li>assurer la reprise des idées défendues par <em> Pour une autre PAC </em> dans la prochaine PAC et dans sa déclinaison française,</li>
            <li>améliorer la reconnaissance de la place de la société civile française dans les discussions politiques autour de la PAC,</li>
            <li>favoriser la coopération interministérielle dans la définition des positions françaises sur la PAC.</li>
          </ul>
        </li>
        <li>Sensibiliser et mobiliser la société civile autour des enjeux liés à la politique agricole :
          <ul>
            <li>vulgariser les enjeux de la PAC pour le grand public,</li>
            <li>encourager l’appropriation et le traitement du sujet de la PAC par les media,</li>
            <li>stimuler l’implication des citoyens français dans la définition de la réforme de la PAC</li>
          </ul>
        </li>
      </ul>
      <p>Rapports d’activités 2013</p>
      <p>Rapports d’activités 2014</p>
      <p>Rapport d’activités 2017</p>
    </div>
  )
}

export default NosAction
