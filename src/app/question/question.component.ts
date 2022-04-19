import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../services/my-services.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions : any =[];
  question_count = 0;
  show:boolean = false;
  buttontitle : string = "Next"
  stopTimer : any;
  time = 0;
  dt = new Date(new Date().setTime(0));
  ctime = this.dt.getTime();
  seconds = Math.floor((this.ctime % (1000*60))/1000);
  mintes = Math.floor((this.ctime % (1000*60*60))/(1000*60));
  formated_sec : any = "00";
  formated_min : any = "00"; 
  userAnswer = '';
  correctAnswer : any = 0;
  item1:any;

  constructor(private _api:MyServicesService) { }

  ngOnInit(): void {
    this.timer();
    this._api.GetQuestion().subscribe((res:any)=>{
      console.log(res);
      this.questions = res;
    })
  }
  timer(){
    this.stopTimer = setInterval(()=>{
      this.time++;
      if(this.seconds < 59){
        this.seconds++;
      }else{
        this.seconds = 0;
        this.mintes++;
      }
      this.formated_sec = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`;
      this.formated_min = this.mintes < 10 ? `0${this.mintes}` : `${this.mintes}`;
    },1000)
  }
  next(){
    //console.log(this.item1);
    this.toggleClass(this.item1);
    this.item1='';
    this.question_count++;
    if(this.question_count == this.questions.length - 1){
      this.buttontitle = "Finish Quiz";
    }
  }
  toggleClass(item?: any){
    //console.log("Option  = " +item)
    if(item == 0){
      this.userAnswer = this.questions[this.question_count].options[0];
    }else if(item == 1){
      this.userAnswer = this.questions[this.question_count].options[1];
    }else if(item == 2){
      this.userAnswer = this.questions[this.question_count].options[2];
    }else if(item == 3){
      this.userAnswer = this.questions[this.question_count].options[3];
    } else {}
    console.log("Selected Answer = " +this.userAnswer);
    // If selected answer is correct
    if(this.userAnswer == this.questions[this.question_count].answer){
      this.correctAnswer++;

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
  }
  getQuestions(i:any){
    this.toggleClass(this.item1);
    this.item1='';
    //console.log(i);
    this.question_count=i;
  }


}
