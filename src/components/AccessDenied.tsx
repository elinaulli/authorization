import type { FC } from 'react';

const AccessDenied: FC = () => {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#ffebee',
      border: '1px solid #ffcdd2',
      borderRadius: '4px',
      color: '#c62828'
    }}>
      У вас нет прав для просмотра этого раздела.
    </div>
  );
};

export default AccessDenied;