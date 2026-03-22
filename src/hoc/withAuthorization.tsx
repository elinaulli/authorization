import type { ComponentType } from 'react';
import type { CurrentUser } from '../types';
import AccessDenied from '../components/AccessDenied';

/**
 * HOC для защиты компонентов по ролям
 * 
 * @param WrappedComponent - Компонент, который нужно защитить
 * @param allowedRoles - Массив ролей, которым разрешен доступ
 */
function withAuthorization<P extends { currentUser: CurrentUser | null }>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: string[]
) {
  return function WithAuthorizationComponent(props: P) {
    const { currentUser } = props;
    
    let hasAccess = false;
    
    if (currentUser && currentUser.roles) {
      for (let i = 0; i < allowedRoles.length; i++) {
        if (currentUser.roles.includes(allowedRoles[i])) {
          hasAccess = true;
          break;
        }
      }
    }
    
    if (hasAccess) {
      return <WrappedComponent {...props} />;
    }
    
    return <AccessDenied />;
  };
}

export default withAuthorization;