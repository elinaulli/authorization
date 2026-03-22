import type { FC } from 'react';
import type { CurrentUser } from '../types';

type AdminPanelProps = {
  currentUser: CurrentUser | null;
  title?: string;
};

const AdminPanel: FC<AdminPanelProps> = ({ currentUser, title = 'Панель администратора' }) => {
  const isAdmin = currentUser?.roles?.includes('admin') || false;
  
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      border: '1px solid #ddd'
    }}>
      <h2>{title}</h2>
      
      {currentUser ? (
        <div>
          <p>
            <strong>Статус:</strong>{' '}
            <span style={{ color: isAdmin ? '#4caf50' : '#ff9800' }}>
              {isAdmin ? 'Администратор' : 'Пользователь 👤'}
            </span>
          </p>
          <p>
            <strong>Роль:</strong>{' '}
            {currentUser.roles?.join(', ') || 'нет ролей'}
          </p>
        </div>
      ) : (
        <p>Не авторизован</p>
      )}
      
      {isAdmin && (
        <button style={{
          padding: '8px 16px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Выполнить действие
        </button>
      )}
    </div>
  );
};

export default AdminPanel;