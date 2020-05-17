import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiunbiComponent } from './kiunbi.component';

import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [KiunbiComponent],
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, FlexLayoutModule, MaterialModule],
  exports: [KiunbiComponent],
})
export class KiunbiModule {}
