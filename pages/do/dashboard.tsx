import React, { useEffect, useState, useReducer, useRef, useCallback, useMemo } from "react";
import { prisma } from "../../lib/prisma";
import { Grid, Typography, Button, ButtonGroup, Paper, Rating } from "@mui/material";
import styles from "../../styles/admin.module.scss";
import { withSessionSsr } from "../../lib/withSession";
import { Box, Text } from 'grommet'
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedIcon from '@mui/icons-material/Verified';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import axios from "axios";

const Admin: React.FC = ({ reviews, user }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selection, setSelection] = useState();
  
  const handleVerify = async ( id: any) => {
    await axios.post('/api/verify', {
      id: id
    })
      .then((response) => {
        console.log(response)
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
        setError("Something went wrong, call 911")
      })
    
  }

  const handleDelete = async ( id: any) => {
    await axios.post('/api/delete', {
      id: id
    })
      .then((response) => {
        console.log(response)
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
        setError("Something went wrong, call 911")
      })
  
  }
  

  

  return (
    <div className={styles.mainDiv}>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', fontSize: '27px', fontWeight: 'bold'}}>Hello Admin!</div>
      {error.length > 3 ? <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "20px", fontSize: '35px', fontWeight: 'bold', color: "red"}}>{error}</div> : <></> }
      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ p: 5 }}
      >
        {reviews.map((review: any) => (
          <Grid item key={review.id}>
            <Box align="center" className="bg-stone-100" height='450px' width='medium' gap="small" pad='small' round='small' border={{ color: 'black', size: 'small'}}>
              <Text>{review.id}</Text>
              <Text>{review.title}</Text>
              <Text>{review.name}</Text>
              <Text>{review.body}</Text>
              {review.verified ? <VerifiedIcon /> : <DisabledByDefaultIcon />}
              <Rating readOnly value={review.rating}></Rating>
              <Box direction="row" gap="medium">
                <span style={{ backgroundColor: 'green'}} onClick={() => { handleVerify(review.id)}}>
                  <Button  variant="contained" color="success" startIcon={<ThumbUpAltIcon />}>Verify</Button>
                </span>
                <span style={{ backgroundColor: 'red'}} onClick={() => { handleDelete(review.id)}}>
                  <Button  variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
                </span>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Admin;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    if (!user) {
      return {
        notFound: true,
      };
    }

    const reviews = await prisma.review.findMany();

    return {
      props: {
        user: req.session.user,
        reviews: reviews,
      },
    };
  }
);
