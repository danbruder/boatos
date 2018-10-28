import React, {useState, useMemo, useEffect} from 'react';

const NOT_ASKED = 0;
const LOADING = 1;
const COMPLETE = 2;
const FAILED = 3;

export default function() {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(NOT_ASKED);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(
    () => {
      setFetched(LOADING);

      fetch('http://localhost:4000/api/photos')
        .then(r => r.json())
        .then(r => {
          setFetched(COMPLETE);
          setData(r.data);
        })
        .catch(e => {
          setFetched(FAILED);
          setData([]);
        });
    },
    [fetchCount],
  );

  return (
    <PhotoListPage
      loading={fetched == LOADING}
      error={fetched == FAILED}
      data={data}
    />
  );
}

function PhotoListPage({data, loading, error}) {
  useEffect(() => {
    document.title = `Results: ${data.length}`;
  });

  if (loading) {
    return (
      <div className="pa3 ph5-ns mw9 center">
        <h1>Photos</h1>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="pa3 ph5-ns mw9 center">
        <h1>Photos</h1>
        Error
      </div>
    );
  }

  return (
    <div className="pa3 ph5-ns mw9 center">
      <h1>Photos</h1>

      {data.map((d, key) => (
        <Photo key={key} data={d} />
      ))}
    </div>
  );
}

function Photo(d) {
  return (
    <div className="pa3 ph5-ns  mw9 center">
      <article>
        <h2 className="f3 fw4 pa3 mv0">Albums</h2>
        <div className="cf pa2">
          <div className="fl w-50 w-25-m w-20-l pa2">
            <a
              href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
              className="db link dim tc">
              <img
                src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png"
                alt="Frank Ocean Blonde Album Cover"
                className="w-100 db outline black-10"
              />
              <dl className="mt2 f6 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Blonde</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">Frank Ocean</dd>
              </dl>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
