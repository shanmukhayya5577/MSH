import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';
import * as country from "../../../assets/countryName/country.json"
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about-start-up',
  templateUrl: './about-start-up.component.html',
  styleUrls: ['./about-start-up.component.css']
})
export class AboutStartUpComponent implements OnInit {
  imagePathArray = [
    '/assets/images/backgroundImage1.jpg',
    '/assets/images/backgroundImage2.png',
    '/assets/images/backgroundImage3.png',
  ];
  get imagePathArrays():Array<string>{
    return this.imagePathArray
  }

  @ViewChild('stepper') private mystepper!: MatStepper;
  @ViewChild('scrollTop', { read: ElementRef }) private scrollTop!: ElementRef;

  imagePath: any;
  pathName:any;
  StepIndex = 0;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  stepLabelList = ['1','2','3','4'];
  aboutStartupForm!:FormGroup;
  contactInfoForm!:FormGroup;
  teamCollabrationForm!:FormGroup;
  socailAccountsForm!:FormGroup;
  getFile:any= File;
  getFileData:any;
  binaryString:any
  base64textString:any
  teamCollabrationList=[];
  country = (country as any ).default?.Country;

  options: string[] = ['Art', 'Photography','FrontEnd', 'BanckEnd', 'FullStack'];
  filteredOptions!: Observable<string[]>

  options1: string[] = ['TIDE Business Incubetor','IIT Rockers','NIT'];
  filteredOptions1!: Observable<string[]>

  options2: string[] = ['Photography','Videography','design','Modal'];
  filteredOptions2!: Observable<string[]>

  options3: string[] = ['India','srilanka','America'];
  filteredOptions3!: Observable<string[]>

  options4: string[] = ['karnataka','Tamilnadu','Maharastara','Telangana','Kerala'];
  filteredOptions4!: Observable<string[]>

