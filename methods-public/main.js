document.addEventListener('DOMContentLoaded', async () => {
    const result = document.querySelector('.result');
    const form = document.getElementById('javascriptForm');
    const input = document.getElementById('name');
    const formAlert = document.querySelector('.form-alert');
  
    const fetchPeople = async () => {
      try {
        const { data } = await axios.get('/api/people');
        const people = data.data.map((person) => {
          return `<h5>${person.name}</h5>`;
        });
        result.innerHTML = people.join('');
      } catch (error) {
        result.innerHTML = `<div class="alert alert-danger">Can't Fetch Data</div>`;
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      formAlert.textContent = '';
  
      const nameValue = input.value.trim();
      if (!nameValue) {
        formAlert.textContent = 'Name cannot be empty';
        return;
      }
  
      try {
        const { data } = await axios.post('/api/people', { name: nameValue });
        const h5 = document.createElement('h5');
        h5.textContent = data.person;
        result.appendChild(h5);
        input.value = '';
      } catch (error) {
        formAlert.textContent = error.response.data.msg;
      }
    };
  
    fetchPeople();
    form.addEventListener('submit', handleSubmit);
  
    // Prevent form submission on Enter key press
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
  });
  