import CardSection from './components/CardSection/CardSection';
import GuideOffer from './components/GuideOffer/GuideOffer';
import Hero from './components/Hero/Hero';
import Partners from './components/Partners/Partners';
import StepsSection from './components/StepsSection/StepsSection';

export default function Home() {
  return (
    <>
      <Hero />
     <CardSection/>
     <Partners/>
    <StepsSection/>    
    <GuideOffer/>
    </>
  );
}
