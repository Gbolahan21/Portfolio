import React from 'react'

import Section1 from './components/Section1';

function App() {
  const heading = (
    <div>
      <h1>to test how to pass props across a component</h1>
    </div>
  );

  const subheading = (
    <div>
      <h1>to know better</h1>
    </div>
  );

  const CTA = (
    <div>
      <button>click</button>
    </div>
  )
  return (
    <div className="App">
      <Section1
        heading={heading}
        subheading={subheading}
        CTA={CTA}
      /> 
    </div>
  );
}

export default App;
