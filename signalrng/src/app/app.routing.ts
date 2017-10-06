import { Route, RouterModule } from '@angular/router';
//import { ConnectionResolver } from './app.connectionresolver';

import { ProgressComponent } from './progress/progress.component';

const routes: Route[] = [
    { path: '', component: ProgressComponent }
//    { path: '', component: ProgressComponent, resolve: { connection: ConnectionResolver } }
];

export const AppRoutes = RouterModule.forRoot(routes);