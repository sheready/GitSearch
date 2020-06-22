import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../service/profile.service';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile: any;
   repos: any;
   username: string;

  constructor(private profileService: ProfileService) {

   }
   findProfile(){
     this.profileService.updateProfile(this.username);
     this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
     this.profileService.getProfileRepos().subscribe(repos => this.repos = repos);

   }

  ngOnInit() {
    this.profileService.updateProfile('sheready');
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);

    this.profileService.getProfileRepos().subscribe(repos => this.repos = repos);
  }

}

