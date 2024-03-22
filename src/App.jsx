import { useState } from "react";
import data from "./data.json";
import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./Global";
import { css } from "styled-components";

function App() {
  const [notifications, setNotifications] = useState(data);
  const unreadCouner = notifications.filter((el) => !el.isRead).length;

  return (
    <Main>
      <GlobalStyles />
      <Header>
        <Title>
          Notifications <span>{unreadCouner}</span>
        </Title>
        <Mark
          onClick={() => {
            const newNotifications = notifications.map((notification) => {
              return { ...notification, isRead: true };
            });
            setNotifications(newNotifications);
          }}
        >
          Mark all as read
        </Mark>
      </Header>
      <Container>
        {notifications.map((el) => {
          return (
            <Notification
              key={el.id}
              isread={el.isRead ? 1 : 0}
              onClick={() => {
                const newNotifications = notifications.map(
                  (clickedNotification) => {
                    if (el.id === clickedNotification.id) {
                      return { ...clickedNotification, isRead: true };
                    }
                    return clickedNotification;
                  }
                );
                setNotifications(newNotifications);
              }}
            >
              <img src={el.profilePic} alt="" />
              <Text>
                <div>
                  <Username>{el.username}</Username>
                  <Action>{el.action}</Action>
                  {el.post ? <Post>{el.post}</Post> : null}
                  {el.groupName ? <Groupname>{el.groupName}</Groupname> : null}
                  {el.isRead ? null : <Isread></Isread>}
                </div>
                <Time>{el.time}</Time>
                {el.text ? <Msg>{el.text}</Msg> : null}
              </Text>

              {el.userPicture ? <Userpic src={el.userPicture} alt="" /> : null}
            </Notification>
          );
        })}
      </Container>
    </Main>
  );
}

export default App;

const Main = styled.main`
  max-width: 73rem;
  margin: 6.3rem auto;
  background-color: #fff;
  padding: 2rem;
`;

const Header = styled.header`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 2rem 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Notification = styled.div`
  /* background-color: #f7fafd; */
  background-color: ${(props) => (props.isread ? "#fff" : "#f7fafd")};
  display: flex;
  gap: 2rem;
  padding: 2rem;
  border-bottom: ${(props) => (props.isread ? "2px solid  #f7fafd" : "")};
  cursor: pointer;
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
`;
const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 3rem;
  color: #1c202b;
  span {
    display: inline-block;
    width: 3.2rem;
    height: 2.5rem;
    background-color: #0a327b;
    color: #fff;
    font-size: 1.6rem;
    text-align: center;
    line-height: 2.3rem;
    border-radius: 1rem;
  }
`;
const Mark = styled.p`
  font-size: 1.6rem;
  color: #5e6778;
  cursor: pointer;
  transform: 0.1s;
  &:hover {
    color: #0a327b;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Username = styled.span`
  font-size: 1.6rem;
  font-weight: 800;
  color: #1c202b;
  &:hover {
    color: #0a327b;
  }
`;
const Action = styled.span`
  font-size: 1.6rem;
  color: #5e6778;
  margin-left: 0.8rem;
`;
const Post = styled.span`
  font-size: 1.6rem;
  font-weight: 800;
  margin-left: 0.8rem;
  &:hover {
    color: #0a327b;
  }
`;

const Groupname = styled.span`
  font-size: 1.6rem;
  font-weight: 800;
  margin-left: 0.8rem;
  color: #0a327b;
`;
const Isread = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: #f65552;
  border-radius: 50%;
  margin-left: 0.8rem;
`;
const Time = styled.span`
  font-size: 1.6rem;
  color: #5e6778;
`;
const Userpic = styled.img`
  margin-left: 15rem;
`;
const Msg = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 1.5rem;
  color: #5e6778;
  border-radius: 0.4rem;
  border: 1px solid #dde7ee;
  &:hover {
    background-color: #dde7ee;
  }
`;
