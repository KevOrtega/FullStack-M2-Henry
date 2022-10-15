import React, { useEffect, useState } from 'react';

export default function Form() {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ check, setCheck ] = useState(false)

  const handleChange = async (e) => {
    const onChangeFunctions = {
      username: () => setUsername(e.target.value),
      password: () => setPassword(e.target.value)
    }

    onChangeFunctions[e.target.name]()
  }

  useEffect(() => {
    const validation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(username) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    validation ? setCheck(true) : setCheck(false)
  }, [username, password])

  return (
      <div>
        <form>
          <label htmlFor="username">username</label>
          <input onChange={handleChange} name="username" type="text" value={username} />
          <label htmlFor="password">password</label>
          <input onChange={handleChange} name="password" type="password" value={password} />
          <button disabled={check ? false : true}>submit</button>
        </form>
      </div>
  )
}
