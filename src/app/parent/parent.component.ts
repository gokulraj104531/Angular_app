import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  @Input() child: any;
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
