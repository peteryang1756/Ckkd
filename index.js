fetch('https://app.seventy-seven.dev/api/tickets', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer YTQ2YmUyOTktYTMxZS00NmE5LTkzNzUtZGE3MDk2ZGJhMWU5X2JiNWYxYzMwLTZiNjItNGM3Ni1hODI5LTNiOWU3M2RiNjlmMw==`,
  },
  body: JSON.stringify({
    subject: 'My first ticket',
    body: 'This is my first ticket, please help me with something',
    senderFullName: 'John Doe',
    senderEmail: '980321steven@gmail.com',
    senderAvatarUrl: 'https://.../avatar.jpg', // Optional field
  }),
})
