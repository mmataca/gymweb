document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const modal = new bootstrap.Modal(document.getElementById('errorModal'));
  const modalBody = document.getElementById('modalBody');

  loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(loginForm);
      const username = formData.get('username');
      const password = formData.get('password');

      try {
          const response = await fetch('/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password })
          });

          const result = await response.json();

          if (!response.ok) {
              modalBody.textContent = result.message;
              modal.show();
          } else {
              window.location.href = '/';
          }
      } catch (error) {
          modalBody.textContent = 'Error del servidor. Por favor, inténtelo de nuevo.';
          modal.show();
      }
  });
});
