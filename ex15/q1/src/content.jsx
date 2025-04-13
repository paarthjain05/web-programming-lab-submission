import { useState } from 'react';

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t programmers like nature? It has too many bugs."
];

function Content() {
  const [joke, setJoke] = useState("");

  const handleClick = () => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(random);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default Content;
