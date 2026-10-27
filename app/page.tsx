import './home.scss'
import Image from 'next/image'
import HomeContent from './HomeContent'
import { Metadata } from 'next'
import runOption from './runOption'

export const metadata: Metadata = {
  title: `Davanjit Sandhu's Website Home Page`,
  description: 'Includes and image of me and links to my various profiles.',
}

export default function Home(){

  const homeImageSrc = runOption("/background-image.jpg")

  return(
    <div className="home-page bg-slate-200">
      <div className="home-content">
        {/*main image on the home screen, uses the next/image for better optimization*/}
        <div className="home-image relative outline outline-slate-200" aria-label="picture of me, Davanjit Sandhu">
          <Image
            src={homeImageSrc}
            alt="A picture of Davanjit Sandhu"
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..."
            sizes="100%"
          />
        </div>
      </div>
      {/*buttons that link to various profiles*/}
      <HomeContent />
    </div>
  )
}