import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  title = "Rewards"

  cards = [
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '1st Place'
    },
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '2nd Place'
    },
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '3rd Place'
    },
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '4th Place'
    },
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '5th Place'
    },
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '6th Place'
    },
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '7th Place'
    },
    {
      companyName: 'Fakery',
      description: '10% discount on clothes',
      img: './assets/fakery.png',
      place: '8th Place'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
