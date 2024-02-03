import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  currentImageIndex = 0;
  imageUrls = [
    { src: 'assets/SpandanColor.png', alt: 'Photo 2', title: 'Photo 2' },
    { src: 'assets/Bollywood%20Night/Bollywood_night.png', alt: 'Photo 2', title: 'Photo 2' },
    { src: 'assets/Essay%20and%20Short%20Story/essay.png', alt: 'Photo 2', title: 'Photo 2' },
    { src: 'assets/Instrumental%20Odyssey/instrumental.png', alt: 'Photo 1', title: 'Photo 1' },
    { src: 'assets/Fashion%20Show/fashion_show.png', alt: 'Photo 2', title: 'Photo 2' },
    { src: 'assets/Quiz/quiz.png', alt: 'Photo 2', title: 'Photo 2' },
    { src: 'assets/Singing%20Competition/singing.png', alt: 'Photo 2', title: 'Photo 2' },
    // Add more photos as needed
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    }, 3000); // Change image every 3 seconds
  }
}
