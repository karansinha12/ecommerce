import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/layouts";

const Home = () => {
  return (
    <>
      <Layout>
        <Jumbotron className="text-center" style={{ margin: "5rem" }}>
          <h1>Welcome to Admin dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            doloribus doloremque sunt quibusdam illo tempora iure ratione
            distinctio assumenda, tenetur, dolor enim voluptatum blanditiis
            animi voluptatibus, sint omnis ad quae!
          </p>
        </Jumbotron>
      </Layout>
    </>
  );
};

export default Home;
