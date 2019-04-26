import {Component, OnInit} from '@angular/core';

import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveRecipes() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipesFromServer();
  }

  onLogout() {
    this.authService.logout();
  }

}
