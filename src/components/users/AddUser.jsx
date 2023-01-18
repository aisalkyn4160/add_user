import {useState} from 'react'
import {Button} from '../ui/Button'
import {Card} from '../ui/Card'
import {ErrorModal} from '../ui/ErrorModal'
import classes from './AddUser.module.css'

export const AddUser = (props) => {

  const [userName, setUserName] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState(null)


  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (userName.trim().length === 0 || age.length === 0) {
      setError({
        title: 'Invalid value, inputs should not be empty',
        message: 'Please enter a not empty values'
      })
      return
    }
    if (age < 1) {
      setError({
        title: 'Invalid age value',
        message: 'Please enter a number more than 1'
      })
      return
    }

    // const user = {
    //     name: userName,
    //     age,
    //     id: Math.random().toString()
    // }

    props.onAddUser(userName, age)

    setUserName('')
    setAge('')
  }

  const closeModalHandler = () => {
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" onChange={userNameChangeHandler} value={userName}/>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" onChange={ageChangeHandler} value={age}/>
          <Button>Add User</Button>
        </form>
      </Card>
    </div>

  )

}