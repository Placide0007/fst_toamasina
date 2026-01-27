import { createRouter, createWebHashHistory } from "vue-router";
import Discipline from "../pages/Discipline.vue";
import Presentation from "../pages/Presentation.vue";
import Contact from "../pages/Contact.vue";
import Major from "../pages/Major.vue";
import Program from "../pages/Program.vue";
import CareerOpportunitie from "../pages/CareerOpportunitie.vue";


const routes = [
    {
        path:'/',
        component:Presentation,
    },
    {
        path:'/discipline',
        component:Discipline,
    },
    {
        path:'/contact',
        component:Contact,
    },
    {
        path:'/major',
        component:Major,
    },
    {
        path:'/program',
        component:Program,
    },
    {
        path:'/career-opportunities',
        component:CareerOpportunitie,
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;