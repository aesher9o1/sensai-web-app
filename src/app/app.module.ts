import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShellComponent } from './components/navbar/shell/shell.component';
import { MainComponent } from './components/navbar/main/main.component';

import { FeatherModule } from 'angular-feather';

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
import { HeaderComponent } from './pages/home/header/header.component';
import { BubblesComponent } from './pages/home/bubbles/bubbles.component';
import { BubblesMainComponent } from './pages/home/bubbles-main/bubbles-main.component';
import { HowItWorksComponent } from './pages/home/how-it-works/how-it-works.component';
import { LeadingCoursesComponent } from './pages/home/leading-courses/leading-courses.component';
import { SkilledWarriorComponent } from './pages/home/skilled-warrior/skilled-warrior.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { CtaComponent } from './pages/home/cta/cta.component';
import { CoursesWeTeachComponent } from './pages/home/courses-we-teach/courses-we-teach.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MentorsComponent } from './pages/team/mentors/mentors.component';

// Select some icons (use an object, not an array)
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
    AppComponent,
    FooterComponent,
    ShellComponent,
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
    MentorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherModule.pick(icons),
    FontAwesomeModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
