import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { BubblesMainComponent } from './bubbles-main/bubbles-main.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LeadingCoursesComponent } from './leading-courses/leading-courses.component';
import { SkilledWarriorComponent } from './skilled-warrior/skilled-warrior.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CtaComponent } from './cta/cta.component';
import { CoursesWeTeachComponent } from './courses-we-teach/courses-we-teach.component';
import { HomeComponent } from './home/home.component';
import { FeatherModule } from 'angular-feather';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import {
  Phone,
  Star,
  Send,
  Headphones,
  HardDrive,
  Calendar,
  BarChart,
  DownloadCloud,
  Mail,
  Clipboard,
  Play,
  Box,
  Settings,
  Award,
  Code,
  Camera,
  Sun,
  Wind,
  Clock,
  Anchor,
  Users,
  Eye,
  Activity,
  UploadCloud,
  PenTool,
  Zap,
  Map,
  Cloud,
  DollarSign,
  ThumbsUp,
  PieChart,
  User,
  LifeBuoy,
  Image,
  Sliders,
  Target,
  File,
  Smartphone,
  MessageCircle,
  CreditCard,
  Book,
  Lock,
  Airplay,
  Monitor,
  Download,
  Hexagon,
  Layers,
  ArrowLeft,
  ArrowRight,
  Repeat,
  Bell,
} from 'angular-feather/icons';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

const icons = {
  Phone,
  Star,
  Send,
  Headphones,
  HardDrive,
  Calendar,
  BarChart,
  DownloadCloud,
  Mail,
  Clipboard,
  Play,
  Box,
  Settings,
  Award,
  Code,
  Camera,
  Sun,
  Wind,
  Clock,
  Anchor,
  Users,
  Eye,
  Activity,
  UploadCloud,
  PenTool,
  Zap,
  Map,
  Cloud,
  DollarSign,
  ThumbsUp,
  PieChart,
  User,
  LifeBuoy,
  Image,
  Sliders,
  Target,
  File,
  Smartphone,
  MessageCircle,
  CreditCard,
  Book,
  Lock,
  Airplay,
  Monitor,
  Download,
  Hexagon,
  Layers,
  ArrowLeft,
  ArrowRight,
  Repeat,
  Bell,
};

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    BubblesComponent,
    BubblesMainComponent,
    HowItWorksComponent,
    LeadingCoursesComponent,
    SkilledWarriorComponent,
    TestimonialsComponent,
    CtaComponent,
    CoursesWeTeachComponent,
    HomeComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FeatherModule.pick(icons),
    FontAwesomeModule,
    SwiperModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
})
export class HomeModule {}
