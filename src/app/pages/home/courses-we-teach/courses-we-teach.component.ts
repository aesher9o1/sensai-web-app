import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';
import { subject } from '../subject';

@Component({
  selector: 'app-courses-we-teach',
  templateUrl: './courses-we-teach.component.html',
  styleUrls: ['./courses-we-teach.component.scss'],
})
export class CoursesWeTeachComponent implements OnInit {
  beginner = [
    {
      name: 'Python',
      lectures: '21',
      features: [
        'Easy syntax',
        'Learn from scratch',
        'Create a live project',
        'Create a base for several advanced skills',
      ],
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#00a190',
      animation: 'fade-up',
      class: 'features-beg',
      button: 'btn-success',
      readMore: false,
      aboutCourse:
        'From installation to basic key concepts, learn Python for its infinite uses in advance learning. This course includes Introduction to Python, Setup, Operators, Loops, Lists, Tuples, Dictionaries, Sets, Sorting, Searching and all other basic Python key concepts till Functions.',
      courseHandsOn: '13',
      key: 'python',
      level: '1',
      project: 'Calculator and String Manipulation',
    },
    {
      name: 'C++',
      lectures: '18',
      features: [
        'Learn from the start',
        'Equips you with key concepts of C++',
        'Project and Exam to test skills gained',
        'Most efficient programming language',
      ],
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#00a190',
      animation: 'fade-up',
      class: 'features-beg',
      button: 'btn-success',
      readMore: false,
      aboutCourse:
        'The perfect course to start your coding journey. The course covers CBSE Syllabus, starting with what is programming and why it is important. The course further includes learning the Syntax, Operators, Conditional Structures, Loops, 1-D Array, Pointers, Functions etc. with simultaneous Hands-On learning.',
      courseHandsOn: '8',
      key: 'c-plus-plus',
      level: '1',
      project: 'Command Line Overall Program',
    },
    {
      name: 'IoT',
      lectures: '10',
      features: [
        'Learn Arduino from scratch',
        'Create your own Bluetooth Car',
        'Introduction to C Programming',
        'Design, Code, and Build IoT products',
      ],
      beforePrice: 12800,
      afterPrice: 9600,
      bg: '#00a190',
      animation: 'fade-up',
      class: 'features-beg',
      button: 'btn-success',
      readMore: false,
      key: 'IoT',
      level: '1',
      aboutCourse:
        'This course is a walk-through of all basic requirements in the process of learning Internet of Things to create your own Bluetooth Control Car. The course includes introduction to IoT concept, familiarisation with the kit, learning Arduino and C programming basics, Introduction to Breadboard and Blink LED program and a lot more.',
      courseHandsOn: '8',
      project: 'A Bluetooth Control Car',
    },
  ];
  intermediate = [
    {
      name: 'Python',
      lectures: '19',
      features: [
        'Revise basic concepts',
        'Advance knowledge of libraries',
        'Crucial for Data Science Enthusiasts',
        'Prerequisites: Knowledge of Basic Python',
      ],
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#feab47',
      animation: 'fade-up',
      class: 'features-int',
      button: 'btn-warning',
      readMore: false,
      aboutCourse:
        'After brushing up the basic skills in the first lecture, this course will take you to advanced Python and its applications. The curriculum continues from the basic starting with recursion and including OOPs concepts, Pandas, NumPy and other libraries with a touch of Data Science introduction, Data Visualisation with PyPlot and Web Scraping. With a hands-on project, exam and basics of Data Science, this course will form a base for your Data Science learning.',
      courseHandsOn: '9',
      key: 'python',
      level: '2',
      project: 'Sentiment Analysis',
    },
    {
      name: 'C++',
      lectures: '18',
      features: [
        'Create a proper project',
        'Advanced OOPs Concepts',
        'Interactive Hands-On learning',
        'Basic C++ knowledge required',
      ],
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#feab47',
      animation: 'fade-up',
      class: 'features-int',
      button: 'btn-warning',
      readMore: false,
      aboutCourse:
        'Recursion, Two Dimensional Arrays, Errors and Exceptions, Object Oriented Concepts and Programming with Inheritence and Polymorphism. File Handling and a Proper Project with assessment.',
      courseHandsOn: '9',
      key: 'c-plus-plus',
      level: '2',
      project: 'Railway Management System',
    },
    {
      name: 'Mobile App Dev',
      lectures: '32',
      features: [
        'Basics of Dart',
        'Learn from scratch',
        'Create a To-Do List App',
        'Application Development with Flutter',
      ],
      beforePrice: 17000,
      afterPrice: 13500,
      bg: '#feab47',
      animation: 'fade-up',
      class: 'features-int',
      button: 'btn-warning',
      readMore: false,
      key: 'flutter',
      level: '2',
      aboutCourse:
        'A guide to Dart programming for Flutter app development. This course takes you through installation and setup of Flutter and Dart in your computer as a first step. The curriculum includes introduction to Dart, Basic data types, Operators, Arrays, JSON, Conditions, Loops, Strings, Functions, Searching Algorithms, Errors and Exceptions.',
      courseHandsOn: '18',
      project: 'A To-Do List Mobile Application',
    },
  ];
  special = [
    {
      name: 'Machine Learning',
      lectures: '20',
      features: [
        'Step in to Data Science & AI',
        'Extensive Hands on Practice',
        'Projects for experiential learning',
        'Prerequisites: Python Programming',
      ],
      beforePrice: 12800,
      afterPrice: 9600,
      bg: '#dc0065',
      animation: 'fade-up',
      class: 'features-sp',
      button: 'btn-danger',
      readMore: false,
      key: 'machine-learning',
      level: '3',
      aboutCourse:
        'This course is a structured program with expert guidance to prepare you for building real-life projects. Starting from absolute basics this course contains Data Science and ML introduction and walks you through setup and working of Anaconda and Spyder. The course includes Data Visualisation with PyPlot, NumPy, Pandas, Linear Regression, Logistic Regression,  Regularisation, Decision Tree, Naïve Bayes, K-NN, K-Means and a Kaggle project simultaneously with hands-on practice of every topic.',
      courseHandsOn: '14',
      project: 'Multiple Machine Learning Solutions',
    },
    {
      name: 'Solidworks',
      lectures: '24',
      features: [
        'Industrial way of design',
        'Learn from absolute basics',
        'Extensive Hands-On Training',
        'Design and Optimize your own products',
      ],
      beforePrice: 12800,
      afterPrice: 9600,
      bg: '#dc0065',
      animation: 'fade-up',
      class: 'features-sp',
      button: 'btn-danger',
      readMore: false,
      key: 'solidworks',
      level: '3',
      aboutCourse:
        'This course will take you from basics to Solidworks Pro. The course includes learning the very productive 3D CAD software tool with its integrated analytical tools and design automation to help stimulate physical behaviour. During this course you will learn in-depth about the sketcher, part modelling, surfacing, sheet metal, render tools, weldments, assembly and a lot more.',
      courseHandsOn: '18',
      project: 'Multiple Product/Machine Designs',
    },
    {
      name: 'Mobile App Dev',
      lectures: '16',
      features: [
        'Complete Flutter Guide',
        'Prerequisites: Basics of Dart',
        'Create a E-commerce Application',
        'Create Apps for Android as well as iOS',
      ],
      beforePrice: 9600,
      afterPrice: 7200,
      bg: '#dc0065',
      animation: 'fade-up',
      class: 'features-sp',
      button: 'btn-danger',
      readMore: false,
      key: 'flutter',
      level: '3',
      aboutCourse:
        'Start developing mobile apps for both Android and iOS with single code base. Increase your knowledge of Dart with OOPs concepts and setup an E-Commerce project. This course also teaches integrating API and Database, adding Redux, Models, app styling, JSON, media query, hero transitions, building user cart, product checkout and a lot more which will help you create a full E-Commerce application by the end of the course.',
      courseHandsOn: '12',
      project: 'Your Own E-Commerce Application',
    },
  ];

