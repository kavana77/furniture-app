import {InstaImg1, InstaImg2, InstaImg3,InstaImg4,Lamp,Interior,LivingRoom,BrowserBedroom,BrowserDining,BrowserLiving,
  Africanman,Warehouse,EmptyLivingRoom
 } from '../assets/images'
import type {IInstaImage} from "../types/data"

export const InstagramImg: IInstaImage[] =[
    {
        id:1,
        image: InstaImg1
    },
    {
        id:2,
        image: InstaImg2
    },
    {
        id:3,
        image: InstaImg3
    },
    {
        id:4,
        image: InstaImg4
    }
]

export const GalleryImages = [
  {
    imageSrc: LivingRoom,
    alt: "Plant Stand",
  },
  {
    imageSrc: Interior,
    alt: "Bean Bag",
  },
  {
    imageSrc: Lamp,
    alt: "Plant Stand",
  },
];

export const Browse = [
  {
    imageSrc:BrowserDining,
    title: "Dining"
  },
  {
    imageSrc:BrowserLiving,
    title: "Living"
  },
  {
    imageSrc:BrowserBedroom,
    title: "Bedroom"
  }
]

export const StepsData = [
  {
    id:1,
    imageSrc: Africanman,
    title:"Purchase Securely",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:2,
    imageSrc: Warehouse,
    title: "Ships From Warehouse",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id:3,
    imageSrc: EmptyLivingRoom,
    title: "Style Your Room",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]
