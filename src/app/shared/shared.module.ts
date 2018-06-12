import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    DropdownDirective,
    MessageComponent
  ],
  exports: [
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {}
