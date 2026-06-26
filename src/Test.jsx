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

const TestPage = () => {
  return (
    <div className="container">
      <h1>Test Page</h1>
      <TestCard />
    </div>
  );
}

export default TestPage;
