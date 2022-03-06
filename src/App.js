import './App.css';
import { useState } from 'react'

const fields = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name'
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email'
  },
  {
    id: 'birthdate',
    name: 'birthdate',
    type: 'date',
    label: 'Birthdate'
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password'
  }
]

function App() {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    birthdate: '',
    password: ''
  })
  const [page, setPage] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const lastPage = fields.length - 1
  const onChange = (e) => {
    setFormValue({
      ...formValue,
      // computed peroperty name, inside []
      [fields[page].name]: e.target.value
    })
  }
  const submit = (e) => {
    e.preventDefault()
    if (page === lastPage) {
      console.log(formValue)
      setShowSuccess(true)
    } else {
      setPage(page + 1)
    }
  }
  const goBack = (e) => {
    e.preventDefault()
    // window.history.back()
    setPage(page - 1)
  }
  // console.log(formValue)
  return (
    <>

      {showSuccess ? (<div>success</div>) :
        (
          <>
            {page !== 0 && <a href="#" onClick={goBack}>Go Back</a>}
            <form className="App" onSubmit={submit}>
              <label htmlFor={fields[page].id}>{fields[page].label}</label>
              <input type={fields[page].type} name={fields[page].name} id={fields[page].id} value={formValue[fields[page].name]} onChange={onChange} />
              <input type="submit" disabled={!formValue[fields[page].name]} value={page === lastPage ? 'Submit' : 'Next'} />
            </form>
          </>
        )
      }
    </>
  );
}

export default App;


