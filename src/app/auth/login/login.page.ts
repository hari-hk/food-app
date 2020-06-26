import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loading: boolean;
  public data: any = {};

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  verify() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.data && this.data.userNameVerified ? this.navCtrl.navigateRoot(['./home']) : this.data.userNameVerified = true;
    }, 2000);
  }

}
