import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  protected userData: any;
  protected initialPage = 1;
  protected currentPage = 1;
  protected items = [];
  protected loading =  true;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers(this.initialPage).subscribe(
      result=>{
        this.userData = result;
        this.items = Array(this.userData.total_pages).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
        this.loading = false;
      },error=>{
        this.loading = false;
      }
    )    
  }

  private getUserList(pageNumber){
    this.userService.getUsers(pageNumber).subscribe(
      result=>{
        this.userData = result;
      },error=>{

      }
    )
  }
  ngOnChanges(changes) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  private setPage(page: number) {
    this.currentPage = page;
    this.getUserList(page);
  }
}
