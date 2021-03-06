import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {LeftSidebarComponent} from './components/layout/left-sidebar/left-sidebar.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {CryptoCurrencyComponent} from '@core/components/modals/crypto-currency/crypto-currency.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PurchaseBitsComponent} from '@core/components/modals/purchase-bits/purchase-bits.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    LeftSidebarComponent,
    CryptoCurrencyComponent,
    PurchaseBitsComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    LeftSidebarComponent,
    PurchaseBitsComponent
  ],
  entryComponents: [
    // CryptoCurrencyComponent
  ]
})
export class CoreModule {
}