  beginnerShow: boolean = true;
  intermediateShow: boolean = false;
  specialisationShow: boolean = false;
  longAarrowAltRight = faLongArrowAltRight;
  visibleCourse = this.beginner;
  showDetails: boolean = false;
  todaysDate: string = null;
  fullMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  constructor(
    private scrollToService: ScrollToService,
    private router: Router
  ) {
    let date = new Date();
    let month = this.fullMonth[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    this.todaysDate = `${month} ${day}, ${year}`;
  }
  ngOnInit(): void {}
  clickOnBeginner() {
    this.visibleCourse = this.beginner;
  }
  clickOnIntermediate() {
    this.visibleCourse = this.intermediate;
  }
  clickOnSpec() {
    this.visibleCourse = this.special;
  }
  clickOnReadMore(i) {
    this.visibleCourse[i].readMore = !this.visibleCourse[i].readMore;
  }

  offerCalculator(finalPrice: number, initialPrice: number) {
    return `${Math.ceil(
      ((finalPrice - initialPrice) / finalPrice) * 100
    )}% Off`;
  }
  scrollToElement(target: string, key: string[]): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToService.scrollTo({
          target,
          offset: -300,
        });
      }, 0);
    });
    let level =
      key[1] == '1'
        ? 'Beginner'
        : key[1] == '2'
        ? 'Intermediate'
        : 'Specialisation';
    subject.next([key[0], level, key[2]]);
  }
}
