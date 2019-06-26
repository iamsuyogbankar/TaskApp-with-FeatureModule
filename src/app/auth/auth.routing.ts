import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const userRoutes: Routes = [
    { path: 'auth', 
    children: [
        { path: 'login', component: LoginComponent},
        { path: 'register', component: RegisterComponent}
    ]
    }
]

export const UsersRouting = RouterModule.forChild(userRoutes);