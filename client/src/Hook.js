import React, {useState, useEffect, useMemo, useRef} from 'react';

export default function() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [val, setVal] = useState('');
  const doubleTheThing = a => a * 2;
  const memoDouble = useMemo(() => doubleTheThing(count), [count]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>And the double of that is {memoDouble}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You typed {val}</p>
      <input onChange={({target: {value}}) => setVal(value)} />
      <div>
        <TextInputWithFocusButton />
      </div>
    </div>
  );
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
