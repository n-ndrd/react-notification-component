import { useState } from 'react'

import { NotificationContainer, NotificationContent } from '../styles'

export function Notification() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggleNotification() {
    setIsOpen((state) => !state)
  }

  return (
    <NotificationContainer>
      <button onClick={handleToggleNotification}>trigger</button>

      {isOpen && <NotificationContent>Conteúdo</NotificationContent>}
    </NotificationContainer>
  )
}
