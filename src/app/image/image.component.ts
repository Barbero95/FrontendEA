import { Component, OnInit } from '@angular/core';
import { FrontendService }  from '../frontend.service';
import { Location } from '@angular/common';
import { HttpClientModule, HttpClient, HttpEventType } from '@angular/common/http';
import { Foto } from '../foto';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  selectedFile: File = null;
  //foto: Foto;
  foto: File;
  imagePath: string = "../fotos/pitufo.png";
  

  constructor(    
    private frontendService: FrontendService,
    private location: Location,
    private http: HttpClient
    ) { }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  onUpload(){
    const fd = new FormData();
    fd.append('avatar', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3000/imgs',fd,{
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      
      if(event.type === HttpEventType.UploadProgress){
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total) * 100 + '%');
      } else if (event.type === HttpEventType.Response ){
        console.log(event);
      }
      
      //console.log(event);
      //this.goBack();});
    });
    
  }

  ngOnInit() {
    //this.foto = {_id:0, avatar:"",__v:0};
    
  }
  goBack(): void {
    this.location.back();
  }
  goGet(): void{
    //this.frontendService.getAvatar("5be69d098bd7c664808b7f32").subscribe(obj => this.foto = obj);
  }

}
