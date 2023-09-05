import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
tagForm !: FormGroup
tagList: any [] = []
ngOnInit(): void {
  this.AssetFormInit();

}
constructor( private formBuilder: FormBuilder){} 



AssetFormInit(){
  this.tagForm = this.formBuilder.group({
    CustomerName: new FormControl('',[Validators.required])
  })

}

AddName(){
console.log(this.tagForm)
if(this.tagForm.invalid){
  return
}
this.tagList.push(this.tagForm.controls['CustomerName'].value);
this.tagForm.reset();
}
}