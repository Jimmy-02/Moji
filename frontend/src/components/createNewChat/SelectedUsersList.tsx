import type { Friend } from '@/types/user';
import React from 'react'


interface SelectedUsersListProps {
  invitedUsers: Friend[];
  onRemove: (user: Friend) => void;
}
const SelectedUsersList = ({ invitedUsers, onRemove }: SelectedUsersListProps) => {
    if (invitedUsers.length === 0) {
      return;
    }
  return (
    <div>SelectedUsersList</div>
  )
}

export default SelectedUsersList