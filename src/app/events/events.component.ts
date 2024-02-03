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
    { title: 'Bollywood Night', date: '22/02/2024', time: 'time', venue: 'time', coordinator: 'Anuska Dey', contact: '8910581667', url: '../../assets/Bollywood%20Night/Bollywood_night.png', regLink: '' },
    { title: 'Fashion Show', date: '22/02/2024', time: 'time', venue: 'CV Raman', coordinator: 'Prachetas P.', contact: '8309727709', url: '../../assets/Fashion%20Show/fashion_show.png', regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScXt0zxVkL-Q9l9Fa-0Cd0F0Rn53t6odukSYdncPvrVB93qUQ/viewform?usp=sf_link' },
    { title: 'Quiz', date: 'date', time: 'time here', venue: 'time', coordinator: 'Rishabh Rai', contact: '8423344577', url: '../../assets/Quiz/quiz.png', regLink: 'https://forms.gle/zCzaEA1rn2UYvUrD8' },
    { title: 'Essay and Short Story', date: 'date', time: 'time here', venue: 'time', coordinator: ' Chrysolin D', contact: '8056128440', url: '../../assets/Essay%20and%20Short%20Story/essay.png', regLink: 'https://forms.gle/mvY3tPspGpEpgpec9' },
    { title: 'Instrumental Odyssey', date: 'date', time: 'time here', venue: 'CV Raman', coordinator: 'Meet Patel,', contact: '8866589159', url: '../../assets/Instrumental%20Odyssey/instrumental.png', regLink: 'https://forms.gle/tZMSxYNm7txGxTMb9' },
    { title: 'Singing Competition', date: 'date', time: 'time here', venue: 'CV Raman', coordinator: 'Sreejani Biswas', contact: '9163135352', url: '../../assets/Singing%20Competition/singing.png', regLink: 'https://forms.gle/tZMSxYNm7txGxTMb9' },
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
