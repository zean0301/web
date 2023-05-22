import Header from './Header'
import Background from './Background'
import HeaderSection from './HeaderSection'
import ContentSection from './ContentSection'
import ImageSection from './ImageSection'
import Temp from './Temp'
import Ui from './Ui'
import Uwmi from './Uwmi'
import Footer from './Footer'
import {getComment} from '../api/messageBoard'
import React, { useState, useEffect } from 'react';
export default function Example() {
    const [comment, setComment] = useState([]);

    const commentList = async () => {
        try {
            const res = await getComment();
            setComment(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        commentList();
    }, []);

console.log(comment)
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
                {/* <ValueSection /> */}

                {/* Team section */}
                {/* <TeamSection /> */}

                <p className="text-2xl text-center text-gray-300 mt-20">
                    專案與作品：
                </p>
                {/* CTA section */}
                <Temp />
                <Ui />
                <Uwmi />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}
