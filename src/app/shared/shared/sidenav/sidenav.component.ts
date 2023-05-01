import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isOpened:boolean=false;
  // @ViewChild('expand', { read: NgbTooltip }) expand: any;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    if (this.isOpened) {
      document.getElementById('sideNav')?.style.transition['0.2'];
      document.getElementById('sideNav')?.style.width['55']
      document.getElementById('mainContent')?.style.marginLeft[55];

      // document.getElementById('sideNav').style.transition = '0.2';
      // document.getElementById('sideNav').style.width
      // document.getElementById('mainContent').style.marginLeft = '55px';
      this.isOpened = false;
    } else {
      document.getElementById('sideNav')?.style.width['225'];
      document.getElementById('mainContent')?.style.marginLeft[225];

      // document.getElementById('sideNav').style.width = '225px';
      // document.getElementById('mainContent').style.marginLeft = '225px';
      this.isOpened = true;
    }
  }

  expandPopoverdisable(){
    if(!this.isOpened){
      // this.dashboard.close();this.dashboardTooltip.close();this.create.close();this.IncompleteApllication.close();this.IncompleteTooltip.close();this.rejectedApllication.close();this.rejectedTooltip.close();this.cms.close();this.checkerView.close();this.riskView.close();this.mapping.close();this.mappingTooltip.close();this.inventory.close();this.callTicket.close();this.callTicketTooltip.close();this.reports.close()
    }
  }

}
