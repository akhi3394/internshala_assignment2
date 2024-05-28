import React from 'react';
import './Leaderboard.css';
import { motion } from 'framer-motion';
import { Table, Container,Button } from 'react-bootstrap';

const Leaderboard = () => {
    return (
      <motion.div className="leaderboard-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <motion.h1 className="my-4"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Leaderboards
          </motion.h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Calmar Ratio</th>
                <th>Overall Profit</th>
                <th>Avg. Daily Profit</th>
                <th>Win % (Day)</th>
                <th>Price (Rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Selling with re entr</td>
                <td>3.96</td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td><Button variant="primary">View</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Selling with re entr</td>
                <td>3.96</td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td><Button variant="primary">View</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Selling with re entr</td>
                <td>3.96</td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td><Button variant="primary">View</Button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Selling with re entr</td>
                <td>3.96</td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td><Button variant="primary">View</Button></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Selling with re entr</td>
                <td>3.96</td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td><Button variant="primary">View</Button></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Selling with re entr</td>
                <td>3.96</td>
                <td>381845</td>
                <td>319.54</td>
                <td>0.65</td>
                <td>-</td>
                <td><Button variant="primary">View</Button></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Container>
      </motion.div>
    );
  };

export default Leaderboard;
