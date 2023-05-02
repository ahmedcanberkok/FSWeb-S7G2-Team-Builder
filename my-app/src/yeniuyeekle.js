import React ,{useState} from React ;

function memberAdd () {
    const [teamMembers, setTeamMembers] = useState(
         { id: 0, name: 'Ali', age: 28, role: 'Developer' },
         { id: 1, name: 'Veli', age: 32, role: 'Designer' },
         { id: 2,  name: 'Ayse', age: 24, role: 'Tester' }
      );

const addTeamMember = (newMember) => {
    setTeamMembers({ ...teamMembers, [newMember.name]: newMember });
    console.log(newMember);
};
    return (
    <div>
        <h1> Takim Uyeleri</h1>
        <ul>
        {Object.values(teamMembers).map(member => (
          <li key={member.name}>
            {member.name} - {member.age} - {member.role}
          </li>
        ))}
      </ul>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member.name} - {member.age} - {member.role}
          </li>
        ))}
      </ul>

    </div>
)

}

export default memberAdd ;

