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
    { title: 'Mr. and Miss DIAT', date: '22/02/2024', time: 'time', venue: 'venue', coordinator: 'Anuska Dey', contact: '8910581667', url: '../../assets/Mr.%20and%20Miss%20DIAT/Mr.%20and%20miss%20diat.png', regLink: 'https://docs.google.com/forms/d/1heDcZ52TyBtxo02h4nWaUeIGMimQTju1RurEdXvY-aE/viewform?edit_requested=true' },
    { title: 'Fashion Show', date: '22/02/2024', time: 'time', venue: 'CV Raman', coordinator: 'Prachetas P.', contact: '8309727709', url: '../../assets/Fashion%20Show/fashion_show.png', regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScXt0zxVkL-Q9l9Fa-0Cd0F0Rn53t6odukSYdncPvrVB93qUQ/viewform?usp=sf_link' },
    { title: 'Quiz Competition', date: 'date', time: 'time here', venue: 'venue', coordinator: 'Rishabh Rai', contact: '8423344577', url: '../../assets/Quiz%20Competition/quiz.png', regLink: 'https://forms.gle/zCzaEA1rn2UYvUrD8' },
    { title: 'Essay and Short Story', date: 'date', time: 'time here', venue: 'venue', coordinator: ' Chrysolin D', contact: '8056128440', url: '../../assets/Essay%20and%20Short%20Story/essay.png', regLink: 'https://forms.gle/mvY3tPspGpEpgpec9' },
    { title: 'Instrumental Odyssey', date: 'date', time: 'time here', venue: 'CV Raman', coordinator: 'Meet Patel', contact: '8866589159', url: '../../assets/Instrumental%20Odyssey/instrumental.png', regLink: 'https://forms.gle/tZMSxYNm7txGxTMb9' },
    { title: 'Singing Competition', date: 'date', time: 'time here', venue: 'CV Raman', coordinator: 'Sreejani Biswas', contact: '9163135352', url: '../../assets/Singing%20Competition/singing.png', regLink: 'https://forms.gle/tZMSxYNm7txGxTMb9' },
    { title: 'Treasure Hunt', date: 'date', time: 'time here', venue: 'CV Raman', coordinator: 'Falgun Marothia', contact: '9799938940', url: '../../assets/Treasure%20Hunt/treasure.png', regLink: 'https://forms.gle/4n5jvenG8NzX1AT86' },
    { title: 'Dance Competition', date: 'date', time: 'time here', venue: 'CV Raman', coordinator: 'Anamika B', contact: '9446502840', url: '../../assets/Dance%20Competition/dance.png', regLink: 'https://forms.gle/N8PhS6YwXNnBdyYi9' },
    { title: 'Photography', date: 'During Spandan', time: 'Whole day', venue: 'TBD', coordinator: 'Anuska Dey', contact: '8910581667', url: '../../assets/Photography/Photography.png', regLink: 'https://forms.gle/2DQH2PLjTLg2XXZP7' },
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
