import { useState } from 'react';
import withAuthorization from './hoc/withAuthorization';
import AdminPanel from './components/AdminPanel';
import type { CurrentUser } from './types';

const ProtectedAdminPanel = withAuthorization(AdminPanel, ['admin']);

function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  
  const adminUser: CurrentUser = {
    roles: ['admin', 'user']
  };
  
  const regularUser: CurrentUser = {
    roles: ['user']
  };
  
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Проверка доступа</h1>
      
      {/* Кнопки для смены роли */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setCurrentUser(null)}>
          Выйти
        </button>
        <button onClick={() => setCurrentUser(regularUser)}>
          Войти как пользователь
        </button>
        <button onClick={() => setCurrentUser(adminUser)}>
          Войти как администратор
        </button>
      </div>
      
      <div style={{ 
        padding: '10px', 
        backgroundColor: '#e3f2fd', 
        borderRadius: '4px',
        marginBottom: '20px'
      }}>
        <strong>Текущий пользователь:</strong>
        {currentUser ? (
          <div>
            Роль: {currentUser.roles?.join(', ')}
            {currentUser.roles?.includes('admin') && ' (администратор)'}
          </div>
        ) : (
          <div>Не авторизован</div>
        )}
      </div>
      
      <h3>Защищенный раздел:</h3>
      <ProtectedAdminPanel currentUser={currentUser} />
    </div>
  );
}

export default App;