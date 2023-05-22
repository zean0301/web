import Header from './components/Header'
import Background from './components/Background'
import Message from './components/Message'
import Footer from './components/Footer'


export default function MessageBoard() {
    return (
        <div className="bg-gray-900">
            {/* Header */}
            <Header />

            <main className="relative isolate">
                {/* Background */}
                <Background />
                <Message />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}
