import './App.css';
import { useState } from 'react';
import Form from './Form';
function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const handleSubmit = (formData) => {
    setTeamMembers([...teamMembers, formData]);
  };

  return (
    <div className="App">
     <h2>Takim Uyeleri</h2>
     <Form onSubmit={handleSubmit} />
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.name} ({member.email}) - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
