import React from "react";
import Button from "../../Components/Button/Button";
import { ReactComponent as Community } from "./forum.svg";
import classes from "./Home.module.css";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import { bannerData } from "./data";
import BannerCard from "./BannerCard";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function Home() {
  const isLogin = useSelector(state=>state.user.isLogin)
  const history = useHistory()

  const clickHandler = () => {
    if (isLogin) {
      history.push("/forum")
    } else {
      history.push("/register")
    }
  }


  return (
    <Container>
      <Card className={classes.cardBanner}>
        <div className={classes.contain}>
          <div className={classes.left}>
            <h2>Join our community</h2>
            <p>
              Ask question or answer some, help other by writing blogs and
              Search for jobs and get hired.
            </p>
            <Button onClick={clickHandler} className={classes.btn} theme="dark">
              get started
            </Button>
          </div>
          <div className={classes.right}>
            <Community
              style={{ color: "#333533" }}
              className={classes.bannerIcon}
            />
          </div>
        </div>
      </Card>
      <Card className={classes.card}>
        <h2>Why should i use Arya ?</h2>
        <div className={classes.flex}>
          {bannerData.map((data, i) => {
            return (
              <BannerCard
                key={i}
                title={data.title}
                content={data.content}
                action={data.action}
                link={data.link}
              />
            );
          })}
        </div>
      </Card>
    </Container>
  );
}

export default Home;
