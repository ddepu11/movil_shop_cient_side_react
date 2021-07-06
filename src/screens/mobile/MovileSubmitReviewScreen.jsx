import React, { useState, useEffect } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { reviewMobile } from '../../actions/mobileActions';
import { sendNotification } from '../../actions/notificationActions';
import Button from '../../components/Button';

const MovileSubmitReviewScreen = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const {
    mobile: { _id, reviews },
  } = useSelector((state) => state.mobile);

  const { userInfo, hasUserLoggedIn, id } = useSelector((state) => state.user);

  // Submitting Mobile Stars
  const [stars, setStars] = useState(0);

  const increaseStar = (value) => {
    setStars(value);
  };

  const decreaseStar = () => {
    setStars(stars - 1);
  };

  const handleReviewSubmit = () => {
    if (!hasUserLoggedIn && Object.keys(userInfo).length === 0) {
      dispatch(sendNotification('Please sign in to give review!', true));
      history.push('/sign-in');
    } else {
      dispatch(reviewMobile(_id, stars));
    }
  };

  const [alreadyReviewed, setAlreadyReviewed] = useState(false);

  useEffect(() => {
    reviews &&
      reviews.forEach((r) => {
        if (r.id === id) {
          setStars(r.stars);
          setAlreadyReviewed(true);
        }
      });
  }, [reviews, id]);

  const handleCancelSubmitReview = () => {
    setStars(0);
  };

  return (
    <Wrapper className="give_review_section">
      {alreadyReviewed ? <h2>Your Review: </h2> : <h2>Give Review:</h2>}

      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => {
          if (stars >= index + 1) {
            return (
              <BsStarFill
                key={Math.floor(Math.random() * Date.now())}
                onClick={() => decreaseStar()}
              />
            );
          }

          return (
            <BsStar
              key={Math.floor(Math.random() * Date.now())}
              onClick={() => increaseStar(index + 1)}
            />
          );
        })}
      </div>

      <div className="buttons flex">
        {stars > 0 && !alreadyReviewed && (
          <>
            <Button
              handleClick={handleReviewSubmit}
              bgColor="var(--secondary-color)"
              mt="12px"
              pt="10px"
              pb="10px"
              pl="16px"
              pr="16px"
              fs="1.1em"
              width="100%"
            >
              Submit Review
            </Button>
            <Button
              handleClick={handleCancelSubmitReview}
              bgColor="var(--danger-color)"
              mt="12px"
              pt="10px"
              pb="10px"
              pl="16px"
              pr="16px"
              fs="1.1em"
              width="100%"
            >
              Cancel
            </Button>
          </>
        )}

        {alreadyReviewed && (
          <Button
            handleClick={handleReviewSubmit}
            bgColor="var(--secondary-color)"
            mt="12px"
            pt="10px"
            pb="10px"
            pl="16px"
            pr="16px"
            fs="1.1em"
            width="100%"
          >
            Update Review
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  margin-top: 8px;

  h2 {
    padding: 5px 0 0;
    color: var(--little-dark-color);
    letter-spacing: 1px;
    font-size: 1.3em;
  }

  .stars {
    padding: 12px 0 0;
    cursor: pointer;
    font-size: 1.3em;
    color: #d1bd03;
  }
  .stars > * {
    margin-right: 5px;
  }

  .buttons {
    flex-direction: column;
    align-items: flex-start;
  }

  .buttons > * {
    transition: all 1s ease;
  }
`;

export default MovileSubmitReviewScreen;
