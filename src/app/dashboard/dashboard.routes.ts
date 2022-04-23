// Angular imports
import { Routes } from "@angular/router";

// Component
import { StatisticsComponent } from "../ingress-egress/statistics/statistics.component";
import { IngressEgressComponent } from "../ingress-egress/ingress-egress.component";
import { DetailsComponent } from "../ingress-egress/details/details.component";


export const dashboardRoutes: Routes = [
    { path: '', component: StatisticsComponent },
    { path: 'ingress-egress', component: IngressEgressComponent },
    { path: 'details', component: DetailsComponent },
];