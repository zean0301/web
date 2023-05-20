import Header from './Header'
import Background from './Background'
import HeaderSection from './HeaderSection'
import ContentSection from './ContentSection'
import ImageSection from './ImageSection'
import ValueSection from './ValuesSection'
import TeamSection from './TeamSection'
import CTASection from './CTASection'
import Footer from './Footer'


export default function Example() {
    return (
        <div className="bg-gray-900">
            {/* Header */}
            <Header />

            <main className="relative isolate">
                {/* Background */}
                <Background />

                {/* Header section */}
                <HeaderSection />

                {/* Content section */}
                <ContentSection />

                {/* Image section */}
                <ImageSection />

                {/* Values section */}
                <ValueSection />

                {/* Team section */}
                <TeamSection />

                {/* CTA section */}
                <CTASection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}
