'use client';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import { Container, Col, Row } from 'react-bootstrap';

export default function LandingPage() {
    return (
        // <section>
        //     <Container>
        //     <Row className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
        //         <Col>
        //             <h1 className="mt-2 text-blue-800 text-2xl leading-8 font-extrabold sm:text-6xl text-left">
        //                 Boundless Bazaar
        //             </h1>
        //         </Col>
        //         <Col>
        //             <h3 className="mt-2 text-green-700 text-2xl leading-8 font-extrabold sm:text-4xl text-left">
        //                 Shop without limits.
        //             </h3>
        //         </Col>
        //         <Col>
        //             <Image src="/BB_icon.png" alt="" width={200} height={200} />
        //         </Col>
        //     </Row>
        //     </Container>
        // </section>
        <div>
            <Row className="max-w-7xl mx-auto px-20 flex">
                 <Col className='pt-20 pr-80'>
                     <h1 className="sm:text-8xl text-blue-800 font-extrabold text-left">
                         SHOP
                     </h1>
                     <h1 className="sm:text-8xl mt-2 text-blue-800 font-extrabold text-left">
                         WITHOUT
                     </h1>
                     <h1 className="sm:text-8xl mt-2 text-blue-800 font-extrabold text-left">
                         LIMITS
                     </h1>
                     <h3 className="sm:text-2xl mt-2 text-green-700 font-semibold text-left">
                         Your all in one marketplace for global purchases.
                     </h3>
                 </Col>
                 <Col className='pt-20'>
                     <Image src="/trolley.png" alt="BB Icon 1" className='pt-6' width={1000} height={1000} />
                 </Col>
             </Row>
        </div>
    );
}
