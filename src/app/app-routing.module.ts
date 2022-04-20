import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FillQuestionComponent } from './fill-question/fill-question.component';
import { HomeComponent } from './home/home.component';
import { MatchquestionComponent } from './matchquestion/matchquestion.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'question',component:QuestionComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'fillquestion',component:FillQuestionComponent},
  {path:'matchquestion',component:MatchquestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
