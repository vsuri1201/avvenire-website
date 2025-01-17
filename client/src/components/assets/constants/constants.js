import ServicesComponent from "../../tabcontents/services/ServicesComponent";
import HomeComponent from "../../tabcontents/home/HomeComponent";
import CareerComponent from "../../tabcontents/careers/CareerComponent";
import AboutComponent from "../../tabcontents/about/AboutComponent";
import TrainingComponent from "../../tabcontents/training/TrainingComponent";
import SolutionsComponent from "../../tabcontents/solutions/SolutionsComponent";
import ContactComponent from "../../tabcontents/contact/ContactComponent";

export const tabInfo = {
    "Home": {
        component: HomeComponent,
        "key": "Home"
    },
    "About Us": {
        component: AboutComponent,
        "key": "About Us"
    },
    "Careers": {
        component: CareerComponent,
        "key": "Careers"
    },
    "Training":{
        component: TrainingComponent,
        "key": "Training"
    },
    "Solutions": {
        component: SolutionsComponent,
        "key": "Solutions"
    },
    "Services": {
        component: ServicesComponent,
        "key": "Services"
    },
    "Contact Us": {
        component: ContactComponent,
        "key": "Contact Us"
    }
}