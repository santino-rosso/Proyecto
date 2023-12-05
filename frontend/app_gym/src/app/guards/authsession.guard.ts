import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authsessionGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol')

  if (!token) {
    // Si no hay token, redirigir al componente de inicio de sesión
    router.navigateByUrl('/login');
    return false;
  }

  // Verificar el rol permitido para la ruta actual
  const rolesPermitidos = (route.data as { roles: string[] }).roles;
  if (rolesPermitidos && rol !== null && rolesPermitidos.indexOf(rol) === -1) {
    // Si el rol no está permitido para la ruta actual, redirigir a una página apropiada
    if (rol == "Profesor")
      router.navigateByUrl('/profesor_planificaciones');
    if (rol == "Alumno")
      router.navigateByUrl('/alumno_cronograma');
    return false;
  }

  return true;
}; 