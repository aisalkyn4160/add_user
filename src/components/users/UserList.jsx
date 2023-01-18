import classes from './UserList.module.css'
import {Card} from '../ui/Card';
import {Button} from '../ui/Button';
import {useState} from 'react';
import DeleteModal from "../ui/DeleteModal";

export const UserList = (props) => {
  const [id, setId] = useState(null);
  const [displayConfirm, setDisplayConfirm] = useState(false);

  const showDeleteModal = (id) => {
    setId(id);
    setDisplayConfirm(true);
  }

  const hideConfirmationModal = () => {
    setDisplayConfirm(false);
  }

  const submitDelete = (id) => {
    props.deleteUser(id)
    setDisplayConfirm(false)
  }

  return (
    <div>
      <Card className={classes.users}>
        <ul>
          {props.users.map(user => {
            return <li key={user.id}>
              {user.name} ({user.age} in year)
              <Button onClick={() => showDeleteModal(user.id)}>Delete</Button>
            </li>
          })}
        </ul>
      </Card>
      {displayConfirm && <DeleteModal id={id} showModal={displayConfirm} confirmModal={submitDelete} hideModal={hideConfirmationModal} title={'Удаление пользователя!'} message={'Вы действиельно хотите удалить?'}/>}
    </div>

  )
}