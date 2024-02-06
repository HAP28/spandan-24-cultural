import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  constructor(private router: Router) { }
  members: { title: string, date: string, time: string, venue: string, coordinator: string, contact: string, url: string, regLink: string }[] = [
    { title: 'Mr. and Miss DIAT', date: '22/02/2024', time: 'time TBD', venue: 'Main Ground', coordinator: 'Anuska Dey', contact: '8910581667', url: '../../assets/Mr.%20and%20Miss%20DIAT/Mr.%20and%20miss%20diat.png', regLink: 'https://docs.google.com/forms/d/1heDcZ52TyBtxo02h4nWaUeIGMimQTju1RurEdXvY-aE/viewform?edit_requested=true' },
    { title: 'Fashion Show', date: '22/02/2024', time: 'time TBD', venue: ' Main Ground', coordinator: 'Prachetas P.', contact: '8309727709', url: '../../assets/Fashion%20Show/fashion_show.png', regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScXt0zxVkL-Q9l9Fa-0Cd0F0Rn53t6odukSYdncPvrVB93qUQ/viewform?usp=sf_link' },
    { title: 'Quiz Competition', date: 'date TBD', time: 'time TBD', venue: 'C V Raman', coordinator: 'Rishabh Rai', contact: '8423344577', url: '../../assets/Quiz%20Competition/quiz.png', regLink: 'https://forms.gle/zCzaEA1rn2UYvUrD8' },
    { title: 'Essay and Short Story', date: 'date TBD', time: 'time TBD', venue: 'C V Raman', coordinator: ' Chrysolin D', contact: '8056128440', url: '../../assets/Essay%20and%20Short%20Story/essay.png', regLink: 'https://forms.gle/mvY3tPspGpEpgpec9' },
    { title: 'Instrumental Odyssey', date: 'date TBD', time: 'time TBD', venue: 'C V Raman', coordinator: 'Meet Patel', contact: '8866589159', url: '../../assets/Instrumental%20Odyssey/instrumental.png', regLink: 'https://forms.gle/tZMSxYNm7txGxTMb9' },
    { title: 'Singing Competition', date: 'date TBD', time: 'time TBD', venue: 'C V Raman', coordinator: 'Sreejani Biswas', contact: '9163135352', url: '../../assets/Singing%20Competition/singing.png', regLink: 'https://forms.gle/tZMSxYNm7txGxTMb9' },
    { title: 'Treasure Hunt', date: 'date TBD', time: 'time TBD', venue: 'C V Raman', coordinator: 'Falgun Marothia', contact: '9799938940', url: '../../assets/Treasure%20Hunt/treasure.png', regLink: 'https://forms.gle/4n5jvenG8NzX1AT86' },
    { title: 'Dance Competition', date: 'date TBD', time: 'time TBD', venue: 'C V Raman', coordinator: 'Anamika B', contact: '9446502840', url: '../../assets/Dance%20Competition/dance.png', regLink: 'https://forms.gle/N8PhS6YwXNnBdyYi9' },
    { title: 'Photography', date: 'During Spandan', time: 'Whole day', venue: 'Whole campus', coordinator: 'Anuska Dey', contact: '8910581667', url: '../../assets/Photography/Photography.png', regLink: 'https://forms.gle/2DQH2PLjTLg2XXZP7' },
    { title: 'Rangoli and painting', date: 'date TBD', time: 'time TBD', venue: 'Ganga Hostel', coordinator: 'Pragati Beral', contact: '7507089068', url: '../../assets/Rangoli%20and%20painting/rangoli.png', regLink: 'https://forms.gle/nWMLAdxXp1ncrt727' },
    { title: 'Antakshari', date: 'date TBD', time: 'time TBD', venue: 'C V Raman', coordinator: 'Sanchit Verma', contact: '8077450264', url: '../../assets/Antakshari/antakshari.png', regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScyfspPYSsRz_DH-6ULN8rO27QFuWECuWD9KpqbGNDbL0q1rw/viewform?usp=sf_link' },
    { title: 'Flashmob', date: 'date TBD', time: 'time TBD', venue: 'Basketball court', coordinator: 'Tharikha Joseph', contact: '6385209215', url: '../../assets/Flashmob/flashmob.png', regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSebvZLb4loaRILo2FnRU3leM_iPueedIOEh8xdhtGm4PHaPlw/viewform?vc=0&c=0&w=1&flr=0' },
  ];

  downloadMyFile(title: string) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/' + title + '/' + title + '.pdf');
    link.setAttribute('download', title + '.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  regLink(i: number) {
    // console.log(i)
    window.open(this.members[i].regLink, '_blank');
  }
}
