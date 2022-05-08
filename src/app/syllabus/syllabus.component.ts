import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  title = "Choose A Syllabus"

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
  }

  /*
  lessons(){
    this.router.navigate(['lessons-option'], {relativeTo:this.route});
  }
  */
}
