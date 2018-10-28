import React, {useState, useEffect} from 'react';

const NOT_ASKED = 0;
const LOADING = 1;
const COMPLETE = 2;
const FAILED = 3;

export default function() {
  const [state, setState] = useState({
    fetchState: NOT_ASKED,
    data: {},
    error: '',
  });

  useEffect(
    () => {
      setState({
        ...state,
        fetchState: LOADING,
      });

      fetch('http://localhost:4000/cows')
        .then(r => r.json())
        .then(r =>
          setState({
            fetchState: COMPLETE,
            data: r,
            error: '',
          }),
        )
        .catch(e =>
          setState({
            fetchState: FAILED,
            data: {},
            error: e.getMessage(),
          }),
        );
    },
    [state.fetchState],
  );

  return <CowListPage />;
}

function CowListPage() {
  useEffect(() => {
    document.title = `Cow list page`;
  });

  return (
    <div className="pa3 ph5-ns  mw9 center">
      <h1>Cows</h1>
    </div>
  );
}
