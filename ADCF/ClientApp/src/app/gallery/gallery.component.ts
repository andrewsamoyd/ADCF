import { Component, OnInit, HostListener } from '@angular/core';
import { LocalizationService } from '../services/localization.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']

})
export class GalleryComponent implements OnInit{
  facebookLink = 'https://www.facebook.com/igor.bilinsky.14';
  linkedinLink = 'https://www.linkedin.com/in/ibilin/';
  dictionary;
  currentHeight = '300px'

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.currentHeight = event.target.innerHeight + 'px';
  }

  constructor(private localizationService: LocalizationService){
    this.currentHeight = window.innerHeight - 150 + 'px';
  }

  ngOnInit(): void {
    this.dictionary = this.localizationService.getDictionary();

    this.galleryOptions = [
      {
        width: '100%',
        height: this.currentHeight,
        thumbnailsColumns: 5,
        imageSize: "contain" ,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewDownload: true,
        previewRotate: true,
        previewZoom: true
      },
      // max-width 1400
      {
        height: this.currentHeight,
        breakpoint: 1400
      },
      // max-width 900
      {
        height: '300px',
        breakpoint: 900,
        thumbnailsColumns: 4,
        imagePercent: 70,
        thumbnailsPercent: 30
      },
      // max-width 500
      {
        height: '350px',
        breakpoint: 500,
        thumbnailsColumns: 3,
        imagePercent: 60,
        thumbnailsPercent: 20
      }
    ];

    this.galleryImages = [
      {
        small: './assets/images/gallery/gallery_image_1.JPG',
        medium: './assets/images/gallery/gallery_image_1.JPG',
        big: './assets/images/gallery/gallery_image_1.JPG'
      },
      {
        small: './assets/images/gallery/gallery_image_2.JPG',
        medium: './assets/images/gallery/gallery_image_2.JPG',
        big: './assets/images/gallery/gallery_image_2.JPG'
      },
      {
        small: './assets/images/gallery/gallery_image_3.JPG',
        medium: './assets/images/gallery/gallery_image_3.JPG',
        big: './assets/images/gallery/gallery_image_3.JPG'
      },
      {
        small: './assets/images/gallery/gallery_image_4.JPG',
        medium: './assets/images/gallery/gallery_image_4.JPG',
        big: './assets/images/gallery/gallery_image_4.JPG'
      },
      {
        small: './assets/images/gallery/gallery_image_5.JPG',
        medium: './assets/images/gallery/gallery_image_5.JPG',
        big: './assets/images/gallery/gallery_image_5.JPG'
      },
      {
        small: './assets/images/gallery/gallery_image_6.JPG',
        medium: './assets/images/gallery/gallery_image_6.JPG',
        big: './assets/images/gallery/gallery_image_6.JPG'
      }, 
    ];
  }

  openFacebook() {
    window.open(this.facebookLink, '_blank');
  }

  openLinkedId() {
    window.open(this.linkedinLink, '_blank');
  }
}
