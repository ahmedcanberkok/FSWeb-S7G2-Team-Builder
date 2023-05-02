import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} Email: ${email} Role: ${role}`);
    // Form verilerinin işlenmesi için ilgili fonksiyonları burada çağırabilirsiniz
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        İsim :  
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        E-posta :
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Rol :
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Lütfen bir rol seçin</option>
          <option value="backend-engineer">Backend Engineer</option>
          <option value="frontend-engineer">Frontend Engineer</option>
          <option value="tasarımcı">Tasarımcı</option>
          <option value="sistem-analisti">Sistem Analisti</option>
          <option value="test-mühendisi">Test Mühendisi</option>
        </select>
      </label>
      <button type="submit">Gönder</button>
    </form>
  );
}

export default Form;