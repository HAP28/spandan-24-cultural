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
    { src: 'assets/SpandanColor.png', alt: 'Spandan 2K24', title: 'Photo 2' },
    // { src: 'assets/Mr.%20and%20Miss%20DIAT/Mr.%20and%20miss%20diat.png', alt: 'Mr DIAT', title: 'Photo 2' },
    { src: 'assets/Essay%20and%20Short%20Story/essay.png', alt: 'Essay competition', title: 'Photo 2' },
    { src: 'assets/Instrumental%20Odyssey/instrumental.png', alt: 'Instrumental Odyssey', title: 'Photo 1' },
    { src: 'assets/Fashion%20Show/fashion_show.png', alt: 'Fashion Show', title: 'Photo 2' },
    { src: 'assets/Quiz%20Competition/quiz.png', alt: 'Quiz', title: 'Photo 2' },
    { src: 'assets/Singing%20Competition/singing.png', alt: 'Singing', title: 'Photo 2' },
    { src: 'assets/Treasure%20Hunt/treasure.png', alt: 'Treasure Hunt', title: 'Photo 2' },
    { src: 'assets/Dance%20Competition/dance.png', alt: 'Dance', title: 'Photo 2' },
    { src: 'assets/Photography/Photography.png', alt: 'Phtography', title: 'Photo 2' },
    { src: 'assets/Rangoli%20and%20painting/rangoli.png', alt: 'Rangoli', title: 'Photo 2' },
    // Add more photos as needed
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    }, 1000); // Change image every 3 seconds
  }
}
