import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  useParams,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';

const RouteTest = (props) => {
  const match = useRouteMatch();
  const location = useLocation();
  const params = useParams();

  console.log('match ', match);
  console.log('location ', location);
  console.log('params ', params);

  return (
    <div>
        <h1> You've arrived at {match.url} </h1>
        <br />
        <p>
            Params: { match.params.params }
        </p>
    </div>
  )
}

export default RouteTest;