  constructor(
    private fb:FormBuilder,
    private service:ServiceService,
    private router:Router,
    private domSanitizer: DomSanitizer,
    private toast:ToastrService
    ) {
     }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.imagePathArrays.length);
    this.imagePath = this.imagePathArrays[random];

    this.aboutStartupFormData();
    this.contactInfoFormData();
    this.socailAccountsFormData();
    this.teamCollabrationForm = this.fb.group({});
    this.teamCollabrationForm?.addControl('team_collabration',this.fb.array([this.teamCollabrationFormData()]));

    this.filteredOptions = this.aboutStartupForm.controls['domain'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredOptions1 = this.aboutStartupForm.controls['incubator_name'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter1(value || '')),
    );

    this.filteredOptions2 = this.aboutStartupForm.controls['sector'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value || '')),
    );

    this.filteredOptions3 = this.contactInfoForm.controls['contact_country'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter3(value || '')),
    );

    this.filteredOptions4 = this.contactInfoForm.controls['contact_state'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter4(value || '')),
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter1(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options1.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options2.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter3(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options3.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter4(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options4.filter(option => option.toLowerCase().includes(filterValue));
  }

  aboutStartupFormData(){
    this.aboutStartupForm = this.fb.group({
      startup_name:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
      brief_startup:['',[Validators.required]],
      stage:['',[Validators.required]],
      website_url:[''],
      fund_bootstarp:['',[Validators.required]],
      CIN_Number:[''],
      doc_file:[''],
      domain:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
      incubator_name:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
      sector:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
    })
  }

  contactInfoFormData(){
    this.contactInfoForm = this.fb.group({
      contact_first_name:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
      contact_mobile: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      contact_email_id:['',[Validators.required, Validators.pattern('[[a-zA-Z0-9+_.-.]+@+[a-zA-Z0-9]+[.]+[.a-z]{2,7}')]],
      contact_country:['',[Validators.required]],
      contact_city:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
      contact_last_name:['',[Validators.pattern(/^[A-Za-z -]*$/)]],
      contact_mobile2:['',[Validators.pattern('^[6-9][0-9]{9}$')]],
      contact_email_id2:['',[Validators.pattern('[[a-zA-Z0-9+_.-.]+@+[a-zA-Z0-9]+[.]+[.a-z]{2,7}')]],
      contact_state:['',[Validators.required]],
      contact_zip:['',[Validators.required]]
    })
  }

  teamCollabrationFormData():FormGroup{
   return this.fb.group({
    teamcollabartin_team_name:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
    teamcollabartin_designation:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
    teamcollabartin_experience:['',[Validators.required,Validators.pattern(/[0-9A-Za-z]/)]],
    teamcollabartin_email:['',[Validators.required, Validators.pattern('[[a-zA-Z0-9+_.-.]+@+[a-zA-Z0-9]+[.]+[.a-z]{2,7}')]],
    teamcollabartin_linkedin:['',[Validators.required,Validators.pattern(/^[A-Za-z -]*$/)]],
    teamcollabartin_mobile:['',[Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]]
   })
  }

  get teamCollabrationData(){
    return this.teamCollabrationForm.get('team_collabration') as FormArray;
  }

  addTeamCollabrationData(){
    this.teamCollabrationData.push(this.teamCollabrationFormData());
    this.teamCollabrationList.push()
  }

  deleteTeamCollbartion(i:number){
    this.teamCollabrationData.removeAt(i);
    console.log(this.teamCollabrationData.removeAt(i));
    this.teamCollabrationList.splice(i,1)
    console.log(this.teamCollabrationList.splice(i,1));

  }

  socailAccountsFormData(){
    this.socailAccountsForm = this.fb.group({
      facebook_url:[''],
      twitter_url:[''],
      LinkedIn_url:[''],
      Instagram_url:[''],
      Koo_url:[''],
      Youtube_url:['']
    })
  }
  changePathName(event: StepperSelectionEvent) {
    this.pathName = event.selectedStep.label;
    this.StepIndex = event.selectedIndex;
  }
  validateFormGroups(index: number) {
    switch (index) {
      case 1:
        this.aboutStartupForm.markAllAsTouched();
        break;
      case 2:
        this.contactInfoForm.markAllAsTouched();
        break;
      case 3:
        this.teamCollabrationForm.markAllAsTouched();
        break;
        case 4 :
          this.socailAccountsForm.markAllAsTouched();
          break
    }

  }
  onStepperInteracted() {
    this.validateFormGroups(this.StepIndex + 1);
  }

  goBack() {
    this.mystepper.previous();
    this.scrollTop.nativeElement.children[0].children[1].scrollTop = 0;
  }

  goForward(index: number) {
    this.mystepper.selectedIndex = index;
    this.scrollTop.nativeElement.children[0].children[1].scrollTop = 0;
  }

  submit(){
    // this.service.onBoardingMentor.
    this.mentorOnboarding();
    this.router.navigate(['startsup/startup'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mentorOnboarding(){
    const formData={
      startup_name:this.aboutStartupForm?.get('startup_name')?.value,
      brief_startup:this.aboutStartupForm?.get('brief_startup')?.value,
      stage:this.aboutStartupForm?.get('stage')?.value,
      website_url:this.aboutStartupForm?.get('website_url')?.value,
      fund_bootstarp:this.aboutStartupForm?.get('fund_bootstarp')?.value,
      CIN_Number:this.aboutStartupForm?.get('CIN_Number')?.value,
      domain:this.aboutStartupForm?.get('domain')?.value,
      doc_file:this.aboutStartupForm?.get('doc_file')?.value,
      incubator_name:this.aboutStartupForm?.get('incubator_name')?.value,
      sector:this.aboutStartupForm?.get('sector')?.value,
      contact_first_name:this.contactInfoForm?.get('contact_first_name')?.value,
      contact_mobile:this.contactInfoForm?.get('contact_mobile')?.value,
      contact_email_id:this.contactInfoForm?.get('contact_email_id')?.value,
      contact_country:this.contactInfoForm?.get('contact_country')?.value,
      contact_city:this.contactInfoForm?.get('contact_city')?.value,
      contact_last_name:this.contactInfoForm?.get('contact_last_name')?.value,
      contact_mobile2:this.contactInfoForm?.get('contact_mobile2')?.value,
      contact_email_id2:this.contactInfoForm?.get('contact_email_id2')?.value,
      contact_state:this.contactInfoForm?.get('contact_state')?.value,
      contact_zip:this.contactInfoForm?.get('contact_zip')?.value,
      facebook_url:this.socailAccountsForm?.get('facebook_url')?.value,
      twitter_url:this.socailAccountsForm?.get('twitter_url')?.value,
      LinkedIn_url:this.socailAccountsForm?.get('LinkedIn_url')?.value,
      Instagram_url:this.socailAccountsForm?.get('Instagram_url')?.value,
      Koo_url:this.socailAccountsForm?.get('Koo_url')?.value,
      Youtube_url:this.socailAccountsForm?.get('Youtube_url')?.value,
      teamcollabartin_team_name:this.teamCollabrationData?.get('teamcollabartin_team_name')?.value,
      teamcollabartin_designation:this.teamCollabrationData?.get('teamcollabartin_designation')?.value,
      teamcollabartin_experience:this.teamCollabrationData?.get('teamcollabartin_experience')?.value,
      teamcollabartin_email:this.teamCollabrationData?.get('teamcollabartin_email')?.value,
      teamcollabartin_linkedin:this.teamCollabrationData?.get('teamcollabartin_linkedin')?.value,
      teamcollabartin_mobile:this.teamCollabrationData?.get('teamcollabartin_mobile')?.value
    }
    this.service.onBoardingMentor(formData).subscribe(res=>{
      console.log(res);
    })
  }

  incompleteFormSubmission(i:any) {
    console.log(i, 'index value');

    if(this.aboutStartupForm?.valid && i===1){
      this.goForward(i);
      // this.mentorOnboarding(i)
    }
     else if(this.aboutStartupForm?.invalid && i===1){
      this.validateFormGroups(i);
    }
    else if(this.contactInfoForm?.valid && i===2){
      this.goForward(i);
      // this.mentorOnboarding(i)
    } else if(this.contactInfoForm?.invalid && i===2){
      this.validateFormGroups(i);
    }
    else if(this.teamCollabrationForm?.valid && i===3){
      this.goForward(i);
      // this.mentorOnboarding(i)
    } else if(this.teamCollabrationForm?.invalid && i===3){
      this.validateFormGroups(i);
    }
    if(i===4){
      this.mentorOnboarding();
    }
  }

  sanitize(fileBase64:any): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(fileBase64);
  }

  // selectFile(event:any){
  //   this.getFile = event.target.files;
  //   console.log(this.getFile,'this.getFile');
  //   this.getFileData = this.getFile[0];
  //   console.log(this.getFileData,'this.getFileData');

  //   if(this.getFile && this.getFileData){
  //     var reader = new FileReader();
  //     reader.onload =this._handleReaderLoaded.bind(this);
  //     reader.readAsBinaryString(this.getFileData);
  //   }
  // }

  // _handleReaderLoaded(readerEvt:any) {
  //   this.binaryString = readerEvt.target.result;
  //          this.base64textString= `${'data:image/png;base64'+btoa(this.binaryString)}`;
  //          console.log(`${'data:image/png;base64'+btoa(this.binaryString)}`);
  //  }

  selectFile(event:any){
    let file = event.target.files[0];
    console.log(file);
    if(file?.size < 2000000){
      let reader = new FileReader();
      if(event.target.files && event.target.files[0]){
        reader.readAsDataURL(file);
        reader.onload= () =>{
          this.getFile = reader.result;

          this.aboutStartupForm?.get('doc_file')?.patchValue({
            file: reader.result
          })
        }
      }
    } else if(file.name.toString().includes('.pdf')){
      this.toast.warning('Only  PNG/JPEG/JPG Will Upload')
    } else{
      this.toast.warning('Please Choose Below 2MB')
    }

  }

  handleAlphaChar(event:any) {
    if (
      (event.charCode > 32 && event.charCode < 48) ||
      (event.charCode > 57 && event.charCode < 127)
    ) {
      event.preventDefault();
    }
  }
}
