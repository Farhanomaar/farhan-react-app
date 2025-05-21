function Dashboard({ isLoggenIn }) {
  return (
    <div>
      {isLoggenIn ? <p> You are loggen in!</p> : <p> PLease logg in</p>}
    </div>
  );
}

export default Dashboard;
