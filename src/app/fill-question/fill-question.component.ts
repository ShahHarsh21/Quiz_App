import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../services/my-services.service';


@Component({
  selector: 'app-fill-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.css']
})
export class FillQuestionComponent implements OnInit {
  show : boolean = true;
  questions: any = [];
  question_count = 0;
  buttontitle: string = "Next"
  stopTimer: any;
  time = 0;
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  seconds = Math.floor((this.ctime % (1000 * 60)) / 1000);
  mintes = Math.floor((this.ctime % (1000 * 60 * 60)) / (1000 * 60));
  formated_sec: any = "00";
  formated_min: any = "00";
  userAnswer = '';
  correctAnswer: any = 0;
  item1: any;
  storeanswer: any = [];
  fill:any;

  constructor(private _api: MyServicesService) { }

  ngOnInit(): void {
    this.timer();
    this._api.GetFillQuestion().subscribe((res: any) => {
      console.log(res);
      this.questions = res;
    })
    this.storeanswer.length = this.questions.length;
  }
  timer() {
    this.stopTimer = setInterval(() => {
      if (this.show == true) {
        this.time++;
        if (this.seconds < 59) {
          this.seconds++;
        } else {
          this.seconds = 0;
          this.mintes++;
        }
      }
      this.formated_sec = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
      this.formated_min = this.mintes < 10 ? `0${this.mintes}` : `${this.mintes}`;
    }, 1000)
  }

  next() {
    console.log(this.fill);
    this.toggleClass(this.item1);
    this.item1 = '';
    if (this.question_count + 1 == this.questions.length) {
      this.show = false;
    }
    this.question_count++;
    if (this.question_count + 1 == this.questions.length) {
      this.buttontitle = "Finish Quiz";
    }
    else {
      this.buttontitle = "Next";
    }
  }

  toggleClass(item?: any) {
    //console.log("Option  = " +item)
    if (item == 1) {
      this.userAnswer = this.questions[this.question_count].options[0];
      if (this.storeanswer.length <= this.questions.length) {
        //console.log("hii");
        this.storeanswer.splice(this.question_count, 1, this.userAnswer);
        this.userAnswer = "";
      }
    }
    else if (item == 2) {
      this.userAnswer = this.questions[this.question_count].options[1];
      if (this.storeanswer.length <= this.questions.length) {
        this.storeanswer.splice(this.question_count, 1, this.userAnswer);
        this.userAnswer = "";
      }
    }
    else if (item == 3) {
      this.userAnswer = this.questions[this.question_count].options[2];
      if (this.storeanswer.length <= this.questions.length) {
        this.storeanswer.splice(this.question_count, 1, this.userAnswer);
        this.userAnswer = "";
      }
    }
    else if (item == 4) {
      this.userAnswer = this.questions[this.question_count].options[3];
      if (this.storeanswer.length <= this.questions.length) {
        this.storeanswer.splice(this.question_count, 1, this.userAnswer);
        this.userAnswer = "";
      }
    }
    else {
      //this.userAnswer = '';
      if (this.storeanswer.length <= this.questions.length) {
        this.storeanswer.splice(this.question_count, 1, this.userAnswer);
        this.userAnswer = "";
      }

    }
    //console.log(this.storeanswer);

    //console.log("Selected Answer = " +this.userAnswer);
    // If selected answer is correct
    if (this.userAnswer == this.questions[this.question_count].answer) {
      this.correctAnswer++;
      console.log(this.correctAnswer);

      //   let options = document.querySelectorAll("div.option");
      //   let indicator = document.querySelector(".answers-indicator div");
      //   for(let i =0; i < options.length; i++) {
      //     options[i].classList.add("already-answered");
      //   }
      // }else{
      //   let options = document.querySelectorAll("div.option");
      //   for(let i =0; i < options.length; i++) {
      //     options[i].classList.add("already-answered");
      //   }
    }
    let indicator = document.querySelectorAll(".answers-idicatior div");
    indicator[this.question_count].classList.add("fill");

  }
  getQuestions(i: any) {

    //console.log(i);
    if (this.question_count + 1 == this.questions.length) {
      this.buttontitle = "Finish Quiz";
    }
    else {
      this.buttontitle = "Next";
    }
    let a = this.storeanswer[i];
    console.log(a);
    this.item1 = i;
    this.question_count = i;
  }

}
