import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mybtn',
  standalone: true,
  imports: [],
  templateUrl: './mybtn.component.html',
  styleUrl: './mybtn.component.css'
})
export class MybtnComponent {

  @Input() btnText: string = "";
  @Input() btnType: string = "primary";
  @Input() disabled: boolean = false;
  @Output() onBtnClick = new EventEmitter<any>();

  onMyBtn(value: string="admin") {
    this.onBtnClick.emit(value || null);
  }

}
