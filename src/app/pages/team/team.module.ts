import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { MentorsComponent } from './mentors/mentors.component';
import { CoreComponent } from './core/core.component';
import { TeamPageComponent } from './team-page/team-page.component';
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
import { FeatherModule } from 'angular-feather';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FounderComponent } from './founder/founder.component';

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
    MentorsComponent,
    CoreComponent,
    TeamPageComponent,
    FounderComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    FeatherModule.pick(icons),
    FontAwesomeModule,
    SwiperModule,
  ],
})
export class TeamModule {}
