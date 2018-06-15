import { Component, OnInit } from '@angular/core';
import {Router, RouterModule, Routes, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-issueviz',
  templateUrl: './issueviz.component.html',
  styleUrls: ['./issueviz.component.css']
})
export class IssuevizComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
  	private router: Router
  ) { }

ngOnInit() {
	public id = this.route.snapshot.paramMap.get('id')
}

}
