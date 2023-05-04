import React, { useEffect, useState } from 'react';
import CardChef from './CardChef';
import { Container, Row } from 'react-bootstrap';
import TopRated from './TopRated/TopRated';
import Refreshment from './TopRated/Refreshment';




const Home = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('https://thai-food-hubs-server-mdmizanurrahman1.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefData(data))

    }, [])
    console.log(chefData);
    return (
        <Container className='my-5'>
            <TopRated></TopRated>
            <h3 className='text-center mt-5 mb-1 text-danger' style={{ fontWeight: 'bold' }}>Meet Our Qualified Chefs</h3>
            <p className='text-center text-muted mb-5'>Who are consistently seeking someting new.</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefData.map(chef => <CardChef
                        key={chef.id}
                        chef={chef}
                    ></CardChef>)
                }
            </Row>
            <Refreshment></Refreshment>
        </Container>
    );
};

export default Home;