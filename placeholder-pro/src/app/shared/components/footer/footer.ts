import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  public FooterItems = [
    {
      title: "Company",
      links: ["About Us", "Services", "Contact", "Careers"]
    },
    {
      title: "Services",
      links: ["Web Design", "Development", "Consulting", "Strategy"]
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Ebooks", "Webinars"]
    },
  ];

  public icons = [
    'fa-brands fa-instagram',
    'fa-brands fa-facebook-f',
    'fa-brands fa-twitter',
    'fa-brands fa-linkedin-in'
  ];

}
