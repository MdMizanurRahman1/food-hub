import React, { useEffect, useState } from 'react';
import CardChef from './CardChef';
import { Container, Row } from 'react-bootstrap';




const Home = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefData(data))

    }, [])
    console.log(chefData);
    return (
        <Container>
            <h3 className='text-center mt-5 mb-3 text-danger' style={{ fontWeight: 'bold' }}>OUR EXPERTS ARE</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefData.map(chef => <CardChef
                        key={chef.id}
                        chef={chef}
                    ></CardChef>)
                }
            </Row>
        </Container>
    );
};

export default Home;