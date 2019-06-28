import { Directive, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isDropdownOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.isDropdownOpen = false;
  }

  @HostListener('click') dropdownClick() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
