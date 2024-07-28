import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <form action="https://formspree.io/your-email" method="POST">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

