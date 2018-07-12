import React from 'react'
import './AdminSubscribers.css'

const SubscriberCard = ({ subscriber }) =>
  <tr className="subscribers">
    <td>{subscriber.lastName}</td>
    <td>{subscriber.firstName}</td>
    <td>{subscriber.phoneNumber}</td>
    <td>{subscriber.email}</td>
    <td>{subscriber.reuseableInfo ? 'Oui' : 'Non'}</td>
  </tr>

const AdminSubscribers = ({ subscribers }) => {
  const subscribersCards = subscribers
    .map(subscriber => <SubscriberCard key={subscriber.id} subscriber={subscriber} />)

  return (
    <div className="subscribers-container">
      <div className="admin-subscribers-title"><span>Abonnés à la Newsletter</span></div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Téléphone</th>
            <th>E-mail</th>
            <th>Infos</th>
          </tr>
        </thead>
        <tbody>
          {subscribersCards}
        </tbody>
      </table>
    </div>
  )
}

export default AdminSubscribers