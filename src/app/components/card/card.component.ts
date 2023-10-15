import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input()
	gameCover: string = '';
	@Input()
	gameLabel: string = '';
	@Input()
	gameType: string = 'Digial PS5';
	@Input()
	gamePrice: string = 'R$ 300,00';

	constructor() {}
	ngOnInit(): void {}
}
