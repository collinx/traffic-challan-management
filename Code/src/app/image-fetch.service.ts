import { InlineResponse200 } from './modules/mymodules';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
// import * as OpenalprApi from 'openalpr_api';

@Injectable()
export class ImageFetchService {
api;
imageBytes;
imageFile;
imageUrl;
secretKey = environment.openALPR.secretKey;
country = 'in';
opts = {
  'recognizeVehicle': 1, // {Integer} If set to 1, the vehicle will also be recognized in the image. Extra CreditS
   'returnImage': 1, // {Integer} If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response
  'topn': 10, // {Integer} The number of results you would like to be returned for plate  candidates and vehicle classifications
  'prewarp': '' // {String} Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.
};

searchUrl = 'https://api.openalpr.com/v2/recognize_url?';

  constructor(private http: Http) {

 // this.api = new OpenalprApi;
  }

  fetchImageByte(imageByte) {
    this.api.recognizeBytes(imageByte, this.secretKey, this.country, this.opts, this.callback);
  }

  fetchImageFile(imageFile) {
    this.api.recognizeBytes(imageFile, this.secretKey, this.country, this.opts, this.callback);
  }

  fetchImageUrl(imageUrl) {
    this.api.recognizeBytes(imageUrl, this.secretKey, this.country, this.opts, this.callback);
  }

  getsearchresults(searchquery) {
    const url = this.searchUrl + 'image_url=' + searchquery + '&secret_key=' + environment.openALPR.secretKey
    + '&recognize_vehicle=1&country=in&return_image=0&topn=10';
    return this.http.post(url, { });
  }

  callback() {
    return function(error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
      }
    };
  }

}
