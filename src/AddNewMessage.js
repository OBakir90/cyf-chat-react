import React, { useEffect, useState } from 'react'






const AddNewMessage = () => {
  const [newPost, setNewPost] = useState(null)
  const [changeName, setChangeName] = useState([])
  const [changeMessage, setChangeMessage] = useState([])

  const handleSubmit = (e) => {
    //setNewPost(e.target.value)
    e.preventDefault()

    setNewPost({ Name: changeName, Message: changeMessage })
    //console.log(newPost);
  }

  const handleOnChangeName = (e) => {
    setChangeName(e.target.value)
  }
  const handleOnChangeMsg = (e) => {
    setChangeMessage(e.target.value)
  }

  useEffect(() => {
    fetch('https://taslima-chat-server.glitch.me/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: changeName, text: changeMessage }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }, [newPost])
  return (
    <div style={{ "width": "50%", "marginLeft": "35%" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" id='name' value={changeName} onChange={handleOnChangeName} className="form-control" placeholder="Enter your name" />
          <label htmlFor="name">Message</label>
          <input type="message" id='message' value={changeMessage} onChange={handleOnChangeMsg} className="form-control" placeholder=" Enter your message" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  )
}
export default AddNewMessage