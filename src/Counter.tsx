import React from 'react';

interface Props {
  increment: (newCount: number) => void;
  count: number;
}

export default function Counter({ increment, count }: Props) {
  const handleClick = () => increment(count + 1);
  return <button onClick={handleClick}>Clicked {count} times!</button>;
}
