import Hero from '../components/sections/Hero'
import CoreStrengths from '../components/sections/CoreStrengths'
import TechStack from '../components/sections/TechStack'
import SuccessStories from '../components/sections/SuccessStories'

const Home = () => {
  return (
    <div className="pt-0">
      <Hero />
      <CoreStrengths />
      <TechStack />
      <SuccessStories />
      
      {/* Newsletter / CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">準備好開始您的數位轉型了嗎？</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            與我們的技術專家聯繫，為您的企業量身打造專屬解決方案。
          </p>
          <a 
            href="/web02-style2/contact" 
            className="inline-block bg-white text-primary px-10 py-4 rounded-full text-xl font-bold hover:bg-secondary transition-all"
          >
            立即聯繫我們
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
