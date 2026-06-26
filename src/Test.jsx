const TestCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Test Card</h5>
        <p className="card-text">This is a simple test card.</p>
      </div>
    </div>
  );
};

const RichTestCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Rich Test Card</h5>
      </div>
      <div className="card-body">
        <p className="card-text">This is a more elaborate test card with additional content.</p>
        <button className="btn btn-primary">Click Me</button>
      </div>
    </div>
  );
};

const TestPage = () => {
  return (
    <div className="container">
      <h1>Test Page</h1>
      <TestCard />
    </div>
  );
}

export default TestPage;
