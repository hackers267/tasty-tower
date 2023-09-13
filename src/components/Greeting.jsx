import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const [greeting, setGreeting] = useState(messages[0]);
  return (
    <div>
      <h3>{greeting}! Thank you for visitiong!</h3>
      <button onClick={changeGreeting}>New Greeting</button>
    </div>
  );
  function changeGreeting() {
    return setGreeting(randomMessage(random(messages), messages));
  }
}
function randomMessage(index, messages) {
  return messages[index];
}
function random(messages) {
  return Math.floor(Math.random() * messages.length);
}
