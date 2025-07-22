export interface IInstaImage{
    id: number,
   image: string
}

export type InspirationGalleryProps = {
     item:{
        imageSrc: string
        alt: string
    }[]
}